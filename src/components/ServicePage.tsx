import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone } from "lucide-react";

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

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>
        <div className="container relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance leading-[1.05]">
            {title}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/85 max-w-xl text-pretty">{intro}</p>
          <a href="tel:6029752870" className="inline-block mt-6">
            <Button variant="hero" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Get a Free Estimate
            </Button>
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6 animate-on-scroll">
            {details.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-pretty">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      {features && features.length > 0 && (
        <section className="section-alt section-padding">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className={`bg-card rounded-lg p-6 shadow-sm border border-border animate-on-scroll stagger-${i + 1}`}>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/85 max-w-lg mx-auto mb-8 text-pretty">
            Call one of our construction experts to get it done right, on time and within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6029752870">
              <Button variant="heroOutline" size="xl" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5" />
                (602) 975-2870
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
    </>
  );
}
