import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "./PageHero";
import { SERVICES } from "@/lib/site";

interface ServicePageProps {
  title: string;
  metaTitle?: string;
  heroImage: string;
  intro: string;
  details: string[];
  features?: { title: string; desc: string }[];
}

export default function ServicePage({ title, heroImage, intro, details, features }: ServicePageProps) {
  useScrollReveal();
  const others = SERVICES.filter((s) => s.title !== title).slice(0, 3);

  return (
    <>
      <PageHero kicker="Our Services" title={title} intro={intro} image={heroImage} />

      <section className="border-t-4 border-amber bg-bone py-20 text-coal md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 className="display text-[44px] md:text-[64px] lg:col-span-4">The work</h2>
          <div className="flex flex-col gap-6 lg:col-span-8 animate-on-scroll">
            {details.map((p, i) => (
              <p key={i} className={`leading-relaxed text-pretty ${i === 0 ? "text-xl font-medium md:text-2xl" : "text-lg text-[#4C4842]"}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {features && features.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="wrap flex flex-col gap-12">
            <h2 className="display text-[44px] md:text-[64px]">
              What we <span className="outline-amber">deliver</span>
            </h2>
            <div className="grid gap-px border border-iron bg-iron sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-3 bg-coal p-8 animate-on-scroll">
                  <span className="font-display text-2xl font-extrabold text-amber">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-[28px] leading-none">{f.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ash">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-steel py-20 md:py-24">
        <div className="wrap flex flex-col gap-10">
          <h2 className="display text-[40px] md:text-[56px]">More services</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <Link key={s.path} to={s.path} className="group flex flex-col bg-coal">
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="px-6 pb-2 pt-6 font-display text-[28px] font-bold uppercase leading-none group-hover:text-amber">{s.title}</span>
                <span className="px-6 pb-7 text-[15px] text-ash">{s.short}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
