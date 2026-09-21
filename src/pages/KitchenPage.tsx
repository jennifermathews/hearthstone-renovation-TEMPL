import ServiceDetailLayout from "@/components/ServiceDetailLayout"
import { services, testimonials } from "@/data/content"

export default function KitchenPage() {
  const service = services.find((s) => s.id === "kitchen")!
  return (
    <ServiceDetailLayout
      title="Kitchen Remodeling"
      description="Transform your kitchen into the heart of your home. We specialize in complete kitchen renovations, from custom cabinetry and premium countertops to open-concept conversions that bring families together."
      image="/hero-kitchen.webp"
      items={service.items}
      timeline={service.timeline}
      features={[
        { title: "Custom Design", description: "Our in-house design team creates a layout optimized for your cooking style and family needs." },
        { title: "Premium Materials", description: "We source countertops, cabinetry, and fixtures from industry-leading manufacturers." },
        { title: "Skilled Craftsmen", description: "Licensed installers with years of kitchen-specific experience ensure perfect results." },
        { title: "On-Time Delivery", description: "Detailed scheduling and proactive communication keep your project on track." },
        { title: "Minimal Disruption", description: "We set up temporary kitchen areas and clean up daily to reduce inconvenience." },
        { title: "Warranty Protection", description: "2-year workmanship warranty plus manufacturer warranties on all materials." },
      ]}
      materials={[
        { category: "Countertops", items: ["Quartz (Caesarstone, Cambria, Silestone)", "Granite", "Marble", "Butcher Block"] },
        { category: "Cabinetry", items: ["KraftMaid", "Wellborn", "Medallion", "Custom Built"] },
        { category: "Backsplashes", items: ["Subway Tile", "Glass Mosaic", "Natural Stone", "Handmade Tile"] },
        { category: "Fixtures", items: ["Delta", "Kohler", "Moen", "Brizo"] },
      ]}
      testimonial={testimonials[0]}
      faqItems={[
        { question: "How long does a kitchen remodel take?", answer: "Typically 6-10 weeks depending on scope. Simple refreshes can be faster, while complete gut renovations with structural changes may take 10-12 weeks." },
        { question: "Can I stay in my home during the remodel?", answer: "Yes! We set up dust barriers and temporary kitchen areas. Most homeowners stay comfortably in their homes throughout the project." },
        { question: "Do you handle appliance installation?", answer: "Absolutely. We coordinate delivery and installation of all new appliances as part of your project." },
        { question: "What's the average cost of a kitchen remodel?", answer: "Kitchen remodels in North Texas typically range from $35,000 to $150,000+ depending on size, materials, and scope. We provide detailed estimates during your free consultation." },
      ]}
    />
  )
}
