import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/navigation/AppSidebar";
import Dashboard from "./pages/Dashboard";
import SpeciesPortal from "./pages/SpeciesPortal";
import Models3D from "./pages/Models3D";
import NotFound from "./pages/NotFound";

// Placeholder components for remaining pages
const Oceanographic = () => (
  <div className="min-h-screen bg-gradient-depth p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Oceanographic Visualization</h1>
      <p className="text-muted-foreground">Interactive charts, heatmaps, and 3D ocean mapping tools coming soon...</p>
    </div>
  </div>
);

const Morphometric = () => (
  <div className="min-h-screen bg-gradient-depth p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Morphometric Analysis</h1>
      <p className="text-muted-foreground">Advanced otolith shape analysis and simulation tools coming soon...</p>
    </div>
  </div>
);

const OtolithID = () => (
  <div className="min-h-screen bg-gradient-depth p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Otolith Identification</h1>
      <p className="text-muted-foreground">AI-powered otolith classification and upload interface coming soon...</p>
    </div>
  </div>
);

const Analytics = () => (
  <div className="min-h-screen bg-gradient-depth p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Analytics & Correlations</h1>
      <p className="text-muted-foreground">Advanced trend analysis and correlation discovery tools coming soon...</p>
    </div>
  </div>
);

const Notifications = () => (
  <div className="min-h-screen bg-gradient-depth p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Notifications</h1>
      <p className="text-muted-foreground">Real-time alerts and system notifications coming soon...</p>
    </div>
  </div>
);

const Admin = () => (
  <div className="min-h-screen bg-gradient-depth p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Admin Panel</h1>
      <p className="text-muted-foreground">Species management and upload dashboard coming soon...</p>
    </div>
  </div>
);

const Settings = () => (
  <div className="min-h-screen bg-gradient-depth p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Settings</h1>
      <p className="text-muted-foreground">User profile and system configuration coming soon...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            
            <div className="flex-1 flex flex-col">
              {/* Header with sidebar trigger */}
              <header className="h-14 border-b border-border bg-surface/50 backdrop-blur-sm flex items-center px-4 sticky top-0 z-40">
                <SidebarTrigger className="text-foreground hover:text-accent transition-colors" />
                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-success rounded-full animate-glow-pulse"></div>
                    System Online
                  </div>
                </div>
              </header>

              {/* Main content */}
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/species" element={<SpeciesPortal />} />
                  <Route path="/oceanographic" element={<Oceanographic />} />
                  <Route path="/morphometric" element={<Morphometric />} />
                  <Route path="/models" element={<Models3D />} />
                  <Route path="/otolith" element={<OtolithID />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
