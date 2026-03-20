import ServicePage from "@/components/ServicePage";
import img from "@/assets/services-fencing.jpg";

export default function Fencing() {
  return (
    <ServicePage
      title="Commercial Fencing"
      heroImage={img}
      intro="Top quality commercial fencing with custom iron, steel, and aluminum work available."
      details={[
        "Replace your old fencing with commercial fencing from Phoenix Remodel. To Spec custom iron, steel and aluminum work available. Chain link, block walls, lifetime vinyl fencing and more are all available from our fencing division.",
        "Give us a call and schedule a FREE Estimate today. Our team will work with you to design and install the perfect fencing solution for your commercial property, ensuring security, aesthetics, and long-lasting durability.",
      ]}
      features={[
        { title: "Custom Iron & Steel", desc: "To Spec custom ironwork and steel fencing fabrication." },
        { title: "Chain Link", desc: "Durable commercial chain link fencing installation." },
        { title: "Block Walls", desc: "Concrete block wall construction for security and privacy." },
        { title: "Vinyl Fencing", desc: "Lifetime vinyl fencing for low-maintenance durability." },
        { title: "Aluminum", desc: "Lightweight aluminum fencing for a premium look." },
      ]}
    />
  );
}
