import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FlagQuest from "./pages/flag-quest";
import TechCharades from "./pages/TechCharades";
import TechCharadesRegister from "./pages/TechCharadesRegister"; 
import Converge from "./pages/Converge";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/Hackathon" element={<ComingSoon/>} />
          <Route path="/events/linux-workshop" element={<ComingSoon />} />
          <Route path="/events/bug-bounty" element={<ComingSoon />} />
          <Route path="/events/flag-quest" element={<FlagQuest />} />
          <Route path="/events/TechCharades" element={<TechCharades />} />
          <Route path="/events/register2" element={<TechCharadesRegister />} />
          <Route path="/converge" element={<Converge />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
