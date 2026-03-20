import ServicePage from "@/components/ServicePage";
import img from "@/assets/services-painting.jpg";

export default function Painting() {
  return (
    <ServicePage
      title="Commercial Painting"
      heroImage={img}
      intro="Professional interior and exterior painting for commercial properties throughout Phoenix."
      details={[
        "Phoenix Remodel's commercial painting division delivers high-quality interior and exterior painting services for businesses across the Phoenix Metro Area. Our experienced crews use premium paints and materials to ensure a long-lasting, professional finish.",
        "We handle painting and drywall for offices, retail spaces, restaurants, hotels, and all commercial properties. Whether you need a fresh coat of paint for a tenant improvement or a complete exterior repaint, we deliver on time and within budget.",
      ]}
      features={[
        { title: "Interior Painting", desc: "Professional interior finishes for offices and commercial spaces." },
        { title: "Exterior Painting", desc: "Weather-resistant exterior coatings for lasting protection." },
        { title: "Drywall Services", desc: "Complete drywall installation, repair, and finishing." },
      ]}
    />
  );
}
