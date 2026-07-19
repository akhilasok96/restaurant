// ==========================================
// 1. IMPORTS
// ==========================================
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAGES } from "@/constants/constants";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const PaginationTw = ({
  setSearchParams,
  pageSize,
  currentPage,
  hasNext,
  hasPrevious,
  isFirstPage,
  isLastPage,
  totalPages,
  table,
}) => {
  // --- A. STATE & HOOKS ---

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <div className='flex items-center gap-4'>
      <Field orientation='horizontal'>
        <FieldLabel
          htmlFor='select-rows-per-page'
          className='text-sm text-zinc-500 font-semibold'
        >
          Rows per page
        </FieldLabel>
        <Select
          items={PAGES}
          defaultValue={pageSize}
          onValueChange={(value) => {
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              params.set("pageSize", value);
              params.set("pageIndex", 1);
              return params;
            });
          }}
        >
          <SelectTrigger className='w-auto' id='select-rows-per-page'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent align='start'>
            <SelectGroup>
              {PAGES.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className='mx-0 w-auto flex items-center'>
        <PaginationContent>
          <PaginationFirst
            disabled={isFirstPage}
            onClick={() => table.resetPageIndex()}
          />
          <PaginationItem>
            <PaginationPrevious
              disabled={!hasPrevious}
              onClick={() => table.previousPage()}
            />
          </PaginationItem>
          <span className='mx-2 size-7 text-sm rounded-full flex items-center justify-center bg-zinc-100 text-zinc-900'>
            {currentPage}
          </span>
          <PaginationItem>
            <PaginationNext
              disabled={!hasNext}
              onClick={() => table.nextPage()}
            />
          </PaginationItem>
          <PaginationLast
            disabled={isLastPage}
            onClick={() => {
              table.setPageIndex(totalPages);
            }}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default PaginationTw;
