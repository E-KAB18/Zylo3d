import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How in-house 3D printing is reshaping the modern dental lab",
    paragraph:
      "From overnight outsourcing to same-day delivery — discover how labs worldwide are cutting turnaround times and increasing margins with desktop DLP printing.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Zylo3D Team",
      image: "/images/blog/author-02.png",
      designation: "Clinical Affairs",
    },
    tags: ["workflow"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "Validated materials: why not all dental resins are equal",
    paragraph:
      "A deep dive into what 'validated' really means — and why printing with certified resin-printer-software combinations matters for patient safety and reliability.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Zylo3D Team",
      image: "/images/blog/author-03.png",
      designation: "Materials Science",
    },
    tags: ["materials"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Surgical guides in 90 minutes: a step-by-step protocol",
    paragraph:
      "Walk through a complete implant surgical guide workflow — from CBCT import to chairside delivery — using ZyloDent and validated guide resin.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Zylo3D Team",
      image: "/images/blog/author-02.png",
      designation: "Clinical Affairs",
    },
    tags: ["surgical"],
    publishDate: "2026",
  },
  {
    id: 4,
    title: "Night guards and splints: accuracy benchmarks for DLP printing",
    paragraph:
      "We tested dimensional accuracy across 50 night guard prints. Here's what the data says about fit, occlusal contacts, and patient acceptance rates.",
    image: "/images/blog/blog-details-01.jpg",
    author: {
      name: "Zylo3D Team",
      image: "/images/blog/author-03.png",
      designation: "R&D",
    },
    tags: ["clinical"],
    publishDate: "2026",
  },
  {
    id: 5,
    title: "All-on-X from scan to print: what to know before you start",
    paragraph:
      "Full-arch implant restorations demand tight tolerances and validated materials. We break down the workflow, common pitfalls, and how ZyloDent handles it.",
    image: "/images/blog/blog-details-02.jpg",
    author: {
      name: "Zylo3D Team",
      image: "/images/blog/author-02.png",
      designation: "Clinical Affairs",
    },
    tags: ["implants"],
    publishDate: "2026",
  },
];
export default blogData;
