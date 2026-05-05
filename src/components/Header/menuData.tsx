import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    newTab: false,
    submenu: [
      { id: 11, title: "ZyloDent", path: "/products/zylodent", newTab: false },
      { id: 12, title: "MicroDent", path: "/products/microdent", newTab: false },
      { id: 13, title: "DentCure", path: "/products/dentcure", newTab: false },
    ],
  },
  {
    id: 2,
    title: "Software",
    newTab: false,
    submenu: [
      { id: 21, title: "AI ZyloCAD", path: "/software/ai-zyloc-ad", newTab: false },

      { id: 22, title: "Design Cloud", path: "/software/design-cloud", newTab: false },
    ],
  },
  {
    id: 3,
    title: "Indications",
    path: "/indications",
    newTab: false,
  },
  {
    id: 4,
    title: "Store",
    path: "/store",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 6,
    title: "Learning",
    newTab: false,
    submenu: [
      { id: 61, title: "Webinars", path: "/learning/webinars", newTab: false },
      { id: 62, title: "Training", path: "/learning/training", newTab: false },
      { id: 63, title: "Best Practice Guides", path: "/learning/guides", newTab: false },
      { id: 64, title: "KOLs", path: "/learning/kols", newTab: false },
    ],
  },
  {
    id: 7,
    title: "Company",
    newTab: false,
    submenu: [
      { id: 71, title: "About", path: "/about", newTab: false },
      { id: 72, title: "Press", path: "/company/press", newTab: false },
      { id: 73, title: "Team", path: "/company/team", newTab: false },
    ],
  },
  {
    id: 8,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
