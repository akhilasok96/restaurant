// ==========================================
// 1. IMPORTS
// ==========================================

import { Link } from "react-router";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const ErrorPage = () => {
  // --- A. STATE & HOOKS ---

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <div className='min-h-full flex flex-col gap-8 justify-center items-center'>
      <div className='w-1/2'>
        <img
          src='/images/page_not_found.svg'
          alt='404 error image'
          className='w-full'
        />
      </div>
      <div className='flex flex-col gap-1 items-center'>
        <p className='text-xl'>The page you requested does not exist</p>
        <Link to='/' className='text-blue-600 hover:text-blue-900 underline'>
          Got to home page
        </Link>
      </div>
    </div>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default ErrorPage;
