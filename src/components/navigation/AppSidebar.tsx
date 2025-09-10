import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Search, 
  Waves, 
  ScanLine,
  Box,
  Eye,
  TrendingUp,
  Settings,
  Bell,
  Upload,
  Fish,
  Activity
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    description: "Overview & KPIs"
  },
  {
    title: "Species Portal",
    url: "/species",
    icon: Search,
    description: "ID & Search"
  },
  {
    title: "Oceanographic",
    url: "/oceanographic",
    icon: Waves,
    description: "Visualization"
  },
  {
    title: "Morphometric",
    url: "/morphometric",
    icon: ScanLine,
    description: "Analysis"
  },
  {
    title: "3D Models",
    url: "/models",
    icon: Box,
    description: "Organisms"
  },
  {
    title: "Otolith ID",
    url: "/otolith",
    icon: Eye,
    description: "AI Classification"
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: TrendingUp,
    description: "Correlations"
  }
];

const systemItems = [
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
    description: "Alerts"
  },
  {
    title: "Admin Panel",
    url: "/admin",
    icon: Upload,
    description: "Management"
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    description: "Profile"
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClasses = (path: string) => {
    return isActive(path) 
      ? "bg-primary/20 text-accent border-accent/20 shadow-glow-accent" 
      : "hover:bg-surface/50 hover:text-accent/80 transition-all duration-300";
  };

  return (
    <Sidebar className={`border-r border-sidebar-border bg-sidebar ${isCollapsed ? "w-14" : "w-72"}`} collapsible="icon">
      <SidebarHeader className="p-6 border-b border-sidebar-border bg-gradient-to-r from-primary/10 to-accent/5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/20 shadow-glow-accent">
            <Fish className="h-6 w-6 text-accent" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-sidebar-foreground">MarineBio AI</h1>
              <p className="text-xs text-sidebar-foreground/60">Biodiversity Platform</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/50 mb-2">
            {!isCollapsed && "Research Tools"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${getNavClasses(item.url)}`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <div className="flex flex-col items-start">
                          <span className="font-medium text-sm">{item.title}</span>
                          <span className="text-xs opacity-60">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/50 mb-2">
            {!isCollapsed && "System"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${getNavClasses(item.url)}`}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <div className="flex flex-col items-start">
                          <span className="font-medium text-sm">{item.title}</span>
                          <span className="text-xs opacity-60">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className={`mt-6 p-4 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 ${isCollapsed ? "mx-1" : ""}`}>
          {!isCollapsed && (
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-accent animate-glow-pulse" />
              <span className="text-sm font-medium text-sidebar-foreground">System Status</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
            {!isCollapsed && <span className="text-xs text-sidebar-foreground/70">All Systems Online</span>}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}