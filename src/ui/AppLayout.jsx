// ==========================================
// 1. IMPORTS
// ==========================================
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar/AppSidebar";
import { Outlet } from "react-router";
import { useLocationTitle } from "@/hooks/useLoactionTitle";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const AppLayout = () => {
  // --- A. STATE & HOOKS ---
  const { title } = useLocationTitle();

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <SidebarProvider className='grid h-screen grid-cols-[auto_1fr]'>
      <AppSidebar />

      <main className='flex flex-col overflow-hidden'>
        <header className='shrink-0 flex items-center gap-1 p-4 mb-2'>
          <SidebarTrigger />
          <h1 className='text-md font-semibold tracking-wider'>{title}</h1>
        </header>
        <div className='flex-1 overflow-hidden px-6'>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default AppLayout;
