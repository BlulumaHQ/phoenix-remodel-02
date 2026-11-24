# Phoenix Remodel (concept) — project notes

- Client concept site (real business content — keep their real phone, email, address, services, service areas).
- **Style:** "Bold Industrial" — coal #121212 base, steel #1C1C1C, iron #2E2E2E lines, safety amber #F2A900 (only accent), bone #F4F1EA light sections, ash #B9B4AA body text on dark. Headings Barlow Condensed 800 uppercase; body Barlow. Square corners, outline-text accent (`.outline-amber`).
- **Shared data:** phone/email/address, services list, service areas in `src/lib/site.ts`.
- **Utilities:** `src/index.css` → `.wrap`, `.display`, `.kicker`, `.btn-amber`, `.btn-ghost`, `.btn-coal`, `.outline-amber`.
- **Templates:** `PageHero` (all subpage heroes), `ServicePage` (6 service pages), the big amber CTA lives in `Footer` — don't add another CTA band to pages.
- **Deploy:** Netlify `phoenixremodel-b` from `main`; `public/_redirects` gives SPA fallback.
- Footer keeps the portfolio-concept disclaimer + "Web Design by Bluluma | Powered by SwiftLift".
