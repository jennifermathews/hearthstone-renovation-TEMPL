import { Box, SimpleGrid, VStack, HStack, Heading, Text, Button, Flex, Badge, Card, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuArrowRight } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { useState } from "react"

const categories = ["All", "Kitchen", "Bathroom", "Whole Home", "Additions", "Outdoor", "Interior"]

const projects = [
  { title: "Modern White Kitchen", category: "Kitchen", location: "Frisco, TX", image: "/project-kitchen-modern.webp" },
  { title: "Spa Master Bathroom", category: "Bathroom", location: "Plano, TX", image: "/project-bath-luxury.webp" },
  { title: "Open-Concept Living", category: "Whole Home", location: "McKinney, TX", image: "/project-living-open.webp" },
  { title: "Covered Patio Retreat", category: "Outdoor", location: "Allen, TX", image: "/project-outdoor-patio.webp" },
  { title: "Farmhouse Kitchen", category: "Kitchen", location: "Prosper, TX", image: "/project-kitchen-farmhouse.webp" },
  { title: "Guest Suite Addition", category: "Additions", location: "Richardson, TX", image: "/project-addition-suite.webp" },
  { title: "Hardwood Throughout", category: "Interior", location: "Carrollton, TX", image: "/hero-interior.webp" },
  { title: "Transitional Master Bath", category: "Bathroom", location: "Murphy, TX", image: "/project-bath-master.webp" },
  { title: "Chef's Kitchen Island", category: "Kitchen", location: "Celina, TX", image: "/hero-kitchen.webp" },
  { title: "Second-Story Addition", category: "Additions", location: "Plano, TX", image: "/hero-additions.webp" },
  { title: "Outdoor Kitchen & Grill", category: "Outdoor", location: "Frisco, TX", image: "/hero-outdoor.webp" },
  { title: "Fireplace Transformation", category: "Interior", location: "Allen, TX", image: "/project-fireplace.webp" },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <Box>
      <PageHero
        title="Our Project Gallery"
        description="Browse our portfolio of completed renovations across North Texas. Each project reflects our commitment to quality craftsmanship and thoughtful design."
        image="/hero-main.webp"
      />

      <Section>
        <SectionHeader
          label="Portfolio"
          title="See Our Work"
          description="Filter by project type to find inspiration for your own renovation."
        />
        <Flex flexWrap="wrap" gap="2" justify="center" mb="8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "solid" : "outline"}
              colorPalette={filter === cat ? "brand" : "gray"}
              size="sm"
              rounded="full"
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </Flex>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="6">
          {filtered.map((project, i) => (
            <Box
              key={i}
              position="relative"
              h={{ base: "56", md: "64" }}
              rounded="xl"
              overflow="hidden"
              bg="gray.900"
              _hover={{ transform: "scale(1.02)", shadow: "xl" }}
              transition="all 0.3s"
              cursor="pointer"
            >
              <Image src={project.image} alt={project.title} position="absolute" top="0" left="0" w="full" h="full" objectFit="cover" />
              <Box position="absolute" bottom="0" left="0" right="0" p="5" bgGradient="linear-gradient(to top, blackAlpha.800, transparent)">
                <Badge colorPalette="orange" mb="2" fontSize="xs">{project.category}</Badge>
                <Heading as="h3" fontSize="md" color="white" fontWeight="semibold">{project.title}</Heading>
                <Text fontSize="xs" color="gray.300">{project.location}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      <BeforeAfterSection />

      <Section bg="brand.subtle">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="6">
          <VStack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "start" }}>
            <Heading as="h3" fontSize="2xl" fontFamily="'Playfair Display', serif">
              Love What You See?
            </Heading>
            <Text color="fg.muted">Let's discuss how we can transform your space.</Text>
          </VStack>
          <Button as={Link} to="/contact" colorPalette="brand" size="lg">
            Start Your Project <LuArrowRight />
          </Button>
        </Flex>
      </Section>
    </Box>
  )
}

function BeforeAfterSection() {
  const comparisons = [
    { title: "Kitchen Transformation", before: "/before-kitchen.webp", after: "/project-kitchen-modern.webp" },
    { title: "Bathroom Renovation", before: "/before-bathroom.webp", after: "/project-bath-luxury.webp" },
    { title: "Living Room Update", before: "/before-living.webp", after: "/project-living-open.webp" },
  ]

  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Transformations"
        title="Before & After"
        description="See the dramatic difference quality remodeling makes in real North Texas homes."
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        {comparisons.map((comp, i) => (
          <Card.Root key={i} variant="outline" overflow="hidden">
            <Box>
              <Flex>
                <Box flex="1" h="40" position="relative" overflow="hidden">
                  <Image src={comp.before} alt="Before" w="full" h="full" objectFit="cover" />
                  <Text position="absolute" top="2" left="2" fontSize="xs" bg="blackAlpha.700" color="white" px="2" py="0.5" rounded="md" fontWeight="semibold">Before</Text>
                </Box>
                <Box flex="1" h="40" position="relative" overflow="hidden">
                  <Image src={comp.after} alt="After" w="full" h="full" objectFit="cover" />
                  <Text position="absolute" top="2" left="2" fontSize="xs" bg="green.600" color="white" px="2" py="0.5" rounded="md" fontWeight="semibold">After</Text>
                </Box>
              </Flex>
            </Box>
            <Card.Body p="4">
              <Text fontWeight="semibold" fontSize="sm">{comp.title}</Text>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}
