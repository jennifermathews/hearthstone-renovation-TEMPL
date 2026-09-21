import { Box, SimpleGrid, VStack, HStack, Heading, Text, Button, Flex, Icon, Card } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuArrowRight, LuPhone, LuMessageSquare, LuClipboardCheck, LuCalendar } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { processSteps } from "@/data/content"

export default function ProcessPage() {
  return (
    <Box>
      <PageHero
        title="Our Remodeling Process"
        description="A proven 10-step approach that ensures every project is delivered on time, on budget, and beyond expectations. No surprises — just great results."
        image="/hero-wholehome.webp"
      />
      <TimelineSection />
      <WhatToExpect />
      <TimelineEstimates />
      <CommunicationSection />
      <CTASection />
    </Box>
  )
}

function TimelineSection() {
  return (
    <Section>
      <SectionHeader
        label="Step by Step"
        title="From Your First Call to Final Walkthrough"
        description="We've refined our process over 1,450+ projects to deliver a smooth, organized experience."
      />
      <VStack gap="0" align="stretch" maxW="3xl" mx="auto" position="relative">
        <Box
          position="absolute"
          left={{ base: "5", md: "6" }}
          top="0"
          bottom="0"
          w="2px"
          bg="brand.muted"
        />
        {processSteps.map((step, i) => (
          <Flex key={step.step} gap={{ base: "4", md: "6" }} py="5" position="relative">
            <Flex
              w={{ base: "10", md: "12" }}
              h={{ base: "10", md: "12" }}
              align="center"
              justify="center"
              rounded="full"
              bg={i < 3 ? "brand.solid" : "brand.muted"}
              color={i < 3 ? "white" : "brand.fg"}
              fontWeight="bold"
              fontSize="sm"
              flexShrink={0}
              position="relative"
              zIndex="1"
              border="3px solid"
              borderColor="bg"
            >
              {step.step}
            </Flex>
            <VStack align="start" gap="1" pt="1.5">
              <Heading as="h3" fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                {step.title}
              </Heading>
              <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                {step.description}
              </Text>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Section>
  )
}

function WhatToExpect() {
  const expectations = [
    { title: "Clear Communication", description: "Your project manager provides regular updates via your preferred method — phone, email, or text.", icon: LuMessageSquare },
    { title: "Daily Cleanup", description: "Our crews clean up at the end of every workday. Dust barriers and floor protection are always in place.", icon: LuClipboardCheck },
    { title: "Scheduled Work Hours", description: "Work typically occurs Monday-Friday, 8am-5pm. We respect your schedule and your neighbors.", icon: LuCalendar },
    { title: "Quality Inspections", description: "Multiple quality checkpoints throughout the project ensure everything meets our high standards.", icon: LuClipboardCheck },
  ]

  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="During Construction"
        title="What to Expect"
        description="We minimize disruption and keep you informed every step of the way."
      />
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6" maxW="4xl" mx="auto">
        {expectations.map((item) => (
          <Card.Root key={item.title} variant="outline">
            <Card.Body p="5">
              <HStack gap="4" align="start">
                <Flex w="10" h="10" align="center" justify="center" rounded="lg" bg="brand.muted" flexShrink={0}>
                  <Icon as={item.icon} boxSize="5" color="brand.fg" />
                </Flex>
                <VStack align="start" gap="1">
                  <Text fontWeight="semibold" fontSize="sm">{item.title}</Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="tall">{item.description}</Text>
                </VStack>
              </HStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function TimelineEstimates() {
  const timelines = [
    { project: "Kitchen Remodel", duration: "6–10 weeks" },
    { project: "Bathroom Remodel", duration: "3–5 weeks" },
    { project: "Whole Home Renovation", duration: "8–16 weeks" },
    { project: "Room Addition", duration: "10–20 weeks" },
    { project: "Outdoor Living", duration: "4–10 weeks" },
    { project: "Interior Upgrades", duration: "1–4 weeks" },
  ]

  return (
    <Section>
      <SectionHeader
        label="Timelines"
        title="How Long Will It Take?"
        description="Every project is unique, but here are typical timeframes for common renovations."
      />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4" maxW="4xl" mx="auto">
        {timelines.map((t) => (
          <HStack key={t.project} justify="space-between" p="4" bg="bg.subtle" rounded="lg" border="1px solid" borderColor="border.subtle">
            <Text fontSize="sm" fontWeight="medium">{t.project}</Text>
            <Text fontSize="sm" color="brand.fg" fontWeight="bold">{t.duration}</Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function CommunicationSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Stay Informed"
        title="Our Communication Commitment"
      />
      <VStack gap="4" maxW="3xl" mx="auto" align="stretch">
        {[
          "Dedicated project manager as your single point of contact",
          "Weekly progress reports with photos",
          "Immediate notification of any schedule changes",
          "Responsive to calls, texts, and emails within same business day",
          "Pre-construction meeting to review timeline and expectations",
          "Final walkthrough with detailed punch list review",
        ].map((item) => (
          <HStack key={item} gap="3" p="3" bg="bg" rounded="md">
            <Icon as={LuArrowRight} color="brand.fg" boxSize="4" flexShrink={0} />
            <Text fontSize="sm">{item}</Text>
          </HStack>
        ))}
      </VStack>
    </Section>
  )
}

function CTASection() {
  return (
    <Section bg="brand.subtle">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="6">
        <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "start" }}>
          <Heading as="h3" fontSize="2xl" fontFamily="'Playfair Display', serif">
            Ready to Begin?
          </Heading>
          <Text color="fg.muted">The first step is a free consultation. Let's discuss your vision.</Text>
        </VStack>
        <Flex gap="4" flexWrap="wrap">
          <Button as={Link} to="/contact" colorPalette="brand" size="lg">
            Schedule Consultation <LuArrowRight />
          </Button>
          <Button as="a" href="tel:(469) 555-8472" variant="outline" size="lg">
            <LuPhone /> Call Now
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
