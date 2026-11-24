import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-coal text-bone">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      {/* Spacer for mobile sticky bar */}
      <div className="h-[72px] lg:hidden" />
    </div>
  );
}
