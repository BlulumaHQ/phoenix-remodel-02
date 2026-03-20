import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    children: [
      { label: "Commercial Remodels", path: "/commercial-remodel" },
      { label: "Landscape Design", path: "/commercial-and-residential-landscaping" },
      { label: "Painting", path: "/painting" },
      { label: "New Construction", path: "/new-construction" },
      { label: "Fencing", path: "/commercial-fencing" },
      { label: "Insulation", path: "/insulation" },
    ],
  },
  { label: "About Us", path: "/about-us" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://phoenixremodel.net/images/Asset-2Phx-Remodel-logo.png"
            alt="Phoenix Remodel"
            className="h-[75px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`font-sans font-medium text-sm tracking-wide uppercase transition-colors ${
                    scrolled ? "text-foreground hover:text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-2.5 text-sm font-sans text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`font-sans font-medium text-sm tracking-wide uppercase transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <a href="tel:6029752870" className="hidden lg:flex">
          <Button variant="default" size="default" className="gap-2">
            <Phone className="w-4 h-4" />
            (602) 975-2870
          </Button>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-xl">
          <div className="container py-4 space-y-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full text-left py-3 px-4 font-sans font-medium text-sm uppercase text-foreground"
                  >
                    {item.label}
                  </button>
                  {servicesOpen && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 px-4 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className="block py-3 px-4 font-sans font-medium text-sm uppercase text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <a href="tel:6029752870" className="block px-4 pt-2">
              <Button variant="default" size="lg" className="w-full gap-2">
                <Phone className="w-4 h-4" />
                (602) 975-2870
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
