import { Brand } from "@/types/brand";

// Validated material partner logos — replace image paths with actual partner logos
const brandsData: Brand[] = [
  {
    id: 1,
    name: "BEGO",
    href: "https://www.bego.com",
    image: "/images/brands/formbold.svg",
    imageLight: "/images/brands/formbold-light.svg",
  },
  {
    id: 2,
    name: "Pro3dure",
    href: "https://www.pro3dure.com",
    image: "/images/brands/uideck.svg",
    imageLight: "/images/brands/uideck-light.svg",
  },
  {
    id: 3,
    name: "Pac-Dent",
    href: "https://www.pac-dent.com",
    image: "/images/brands/tailgrids.svg",
    imageLight: "/images/brands/tailgrids-light.svg",
  },
];

export default brandsData;
