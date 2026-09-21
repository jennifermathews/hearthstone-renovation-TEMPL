import ServiceDetailLayout from "@/components/ServiceDetailLayout"
import { services, testimonials } from "@/data/content"

export default function InteriorPage() {
  const service = services.find((s) => s.id === "interior")!
  return (
    <ServiceDetailLayout
      title="Interior Upgrades"
      description="Elevate your home with premium flooring, custom millwork, fireplace renovations, and architectural details that add character and value. Sometimes the biggest transformations come from focused upgrades."
      image="/hero-interior.webp"
      items={service.items}
      timeline={service.timeline}
      features={[
        { title: "Flooring Expertise", description: "Expert installation of hardwood, luxury vinyl plank, tile, and engineered flooring." },
        { title: "Custom Millwork", description: "Handcrafted built-ins, shelving, crown molding, and trim carpentry that adds character." },
        { title: "Fireplace Renovation", description: "Transform dated fireplaces into stunning focal points with stone, tile, or modern surrounds." },
        { title: "Accent Features", description: "Shiplap walls, wainscoting, board and batten, and other architectural accents." },
        { title: "Lighting Design", description: "Recessed lighting, pendant fixtures, and under-cabinet lighting that transforms ambiance." },
        { title: "Paint & Color", description: "Professional color consultation and expert paint application for a flawless finish." },
      ]}
      materials={[
        { category: "Flooring", items: ["Engineered Hardwood", "Solid Hardwood", "Luxury Vinyl Plank", "Porcelain Tile", "Ceramic Tile"] },
        { category: "Millwork", items: ["White Oak", "Maple", "Walnut", "Painted MDF", "Custom Species"] },
      ]}
      testimonial={testimonials[4]}
      faqItems={[
        { question: "How long does flooring installation take?", answer: "Most whole-home flooring projects take 3-7 days depending on square footage, material type, and subfloor preparation needed." },
        { question: "Do you move furniture?", answer: "Yes, we move and replace furniture as part of flooring installations. We protect your belongings throughout." },
        { question: "Can you match existing trim and molding?", answer: "Absolutely. We can match profiles and finishes to blend new millwork seamlessly with existing details." },
        { question: "What's the best flooring for Texas homes?", answer: "We often recommend engineered hardwood or LVP for main areas due to their stability in temperature fluctuations, with tile in wet areas." },
      ]}
    />
  )
}
