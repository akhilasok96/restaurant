// ==========================================
// 1. IMPORTS
// ==========================================
import { Logs, UtensilsCrossed, Layers2, Settings } from "lucide-react";
import { NavLink } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

// ==========================================
// 2. CONSTANTS & HELPER FUNCTIONS
// ==========================================
const items = [
  { title: "Menu", url: "/", icon: UtensilsCrossed },
  { title: "Categories", url: "/categories", icon: Layers2 },
  { title: "Orders", url: "/orders", icon: Logs },
  { title: "Settings", url: "/settings", icon: Settings },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const AppSidebar = () => {
  // --- A. STATE & HOOKS ---

  // --- B. DERIVED STATE & MEMOS ---

  // --- C. EFFECTS ---

  // --- D. EVENT HANDLERS ---

  // --- E. RENDER GUARDS ---

  // --- F. RENDER (JSX) ---
  return (
    <Sidebar>
      <SidebarHeader className='flex flex-row items-center gap-2 px-4 pt-4 mb-2'>
        <img src='/icons/favicon.svg' alt='' className='w-8' />
        <span className='text-xl font-semibold tracking-wider'>Tomato</span>
      </SidebarHeader>
      <SidebarContent className='px-2'>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <NavLink to={item.url} className='flex items-center gap-2'>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

// ==========================================
// 4. EXPORTS
// ==========================================
export default AppSidebar;
