import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Shield, Clock, Award, MapPin, Building2, Paintbrush, Trees, HardHat, Fence, Thermometer, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-commercial.jpg";
import commercialImg from "@/assets/services-commercial.jpg";
import landscapeImg from "@/assets/services-landscape.jpg";
import paintingImg from "@/assets/services-painting.jpg";
import newConstructionImg from "@/assets/services-newconstruction.jpg";
import fencingImg from "@/assets/services-fencing.jpg";
import insulationImg from "@/assets/services-insulation.jpg";

const SERVICES = [
  { title: "Commercial Remodels", desc: "Office remodeling, tenant improvements, design builds, and complete commercial renovations.", img: commercialImg, path: "/commercial-remodel", icon: Building2 },
  { title: "Landscape Design", desc: "Commercial and residential landscaping with desert-native plants and modern hardscaping.", img: landscapeImg, path: "/commercial-and-residential-landscaping", icon: Trees },
  { title: "Painting", desc: "Interior and exterior commercial painting with premium materials and expert crews.", img: paintingImg, path: "/painting", icon: Paintbrush },
  { title: "New Construction", desc: "Ground-up commercial building, custom homes, and complete build-out services.", img: newConstructionImg, path: "/new-construction", icon: HardHat },
  { title: "Fencing", desc: "Custom iron, steel, aluminum, chain link, block walls, and lifetime vinyl fencing.", img: fencingImg, path: "/commercial-fencing", icon: Fence },
  { title: "Insulation", desc: "Spray foam insulation with highest energy efficiency ratings and fire resistance.", img: insulationImg, path: "/insulation", icon: Thermometer },
];

const TRUST = [
  { icon: Clock, label: "40+ Years", desc: "Construction experience" },
  { icon: Shield, label: "Fully Licensed", desc: "Bonded & insured" },
  { icon: Award, label: "KB2 Licensed", desc: "Up to $6M projects" },
  { icon: MapPin, label: "Locally Owned", desc: "Phoenix Metro Area" },
];

const AREAS = ["Phoenix", "Scottsdale", "Tempe", "Glendale", "Peoria", "Avondale", "Surprise", "Paradise Valley", "Mesa", "Chandler", "Gilbert", "Anthem", "Cave Creek", "Fountain Hills", "Tucson", "Flagstaff", "Buckeye", "Goodyear"];

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Commercial remodeling in Phoenix" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary-foreground/80 mb-4">
              Arizona's Premier Commercial Contractors
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.05] text-primary-foreground text-balance mb-6">
              Commercial Remodeling Contractors of Arizona
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed max-w-xl mb-8 text-pretty">
              Over 40 years of construction and remodeling experience. Fully bonded, licensed and insured for commercial building and construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6029752870">
                <Button variant="hero" size="xl" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Get a Free Estimate
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-primary py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST.map((t) => (
              <div key={t.label} className="flex items-center gap-3 justify-center">
                <t.icon className="w-8 h-8 text-primary-foreground/80 shrink-0" />
                <div>
                  <p className="font-sans font-bold text-primary-foreground text-sm">{t.label}</p>
                  <p className="font-sans text-xs text-primary-foreground/70">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Design Build Contractors of Arizona
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-4">
              Phoenix Remodel is a highly reputable Arizona General Contractor and a leader in delivering an array of Design Build and Remodeling Services. We work closely with our customers through the Design Build Process to ensure a high level of success &amp; satisfaction with the final outcome.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Our company believes in developing a long lasting relationship with our clients by gaining their trust through exceeding their expectations by delivering high quality work at an affordable price. Phoenix Remodel offers its clients Peace of Mind by providing creative quality designs, plans and permits, and material selections all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-alt section-padding">
        <div className="container">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Construction Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
              From commercial remodels to new construction, we offer a full range of custom construction services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Link
                key={s.path}
                to={s.path}
                className={`group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll stagger-${i + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-sans font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/85 max-w-lg mx-auto mb-8 text-pretty">
            Call one of our construction experts to get it done right, on time and within budget. We're happy to provide you with a no obligation free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6029752870">
              <Button variant="heroOutline" size="xl" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5" />
                Call (602) 975-2870
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-foreground text-primary-foreground hover:bg-foreground/90">
                Request Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll from-left">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Why Phoenix Remodel?
              </h2>
              <div className="space-y-5">
                {[
                  "Over 40 years construction and remodeling experience in the Phoenix Metro Area",
                  "Fully bonded, licensed and insured — KB2 licensing for up to $6 million dollar build outs",
                  "Locally owned & operated General Contractor offering a full range of services",
                  "Creative quality designs, plans, permits, and material selections all under one roof",
                  "We service Phoenix, Scottsdale, Tempe, Glendale, Mesa, Chandler and surrounding areas",
                ].map((text, i) => (
                  <div key={i} className="flex gap-3">
                    <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <a href="tel:6029752870" className="inline-block mt-8">
                <Button variant="default" size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Schedule a Free Estimate
                </Button>
              </a>
            </div>
            <div className="animate-on-scroll from-right">
              <img
                src={commercialImg}
                alt="Phoenix commercial construction"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="section-alt section-padding">
        <div className="container animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center text-balance">
            Areas We Serve
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10 text-pretty">
            Providing fast, friendly, detailed estimates for any project across the Phoenix Metro Area and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-card rounded-md text-sm font-sans font-medium text-foreground shadow-sm border border-border"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-dark section-padding">
        <div className="container text-center animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4 text-balance">
            See What We Can Do For You
          </h2>
          <p className="text-section-dark-foreground/70 max-w-lg mx-auto mb-8 text-pretty">
            Turn to the true professionals at Phoenix Remodel. We invite you to call us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6029752870">
              <Button variant="hero" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="border-section-dark-foreground text-section-dark-foreground hover:bg-section-dark-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
