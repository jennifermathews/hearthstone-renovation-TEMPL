import ServiceDetailLayout from "@/components/ServiceDetailLayout"
import { services, testimonials } from "@/data/content"

export default function BathroomPage() {
  const service = services.find((s) => s.id === "bathroom")!
  return (
    <ServiceDetailLayout
      title="Bathroom Remodeling"
      description="Create your own personal retreat with a spa-inspired bathroom renovation. From luxurious walk-in showers to heated floors, we craft bathrooms that blend relaxation with everyday functionality."
      image="/hero-bathroom.webp"
      items={service.items}
      timeline={service.timeline}
      features={[
        { title: "Spa-Inspired Design", description: "We design bathrooms that feel like a daily escape with thoughtful lighting, textures, and layouts." },
        { title: "Waterproofing Expertise", description: "Proper waterproofing and drainage prevent costly issues and protect your investment." },
        { title: "Accessibility Options", description: "We offer aging-in-place modifications including grab bars, bench seating, and barrier-free entries." },
        { title: "Custom Tile Work", description: "Our tile specialists create stunning patterns and installations that elevate your space." },
        { title: "Efficient Plumbing", description: "Licensed plumbers ensure proper water pressure, drainage, and fixture placement." },
        { title: "Ventilation & Lighting", description: "Proper ventilation prevents moisture issues while layered lighting creates ambiance." },
      ]}
      materials={[
        { category: "Tile", items: ["Porcelain", "Ceramic", "Natural Stone", "Glass Mosaic", "Large Format"] },
        { category: "Vanities", items: ["Custom Built", "Floating", "Double Sink", "Single with Storage"] },
        { category: "Fixtures", items: ["Kohler", "Delta", "Moen", "Brizo", "Hansgrohe"] },
      ]}
      testimonial={testimonials[1]}
      faqItems={[
        { question: "How long does a bathroom remodel take?", answer: "Standard bathrooms take 3-5 weeks. Master bath renovations with structural changes may take 5-7 weeks." },
        { question: "Can you make my bathroom accessible?", answer: "Yes! We specialize in aging-in-place modifications including curbless showers, grab bars, and wider doorways." },
        { question: "Do you handle plumbing relocations?", answer: "Absolutely. Our licensed plumbers can relocate fixtures to optimize your new layout." },
        { question: "What about ventilation?", answer: "We always ensure proper ventilation to prevent mold and moisture damage, upgrading exhaust fans as needed." },
      ]}
    />
  )
}
