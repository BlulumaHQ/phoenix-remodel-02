import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Shield, Clock, Award, MapPin } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export default function AboutUs() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center">
        <div className="absolute inset-0">
          <img src={teamImg} alt="Phoenix Remodel Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>
        <div className="container relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] text-balance">
            About Phoenix Remodel
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/85 max-w-xl text-pretty">
            A highly reputable Arizona General Contractor and a leader in Design Build and Remodeling Services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                For All Your Commercial Construction Needs
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty">
                <p>
                  Phoenix Remodeling Commercial Contractors has been completing construction jobs in Phoenix and the surrounding Metro Region with over 40 years construction and remodeling experience. We are a leading Arizona Construction Company that is fully bonded, licensed and insured for commercial building and construction; with KB2 licensing for up to 6 million dollar build outs and remodeling projects. We are also proud to say that we're locally owned & operated.
                </p>
                <p>
                  As a General Contractor we offer a full range of Custom Construction Services that include Design Build, Hotel Renovation, Restaurant Remodeling, Tenant Improvements, Strip Malls, Office Buildings along with Custom Homes, and Home Remodeling.
                </p>
                <p>
                  Our company believes in developing a long lasting relationship with our clients by gaining their trust through exceeding their expectations by delivering high quality work at an affordable price. Phoenix Remodel and Commercial Construction offers its clients Peace of Mind by providing creative quality designs, plans and permits, and material selections all under one roof.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll from-right">
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "40+ Years Experience", desc: "Decades of commercial construction excellence in Arizona." },
                  { icon: Shield, title: "Fully Bonded & Insured", desc: "Complete peace of mind with full licensing and insurance coverage." },
                  { icon: Award, title: "KB2 Licensed", desc: "Licensed for projects up to $6 million in construction value." },
                  { icon: MapPin, title: "Locally Owned & Operated", desc: "Proud to serve the Phoenix Metro Area and beyond." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-card rounded-lg border border-border shadow-sm">
                    <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif text-base font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container text-center animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Let's Discuss Your Project
          </h2>
          <p className="text-primary-foreground/85 max-w-lg mx-auto mb-8 text-pretty">
            We're happy to provide you with a no obligation free quote. Call us today.
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
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
