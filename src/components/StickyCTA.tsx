import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCTA() {
  return (
    <>
      {/* Desktop: fixed right side */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <a
          href="tel:6029752870"
          className="block"
        >
          <Button
            variant="sticky"
            size="lg"
            className="rounded-r-none rounded-l-md writing-mode-vertical flex flex-col items-center gap-2 py-6 px-3"
            style={{ writingMode: "vertical-lr" }}
          >
            <Phone className="w-4 h-4 rotate-90" />
            Get a Free Estimate
          </Button>
        </a>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-dark p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"
        style={{ backgroundColor: "hsl(var(--primary-dark))" }}
      >
        <div className="flex items-center justify-center gap-3">
          <a href="tel:6029752870" className="flex-1">
            <Button variant="sticky" size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4" />
              Call (602) 975-2870
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
