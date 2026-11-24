import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

const NAV = [
  { label: "Home", path: "/" },
  { label: "Services", children: SERVICES.map((s) => ({ label: s.title, path: s.path })) },
  { label: "About Us", path: "/about-us" },
  { label: "Contact", path: "/contact" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold uppercase leading-none tracking-[0.02em] ${className}`}>
      Phoenix<span className="text-amber">/</span>Remodel
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-amber text-coal">
        <div className="wrap flex flex-wrap justify-between gap-2 py-2 text-sm font-semibold">
          <span>KB2 licensed · up to $6M commercial build-outs</span>
          <a href={SITE.phoneHref} className="hover:underline">Call {SITE.phone}</a>
        </div>
      </div>
      <div className="border-b border-iron bg-coal/95 backdrop-blur">
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <Link to="/" aria-label="Phoenix Remodel home">
            <Wordmark className="text-[28px] text-bone md:text-[34px]" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 font-display text-lg font-semibold uppercase tracking-[0.1em] text-bone hover:text-amber"
                    aria-expanded={servicesOpen}
                  >
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="min-w-[260px] border-t-4 border-amber bg-steel py-2 shadow-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-5 py-3 font-display text-lg font-semibold uppercase tracking-[0.06em] text-bone hover:bg-iron hover:text-amber"
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
                  className={`font-display text-lg font-semibold uppercase tracking-[0.1em] transition-colors ${
                    location.pathname === item.path ? "text-amber" : "text-bone hover:text-amber"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link to="/contact" className="btn-amber hidden !px-6 !py-3 !text-lg lg:inline-flex">
            Free Estimate
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center border border-iron text-bone lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="wrap border-t border-iron pb-6 pt-2 lg:hidden" aria-label="Mobile">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-iron">
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between py-4 font-display text-2xl font-bold uppercase text-bone"
                    aria-expanded={servicesOpen}
                  >
                    {item.label} <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pb-3">
                      {item.children.map((child) => (
                        <Link key={child.path} to={child.path} className="block py-2.5 pl-4 font-display text-lg uppercase text-ash hover:text-amber">
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
                  className="block border-b border-iron py-4 font-display text-2xl font-bold uppercase text-bone hover:text-amber"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/contact" className="btn-amber mt-5 w-full">Get a Free Estimate</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
