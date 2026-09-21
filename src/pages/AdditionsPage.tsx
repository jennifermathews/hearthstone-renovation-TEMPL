import ServiceDetailLayout from "@/components/ServiceDetailLayout"
import { services, testimonials } from "@/data/content"

export default function AdditionsPage() {
  const service = services.find((s) => s.id === "additions")!
  return (
    <ServiceDetailLayout
      title="Room Additions"
      description="Expand your living space with expertly crafted additions that blend seamlessly with your existing home. Whether you need a home office, guest suite, or second-story addition, we build spaces that add both comfort and value."
      image="/hero-additions.webp"
      items={service.items}
      timeline={service.timeline}
      features={[
        { title: "Seamless Integration", description: "We match rooflines, siding, and architectural details so additions look original to the home." },
        { title: "Foundation Engineering", description: "Proper foundation work ensures structural integrity and prevents settling issues." },
        { title: "Permit Management", description: "We handle all zoning, permits, and inspections required for additions in your municipality." },
        { title: "HVAC Extension", description: "We properly extend heating and cooling systems to ensure comfort in new spaces." },
        { title: "Electrical & Plumbing", description: "Full utility extension with proper load calculations and code compliance." },
        { title: "Value Enhancement", description: "Strategic additions can significantly increase your home's market value." },
      ]}
      testimonial={testimonials[3]}
      faqItems={[
        { question: "Do room additions need permits?", answer: "Yes, all additions require building permits. We handle the entire permit process including plans, applications, and inspections." },
        { question: "Will an addition match my existing home?", answer: "Absolutely. We carefully match rooflines, exterior materials, and architectural details for a seamless look." },
        { question: "How much value does an addition add?", answer: "Well-planned additions typically return 50-75% of their cost in increased home value, while providing daily lifestyle benefits." },
        { question: "Can you add a second story?", answer: "Yes! We perform structural assessments and engineer second-story additions that are safe and beautifully integrated." },
      ]}
    />
  )
}
