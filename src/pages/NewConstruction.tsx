import ServicePage from "@/components/ServicePage";
import img from "@/assets/services-newconstruction.jpg";

export default function NewConstruction() {
  return (
    <ServicePage
      title="New Construction"
      heroImage={img}
      intro="Ground-up commercial construction and custom builds across the Phoenix Metro Area."
      details={[
        "Phoenix Remodel handles new commercial construction projects from the ground up. With KB2 licensing for up to 6 million dollar build outs, we have the capacity and expertise to deliver projects of significant scale — on time and on budget.",
        "Our new construction services include commercial buildings, office complexes, retail spaces, strip malls, custom homes, and more. We manage every phase from design and permits through construction and final walk-through, providing a true turn-key experience.",
      ]}
      features={[
        { title: "Commercial Buildings", desc: "Complete ground-up commercial construction projects." },
        { title: "Custom Homes", desc: "High-quality residential new builds tailored to your vision." },
        { title: "Excavation", desc: "Professional commercial excavation and site preparation." },
        { title: "Roofing", desc: "New roof installation for commercial and residential properties." },
        { title: "HVAC", desc: "Complete HVAC system installation for new buildings." },
        { title: "Plumbing & Electrical", desc: "Full-service plumbing and electrical for new construction." },
      ]}
    />
  );
}
