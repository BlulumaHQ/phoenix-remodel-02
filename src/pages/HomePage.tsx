import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AREAS, SERVICES, SITE } from "@/lib/site";
import heroImg from "@/assets/hero-commercial.jpg";
import teamImg from "@/assets/about-team.jpg";

const STATS = [
  { value: "40+", label: "Years construction experience" },
  { value: "KB2", label: "Licensed for projects up to $6M" },
  { value: "B·L·I", label: "Bonded, licensed & insured" },
  { value: "AZ", label: "Locally owned & operated" },
];

const WHY = [
  "40+ years of construction and remodeling in the Phoenix Metro Area",
  "Fully bonded, licensed and insured — KB2 licensing for build-outs up to $6 million",
  "Locally owned and operated general contractor with a full range of services",
  "Creative quality designs, plans, permits and material selections all under one roof",
];

export default function HomePage() {
  useScrollReveal();
  const [feature, second, ...rest] = SERVICES;

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[760px] items-end overflow-hidden">
        <img src={heroImg} alt="Commercial build-out in Phoenix" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/75 to-coal/10" />
        <div className="wrap relative flex w-full flex-col gap-7 pb-24 pt-28">
          <span className="kicker">Arizona’s Commercial Contractors</span>
          <h1 className="display max-w-[900px] text-[64px] sm:text-[96px] lg:text-[140px]">
            Built right.<br /><span className="text-amber">Built on time.</span>
          </h1>
          <p className="max-w-[560px] text-lg leading-relaxed text-[#D6D1C7] md:text-xl">
            Commercial remodeling, office build-outs and new construction across the Phoenix Metro. 40+ years of experience — fully bonded, licensed and insured.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-amber">Get a Free Estimate</Link>
            <a href={SITE.phoneHref} className="btn-ghost">{SITE.phone}</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t-4 border-amber bg-steel">
        <div className="wrap grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 border-iron py-9 pr-4 [&:not(:last-child)]:lg:border-r lg:px-6 lg:first:pl-0">
              <span className="font-display text-[52px] font-extrabold leading-none text-amber md:text-[64px]">{s.value}</span>
              <span className="text-[15px] text-ash">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="wrap flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="display text-[56px] md:text-[92px]">
              What we <span className="outline-amber">build</span>
            </h2>
            <p className="max-w-[420px] text-lg text-ash">
              A full range of custom construction services, from commercial remodels to ground-up builds.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[feature, second].map((s, i) => (
              <Link
                key={s.path}
                to={s.path}
                className={`group relative flex min-h-[460px] items-end overflow-hidden ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-transparent" />
                <div className="relative flex flex-col gap-2 p-8">
                  {i === 0 && <span className="self-start bg-amber px-3 py-1 font-display text-base font-bold tracking-[0.1em] text-coal">CORE SERVICE</span>}
                  <span className="font-display text-[40px] font-extrabold uppercase leading-none md:text-[48px]">{s.title}</span>
                  <span className="max-w-[460px] text-base text-[#D6D1C7]">{s.short}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((s) => (
              <Link key={s.path} to={s.path} className="group flex flex-col bg-steel">
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="px-6 pb-1.5 pt-6 font-display text-[28px] font-bold uppercase leading-none group-hover:text-amber">{s.title}</span>
                <span className="px-6 pb-7 text-[15px] leading-snug text-ash">{s.short}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-bone py-24 text-coal md:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img src={teamImg} alt="Phoenix Remodel team reviewing plans" className="h-[420px] w-full object-cover md:h-[540px]" />
            <div className="absolute -bottom-4 -left-2 bg-amber px-7 py-5 font-display text-2xl font-extrabold uppercase leading-none md:-left-4">
              Design · Plans · Permits
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="display text-[52px] md:text-[80px]">Why Phoenix Remodel</h2>
            <p className="text-lg leading-relaxed text-[#4C4842]">
              A highly reputable Arizona general contractor delivering design-build and remodeling services — high-quality work at an affordable price, and peace of mind under one roof.
            </p>
            <ol className="flex flex-col border-t-2 border-coal">
              {WHY.map((w, i) => (
                <li key={w} className="flex gap-5 border-b border-[#D2CCC0] py-4 text-[17px] leading-snug">
                  <span className="font-display text-2xl font-extrabold text-[#9A6B00]">{String(i + 1).padStart(2, "0")}</span>
                  {w}
                </li>
              ))}
            </ol>
            <Link to="/about-us" className="btn-coal self-start">About Us</Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-24 md:py-32">
        <div className="wrap flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="display text-[52px] md:text-[80px]">
              Areas we <span className="text-amber">serve</span>
            </h2>
            <p className="max-w-[420px] text-lg text-ash">Fast, friendly, detailed estimates for any project across the Phoenix Metro Area and beyond.</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {AREAS.map((a) => (
              <span key={a} className="border border-iron px-5 py-3 font-display text-xl font-semibold uppercase tracking-[0.06em]">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
