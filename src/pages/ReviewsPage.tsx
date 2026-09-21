import { Box, SimpleGrid, VStack, HStack, Heading, Text, Button, Flex, Icon, Card, Badge } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuStar, LuArrowRight, LuQuote } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { testimonials, stats } from "@/data/content"

export default function ReviewsPage() {
  return (
    <Box>
      <PageHero
        title="Client Reviews"
        description="Don't just take our word for it. See what homeowners across North Texas have to say about working with Hearthstone Renovation."
        image="/hero-bathroom.webp"
      />
      <ReviewStats />
      <AllReviews />
      <CTASection />
    </Box>
  )
}

function ReviewStats() {
  return (
    <Section bg="bg.subtle">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" maxW="3xl" mx="auto">
        <VStack gap="2" p="6" bg="bg" rounded="xl" border="1px solid" borderColor="border.subtle" textAlign="center">
          <HStack gap="1" justify="center">
            {[1, 2, 3, 4, 5].map((i) => (
              <Icon key={i} as={LuStar} color="yellow.500" boxSize="5" fill="currentColor" />
            ))}
          </HStack>
          <Text fontWeight="bold" fontSize="lg">5.0 Average</Text>
          <Text fontSize="xs" color="fg.muted">Based on 390+ reviews</Text>
        </VStack>
        <VStack gap="2" p="6" bg="bg" rounded="xl" border="1px solid" borderColor="border.subtle" textAlign="center">
          <Text fontSize="4xl" fontWeight="bold" color="brand.fg" fontFamily="'Playfair Display', serif">390+</Text>
          <Text fontSize="xs" color="fg.muted">Five-Star Reviews</Text>
        </VStack>
        <VStack gap="2" p="6" bg="bg" rounded="xl" border="1px solid" borderColor="border.subtle" textAlign="center">
          <Text fontSize="4xl" fontWeight="bold" color="brand.fg" fontFamily="'Playfair Display', serif">1,450+</Text>
          <Text fontSize="xs" color="fg.muted">Projects Completed</Text>
        </VStack>
      </SimpleGrid>
    </Section>
  )
}

function AllReviews() {
  return (
    <Section>
      <SectionHeader
        label="Testimonials"
        title="Hear From Our Clients"
      />
      <VStack gap="6" maxW="4xl" mx="auto">
        {testimonials.map((t, i) => (
          <Card.Root key={i} variant="outline" w="full">
            <Card.Body p={{ base: "5", md: "8" }}>
              <Flex direction={{ base: "column", md: "row" }} gap="5">
                <Icon as={LuQuote} boxSize="8" color="brand.muted" flexShrink={0} />
                <VStack align="start" gap="4" flex="1">
                  <HStack gap="1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Icon key={j} as={LuStar} color="yellow.500" boxSize="4" fill="currentColor" />
                    ))}
                  </HStack>
                  <Text fontSize={{ base: "sm", md: "md" }} color="fg" lineHeight="tall" fontStyle="italic">
                    "{t.text}"
                  </Text>
                  <Flex justify="space-between" w="full" align="center" flexWrap="wrap" gap="2">
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm">{t.name}</Text>
                      <Text fontSize="xs" color="fg.muted">{t.location}, TX</Text>
                    </Box>
                    <Badge variant="subtle" colorPalette="brand" fontSize="xs">{t.service}</Badge>
                  </Flex>
                </VStack>
              </Flex>
            </Card.Body>
          </Card.Root>
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
            Join Our Happy Homeowners
          </Heading>
          <Text color="fg.muted">Schedule your free consultation and experience the Hearthstone difference.</Text>
        </VStack>
        <Button as={Link} to="/contact" colorPalette="brand" size="lg">
          Get Started <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}
