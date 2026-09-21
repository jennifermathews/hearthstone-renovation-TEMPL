import { Box, SimpleGrid, VStack, HStack, Heading, Text, Button, Flex, Icon, Card, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuArrowRight, LuCircleCheck, LuCreditCard, LuShieldCheck, LuPhone, LuCalendar, LuPercent } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { Accordion } from "@chakra-ui/react"

export default function FinancingPage() {
  return (
    <Box>
      <PageHero
        title="Financing Options"
        description="Don't let budget hold back your dream renovation. We partner with trusted lenders to make your remodeling project affordable with flexible payment plans."
      />
      <OverviewSection />
      <OptionsSection />
      <HowItWorks />
      <BenefitsSection />
      <FinancingFAQ />
      <CTASection />
    </Box>
  )
}

function OverviewSection() {
  return (
    <Section>
      <Flex direction={{ base: "column", md: "row" }} gap="10" align="center">
        <VStack align="start" gap="4" flex="1">
          <Text color="brand.fg" fontWeight="semibold" fontSize="sm">Affordable Remodeling</Text>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontFamily="'Playfair Display', serif">
            Make Your Dream Renovation a Reality
          </Heading>
          <Text color="fg.muted" lineHeight="tall">
            We believe every homeowner should have access to quality remodeling, regardless of whether they want to pay upfront or spread payments over time. Our lending partners offer competitive rates and flexible terms to fit your budget.
          </Text>
          <Text color="fg.muted" lineHeight="tall">
            Pre-qualification takes just minutes and won't affect your credit score. Our team can help you understand your options during your free consultation.
          </Text>
        </VStack>
        <Box
          w={{ base: "full", md: "sm" }}
          p="8"
          rounded="2xl"
          bg="brand.subtle"
          border="1px solid"
          borderColor="brand.emphasized"
        >
          <VStack gap="4" align="start">
            <Icon as={LuCreditCard} boxSize="8" color="brand.fg" />
            <Text fontWeight="bold" fontSize="lg">Quick Pre-Qualification</Text>
            <VStack gap="2" align="start">
              <HStack gap="2"><Icon as={LuCircleCheck} color="green.500" boxSize="4" /><Text fontSize="sm">No impact on credit score</Text></HStack>
              <HStack gap="2"><Icon as={LuCircleCheck} color="green.500" boxSize="4" /><Text fontSize="sm">Results in minutes</Text></HStack>
              <HStack gap="2"><Icon as={LuCircleCheck} color="green.500" boxSize="4" /><Text fontSize="sm">Multiple options available</Text></HStack>
            </VStack>
            <Button as={Link} to="/contact" colorPalette="brand" w="full" size="lg" mt="2">
              Get Started
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Section>
  )
}

function OptionsSection() {
  const options = [
    {
      title: "12-Month Promotional",
      description: "Same-as-cash financing for up to 12 months on qualifying projects.",
      features: ["0% interest if paid in full within 12 months", "Minimum monthly payments required", "Available on projects $5,000+"],
      icon: LuPercent,
    },
    {
      title: "Fixed Monthly Payments",
      description: "Predictable payments that fit your monthly budget over longer terms.",
      features: ["Terms from 24 to 144 months", "Fixed interest rate", "Predictable monthly payment"],
      icon: LuCalendar,
    },
    {
      title: "Home Improvement Loan",
      description: "Larger loan amounts for major renovations and additions.",
      features: ["Loan amounts up to $100,000+", "Competitive rates", "No home equity required"],
      icon: LuCreditCard,
    },
  ]

  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Options"
        title="Financing Plans"
        description="Choose the option that works best for your project and budget."
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        {options.map((opt) => (
          <Card.Root key={opt.title} variant="outline">
            <Card.Body p="6">
              <VStack align="start" gap="4">
                <Flex w="12" h="12" align="center" justify="center" rounded="lg" bg="brand.muted">
                  <Icon as={opt.icon} boxSize="6" color="brand.fg" />
                </Flex>
                <Heading as="h3" fontSize="md">{opt.title}</Heading>
                <Text fontSize="sm" color="fg.muted">{opt.description}</Text>
                <VStack align="start" gap="2">
                  {opt.features.map((f) => (
                    <HStack key={f} gap="2">
                      <Icon as={LuCircleCheck} color="green.500" boxSize="3.5" flexShrink={0} />
                      <Text fontSize="xs">{f}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function HowItWorks() {
  const steps = [
    { step: "1", title: "Discuss Your Project", description: "During your free consultation, mention you're interested in financing options." },
    { step: "2", title: "Get Pre-Qualified", description: "Quick application with our lending partners — no impact on your credit score." },
    { step: "3", title: "Choose Your Plan", description: "Review available options and select the terms that fit your budget." },
    { step: "4", title: "Start Your Project", description: "Once approved, we begin your renovation with payments starting after work begins." },
  ]

  return (
    <Section>
      <SectionHeader label="Process" title="How Financing Works" />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap="6" maxW="5xl" mx="auto">
        {steps.map((s) => (
          <VStack key={s.step} gap="3" textAlign="center" p="4">
            <Flex w="12" h="12" align="center" justify="center" rounded="full" bg="brand.muted" fontWeight="bold" color="brand.fg" fontSize="lg">
              {s.step}
            </Flex>
            <Text fontWeight="semibold" fontSize="sm">{s.title}</Text>
            <Text fontSize="xs" color="fg.muted">{s.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function BenefitsSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader title="Why Finance Your Renovation?" />
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4" maxW="3xl" mx="auto">
        {[
          "Preserve your savings for emergencies",
          "Start your renovation sooner",
          "Spread costs over manageable payments",
          "No prepayment penalties",
          "Potential tax benefits (consult your advisor)",
          "Increase your home value now",
        ].map((item) => (
          <HStack key={item} gap="3" p="4" bg="bg" rounded="lg" border="1px solid" borderColor="border.subtle">
            <Icon as={LuCircleCheck} color="green.500" boxSize="4" flexShrink={0} />
            <Text fontSize="sm">{item}</Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function FinancingFAQ() {
  const faqItems = [
    { question: "Will applying affect my credit score?", answer: "Pre-qualification uses a soft credit pull that does not affect your score. A hard pull only occurs if you choose to proceed with a formal application." },
    { question: "What credit score do I need?", answer: "Our lending partners work with a range of credit profiles. We encourage you to apply — you may qualify for better terms than expected." },
    { question: "Can I pay off early?", answer: "Yes! All our financing options have no prepayment penalties. Pay off your balance early without extra fees." },
    { question: "How much can I finance?", answer: "Financing is available for projects ranging from $5,000 to over $100,000, depending on the lending program and your qualifications." },
  ]

  return (
    <Section>
      <SectionHeader title="Financing FAQ" />
      <Box maxW="3xl" mx="auto">
        <Accordion.Root multiple>
          {faqItems.map((faq, i) => (
            <Accordion.Item key={i} value={`faq-${i}`} borderBottom="1px solid" borderColor="border.subtle">
              <Accordion.ItemTrigger cursor="pointer" py="5">
                <Text flex="1" textAlign="start" fontWeight="medium" fontSize="sm">
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

function CTASection() {
  return (
    <Section bg="brand.subtle">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="6">
        <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "start" }}>
          <Heading as="h3" fontSize="2xl" fontFamily="'Playfair Display', serif">
            Ready to Explore Your Options?
          </Heading>
          <Text color="fg.muted">Contact us to discuss financing during your free consultation.</Text>
        </VStack>
        <Flex gap="4" flexWrap="wrap">
          <Button as={Link} to="/contact" colorPalette="brand" size="lg">
            Get Free Estimate <LuArrowRight />
          </Button>
          <Button as="a" href="tel:(469) 555-8472" variant="outline" size="lg">
            <LuPhone /> Call Now
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
