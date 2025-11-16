import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/react"; // <-- import Speed Insights
import { useEffect } from "react";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Ebooks from "./pages/Ebooks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Optional: track SPA route changes for Speed Insights
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // This hook triggers on every route change
    // Ensures Speed Insights captures SPA navigation
  }, [location]);

  return null;
};

// ScrollToTop: ensures each route navigation starts at the top of the page
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Some browsers preserve scroll between SPA navigations; force scroll to top.
    // Use both documentElement and window for cross-browser coverage.
    const scrollToTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' as ScrollBehavior });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (e) {
        // fallback
        window.scrollTo(0, 0);
      }
    };

    // Run on next microtask to allow React to finish rendering new route
    const id = setTimeout(scrollToTop, 0);
    return () => clearTimeout(id);
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker /> {/* tracks SPA route changes */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />      {/* Vercel Analytics */}
      <SpeedInsights />  {/* Vercel Speed Insights */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
