// ==========================================
// 1. IMPORTS
// ==========================================
import { Spinner } from "@/components/ui/spinner";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const Loader = () => {
  // --- A. STATE & HOOKS ---

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <div className='h-full w-full grid place-content-center'>
      <Spinner className='size-8' />
    </div>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default Loader;
