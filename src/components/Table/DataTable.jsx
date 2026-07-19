// ==========================================
// 1. IMPORTS
// ==========================================
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationTw from "../PaginationTw/PaginationTw";
import { usePagination } from "@/hooks/usePagination";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const DataTable = ({ columns, data, metaData }) => {
  // --- A. STATE & HOOKS ---
  const {
    setSearchParams,
    urlPageIndex,
    urlPageSize,
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    hasNext,
    hasPrevious,
    isFirstPage,
    isLastPage,
  } = usePagination(metaData);

  function paginationSearchParamsUpdater(updater) {
    const nextPaginationState =
      typeof updater === "function"
        ? updater(table.getState().pagination)
        : updater;

    console.log(nextPaginationState);

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("pageIndex", nextPaginationState.pageIndex + 1);
      params.set("pageSize", nextPaginationState.pageSize);
      return params;
    });
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    autoResetPageIndex: false,
    state: {
      pagination: { pageIndex: urlPageIndex - 1, pageSize: urlPageSize },
    },
    onPaginationChange: (updater) => {
      paginationSearchParamsUpdater(updater);
    },
    pageCount: totalPages,
  });

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <div>
      <Table className='border-2 border-zinc-50 rounded-sm'>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={`${index % 2 == 0 ? "bg-zinc-100" : "none"}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='w-full flex items-center justify-between mt-4 rounded-b-sm'>
        <p className='text-sm text-zinc-500 font-semibold'>
          Total Items:
          <span className='text-sm text-zinc-900 ml-2'>{totalItems}</span>
        </p>
        <PaginationTw
          setSearchParams={setSearchParams}
          pageSize={pageSize}
          currentPage={currentPage}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          totalPages={totalPages}
          table={table}
        />
      </div>
    </div>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default DataTable;
