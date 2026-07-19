// ==========================================
// 1. IMPORTS
// ==========================================
import { menuColumns } from "./MenuColumns";
import { useItems } from "./useItems";
import DataTable from "@/components/Table/Datatable";
import Loader from "@/components/Loader/Loader";
import TableSkeleton from "@/components/Table/TableSkeleton";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const Menu = () => {
  // --- A. STATE & HOOKS ---
  const { data, isPending, isFetching } = useItems();

  // --- B. DERIVED STATE & MEMOS ---
  const menuItems = data?.data;
  const metadata = data?.metadata;

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <div className='h-[calc(100%-20px)] overflow-auto rounded-sm'>
      {isPending ? (
        <Loader />
      ) : isFetching ? (
        <TableSkeleton rows={10} />
      ) : (
        <DataTable columns={menuColumns} data={menuItems} metaData={metadata} />
      )}
    </div>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default Menu;
