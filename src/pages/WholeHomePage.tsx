import ServiceDetailLayout from "@/components/ServiceDetailLayout"
import { services, testimonials } from "@/data/content"

export default function WholeHomePage() {
  const service = services.find((s) => s.id === "whole-home")!
  return (
    <ServiceDetailLayout
      title="Whole Home Remodeling"
      description="Reimagine your entire living space with a comprehensive renovation. We handle everything from structural modifications and layout redesigns to finishing touches that make your home feel brand new."
      image="/hero-wholehome.webp"
      items={service.items}
      timeline={service.timeline}
      features={[
        { title: "Comprehensive Planning", description: "We coordinate all trades and phases to minimize disruption and keep your project on schedule." },
        { title: "Structural Expertise", description: "Licensed engineers assess and execute load-bearing changes, wall removals, and layout modifications." },
        { title: "Design Cohesion", description: "Our design team ensures a unified aesthetic throughout your entire home." },
        { title: "Phased Approach", description: "We can phase work strategically so you remain comfortable in your home during renovation." },
        { title: "Energy Efficiency", description: "We incorporate insulation, windows, and systems upgrades for improved comfort and savings." },
        { title: "Smart Home Integration", description: "Modern wiring, lighting controls, and smart home pre-wiring available." },
      ]}
      testimonial={testimonials[2]}
      faqItems={[
        { question: "Can we live in the house during a whole-home remodel?", answer: "Often yes, especially with a phased approach. We discuss logistics during planning to minimize disruption." },
        { question: "How do you handle structural changes?", answer: "We work with licensed structural engineers for any load-bearing modifications, ensuring safety and code compliance." },
        { question: "What's included in a whole-home renovation?", answer: "Everything from flooring and paint to electrical, plumbing, HVAC, drywall, trim, doors, and lighting." },
        { question: "How long does a whole-home remodel take?", answer: "Typically 8-16 weeks depending on the scope. We provide a detailed timeline during the proposal phase." },
      ]}
    />
  )
}
