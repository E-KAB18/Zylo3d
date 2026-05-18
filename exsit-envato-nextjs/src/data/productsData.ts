export type Indication = {
  name: string;
  minutes: string;
  clicks: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type CalculatorRow = {
  application: string;
  labCost: number;
  zyloCost: number;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  indications: Indication[];
  specs: Spec[];
  calculator: CalculatorRow[];
  compatibilityNote: string;
  price: string;
};

const productsData: Product[] = [
  {
    slug: "zylodent",
    name: "ZyloDent",
    tagline: "Precision Dental 3D Printing, Automated",
    description:
      "All-in-one, designed for accuracy, reliability, and seamless integration with Zylo3D software and materials. ZyloDent is the complete end-to-end dental manufacturing solution — from design to final restoration.",
    image: "/images/about/dentpro.webp",
    features: [
      "All-in-one automated dental printing workflow",
      "High-resolution output for crowns, splints, dentures, and more",
      "Validated material profiles for BEGO, Pro3dure, and Pac-Dent resins",
      "Native ZyloCAD and ZyloPrep software integration",
      "Remote firmware updates via Zylo3D account",
      "Built-in resin management and tray calibration",
    ],
    indications: [
      { name: "Digital Dentures",         minutes: "90", clicks: "4" },
      { name: "Waxups & Provisionals",    minutes: "45", clicks: "3" },
      { name: "Surgical Guides",          minutes: "50", clicks: "4" },
      { name: "Sports Guards",            minutes: "35", clicks: "3" },
      { name: "Provisional All-on-X",     minutes: "120", clicks: "6" },
      { name: "Pediatric Crown",          minutes: "30", clicks: "3" },
      { name: "Occlusal Splints",         minutes: "60", clicks: "4" },
    ],
    specs: [
      { label: "Build Volume", value: "192 × 120 × 200 mm" },
      { label: "XY Resolution", value: "50 µm" },
      { label: "Z Layer Thickness", value: "25–100 µm" },
      { label: "Light Source", value: "405 nm UV-LED Array" },
      { label: "Connectivity", value: "Wi-Fi, USB, Ethernet" },
      { label: "Display", value: '7" Touchscreen' },
      { label: "Power", value: "100–240 V, 50/60 Hz" },
      { label: "Dimensions", value: "400 × 360 × 620 mm" },
      { label: "Weight", value: "18 kg" },
    ],
    calculator: [
      { application: "Aligner", labCost: 120, zyloCost: 18 },
      { application: "Denture", labCost: 350, zyloCost: 45 },
      { application: "Crown & Bridge", labCost: 280, zyloCost: 38 },
      { application: "Veneer", labCost: 200, zyloCost: 28 },
      { application: "Sports Guard", labCost: 90, zyloCost: 12 },
    ],
    compatibilityNote:
      "ZyloDent works seamlessly with ZyloCAD, ZyloPrep, and all Zylo3D validated materials.",
    price: "From $8,900",
  },
  {
    slug: "microdent",
    name: "MicroDent",
    tagline: "High-Precision Dental 3D Printer for Clinical & Lab Workflows",
    description:
      "Engineered for accuracy, reliability, and high throughput capacity. MicroDent delivers consistent results across every indication — from single-unit restorations to full-arch dentures.",
    image: "/images/about/dentpro.webp",
    features: [
      "Ultra-high precision XY resolution for detailed restorations",
      "High throughput — print multiple cases simultaneously",
      "Validated material profiles for all major dental resins",
      "Open material system with Zylo3D certified profiles",
      "Remote monitoring and firmware updates",
      "Compact footprint — designed for chairside and lab use",
    ],
    indications: [
      { name: "Diagnostic Model", minutes: "38", clicks: "3" },
      { name: "Single Unit Crown", minutes: "48", clicks: "4" },
      { name: "Denture Base", minutes: "80", clicks: "5" },
      { name: "Dental Splint", minutes: "35", clicks: "3" },
      { name: "Sports Guard", minutes: "30", clicks: "3" },
      { name: "Implant Guide", minutes: "45", clicks: "4" },
    ],
    specs: [
      { label: "Build Volume", value: "150 × 85 × 180 mm" },
      { label: "XY Resolution", value: "35 µm" },
      { label: "Z Layer Thickness", value: "10–100 µm" },
      { label: "Light Source", value: "405 nm UV-LED Mono LCD" },
      { label: "Connectivity", value: "Wi-Fi, USB" },
      { label: "Display", value: '5" Touchscreen' },
      { label: "Power", value: "100–240 V, 50/60 Hz" },
      { label: "Dimensions", value: "280 × 240 × 480 mm" },
      { label: "Weight", value: "9 kg" },
    ],
    calculator: [
      { application: "Aligner", labCost: 120, zyloCost: 15 },
      { application: "Denture", labCost: 350, zyloCost: 40 },
      { application: "Crown & Bridge", labCost: 280, zyloCost: 34 },
      { application: "Veneer", labCost: 200, zyloCost: 24 },
      { application: "Sports Guard", labCost: 90, zyloCost: 10 },
    ],
    compatibilityNote:
      "MicroDent integrates with ZyloCAD design software, ZyloPrep post-processing, and all Zylo3D validated materials.",
    price: "From $4,900",
  },
  {
    slug: "dentcure",
    name: "DentCure",
    tagline: "High-Power Post-Curing for Maximum Production Capacity",
    description:
      "DentCure delivers uniform, high-intensity curing across the full build chamber — ensuring every part meets mechanical and biocompatibility requirements for clinical use.",
    image: "/images/about/dentpro.webp",
    features: [
      "360° uniform UV curing for consistent results",
      "Dual-wavelength (365 nm + 405 nm) for broad material compatibility",
      "Programmable curing cycles per material and indication",
      "Large chamber fits full-arch prints and multiple parts simultaneously",
      "Integrated timer and temperature control",
      "Compatible with all Zylo3D validated resins",
    ],
    indications: [
      { name: "Diagnostic Model", minutes: "15", clicks: "2" },
      { name: "Single Unit Crown", minutes: "20", clicks: "2" },
      { name: "Denture Base", minutes: "30", clicks: "2" },
      { name: "Dental Splint", minutes: "15", clicks: "2" },
      { name: "Sports Guard", minutes: "12", clicks: "2" },
      { name: "Surgical Guide", minutes: "18", clicks: "2" },
    ],
    specs: [
      { label: "Chamber Volume", value: "210 × 210 × 180 mm" },
      { label: "Wavelengths", value: "365 nm + 405 nm" },
      { label: "UV Power", value: "400 W total" },
      { label: "Rotation", value: "360° motorized turntable" },
      { label: "Timer Range", value: "1–60 minutes" },
      { label: "Temperature Control", value: "Up to 60°C" },
      { label: "Connectivity", value: "USB" },
      { label: "Dimensions", value: "350 × 310 × 380 mm" },
      { label: "Weight", value: "11 kg" },
    ],
    calculator: [
      { application: "Aligner", labCost: 120, zyloCost: 14 },
      { application: "Denture", labCost: 350, zyloCost: 38 },
      { application: "Crown & Bridge", labCost: 280, zyloCost: 32 },
      { application: "Veneer", labCost: 200, zyloCost: 22 },
      { application: "Sports Guard", labCost: 90, zyloCost: 9 },
    ],
    compatibilityNote:
      "DentCure is validated for use with all Zylo3D printers and certified resin materials including BEGO, Pro3dure, and Pac-Dent.",
    price: "From $2,200",
  },
];

export default productsData;
