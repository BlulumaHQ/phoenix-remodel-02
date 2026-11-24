import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageHero from "@/components/PageHero";
import teamImg from "@/assets/about-team.jpg";
import buildingImg from "@/assets/services-newconstruction.jpg";

const FACTS = [
  { value: "40+", title: "Years Experience", desc: "Decades of commercial construction excellence in Arizona." },
  { value: "B·L·I", title: "Fully Bonded & Insured", desc: "Complete peace of mind with full licensing and insurance coverage." },
  { value: "KB2", title: "KB2 Licensed", desc: "Licensed for projects up to $6 million in construction value." },
  { value: "AZ", title: "Locally Owned & Operated", desc: "Proud to serve the Phoenix Metro Area and beyond." },
];

export default function AboutUs() {
  useScrollReveal();

  return (
    <>
      <PageHero
        kicker="About Us"
        title="About Phoenix Remodel"
        intro="A highly reputable Arizona general contractor and a leader in design-build and remodeling services."
        image={teamImg}
      />

      <section className="border-t-4 border-amber bg-bone py-20 text-coal md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <h2 className="display text-[44px] md:text-[56px] lg:col-span-5">For all your commercial construction needs</h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-[#4C4842] lg:col-span-7 animate-on-scroll">
            <p className="text-xl font-medium text-coal md:text-2xl">
              Phoenix Remodeling Commercial Contractors has been completing construction jobs in Phoenix and the surrounding Metro Region with over 40 years of construction and remodeling experience.
            </p>
            <p>
              We are a leading Arizona construction company that is fully bonded, licensed and insured for commercial building and construction, with KB2 licensing for up to 6 million dollar build-outs and remodeling projects. We are also proud to say that we’re locally owned &amp; operated.
            </p>
            <p>
              As a general contractor we offer a full range of custom construction services that include Design Build, Hotel Renovation, Restaurant Remodeling, Tenant Improvements, Strip Malls, Office Buildings along with Custom Homes and Home Remodeling.
            </p>
            <p>
              We believe in developing long-lasting relationships with our clients by exceeding their expectations and delivering high-quality work at an affordable price. Phoenix Remodel offers peace of mind by providing creative quality designs, plans and permits, and material selections all under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap">
        <div className="grid gap-px border border-iron bg-iron sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 bg-coal p-8 animate-on-scroll">
              <span className="font-display text-[56px] font-extrabold leading-none text-amber">{f.value}</span>
              <h3 className="text-[26px] leading-none">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-ash">{f.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="relative h-[420px] overflow-hidden">
        <img src={buildingImg} alt="Steel frame commercial construction" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-coal/40" />
      </section>
    </>
  );
}
