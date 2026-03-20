import ServicePage from "@/components/ServicePage";
import img from "@/assets/services-landscape.jpg";

export default function LandscapeDesign() {
  return (
    <ServicePage
      title="Commercial Landscape Design"
      heroImage={img}
      intro="Professional commercial and residential landscaping services across the Phoenix Metro Area."
      details={[
        "Phoenix Remodel provides comprehensive commercial and residential landscaping services designed to enhance the curb appeal and value of your property. Our experienced landscape team works with desert-native plants, modern hardscaping materials, and sustainable irrigation systems.",
        "From complete landscape redesigns to ongoing maintenance, we handle projects of every scale. Our work includes concrete block and retaining walls, decorative hardscaping, drought-tolerant plantings, and custom outdoor living areas for commercial properties.",
      ]}
      features={[
        { title: "Concrete & Retaining Walls", desc: "Durable structural and decorative wall construction." },
        { title: "Desert Landscaping", desc: "Drought-tolerant designs suited to the Arizona climate." },
        { title: "Commercial Grounds", desc: "Professional landscape design for offices, retail, and HOAs." },
      ]}
    />
  );
}
