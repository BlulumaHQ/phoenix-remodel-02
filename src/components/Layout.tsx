import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      {/* Spacer for mobile sticky bar */}
      <div className="lg:hidden h-16" />
    </div>
  );
}
