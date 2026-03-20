import { Link } from "react-router-dom";

const SERVICE_LINKS = [
  { label: "Commercial Remodels", path: "/commercial-remodel" },
  { label: "Landscape Design", path: "/commercial-and-residential-landscaping" },
  { label: "Painting", path: "/painting" },
  { label: "New Construction", path: "/new-construction" },
  { label: "Fencing", path: "/commercial-fencing" },
  { label: "Insulation", path: "/insulation" },
];

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-xl font-bold text-primary-foreground">
              Phoenix Remodel
            </span>
            <p className="mt-4 text-sm leading-relaxed text-section-dark-foreground/70">
              Arizona's leading commercial construction company. Fully bonded, licensed and insured with over 40 years of experience.
            </p>
          </div>

          {/* Col 2 — Spacer */}
          <div className="hidden md:block" />

          {/* Col 3 — Nav */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-primary mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-section-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Services */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-primary mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-section-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-primary mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-sm text-section-dark-foreground/70">
              <li>
                <a href="tel:6029752870" className="hover:text-primary transition-colors">
                  (602) 975-2870
                </a>
              </li>
              <li>
                <a href="mailto:sales@phoenixremodel.net" className="hover:text-primary transition-colors">
                  sales@phoenixremodel.net
                </a>
              </li>
              <li>
                11811 N Tatum Blvd<br />
                Suite 3031<br />
                Phoenix, AZ 85028
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-section-dark-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-center gap-1 text-xs text-section-dark-foreground/50">
          <span>© {year} Phoenix Remodel. All rights reserved.</span>
          <span className="hidden md:inline mx-1">|</span>
          <span>
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Bluluma
            </a>
            {" "}| Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              SwiftLift
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
