// ==========================================
// 1. IMPORTS
// ==========================================
import { Skeleton } from "@/components/ui/skeleton";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const TableSkeleton = ({ rows = 5 }) => {
  // --- A. STATE & HOOKS ---

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <div className='flex w-full flex-col gap-5'>
      {Array.from({ length: rows }).map((_, index) => (
        <div className='flex gap-4' key={index}>
          <Skeleton className='h-10 w-10' />
          <Skeleton className='h-10 w-24' />
          <Skeleton className='h-10 w-10' />
          <Skeleton className='h-10 flex-1' />
          <Skeleton className='h-10 w-20' />
          <Skeleton className='h-10 w-20' />
          <Skeleton className='h-10 w-20' />
          <Skeleton className='h-10 w-20' />
          <Skeleton className='h-10 w-10' />
        </div>
      ))}
    </div>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default TableSkeleton;
