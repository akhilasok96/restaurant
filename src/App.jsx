// ==========================================
// 1. IMPORTS
// ==========================================
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import Menu from "./pages/Menu";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Menu /> },
      { path: "categories", element: <Categories /> },
      { path: "orders", element: <Orders /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staletime: 60 * 1000
      staleTime: 0,
    },
  },
});

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
function App() {
  // --- A. STATE & HOOKS ---

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

// ==========================================
// 4. EXPORTS
// ==========================================
export default App;
