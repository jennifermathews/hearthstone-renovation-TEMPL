import { Box, SimpleGrid, VStack, HStack, Heading, Text, Button, Flex, Icon, Card } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuMapPin, LuArrowRight, LuPhone } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { serviceAreas } from "@/data/content"

const areaDescriptions: Record<string, string> = {
  "Plano": "Our home base. We've completed hundreds of projects throughout Plano's established neighborhoods and newer developments.",
  "Frisco": "One of the fastest-growing cities in Texas. We help homeowners update existing homes and customize new construction.",
  "McKinney": "Beautiful historic district and modern developments. We specialize in both contemporary updates and period-appropriate renovations.",
  "Allen": "A family-friendly community where we regularly deliver kitchen, bathroom, and whole-home renovations.",
  "Richardson": "Mid-century and modern homes in established neighborhoods. We love updating these classic properties.",
  "Carrollton": "Diverse housing stock from the 1970s–2000s with great renovation potential. We help homeowners modernize.",
  "Prosper": "Luxury homes and growing communities. Our high-end renovation services are popular in this area.",
  "Celina": "Rapidly expanding with new construction and existing homes needing customization and updates.",
  "The Colony": "Lakeside living with unique renovation opportunities. We serve The Colony's growing community.",
  "Murphy": "Family-oriented community with homes ready for kitchen and bathroom upgrades.",
  "Parker": "Estate properties and custom homes where quality craftsmanship is especially appreciated.",
  "Lucas": "Large-lot homes with room for additions and outdoor living expansions.",
  "North Dallas": "Urban and suburban properties benefiting from modern interior renovations and space optimization.",
}

export default function AreasPage() {
  return (
    <Box>
      <PageHero
        title="Service Areas"
        description="We proudly serve homeowners throughout North Texas, delivering quality remodeling from Plano to Prosper and beyond."
      />
      <AreasGrid />
      <MapSection />
      <DontSeeArea />
    </Box>
  )
}

function AreasGrid() {
  return (
    <Section>
      <SectionHeader
        label="Where We Work"
        title="Communities We Serve"
        description="Over 14 years, we've built lasting relationships in communities across the North Texas region."
      />
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="4">
        {serviceAreas.map((area) => (
          <Card.Root key={area} variant="outline" _hover={{ shadow: "md", borderColor: "brand.emphasized" }} transition="all 0.2s">
            <Card.Body p="5">
              <HStack gap="3" align="start">
                <Flex w="8" h="8" align="center" justify="center" rounded="full" bg="brand.muted" flexShrink={0}>
                  <Icon as={LuMapPin} boxSize="4" color="brand.fg" />
                </Flex>
                <VStack align="start" gap="1">
                  <Text fontWeight="semibold" fontSize="sm">{area}, TX</Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="tall">
                    {areaDescriptions[area] || "Quality home remodeling services for local homeowners."}
                  </Text>
                </VStack>
              </HStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function MapSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader title="Our Service Region" description="Conveniently located in Plano, we serve the entire North Texas corridor." />
      <Box
        maxW="4xl"
        mx="auto"
        h={{ base: "56", md: "72" }}
        rounded="2xl"
        bgGradient="linear-gradient(135deg, #e8d5b7 0%, #d4a574 50%, #c9750a33 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="border.subtle"
        position="relative"
        overflow="hidden"
      >
        <Box position="absolute" top="0" left="0" right="0" bottom="0" opacity="0.1" bgImage="radial-gradient(circle, {colors.brand.500} 1px, transparent 1px)" bgSize="20px 20px" />
        <VStack gap="3">
          <Icon as={LuMapPin} boxSize="10" color="brand.fg" />
          <Text fontWeight="bold" fontSize="lg">North Texas Service Area</Text>
          <Text color="fg.muted" textAlign="center" px="4">
            Headquartered in Plano • Serving 13+ communities
          </Text>
        </VStack>
      </Box>
    </Section>
  )
}

function DontSeeArea() {
  return (
    <Section>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="6" p="8" bg="brand.subtle" rounded="2xl" border="1px solid" borderColor="brand.emphasized">
        <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "start" }}>
          <Heading as="h3" fontSize="xl" fontFamily="'Playfair Display', serif">
            Don't See Your Area?
          </Heading>
          <Text color="fg.muted" fontSize="sm">
            We may still be able to help. Contact us to discuss your project location and we'll let you know if we can serve you.
          </Text>
        </VStack>
        <Flex gap="4" flexWrap="wrap">
          <Button as={Link} to="/contact" colorPalette="brand" size="lg">
            Contact Us <LuArrowRight />
          </Button>
          <Button as="a" href="tel:(469) 555-8472" variant="outline" size="lg">
            <LuPhone /> Call Us
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
