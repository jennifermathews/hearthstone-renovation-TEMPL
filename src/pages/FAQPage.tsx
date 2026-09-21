import { Box, VStack, Heading, Text, Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Accordion } from "@chakra-ui/react"
import { LuArrowRight, LuPhone } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { faqs } from "@/data/content"

const additionalFaqs = [
  { question: "What areas do you serve?", answer: "We serve Plano, Frisco, McKinney, Allen, Richardson, Carrollton, Prosper, Celina, The Colony, Murphy, Parker, Lucas, and North Dallas." },
  { question: "Do you provide 3D renderings?", answer: "Yes! Our design team creates detailed 3D concepts so you can visualize your space before construction begins." },
  { question: "What happens if something goes wrong after the project?", answer: "Our 2-year workmanship warranty covers any defects in our work. Simply call us and we'll address the issue promptly at no cost to you." },
  { question: "How do I choose materials and finishes?", answer: "Our Design Director guides you through selections. We have relationships with showrooms and can arrange visits to see materials in person." },
  { question: "Do you work with HOAs?", answer: "Yes, we handle HOA approvals and ensure all work complies with your community's architectural guidelines." },
  { question: "Can I see examples of your past work?", answer: "Absolutely! Visit our Gallery page or ask us for references from clients with similar projects in your area." },
]

const allFaqs = [...faqs, ...additionalFaqs]

const categories = [
  { label: "General", indices: [0, 1, 2, 3] },
  { label: "Timeline & Process", indices: [4, 5, 10, 11] },
  { label: "Pricing & Financing", indices: [7, 8, 13] },
  { label: "Design & Materials", indices: [3, 12, 14] },
  { label: "After the Project", indices: [8, 9, 11] },
]

export default function FAQPage() {
  return (
    <Box>
      <PageHero
        title="Frequently Asked Questions"
        description="Find answers to the most common questions homeowners ask about our remodeling services, process, and what to expect."
      />
      <AllFAQs />
      <StillHaveQuestions />
    </Box>
  )
}

function AllFAQs() {
  return (
    <Section>
      <SectionHeader
        label="Questions & Answers"
        title="Everything You Need to Know"
      />
      <Box maxW="3xl" mx="auto">
        <Accordion.Root multiple>
          {allFaqs.map((faq, i) => (
            <Accordion.Item key={i} value={`faq-${i}`} borderBottom="1px solid" borderColor="border.subtle">
              <Accordion.ItemTrigger cursor="pointer" py="5">
                <Text flex="1" textAlign="start" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
                  {faq.question}
                </Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Text fontSize="sm" color="fg.muted" lineHeight="tall" pb="4">
                    {faq.answer}
                  </Text>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </Section>
  )
}

function StillHaveQuestions() {
  return (
    <Section bg="brand.subtle">
      <VStack gap="6" textAlign="center">
        <Heading as="h2" fontSize="2xl" fontFamily="'Playfair Display', serif">
          Still Have Questions?
        </Heading>
        <Text color="fg.muted" maxW="md">
          We're happy to help! Reach out and our team will get back to you within one business day.
        </Text>
        <Flex gap="4" flexWrap="wrap" justify="center">
          <Button as={Link} to="/contact" colorPalette="brand" size="lg">
            Contact Us <LuArrowRight />
          </Button>
          <Button as="a" href="tel:(469) 555-8472" variant="outline" size="lg">
            <LuPhone /> (469) 555-8472
          </Button>
        </Flex>
      </VStack>
    </Section>
  )
}
