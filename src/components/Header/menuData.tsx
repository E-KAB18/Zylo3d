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
    id: 3,
    title: "Indications",
    path: "/indications",
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
      { id: 72, title: "Blog", path: "/blog", newTab: false },
      { id: 73, title: "Press", path: "/company/press", newTab: false },
      { id: 74, title: "Team", path: "/company/team", newTab: false },
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
