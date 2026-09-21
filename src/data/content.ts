export const company = {
  name: "Hearthstone Renovation Co.",
  legalName: "Hearthstone Renovation Company LLC",
  founded: 2011,
  tagline: "Beautiful Spaces. Built Around Your Life.",
  shortDescription:
    "Hearthstone Renovation Co. is a full-service residential remodeling company serving homeowners throughout North Texas. Specializing in kitchens, bathrooms, whole-home renovations, room additions, and custom interiors.",
  phone: "(469) 555-8472",
  email: "hello@hearthstonerenovation.com",
  website: "www.hearthstonerenovation.com",
  address: {
    street: "1840 Legacy Drive",
    suite: "Suite 210",
    city: "Plano",
    state: "TX",
    zip: "75023",
  },
  hours: [
    { day: "Monday", time: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
    { day: "Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "facebook.com/hearthstonerenovation",
    instagram: "@hearthstonerenovation",
    pinterest: "@hearthstonerenovation",
    houzz: "Hearthstone Renovation Co.",
    youtube: "Hearthstone Renovation",
  },
}

export const stats = [
  { label: "Years in Business", value: "14+" },
  { label: "Projects Completed", value: "1,450+" },
  { label: "Five-Star Reviews", value: "390+" },
  { label: "Year Warranty", value: "2" },
]

export const team = [
  {
    name: "Rowan Mercer",
    role: "Founder & President",
    experience: "24 years",
    specialties: ["Whole-home renovations", "Luxury remodeling", "Construction management"],
    bio: "Rowan founded Hearthstone Renovation after spending over a decade managing custom residential construction projects throughout North Texas. He is known for meticulous planning and ensuring every project stays organized from demolition to final walkthrough.",
    initials: "RM",
    image: "/team-rowan.webp",
  },
  {
    name: "Elara Winslow",
    role: "Design Director",
    experience: "17 years",
    specialties: ["Interior design", "Kitchen planning", "Material selection", "Color consultation"],
    bio: "Elara works closely with homeowners to translate ideas into practical, elegant living spaces while balancing aesthetics, functionality, and budget.",
    initials: "EW",
    image: "/team-elara.webp",
  },
  {
    name: "Corwin Hale",
    role: "Operations Manager",
    experience: "15 years",
    specialties: ["Scheduling", "Vendor coordination", "Permit management", "Quality control"],
    bio: "Corwin ensures every project runs efficiently by coordinating trades, managing timelines, and maintaining strict quality standards across all active jobs.",
    initials: "CH",
    image: "/team-corwin.webp",
  },
  {
    name: "Soren Whitlock",
    role: "Lead Project Manager",
    experience: "18 years",
    specialties: ["Client communication", "Daily project oversight", "Trade coordination", "Final inspections"],
    bio: "Soren is the daily point of contact for homeowners, keeping them informed with regular updates and ensuring the finished product exceeds expectations.",
    initials: "SW",
    image: "/team-soren.webp",
  },
]

export const services = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into the heart of your home with custom cabinetry, premium countertops, and thoughtful layouts.",
    items: [
      "Complete kitchen renovations",
      "Custom cabinetry",
      "Cabinet refacing",
      "Quartz countertops",
      "Granite countertops",
      "Marble countertops",
      "Kitchen islands",
      "Pantry construction",
      "Tile backsplashes",
      "Appliance installation",
      "Under-cabinet lighting",
      "Open-concept conversions",
    ],
    timeline: "6–10 weeks",
    image: "/hero-kitchen.webp",
  },
  {
    id: "bathroom",
    title: "Bathroom Remodeling",
    description: "Create a spa-like retreat with walk-in showers, freestanding tubs, and luxurious finishes.",
    items: [
      "Walk-in showers",
      "Freestanding tubs",
      "Double vanities",
      "Heated flooring",
      "Custom tile work",
      "Glass shower enclosures",
      "Accessible bathrooms",
      "Luxury master bathrooms",
      "Powder room remodels",
    ],
    timeline: "3–5 weeks",
    image: "/hero-bathroom.webp",
  },
  {
    id: "whole-home",
    title: "Whole Home Remodeling",
    description: "Reimagine your entire living space with comprehensive interior renovations and structural modifications.",
    items: [
      "Interior renovations",
      "Structural modifications",
      "Layout redesign",
      "Flooring replacement",
      "Lighting upgrades",
      "Drywall",
      "Painting",
      "Interior doors",
      "Trim carpentry",
      "Stair renovations",
    ],
    timeline: "8–16 weeks",
    image: "/hero-wholehome.webp",
  },
  {
    id: "additions",
    title: "Room Additions",
    description: "Expand your living space with expertly constructed additions that blend seamlessly with your existing home.",
    items: [
      "Family rooms",
      "Guest suites",
      "Home offices",
      "Sunrooms",
      "Second-story additions",
      "Bonus rooms",
      "In-law suites",
    ],
    timeline: "10–20 weeks",
    image: "/hero-additions.webp",
  },
  {
    id: "outdoor",
    title: "Outdoor Living",
    description: "Extend your lifestyle outdoors with covered patios, outdoor kitchens, and custom entertaining spaces.",
    items: [
      "Covered patios",
      "Outdoor kitchens",
      "Pergolas",
      "Decks",
      "Patio extensions",
      "Outdoor fireplaces",
    ],
    timeline: "4–10 weeks",
    image: "/hero-outdoor.webp",
  },
  {
    id: "interior",
    title: "Interior Upgrades",
    description: "Elevate your home with premium flooring, custom millwork, and refined architectural details.",
    items: [
      "Flooring installation (Hardwood, LVP, Tile)",
      "Fireplace remodeling",
      "Accent walls",
      "Built-in shelving",
      "Crown molding",
      "Custom millwork",
    ],
    timeline: "1–4 weeks",
    image: "/hero-interior.webp",
  },
]

export const testimonials = [
  {
    name: "Meredith Albright",
    location: "Frisco",
    text: "Hearthstone transformed our outdated kitchen into the centerpiece of our home. Every member of the team was professional, organized, and respectful.",
    rating: 5,
    service: "Kitchen Remodeling",
  },
  {
    name: "Nolan Beckett",
    location: "Plano",
    text: "Our bathroom remodel exceeded expectations. The craftsmanship was exceptional, and communication was outstanding throughout the project.",
    rating: 5,
    service: "Bathroom Remodeling",
  },
  {
    name: "Giselle Rowan",
    location: "McKinney",
    text: "We remodeled almost our entire first floor. The schedule stayed on track, and every detail was handled with care.",
    rating: 5,
    service: "Whole Home Remodeling",
  },
  {
    name: "Darius Ellington",
    location: "Allen",
    text: "They listened carefully to our ideas and delivered exactly what we envisioned. Highly recommended.",
    rating: 5,
    service: "Room Addition",
  },
  {
    name: "Sabine Holloway",
    location: "Richardson",
    text: "The design guidance made choosing finishes so much easier. The finished space looks amazing.",
    rating: 5,
    service: "Interior Upgrades",
  },
]

export const serviceAreas = [
  "Plano",
  "Frisco",
  "McKinney",
  "Allen",
  "Richardson",
  "Carrollton",
  "Prosper",
  "Celina",
  "The Colony",
  "Murphy",
  "Parker",
  "Lucas",
  "North Dallas",
]

export const processSteps = [
  { step: 1, title: "Initial Consultation", description: "We discuss your vision, needs, and budget during a free phone or in-office consultation." },
  { step: 2, title: "Home Visit", description: "Our team visits your home to assess the space, take measurements, and understand the scope." },
  { step: 3, title: "Design Planning", description: "Our design team creates detailed plans and 3D concepts tailored to your style and needs." },
  { step: 4, title: "Material Selection", description: "We guide you through selecting countertops, cabinetry, flooring, fixtures, and finishes." },
  { step: 5, title: "Detailed Proposal", description: "You receive a comprehensive, fixed-price proposal with clear timelines and specifications." },
  { step: 6, title: "Contract & Permits", description: "Once approved, we handle all permits, HOA approvals, and prepare for construction." },
  { step: 7, title: "Construction", description: "Our skilled crews bring your vision to life with daily site cleanup and quality workmanship." },
  { step: 8, title: "Weekly Updates", description: "Your dedicated project manager provides regular progress updates and photos." },
  { step: 9, title: "Final Walkthrough", description: "We walk through every detail together to ensure everything meets your expectations." },
  { step: 10, title: "Warranty Support", description: "Enjoy peace of mind with our 2-year workmanship warranty and ongoing support." },
]

export const faqs = [
  { question: "Do you provide free estimates?", answer: "Yes! We offer free in-home consultations and detailed written estimates for all projects." },
  { question: "Do you handle permits?", answer: "Absolutely. We manage all permit applications, inspections, and HOA approvals on your behalf." },
  { question: "Can we live in the house during remodeling?", answer: "Usually yes, depending on project scope. We take measures to minimize disruption and contain dust and debris." },
  { question: "Do you help with design?", answer: "Yes, in-house design consultation is included with every project. Our Design Director works closely with you on layouts, materials, and finishes." },
  { question: "How long does a kitchen remodel take?", answer: "Typically 6–10 weeks depending on scope, material availability, and structural changes required." },
  { question: "How long does a bathroom remodel take?", answer: "Typically 3–5 weeks for a standard bathroom. Larger master bath renovations may take longer." },
  { question: "Are you licensed and insured?", answer: "Yes, we are fully licensed and carry comprehensive general liability and workers' compensation insurance." },
  { question: "Do you offer financing?", answer: "Yes! We partner with trusted lenders to offer flexible financing options including 12-month promotional rates." },
  { question: "Do you provide warranties?", answer: "We provide a two-year workmanship warranty plus all applicable manufacturer warranties on materials and fixtures." },
]

export const whyChooseUs = [
  { title: "Family-Owned", description: "Texas-based family business since 2011" },
  { title: "Transparent Pricing", description: "Detailed estimates with no hidden fees" },
  { title: "Dedicated Project Manager", description: "Single point of contact throughout" },
  { title: "Licensed Partners", description: "All trade partners are licensed and vetted" },
  { title: "Daily Cleanup", description: "Job sites cleaned and secured every day" },
  { title: "Premium Materials", description: "Top brands and quality craftsmanship" },
  { title: "Clear Communication", description: "Weekly updates with photos and reports" },
  { title: "2-Year Warranty", description: "Full workmanship warranty for peace of mind" },
]

export const awards = [
  { year: "2024", title: "Best Residential Remodeler", org: "North Texas Home Design Awards" },
  { year: "2023", title: "Customer Choice Award", org: "Remodel Excellence" },
  { year: "2022", title: "Best Kitchen Renovation", org: "Dallas Design Guild" },
]

export const certifications = [
  "National Association of Home Builders (NAHB)",
  "National Kitchen & Bath Association (NKBA)",
  "Better Business Bureau Accredited",
  "EPA Lead-Safe Certified Firm",
]

export const brands = {
  cabinetry: ["KraftMaid", "Wellborn", "Medallion"],
  countertops: ["Caesarstone", "Cambria", "Silestone"],
  flooring: ["Shaw Floors", "Mohawk", "COREtec"],
  fixtures: ["Delta", "Kohler", "Moen", "Brizo"],
  appliances: ["Bosch", "KitchenAid", "GE Profile", "Thermador"],
}

export const designStyles = [
  "Modern",
  "Transitional",
  "Contemporary",
  "Traditional",
  "Farmhouse",
  "Modern Farmhouse",
  "Craftsman",
  "Scandinavian",
  "Industrial",
  "Mediterranean",
]
