import { Link } from "react-router-dom";
import { SERVICES, SITE } from "@/lib/site";
import { Wordmark } from "./Header";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coal text-bone">
      <section className="bg-amber text-coal">
        <div className="wrap flex flex-col gap-8 py-20 md:py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[760px]">
            <h2 className="display text-[48px] md:text-[72px] lg:text-[92px]">Ready to start your project?</h2>
            <p className="mt-4 text-lg">Talk to a construction expert today. No-obligation free quote.</p>
          </div>
          <div className="flex min-w-[280px] flex-col gap-3">
            <a href={SITE.phoneHref} className="btn-coal">Call {SITE.phone}</a>
            <Link to="/contact" className="inline-flex items-center justify-center border-2 border-coal px-8 py-[14px] font-display text-lg font-bold uppercase tracking-[0.08em] text-coal transition-colors hover:bg-coal hover:text-amber md:text-xl">
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Wordmark className="text-[40px] md:text-[48px]" />
          <p className="max-w-[380px] text-[15px] leading-relaxed text-ash">
            Arizona’s commercial construction company. Fully bonded, licensed and insured with over 40 years of experience.
          </p>
        </div>
        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="font-display text-lg font-bold uppercase tracking-[0.12em] text-amber">Services</span>
          {SERVICES.map((s) => (
            <Link key={s.path} to={s.path} className="text-ash hover:text-amber">{s.title}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-2.5 text-[15px] text-ash">
          <span className="font-display text-lg font-bold uppercase tracking-[0.12em] text-amber">Office</span>
          <span>{SITE.street}</span>
          <span>{SITE.city}</span>
          <a href={SITE.phoneHref} className="hover:text-amber">{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`} className="hover:text-amber">{SITE.email}</a>
          <Link to="/about-us" className="mt-2 hover:text-amber">About Us</Link>
          <Link to="/contact" className="hover:text-amber">Contact</Link>
        </div>
      </div>

      <div className="border-t border-iron">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-[#8C877E] md:flex-row md:justify-between">
          <span>
            © {year} Phoenix Remodel. All rights reserved.{" "}
            <span data-concept-note>Design concept for portfolio purposes only. Not the official website of Phoenix Commercial Remodeling.</span>
          </span>
          <span>
            Web Design by <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber">Bluluma</a> | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:text-amber">SwiftLift</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
