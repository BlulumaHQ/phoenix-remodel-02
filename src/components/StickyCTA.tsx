import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t-4 border-amber bg-coal lg:hidden">
      <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 py-4 font-display text-lg font-bold uppercase tracking-[0.06em] text-bone">
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <Link to="/contact" className="flex items-center justify-center bg-amber py-4 font-display text-lg font-bold uppercase tracking-[0.06em] text-coal">
        Free Estimate
      </Link>
    </div>
  );
}
