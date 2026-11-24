import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

interface PageHeroProps {
  kicker: string;
  title: string;
  intro: string;
  image?: string;
}

export default function PageHero({ kicker, title, intro, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/80 to-coal/20" />
      <div className="wrap relative flex w-full flex-col gap-6 pb-20 pt-24 md:pb-24">
        <span className="kicker">{kicker}</span>
        <h1 className="display max-w-[900px] text-[56px] md:text-[88px] lg:text-[112px]">{title}</h1>
        <p className="max-w-[560px] text-lg leading-relaxed text-[#D6D1C7]">{intro}</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-amber">Get a Free Estimate</Link>
          <a href={SITE.phoneHref} className="btn-ghost">{SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
