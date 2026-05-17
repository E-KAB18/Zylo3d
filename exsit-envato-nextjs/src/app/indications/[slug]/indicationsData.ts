export interface WorkflowStep {
  title: string;
  duration: string;
  description: string;
}

export interface ProofPoint {
  title: string;
  description: string;
}

export interface Material {
  name: string;
  tag: string;
  description: string;
}

export interface ROIDefaults {
  casesPerMonth: number;
  labCostPerUnit: number;
  zyloCostPerUnit: number;
  unitLabel: string;
}

export interface IndicationData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  proof: ProofPoint[];
  workflowSteps: WorkflowStep[];
  totalTime: string;
  whySection: {
    heading: string;
    body: string;
  };
  ctaLabel: string;
  materials: Material[];
  roiDefaults: ROIDefaults;
}

export const indicationsData: IndicationData[] = [
  {
    slug: "model",
    name: "Diagnostic Model",
    tagline: "High-accuracy anatomical models for diagnosis and treatment planning.",
    description:
      "Produce precise diagnostic models and aesthetic wax-up try-ins with an integrated digital workflow: AI-assisted design + one-click file prep + automated print–wash–cure. Turn treatment plans into something patients can see and approve—same visit.",
    proof: [
      {
        title: "Faster case acceptance",
        description: "Trial smiles and diagnostic models reduce patient uncertainty and speed up decisions.",
      },
      {
        title: "Delegation-ready",
        description: "Standard workflow your entire team can run consistently—no printing expert required.",
      },
      {
        title: "Same-visit delivery",
        description: "Records to printed model or try-in shell in a clinic-friendly timeline.",
      },
    ],
    workflowSteps: [
      {
        title: "AI ZyloCAD",
        duration: "~10 min",
        description:
          "Upload upper/lower scans → AI generates wax-up or model geometry. Adjust tooth shape, length, and contour for the patient presentation.",
      },
      {
        title: "ZyloPrep (one-click)",
        duration: "~3 min",
        description:
          "Auto-orient and place supports away from display surfaces. Apply validated print profiles by material.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~30 min",
        description:
          "Print + wash + cure in one device with automated gantry transfer. No manual liquid transfer needed.",
      },
      {
        title: "Finish & Present",
        duration: "~5 min",
        description:
          "Quick polish, try-in with patient, and collect approval before moving to the definitive plan.",
      },
    ],
    totalTime: "~45–50 minutes",
    whySection: {
      heading: "If you already plan digitally, why are models still a lab order?",
      body: "Sending models to a lab adds days and costs per unit—slowing case acceptance and consuming chair time. Bringing model and wax-up production in-house with Zylo compresses the chain: ZyloCAD handles AI-assisted design, ZyloPrep automates file prep, and ZyloDent runs print–wash–cure in a single cabinet-ready device your assistant can operate.",
    },
    ctaLabel: "Request a Sample Model",
    materials: [
      {
        name: "Pro3dure GR-10 Model",
        tag: "Validated",
        description: "High-detail model resin for diagnostic and presentation use.",
      },
      {
        name: "BEGO VarseoSmile Try-In",
        tag: "Validated",
        description: "Try-in shell material for wax-up approvals and patient communication.",
      },
      {
        name: "Sarameco ModTec",
        tag: "Validated",
        description: "Fast-printing model resin with smooth anatomical surface quality.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Dial in custom print parameters for additional model resins.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 25,
      labCostPerUnit: 30,
      zyloCostPerUnit: 5,
      unitLabel: "models",
    },
  },

  {
    slug: "crown",
    name: "Permanent Crown",
    tagline: "Predictable, same-day permanent restorations from scan to cementation.",
    description:
      "Predictable, same-day permanent restorations with an integrated workflow: AI-assisted margin detection + one-click prep + automated print–wash–cure. Deliver full-contour crowns your whole team can reproduce consistently.",
    proof: [
      {
        title: "Delegation-ready",
        description: "Automated workflow designed for assistants—no CAD expertise required.",
      },
      {
        title: "Open + validated",
        description: "Restorative materials with IFUs and clinical evidence from leading manufacturers.",
      },
      {
        title: "Same-visit delivery",
        description: "Scan-to-seated restoration in ~40 minutes in a clinic-friendly timeline.",
      },
    ],
    workflowSteps: [
      {
        title: "AI ZyloCAD",
        duration: "~10 min",
        description:
          "Upload upper + lower scans → automatic margin detection → crown generated. No CAD expertise required.",
      },
      {
        title: "AI ZyloPrep",
        duration: "~3 min",
        description:
          "Detect fitting areas + orient so supports avoid functional surfaces. One click to production-ready file.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~22 min",
        description:
          "Print + wash + cure in one device with automated gantry transfer. Validated protocol per material.",
      },
      {
        title: "Finish / Polish",
        duration: "~5 min",
        description: "Polish and cementation per material IFU. Patient leaves with a permanent restoration.",
      },
    ],
    totalTime: "~40 minutes",
    whySection: {
      heading: "If you already scan digitally, why are restorations still a 5-day process?",
      body: "If you own an intraoral scanner but outsource single-unit restorations to a third-party lab, you live in the same loop: ~5 days wait, ~$150 per unit, and occasional remakes that take twice the chair time and reduce patient satisfaction. Zylo standardizes and automates the entire chain—AI design, one-click prep, and all-in-one print–wash–cure—so the workflow is delegatable from day one.",
    },
    ctaLabel: "Request a Sample Crown",
    materials: [
      {
        name: "PacDent PacCrown",
        tag: "Validated",
        description: "Restorative resin validated for permanent crowns with IFU documentation.",
      },
      {
        name: "BEGO VarseoSmile Crown Plus",
        tag: "Validated",
        description: "High-strength crown resin with clinical study support.",
      },
      {
        name: "Sarameco CrownTec",
        tag: "Validated",
        description: "Permanent restorative with validated wash/cure protocol on ZyloDent.",
      },
      {
        name: "Senertek Perm CR",
        tag: "Validated",
        description: "Validated permanent crown resin with mechanical property testing.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Dial in resin parameters for additional crown materials.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 30,
      labCostPerUnit: 150,
      zyloCostPerUnit: 25,
      unitLabel: "crowns",
    },
  },

  {
    slug: "bridge",
    name: "Bridge",
    tagline: "Multi-unit fixed bridges with precision margins and consistent seating.",
    description:
      "Deliver accurate multi-unit bridge frameworks in-house with a connected digital workflow: AI-assisted design + one-click file prep + automated print–wash–cure. Reduce lab dependency and turnaround time on fixed prosthodontics.",
    proof: [
      {
        title: "Precision fit",
        description: "AI-generated margins and automated support placement for consistent multi-unit accuracy.",
      },
      {
        title: "Faster turnaround",
        description: "In-house production replaces 5–10 day lab cycles for fixed bridge cases.",
      },
      {
        title: "Scalable workflow",
        description: "From single-pontic to full-arch frameworks—your team can run it consistently.",
      },
    ],
    workflowSteps: [
      {
        title: "AI ZyloCAD",
        duration: "~15 min",
        description:
          "Upload full-arch scan + opposing → auto margin detection + bridge framework generated. Adjust connector size and pontic shape.",
      },
      {
        title: "AI ZyloPrep",
        duration: "~5 min",
        description:
          "Orient for minimal support contact on seating surfaces. Validated print settings applied automatically.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~25–35 min",
        description:
          "Print + wash + cure in one automated run. Larger frameworks handled in a single build.",
      },
      {
        title: "Finish & Seat",
        duration: "~10 min",
        description: "Support removal, polish, and cementation per material IFU. Check contacts and occlusion.",
      },
    ],
    totalTime: "~55–65 minutes",
    whySection: {
      heading: "If you scan for single units, why outsource multi-unit bridges?",
      body: "Bridge cases sent to an external lab mean 5–10 business days of wait, per-unit lab fees stacked across the span, and remake loops when margins or contacts need adjustment. Bringing bridge production in-house with Zylo's integrated stack—ZyloCAD for multi-unit design, ZyloPrep for file automation, and ZyloDent for print–wash–cure—removes the bottleneck without requiring a separate CAD expert on staff.",
    },
    ctaLabel: "Request a Sample Bridge",
    materials: [
      {
        name: "PacDent PacCrown",
        tag: "Validated",
        description: "Suitable for bridge frameworks where IFU supports span length.",
      },
      {
        name: "BEGO VarseoSmile Crown Plus",
        tag: "Validated",
        description: "High-strength resin validated for multi-unit fixed restorations.",
      },
      {
        name: "Sarameco CrownTec",
        tag: "Validated",
        description: "Validated for bridge indication with documented connector strength data.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Configure bridge-specific parameters for additional materials.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 12,
      labCostPerUnit: 350,
      zyloCostPerUnit: 55,
      unitLabel: "bridge units",
    },
  },

  {
    slug: "inlay",
    name: "Inlay",
    tagline: "Conservative inlay restorations with sub-100 µm marginal precision.",
    description:
      "Produce accurate inlay restorations entirely in-house: AI-assisted cavity design + one-click file prep + automated print–wash–cure. Predictable marginal fit without the lab wait—delivered the same day.",
    proof: [
      {
        title: "Conservative preparation",
        description: "Inlay design stays within cavity walls, preserving healthy tooth structure.",
      },
      {
        title: "Excellent marginal fit",
        description: "AI-generated margins and validated print parameters for consistent seating.",
      },
      {
        title: "Same-visit delivery",
        description: "Scan-to-cementation in under 45 minutes on a clinic-friendly workflow.",
      },
    ],
    workflowSteps: [
      {
        title: "AI ZyloCAD",
        duration: "~10 min",
        description:
          "Upload scan + opposing bite → AI detects cavity margins and generates inlay geometry. Adjust contact points and surface anatomy.",
      },
      {
        title: "AI ZyloPrep",
        duration: "~3 min",
        description:
          "Orient with supports away from seating surfaces. Validated exposure and lift settings applied automatically.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~22 min",
        description:
          "Print + wash + cure in one automated run. Gantry transfer eliminates manual liquid handling.",
      },
      {
        title: "Finish & Cement",
        duration: "~5–8 min",
        description: "Light polish of contacts and margins, adhesive cementation per material IFU.",
      },
    ],
    totalTime: "~40–45 minutes",
    whySection: {
      heading: "Inlays are one of the most delegatable restorations—so why are they still a lab job?",
      body: "The inlay preparation is done chairside, yet most practices still outsource the restoration to a lab—adding days of temporization, multiple appointments, and per-unit costs. Zylo closes that gap: ZyloCAD generates the inlay from your scan, ZyloPrep handles file prep in one click, and ZyloDent runs the automated print–wash–cure cycle so your assistant can hand the finished restoration to the dentist in the same appointment.",
    },
    ctaLabel: "Request a Sample Inlay",
    materials: [
      {
        name: "PacDent PacCrown",
        tag: "Validated",
        description: "Validated for inlay indication where IFU supports conservative restoration.",
      },
      {
        name: "BEGO VarseoSmile Crown Plus",
        tag: "Validated",
        description: "Validated restorative resin suitable for inlay geometry and bite loading.",
      },
      {
        name: "Sarameco CrownTec",
        tag: "Validated",
        description: "Validated for inlay and onlay indications with clinical evidence.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Tune parameters for additional restorative materials.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 20,
      labCostPerUnit: 120,
      zyloCostPerUnit: 20,
      unitLabel: "inlays",
    },
  },

  {
    slug: "onlay",
    name: "Onlay",
    tagline: "Extended cusp coverage restorations with optimal occlusal integrity.",
    description:
      "Deliver precise onlay restorations with full cusp coverage in the same appointment: AI-assisted design + one-click file prep + automated print–wash–cure. Replace lab dependency with a repeatable, delegation-first in-house workflow.",
    proof: [
      {
        title: "Full cusp coverage",
        description: "Onlay design covers damaged cusps while preserving remaining tooth structure.",
      },
      {
        title: "Occlusal accuracy",
        description: "AI-generated occlusal surfaces and validated print settings for consistent fit.",
      },
      {
        title: "Delegation-ready",
        description: "Automated workflow any assistant can run—no CAD background required.",
      },
    ],
    workflowSteps: [
      {
        title: "AI ZyloCAD",
        duration: "~10–12 min",
        description:
          "Upload scan + bite registration → AI detects margins and generates onlay covering indicated cusps. Adjust cusp angle and contact strategy.",
      },
      {
        title: "AI ZyloPrep",
        duration: "~3 min",
        description:
          "Auto-orient to minimize supports on occlusal surfaces. Material-validated print profiles applied.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~22 min",
        description: "Print + wash + cure in one automated device run with gantry transfer.",
      },
      {
        title: "Finish & Cement",
        duration: "~5–8 min",
        description: "Polish occlusal contacts, verify bite, and cement per material IFU.",
      },
    ],
    totalTime: "~40–45 minutes",
    whySection: {
      heading: "Onlays offer more tooth preservation than crowns—why should they still take 5 days?",
      body: "The conservative advantage of an onlay is undercut when the turnaround forces a 5-day lab cycle and a temporary restoration that can fail or fall out. Bringing onlay production in-house with Zylo means the patient gets a permanent, full-coverage cusp restoration in the same visit: ZyloCAD designs from the scan, ZyloPrep preps the file automatically, and ZyloDent delivers print–wash–cure without your team needing to manage separate post-processing equipment.",
    },
    ctaLabel: "Request a Sample Onlay",
    materials: [
      {
        name: "PacDent PacCrown",
        tag: "Validated",
        description: "Validated for onlay indication with IFU documentation for cusp coverage.",
      },
      {
        name: "BEGO VarseoSmile Crown Plus",
        tag: "Validated",
        description: "High-strength resin validated for posterior onlay bite loading.",
      },
      {
        name: "Sarameco CrownTec",
        tag: "Validated",
        description: "Onlay-indicated material with validated post-processing protocol.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Configure parameters for additional onlay-indicated resins.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 15,
      labCostPerUnit: 130,
      zyloCostPerUnit: 22,
      unitLabel: "onlays",
    },
  },

  {
    slug: "veneer",
    name: "Veneer",
    tagline: "Esthetic veneers patients can see and approve before final placement.",
    description:
      "Produce try-in veneers and wax-up shells same-day—so patients approve the result before any irreversible preparation: AI-assisted design + one-click file prep + automated print–wash–cure. Increase case acceptance and eliminate the approval guesswork.",
    proof: [
      {
        title: "Pre-approval workflow",
        description: "Try-in shells let patients see, feel, and approve shape and proportion before preparation.",
      },
      {
        title: "Faster decisions",
        description: "Tangible trial smiles reduce uncertainty and speed up case acceptance.",
      },
      {
        title: "Consistent esthetics",
        description: "AI tooth proportion tools and validated esthetic resins for predictable outcomes.",
      },
    ],
    workflowSteps: [
      {
        title: "AI ZyloCAD",
        duration: "~10–15 min",
        description:
          "Upload upper scan + photos → AI generates veneer design with proportion and length guidance. Adjust tooth form and buccal contour.",
      },
      {
        title: "AI ZyloPrep",
        duration: "~3 min",
        description:
          "Auto-orient veneers with supports on internal surfaces only. Validated esthetic resin profiles applied.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~20–25 min",
        description:
          "Print + wash + cure in one automated run. Multiple veneers in a single build.",
      },
      {
        title: "Try-In & Approval",
        duration: "~5–10 min",
        description:
          "Patient tries in the veneer shells before any preparation—commits to the final design.",
      },
    ],
    totalTime: "~40–55 minutes",
    whySection: {
      heading: "Patients hesitate on veneers because they're buying an abstract plan—change that.",
      body: "Without a tangible preview, veneer cases stall. Patients struggle to visualize the outcome, leading to hesitation, additional consult appointments, and lower acceptance rates. With Zylo, you produce a try-in shell or wax-up mockup during the consultation appointment—ZyloCAD designs from photos and scans, ZyloPrep preps the file in one click, and ZyloDent delivers the printed try-in before the patient leaves. They either approve or refine on the spot.",
    },
    ctaLabel: "Request a Sample Veneer Try-In",
    materials: [
      {
        name: "BEGO VarseoSmile Try-In",
        tag: "Validated",
        description: "Try-in shell resin for approval workflow and patient communication.",
      },
      {
        name: "Pro3dure GR-10 Veneers",
        tag: "Validated",
        description: "Esthetic resin validated for veneer indication (per IFU).",
      },
      {
        name: "Sarameco CrownTec",
        tag: "Validated",
        description: "Validated esthetic resin suitable for thin veneer geometry.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Tune parameters for additional esthetic resins and shade options.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 10,
      labCostPerUnit: 300,
      zyloCostPerUnit: 30,
      unitLabel: "veneers",
    },
  },

  {
    slug: "denture-base",
    name: "Denture Base",
    tagline: "Predictable removable denture bases with a delegatable digital workflow.",
    description:
      "Deliver accurate, comfortable denture bases in-house with an integrated digital workflow: AI-assisted design + one-click file prep + automated print–wash–cure. Reduce lab dependency and remake loops on removable prosthodontics.",
    proof: [
      {
        title: "Fewer visits",
        description: "Compress multi-visit protocols with same-day in-house production (case-dependent).",
      },
      {
        title: "Repeatable workflow",
        description: "Standard, delegatable process your team can run consistently across shifts.",
      },
      {
        title: "Lower remake rate",
        description: "Standardized print + cure protocol reduces fit variability and costly remakes.",
      },
    ],
    workflowSteps: [
      {
        title: "Records & Design",
        duration: "~15–20 min",
        description:
          "Impressions / scan → AI-assisted denture base design with tissue adaptation and border extension.",
      },
      {
        title: "ZyloPrep (one-click)",
        duration: "~5 min",
        description:
          "Auto-orient base for minimal distortion. Validated denture base material profiles applied.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~35–45 min",
        description: "Print + wash + cure in one automated run with validated post-processing protocol.",
      },
      {
        title: "Finish & Insert",
        duration: "~10–15 min",
        description:
          "Polish borders, adjust relief areas, and deliver. Chairside refinement per IFU.",
      },
    ],
    totalTime: "~65–85 minutes",
    whySection: {
      heading: "A removable workflow only matters if it's repeatable—not 'hero technician' dependent.",
      body: "Denture cases sent to an external lab mean multiple visits, long waits, and costly remakes when fit requires adjustment. Bringing production in-house with Zylo compresses the chain: ZyloCAD handles AI-assisted design, ZyloPrep automates file prep, and ZyloDent runs validated print–wash–cure in a single cabinet-ready device. Your assistant can operate the full workflow without being a 3D printing specialist.",
    },
    ctaLabel: "Request a Sample Denture Base",
    materials: [
      {
        name: "BEGO VarseoWax Denture",
        tag: "Validated",
        description: "Validated denture base resin with proven tissue adaptation properties.",
      },
      {
        name: "Sarameco BaseTec",
        tag: "Validated",
        description: "Denture base material with validated print and cure protocol on ZyloDent.",
      },
      {
        name: "Pro3dure GR-D Base",
        tag: "Validated",
        description: "Biocompatible denture base resin with documented clinical validation.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Configure parameters for additional denture base materials.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 15,
      labCostPerUnit: 350,
      zyloCostPerUnit: 45,
      unitLabel: "denture bases",
    },
  },

  {
    slug: "denture-teeth",
    name: "Denture Teeth",
    tagline: "Print-and-characterize denture teeth with consistent shade and anatomy.",
    description:
      "Produce custom denture teeth in-house with an integrated digital workflow: AI-assisted tooth setup design + one-click file prep + automated print–wash–cure. Eliminate shade matching delays and create patient-specific teeth in the same appointment.",
    proof: [
      {
        title: "Custom shade control",
        description: "In-house production gives full control over shade, anatomy, and characterization.",
      },
      {
        title: "Faster delivery",
        description: "Skip lab shipping cycles—produce teeth in-house the same day as the try-in.",
      },
      {
        title: "Consistent anatomy",
        description: "AI tooth setup tools and validated tooth resin for predictable esthetic outcomes.",
      },
    ],
    workflowSteps: [
      {
        title: "Tooth Setup Design",
        duration: "~15–20 min",
        description:
          "Upload records + wax-up reference → AI-assisted tooth positioning and anatomy design. Adjust shade, mould, and alignment.",
      },
      {
        title: "ZyloPrep (one-click)",
        duration: "~5 min",
        description:
          "Auto-orient tooth setup with validated tooth resin print profiles. Supports placed on non-display surfaces.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~30–40 min",
        description: "Print + wash + cure in one automated cycle. Validated protocol per tooth resin.",
      },
      {
        title: "Characterize & Bond",
        duration: "~15–20 min",
        description:
          "Surface characterization, staining (optional), bond to base per IFU and finishing protocol.",
      },
    ],
    totalTime: "~65–85 minutes",
    whySection: {
      heading: "Denture teeth that depend on lab shade matching take too long to get right.",
      body: "When shade selection happens in the clinic but production happens at the lab, every approval step requires another turnaround. Bringing denture teeth in-house closes that loop: ZyloCAD designs the tooth setup from your records and wax-up, ZyloPrep handles file preparation automatically, and ZyloDent runs a validated print–wash–cure cycle. Shade iteration, occlusal adjustment, and try-in all happen in the same workflow—without sending files back and forth.",
    },
    ctaLabel: "Request a Sample Denture Teeth Set",
    materials: [
      {
        name: "BEGO VarseoSmile Teeth",
        tag: "Validated",
        description: "Esthetic tooth resin with validated shade stability and bonding protocol.",
      },
      {
        name: "Sarameco ToothTec",
        tag: "Validated",
        description: "Denture tooth material validated for chairside characterization workflow.",
      },
      {
        name: "Pro3dure GR-D Teeth",
        tag: "Validated",
        description: "Biocompatible denture teeth resin with clinical validation documentation.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Tune parameters for additional denture tooth resins and shade options.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 12,
      labCostPerUnit: 200,
      zyloCostPerUnit: 35,
      unitLabel: "denture teeth sets",
    },
  },

  {
    slug: "all-on-x",
    name: "All-on-X Provisional",
    tagline: "Surgery-day delivery without the conversion chaos.",
    description:
      "Make surgery-day delivery predictable with a fully digital All-on-X conversion workflow: preserve VDO, protect screw-channel accuracy, and deliver strong esthetic monolithic provisionals with AI-assisted design + one-click prep + automated print–wash–cure.",
    proof: [
      {
        title: "Preserved VDO & esthetics",
        description: "Diagnostic wax-up reference points carried through to surgery-day delivery.",
      },
      {
        title: "Passive-fit focused",
        description: "Screw channels and supports oriented for accuracy and consistent seating.",
      },
      {
        title: "Fewer fractures",
        description: "Monolithic printed provisionals reduce breakage and eliminate costly remake loops.",
      },
    ],
    workflowSteps: [
      {
        title: "Pre-op Records",
        duration: "Day before",
        description:
          "Pre-op scan + bite + smile references (photos/records). Diagnostic wax-up or tooth setup designed and approved.",
      },
      {
        title: "Surgery-Day Capture",
        duration: "Intraop",
        description:
          "Implant position record + relationship record to the pre-planned wax-up. Preserve VDO and tooth position.",
      },
      {
        title: "AI Design + Align",
        duration: "~20–30 min",
        description:
          "ZyloCAD aligns surgery-day implant reality to the pre-planned wax-up. Screw access channels positioned. One-click ZyloPrep file prep.",
      },
      {
        title: "ZyloDent Production",
        duration: "~35–50 min",
        description:
          "Print + wash + cure in one automated run. Monolithic full-arch provisional produced without manual transfer.",
      },
      {
        title: "Finish & Deliver",
        duration: "~15–20 min",
        description:
          "Support removal, polish, QC, then seat → torque → occlusion check → tissue pressure verification.",
      },
    ],
    totalTime: "~90–120 minutes (production phase)",
    whySection: {
      heading: "Denture conversion on surgery day is chaos—a digital workflow fixes that.",
      body: "Traditional All-on-X surgery-day delivery relies on intraoral cylinder pick-ups and denture conversion on an articulator—slow, error-prone, and highly variable across assistants. Digital conversion provisionals preserve the diagnostic wax-up reference points (VDO, tooth position, hinge relationship) so the prosthesis arrives in planned occlusion with minimal guesswork. Zylo compresses the production chain: ZyloCAD handles the alignment, ZyloPrep automates file prep, and ZyloDent runs the automated print–wash–cure cycle.",
    },
    ctaLabel: "Request a Sample All-on-X Provisional",
    materials: [
      {
        name: "Titan Rodin Resin",
        tag: "Validated",
        description: "High-strength provisional resin validated for full-arch All-on-X applications.",
      },
      {
        name: "BEGO VarseoSmile Temp",
        tag: "Validated",
        description: "Temporary crown and bridge resin validated for extended provisional use.",
      },
      {
        name: "Pro3dure GR-17 Temp",
        tag: "Validated",
        description: "Biocompatible provisional resin with validated All-on-X workflow documentation.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Configure parameters for additional provisional-grade resins.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 6,
      labCostPerUnit: 800,
      zyloCostPerUnit: 120,
      unitLabel: "arches",
    },
  },

  {
    slug: "night-guard",
    name: "Night Guard",
    tagline: "Same-day occlusal splints and night guards with an automated workflow.",
    description:
      "Predictable, same-day night guards and occlusal splints with an integrated workflow: AI-assisted design + one-click prep + automated print–wash–cure. Eliminate lab turnaround and deliver consistent guards your entire team can produce.",
    proof: [
      {
        title: "Delegation-ready",
        description: "Automated workflow designed for assistants—no printing expertise required.",
      },
      {
        title: "Open + validated materials",
        description: "Splint resins validated on ZyloDent per material IFU.",
      },
      {
        title: "Same-day delivery",
        description: "From scan to finished guard in ~60 minutes in a clinic-friendly timeline.",
      },
    ],
    workflowSteps: [
      {
        title: "ZyloCAD (AI-assisted)",
        duration: "~10 min",
        description:
          "Upload upper/lower + bite → generate splint or guard. Adjust thickness, relief zones, and contact strategy.",
      },
      {
        title: "ZyloPrep (one-click)",
        duration: "~3 min",
        description:
          "Auto-orient + place supports away from functional occlusal surfaces. Validated splint material profiles applied.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~40–45 min",
        description:
          "Print → automated transfer → wash → cure in one device. No manual liquid transfer required.",
      },
      {
        title: "Finish & Fit",
        duration: "~5–10 min",
        description:
          "Remove supports, quick polish, final fit check and occlusal adjustment. Ready to deliver.",
      },
    ],
    totalTime: "~60 minutes",
    whySection: {
      heading: "If you already scan digitally, why are splints still a multi-day process?",
      body: "Outsourcing night guards to a third-party lab means ~5 days of turnaround, ~$100 per unit, and remakes that steal chair time. Most guards are still thermoformed without a true 3D bite scheme, so fit and comfort can vary. Zylo integrates the missing steps: ZyloCAD and ZyloPrep streamline design and file prep with AI, and ZyloDent automates print–wash–cure in one cabinet-ready footprint so your assistant can produce consistent splints with minimal manual steps.",
    },
    ctaLabel: "Request a Sample Night Guard",
    materials: [
      {
        name: "Keystone KeySplint Hard",
        tag: "Validated",
        description: "Hard night guard resin validated for occlusal splint indication on ZyloDent.",
      },
      {
        name: "Pro3dure GR-S Splint",
        tag: "Validated",
        description: "Splint/guard resin validated with documented wash, cure, and finishing protocol.",
      },
      {
        name: "BEGO VarseoSmile Splint",
        tag: "Validated",
        description: "Biocompatible splint resin with clinical study support.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Tune parameters for additional splint materials and R&D.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 40,
      labCostPerUnit: 90,
      zyloCostPerUnit: 15,
      unitLabel: "guards",
    },
  },

  {
    slug: "sports-guard",
    name: "Sports Guard",
    tagline: "Custom, same-day sports guards with logo and color personalization.",
    description:
      "Deliver high-custom sports guards in the same appointment: design + one-click prep + automated print–wash–cure. Digital customization—team logos, colors, names, jersey numbers—without the craft variability of thermoforming.",
    proof: [
      {
        title: "High customization",
        description: "Team logos, player colors, and jersey numbers designed digitally and printed repeatably.",
      },
      {
        title: "Repeatable workflow",
        description: "Assistants can run the end-to-end process consistently across all patients and shifts.",
      },
      {
        title: "Faster patient 'yes'",
        description: "Patients commit faster when they can see their personalized guard upfront.",
      },
    ],
    workflowSteps: [
      {
        title: "Design + Customize",
        duration: "~10–15 min",
        description:
          "Upload scan → design sports guard with thickness zones, comfort edges, logo placement, and color layer options.",
      },
      {
        title: "ZyloPrep (one-click)",
        duration: "~3 min",
        description:
          "Auto-orient with validated sports guard material profiles. Supports placed on internal surfaces.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~35–45 min",
        description:
          "Print + wash + cure in one automated device run. Multiple guards in a single build.",
      },
      {
        title: "Finish & Deliver",
        duration: "~5–10 min",
        description:
          "Remove supports, polish edges, verify fit and logo depth. Deliver same visit.",
      },
    ],
    totalTime: "~55–70 minutes",
    whySection: {
      heading: "Customization is what sells sports guards—but it shouldn't depend on handwork.",
      body: "Traditional thermoformed sports guards make logos and colors an inconsistent craft step—adding chair time and variability every time a patient wants personalization. Digital production with Zylo makes customization repeatable: ZyloCAD embeds logos and color elements in the design file, ZyloPrep handles file prep in one click, and ZyloDent runs the automated production cycle. Your assistant can produce fully custom guards consistently without it being a 'one-person art project.'",
    },
    ctaLabel: "Request a Sample Sports Guard",
    materials: [
      {
        name: "Pro3dure GR-10 Guard",
        tag: "Validated",
        description: "Biocompatible sports guard resin with validated mechanical performance.",
      },
      {
        name: "Keystone KeySplint Flex",
        tag: "Validated",
        description: "Flexible guard material validated for sports guard indication and impact loading.",
      },
      {
        name: "BEGO VarseoSmile Guard",
        tag: "Validated",
        description: "Guard resin validated for sports protection with documented durability testing.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Configure parameters for additional guard materials and custom color workflows.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 25,
      labCostPerUnit: 180,
      zyloCostPerUnit: 25,
      unitLabel: "guards",
    },
  },

  {
    slug: "surgical-guide",
    name: "Surgical Guide",
    tagline: "Predictable guided implant surgery with a repeatable in-house production workflow.",
    description:
      "Deliver accurate, sterilizable surgical guides in-house: planning + guide design + one-click file prep + automated print–wash–cure. So your team can produce consistent guides for full-arch and quadrant cases without becoming 3D printing experts.",
    proof: [
      {
        title: "Accuracy you can trust",
        description: "Standardize drill position and angulation for full-arch and quadrant cases.",
      },
      {
        title: "Faster appointments",
        description: "In-house guide production eliminates lab lead times and last-minute reschedules.",
      },
      {
        title: "Repeatable workflow",
        description: "From planning to sterilization—a standard process any trained assistant can run.",
      },
    ],
    workflowSteps: [
      {
        title: "Planning + Design",
        duration: "~15–20 min",
        description:
          "Import CBCT + scan → plan implant positions → AI-assisted guide design with sleeve integration.",
      },
      {
        title: "ZyloPrep (one-click)",
        duration: "~5 min",
        description:
          "Auto-orient guide with standardized surgical guide print settings. Validated biocompatible resin profiles applied.",
      },
      {
        title: "ZyloDent (All-in-one)",
        duration: "~35–50 min",
        description:
          "Print + wash + cure in one automated run with validated post-processing for biocompatible materials.",
      },
      {
        title: "Sleeves & Sterilize",
        duration: "~15–20 min",
        description:
          "Insert drill sleeves, QC fit on model, then autoclave sterilize per material IFU before surgery.",
      },
    ],
    totalTime: "~70–95 minutes (same-day production possible)",
    whySection: {
      heading: "A guide is only valuable if it's repeatable—not dependent on one 'printing champion.'",
      body: "Surgical guides often fail operationally when the production chain is scattered across too many devices and too much tribal knowledge. A separate planning tool, slicer, printer, washer, and curing unit—each requiring its own expert—leads to inconsistent outcomes across shifts and late cancellations when the key person is unavailable. Zylo compresses the chain: ZyloCAD or cloud design for reliable guide output, ZyloPrep for one-click standardized file prep, and ZyloDent for automated print–wash–cure. The result is a consistent process any trained assistant can execute.",
    },
    ctaLabel: "Request a Sample Surgical Guide",
    materials: [
      {
        name: "BEGO VarseoWax Surgical Guide",
        tag: "Validated",
        description: "Biocompatible surgical guide resin validated for wash, cure, and autoclave sterilization.",
      },
      {
        name: "Pro3dure GR-10 Guide",
        tag: "Validated",
        description: "Surgical guide resin with documented biocompatibility and accuracy validation.",
      },
      {
        name: "Sarameco GuideTec",
        tag: "Validated",
        description: "Validated guide material with sterilization protocol and IFU documentation.",
      },
      {
        name: "Open system mode",
        tag: "Configurable",
        description: "Configure parameters for additional biocompatible guide resins.",
      },
    ],
    roiDefaults: {
      casesPerMonth: 20,
      labCostPerUnit: 250,
      zyloCostPerUnit: 40,
      unitLabel: "guides",
    },
  },
];

export function getIndicationBySlug(slug: string): IndicationData | undefined {
  return indicationsData.find((ind) => ind.slug === slug);
}
