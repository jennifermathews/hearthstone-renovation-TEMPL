import { Box, SimpleGrid, VStack, HStack, Heading, Text, Button, Icon, Flex, Card, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuArrowRight, LuCircleCheck, LuClock, LuPhone, LuStar } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import type { ReactNode } from "react"

interface ServiceDetailProps {
  title: string
  description: string
  image?: string
  items: string[]
  timeline: string
  features?: { title: string; description: string }[]
  materials?: { category: string; items: string[] }[]
  testimonial?: { name: string; text: string; location: string }
  faqItems?: { question: string; answer: string }[]
  children?: ReactNode
}

export default function ServiceDetailLayout({
  title,
  description,
  image,
  items,
  timeline,
  features,
  materials,
  testimonial,
  faqItems,
}: ServiceDetailProps) {
  return (
    <Box>
      <PageHero title={title} description={description} image={image} />

      <Section>
        <Flex direction={{ base: "column", lg: "row" }} gap="10">
          <Box flex="1">
            <SectionHeader title="What's Included" align="start" />
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3">
              {items.map((item) => (
                <HStack key={item} gap="3" align="start">
                  <Icon as={LuCircleCheck} color="green.500" boxSize="4" mt="0.5" flexShrink={0} />
                  <Text fontSize="sm">{item}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </Box>
          <Box w={{ base: "full", lg: "xs" }}>
            <Card.Root variant="outline" position="sticky" top="24">
              <Card.Body p="6">
                <VStack gap="4" align="start">
                  <Heading as="h3" fontSize="lg">Project Details</Heading>
                  <HStack gap="2">
                    <Icon as={LuClock} color="brand.fg" />
                    <Text fontSize="sm">Typical Timeline: {timeline}</Text>
                  </HStack>
                  <HStack gap="2">
                    <Icon as={LuCircleCheck} color="green.500" />
                    <Text fontSize="sm">Free In-Home Estimate</Text>
                  </HStack>
                  <HStack gap="2">
                    <Icon as={LuCircleCheck} color="green.500" />
                    <Text fontSize="sm">2-Year Workmanship Warranty</Text>
                  </HStack>
                  <HStack gap="2">
                    <Icon as={LuCircleCheck} color="green.500" />
                    <Text fontSize="sm">Financing Available</Text>
                  </HStack>
                  <Button as={Link} to="/contact" colorPalette="brand" w="full" size="lg" mt="2">
                    Get Free Estimate
                  </Button>
                  <Button as="a" href="tel:(469) 555-8472" variant="outline" w="full" size="md">
                    <LuPhone /> (469) 555-8472
                  </Button>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Box>
        </Flex>
      </Section>

      {features && (
        <Section bg="bg.subtle">
          <SectionHeader title="Why Choose Us for This Project" />
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="6">
            {features.map((f, i) => (
              <VStack key={i} gap="2" p="5" bg="bg" rounded="xl" border="1px solid" borderColor="border.subtle" align="start">
                <Badge colorPalette="brand" variant="subtle">{String(i + 1).padStart(2, "0")}</Badge>
                <Text fontWeight="semibold" fontSize="sm">{f.title}</Text>
                <Text fontSize="xs" color="fg.muted">{f.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Section>
      )}

      {materials && (
        <Section>
          <SectionHeader title="Materials & Selections" description="We source premium materials from trusted manufacturers." />
          <SimpleGrid columns={{ base: 1, sm: 2, md: materials.length }} gap="6" maxW="4xl" mx="auto">
            {materials.map((m) => (
              <VStack key={m.category} align="start" gap="3" p="5" bg="bg.subtle" rounded="lg">
                <Text fontWeight="semibold" fontSize="sm">{m.category}</Text>
                {m.items.map((item) => (
                  <HStack key={item} gap="2">
                    <Icon as={LuCircleCheck} color="brand.fg" boxSize="3" />
                    <Text fontSize="xs" color="fg.muted">{item}</Text>
                  </HStack>
                ))}
              </VStack>
            ))}
          </SimpleGrid>
        </Section>
      )}

      {testimonial && (
        <Section bg="bg.subtle">
          <Box maxW="2xl" mx="auto" textAlign="center">
            <HStack gap="1" justify="center" mb="4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} as={LuStar} color="yellow.500" boxSize="5" fill="currentColor" />
              ))}
            </HStack>
            <Text fontSize="lg" fontStyle="italic" lineHeight="tall" mb="4">
              "{testimonial.text}"
            </Text>
            <Text fontWeight="semibold">{testimonial.name}</Text>
            <Text fontSize="sm" color="fg.muted">{testimonial.location}</Text>
          </Box>
        </Section>
      )}

      {faqItems && (
        <Section>
          <SectionHeader title="Frequently Asked Questions" />
          <VStack gap="4" maxW="3xl" mx="auto" align="stretch">
            {faqItems.map((faq, i) => (
              <Box key={i} p="5" bg="bg.subtle" rounded="lg">
                <Text fontWeight="semibold" fontSize="sm" mb="2">{faq.question}</Text>
                <Text fontSize="sm" color="fg.muted">{faq.answer}</Text>
              </Box>
            ))}
          </VStack>
        </Section>
      )}

      <Section bg="brand.subtle">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="6">
          <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "start" }}>
            <Heading as="h3" fontSize="2xl" fontFamily="'Playfair Display', serif">
              Ready to Get Started?
            </Heading>
            <Text color="fg.muted">Schedule your free consultation today.</Text>
          </VStack>
          <Flex gap="4">
            <Button as={Link} to="/contact" colorPalette="brand" size="lg">
              Get Free Estimate <LuArrowRight />
            </Button>
          </Flex>
        </Flex>
      </Section>
    </Box>
  )
}
