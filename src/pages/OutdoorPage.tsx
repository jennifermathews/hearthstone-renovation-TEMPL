import ServiceDetailLayout from "@/components/ServiceDetailLayout"
import { services } from "@/data/content"

export default function OutdoorPage() {
  const service = services.find((s) => s.id === "outdoor")!
  return (
    <ServiceDetailLayout
      title="Outdoor Living"
      description="Extend your lifestyle to the outdoors with custom patios, outdoor kitchens, pergolas, and entertaining spaces designed for the Texas climate. Make every square foot of your property work for your family."
      image="/hero-outdoor.webp"
      items={service.items}
      timeline={service.timeline}
      features={[
        { title: "Texas Climate Design", description: "We design for hot summers with shade structures, ventilation, and durable materials." },
        { title: "Outdoor Kitchens", description: "Full-featured cooking areas with grills, counters, sinks, and storage built to last." },
        { title: "Covered Structures", description: "Covered patios and pergolas that provide shade and protection from the elements." },
        { title: "Lighting & Electrical", description: "Landscape lighting and outdoor electrical for year-round entertaining." },
        { title: "Durable Materials", description: "Weather-resistant materials selected for long life in North Texas conditions." },
        { title: "Drainage Planning", description: "Proper grading and drainage to protect your investment and foundation." },
      ]}
      faqItems={[
        { question: "What materials work best for Texas outdoor spaces?", answer: "We recommend travertine, flagstone, or stamped concrete for patios, and stainless steel for outdoor kitchen components. All materials are selected for heat and weather resistance." },
        { question: "Do outdoor projects need permits?", answer: "Covered structures and electrical work typically require permits. We handle all permitting for you." },
        { question: "Can you add an outdoor fireplace?", answer: "Yes! Outdoor fireplaces and fire pits are popular additions that extend the usability of your space into cooler months." },
        { question: "How do you handle drainage?", answer: "We carefully plan grading and drainage to direct water away from your home's foundation and prevent pooling." },
      ]}
    />
  )
}
