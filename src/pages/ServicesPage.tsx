import { Box, SimpleGrid, Card, VStack, HStack, Heading, Text, Button, Icon, Flex, Badge, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuArrowRight, LuHammer, LuBath, LuHouse, LuBuilding, LuTreePine, LuPaintbrush, LuCircleCheck, LuPhone } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { services, brands } from "@/data/content"

const serviceIcons: Record<string, React.ElementType> = {
  kitchen: LuHammer,
  bathroom: LuBath,
  "whole-home": LuHouse,
  additions: LuBuilding,
  outdoor: LuTreePine,
  interior: LuPaintbrush,
}

const serviceColors: Record<string, string> = {
  kitchen: "linear-gradient(135deg, #f7c878 0%, #c9750a 100%)",
  bathroom: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
  "whole-home": "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  additions: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  outdoor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  interior: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
}

export default function ServicesPage() {
  return (
    <Box>
      <PageHero
        title="Our Remodeling Services"
        description="From kitchens and bathrooms to whole-home renovations and outdoor living, we offer comprehensive remodeling solutions tailored to your lifestyle."
        image="/hero-main.webp"
      />
      <AllServices />
      <AdditionalServices />
      <BrandsWeUse />
      <CTABanner />
    </Box>
  )
}

function AllServices() {
  return (
    <Section>
      <SectionHeader
        label="What We Do"
        title="Full-Service Residential Remodeling"
        description="Every project is managed by a dedicated project manager and backed by our 2-year workmanship warranty."
      />
      <VStack gap="8">
        {services.map((service, i) => (
          <Card.Root
            key={service.id}
            variant="outline"
            overflow="hidden"
            _hover={{ shadow: "md" }}
            transition="shadow 0.3s"
          >
            <Flex direction={{ base: "column", md: i % 2 === 0 ? "row" : "row-reverse" }}>
              <Box
                w={{ base: "full", md: "40%" }}
                minH={{ base: "48", md: "auto" }}
                position="relative"
                overflow="hidden"
              >
                <Image src={service.image} alt={service.title} w="full" h="full" objectFit="cover" minH={{ base: "48", md: "64" }} />
              </Box>
              <Box flex="1" p={{ base: "6", md: "8" }}>
                <VStack align="start" gap="4">
                  <Box>
                    <Badge colorPalette="brand" variant="subtle" mb="2">{service.timeline} typical</Badge>
                    <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} fontFamily="'Playfair Display', serif">
                      {service.title}
                    </Heading>
                  </Box>
                  <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                    {service.description}
                  </Text>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} gap="2" w="full">
                    {service.items.slice(0, 6).map((item) => (
                      <HStack key={item} gap="2">
                        <Icon as={LuCircleCheck} color="green.500" boxSize="3.5" flexShrink={0} />
                        <Text fontSize="xs">{item}</Text>
                      </HStack>
                    ))}
                  </SimpleGrid>
                  <Button
                    as={Link}
                    to={`/services/${service.id}`}
                    colorPalette="brand"
                    variant="outline"
                    size="sm"
                  >
                    View Details <LuArrowRight />
                  </Button>
                </VStack>
              </Box>
            </Flex>
          </Card.Root>
        ))}
      </VStack>
    </Section>
  )
}

function AdditionalServices() {
  const additional = [
    "Design consultation",
    "3D remodeling concepts",
    "Permit handling",
    "HOA approvals",
    "Material sourcing",
    "Project management",
    "Custom millwork",
    "Aging-in-place modifications",
    "Home resale improvements",
  ]
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Beyond the Basics"
        title="Additional Services"
        description="We handle every aspect of your remodeling project from concept through completion."
      />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4" maxW="4xl" mx="auto">
        {additional.map((item) => (
          <HStack key={item} gap="3" p="4" bg="bg" rounded="lg" border="1px solid" borderColor="border.subtle">
            <Icon as={LuCircleCheck} color="brand.fg" boxSize="4" flexShrink={0} />
            <Text fontSize="sm" fontWeight="medium">{item}</Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function BrandsWeUse() {
  return (
    <Section>
      <SectionHeader
        label="Quality Materials"
        title="Brands You Can Trust"
        description="We partner with industry-leading manufacturers to ensure lasting quality in every project."
      />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="6" maxW="4xl" mx="auto">
        {Object.entries(brands).map(([category, items]) => (
          <VStack key={category} align="start" gap="3" p="5" bg="bg.subtle" rounded="lg">
            <Text fontWeight="semibold" fontSize="sm" textTransform="capitalize">{category}</Text>
            {items.map((brand) => (
              <Text key={brand} fontSize="sm" color="fg.muted">{brand}</Text>
            ))}
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function CTABanner() {
  return (
    <Section bg="brand.subtle">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="6">
        <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "start" }}>
          <Heading as="h3" fontSize="2xl" fontFamily="'Playfair Display', serif">
            Ready to Start Your Project?
          </Heading>
          <Text color="fg.muted">Schedule a free in-home consultation with our team.</Text>
        </VStack>
        <Flex gap="4" flexWrap="wrap">
          <Button as={Link} to="/contact" colorPalette="brand" size="lg">
            Get Free Estimate
          </Button>
          <Button as="a" href="tel:(469) 555-8472" variant="outline" size="lg">
            <LuPhone /> Call Now
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
