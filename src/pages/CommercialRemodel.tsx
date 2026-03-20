import ServicePage from "@/components/ServicePage";
import img from "@/assets/services-commercial.jpg";

export default function CommercialRemodel() {
  return (
    <ServicePage
      title="Commercial Remodels"
      heroImage={img}
      intro="Full-service commercial remodeling for offices, retail spaces, restaurants, hotels, and more."
      details={[
        "Phoenix Remodeling Commercial Contractors has been completing construction jobs in Phoenix and the surrounding Metro Region with over 40 years construction and remodeling experience. We are a leading Arizona Construction Company that is fully bonded, licensed and insured for commercial building and construction; with KB2 licensing for up to 6 million dollar build outs and remodeling projects.",
        "As a General Contractor we offer a full range of Custom Construction Services that include Design Build, Hotel Renovation, Restaurant Remodeling, Tenant Improvements, Strip Malls, Office Buildings along with Custom Homes, and Home Remodeling.",
        "We can help with everything, from commercial new builds to painting and remodels. Our Contractors are fully bonded, licensed and insured. So clients can turn to our company with total peace of mind, knowing they're working with one of the region's premier commercial construction contractors.",
      ]}
      features={[
        { title: "Office Remodeling", desc: "Complete office renovations tailored to your business needs and workflow." },
        { title: "Tenant Improvements", desc: "Build-out and customize commercial spaces for new tenants." },
        { title: "Design Builds", desc: "End-to-end design and construction under one roof." },
        { title: "Commercial Bathrooms", desc: "ADA-compliant commercial bathroom remodeling and upgrades." },
        { title: "Commercial Flooring", desc: "Premium flooring solutions for high-traffic commercial spaces." },
        { title: "Turn-Key Operations", desc: "Move-in ready commercial spaces delivered on time and on budget." },
      ]}
    />
  );
}
