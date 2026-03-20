import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CommercialRemodel from "@/pages/CommercialRemodel";
import LandscapeDesign from "@/pages/LandscapeDesign";
import Painting from "@/pages/Painting";
import NewConstruction from "@/pages/NewConstruction";
import Fencing from "@/pages/Fencing";
import Insulation from "@/pages/Insulation";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/commercial-remodel" element={<CommercialRemodel />} />
            <Route path="/commercial-remodel.html" element={<CommercialRemodel />} />
            <Route path="/commercial-and-residential-landscaping" element={<LandscapeDesign />} />
            <Route path="/commercial-and-residential-landscaping.html" element={<LandscapeDesign />} />
            <Route path="/painting" element={<Painting />} />
            <Route path="/painting.html" element={<Painting />} />
            <Route path="/new-construction" element={<NewConstruction />} />
            <Route path="/new-construction.html" element={<NewConstruction />} />
            <Route path="/commercial-fencing" element={<Fencing />} />
            <Route path="/commercial-fencing.html" element={<Fencing />} />
            <Route path="/insulation" element={<Insulation />} />
            <Route path="/insulation.html" element={<Insulation />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us.html" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact.html" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
