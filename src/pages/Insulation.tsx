import ServicePage from "@/components/ServicePage";
import img from "@/assets/services-insulation.jpg";

export default function Insulation() {
  return (
    <ServicePage
      title="Spray Foam Insulation"
      heroImage={img}
      intro="Energy efficient foam insulation with the highest possible energy efficiency ratings."
      details={[
        "Update your building with the latest and greatest the insulation industry has to offer. Highest possible energy efficiency ratings and fire resistance. Very quick installation time will keep your business up and running.",
        "Spray Foam insulation typically pays for itself in energy savings! Our insulation division serves commercial and residential properties across the Phoenix Metro Area. Contact us today for a free estimate.",
      ]}
      features={[
        { title: "Energy Efficiency", desc: "Highest possible energy efficiency ratings available." },
        { title: "Fire Resistance", desc: "Superior fire-resistant insulation materials." },
        { title: "Quick Installation", desc: "Minimal business disruption with fast installation times." },
      ]}
    />
  );
}
