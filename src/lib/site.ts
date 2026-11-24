import commercialImg from "@/assets/services-commercial.jpg";
import landscapeImg from "@/assets/services-landscape.jpg";
import paintingImg from "@/assets/services-painting.jpg";
import newConstructionImg from "@/assets/services-newconstruction.jpg";
import fencingImg from "@/assets/services-fencing.jpg";
import insulationImg from "@/assets/services-insulation.jpg";

export const SITE = {
  name: "Phoenix Remodel",
  phone: "(602) 975-2870",
  phoneHref: "tel:6029752870",
  email: "sales@phoenixremodel.net",
  street: "11811 N Tatum Blvd, Suite 3031",
  city: "Phoenix, AZ 85028",
};

export const SERVICES = [
  { title: "Commercial Remodels", short: "Office remodeling, tenant improvements, design builds and complete commercial renovations.", img: commercialImg, path: "/commercial-remodel" },
  { title: "New Construction", short: "Ground-up commercial buildings, custom homes and complete build-outs.", img: newConstructionImg, path: "/new-construction" },
  { title: "Landscape Design", short: "Desert-native planting and modern hardscaping, commercial and residential.", img: landscapeImg, path: "/commercial-and-residential-landscaping" },
  { title: "Painting", short: "Interior and exterior commercial painting with premium materials.", img: paintingImg, path: "/painting" },
  { title: "Fencing", short: "Iron, steel, aluminum, chain link, block walls and lifetime vinyl.", img: fencingImg, path: "/commercial-fencing" },
  { title: "Insulation", short: "Spray foam with top energy-efficiency ratings and fire resistance.", img: insulationImg, path: "/insulation" },
];

export const AREAS = ["Phoenix", "Scottsdale", "Tempe", "Glendale", "Peoria", "Avondale", "Surprise", "Paradise Valley", "Mesa", "Chandler", "Gilbert", "Anthem", "Cave Creek", "Fountain Hills", "Tucson", "Flagstaff", "Buckeye", "Goodyear"];
