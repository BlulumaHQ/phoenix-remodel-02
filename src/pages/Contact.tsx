import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] text-balance">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/85 max-w-xl text-pretty">
            We're happy to provide you with a no obligation free quote. Reach out today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-on-scroll">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Get a Free Consultation</h2>
              {submitted ? (
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your message and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="(602) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-medium text-foreground mb-1.5">Project Details</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info + Map */}
            <div className="animate-on-scroll from-right">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-5 mb-8">
                <a href="tel:6029752870" className="flex items-start gap-4 group">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors">(602) 975-2870</p>
                    <p className="text-sm text-muted-foreground">Mon–Fri, Business Hours</p>
                  </div>
                </a>
                <a href="mailto:sales@phoenixremodel.net" className="flex items-start gap-4 group">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors">sales@phoenixremodel.net</p>
                    <p className="text-sm text-muted-foreground">Email us anytime</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans font-semibold text-foreground">11811 N Tatum Blvd</p>
                    <p className="text-sm text-muted-foreground">Suite 3031, Phoenix, AZ 85028</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.0!2d-111.973!3d33.580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6f8b8b8b8b8b%3A0x0!2s11811+N+Tatum+Blvd%2C+Phoenix%2C+AZ+85028!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Phoenix Remodel Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
