import { Box, Container, Heading, Text, Button, VStack, HStack, SimpleGrid, Card, Icon, Flex, Badge, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuArrowRight, LuPhone, LuStar, LuShieldCheck, LuUsers, LuCalendar, LuHammer, LuHouse, LuTreePine, LuPaintbrush, LuBath, LuBuilding, LuAward, LuCircleCheck, LuClock, LuHeart, LuMapPin, LuCreditCard, LuMessageSquare } from "react-icons/lu"
import { Section, SectionHeader } from "@/components/Section"
import { stats, services, testimonials, whyChooseUs, processSteps, designStyles, team, serviceAreas, awards, brands, faqs } from "@/data/content"
import { Accordion } from "@chakra-ui/react"

const serviceIcons: Record<string, React.ElementType> = {
  kitchen: LuHammer,
  bathroom: LuBath,
  "whole-home": LuHouse,
  additions: LuBuilding,
  outdoor: LuTreePine,
  interior: LuPaintbrush,
}

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <StatsBar />
      <ServicesOverview />
      <WhyChooseUsSection />
      <FeaturedProjects />
      <ProcessPreview />
      <TestimonialsSection />
      <DesignStylesSection />
      <TeamPreview />
      <AreasSection />
      <FinancingSection />
      <AwardsSection />
      <FAQPreview />
      <BrandsSection />
      <CTASection />
    </Box>
  )
}

function HeroSection() {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="gray.900"
      mt={{ base: "-16", md: "-18" }}
      pt={{ base: "32", md: "40" }}
      pb={{ base: "20", md: "32" }}
    >
      <Image
        src="/hero-main.webp"
        alt=""
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        objectFit="cover"
        opacity="0.35"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear-gradient(135deg, rgba(26,15,5,0.8) 0%, rgba(45,24,16,0.7) 30%, rgba(26,35,50,0.8) 100%)"
      />
      <Container maxW="7xl" px={{ base: "4", md: "6" }} position="relative">
        <VStack gap="6" align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "start" }} maxW="2xl">
          <Badge colorPalette="orange" variant="subtle" px="3" py="1" fontSize="xs" fontWeight="semibold">
            Serving North Texas Since 2011
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
            color="white"
            lineHeight="1.1"
          >
            Beautiful Spaces.{" "}
            <Text as="span" color="brand.400">
              Built Around Your Life.
            </Text>
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.300" lineHeight="tall" maxW="xl">
            Full-service residential remodeling in Plano, TX. From stunning kitchens to spa-like bathrooms, we bring your vision to life with quality craftsmanship and transparent communication.
          </Text>
          <Flex gap="4" flexWrap="wrap" pt="4" justify={{ base: "center", md: "start" }}>
            <Button
              as={Link}
              to="/contact"
              colorPalette="brand"
              size={{ base: "lg", md: "xl" }}
              fontWeight="semibold"
            >
              Get Free Estimate
              <LuArrowRight />
            </Button>
            <Button
              as={Link}
              to="/gallery"
              variant="outline"
              size={{ base: "lg", md: "xl" }}
              color="white"
              borderColor="gray.600"
              _hover={{ bg: "whiteAlpha.100" }}
            >
              View Our Work
            </Button>
          </Flex>
          <HStack gap="6" pt="6" flexWrap="wrap" justify={{ base: "center", md: "start" }}>
            <HStack gap="1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Icon key={i} as={LuStar} color="yellow.400" boxSize="4" fill="currentColor" />
              ))}
              <Text fontSize="sm" color="gray.400" ml="1">390+ Reviews</Text>
            </HStack>
            <HStack gap="2">
              <Icon as={LuShieldCheck} color="green.400" />
              <Text fontSize="sm" color="gray.400">Licensed & Insured</Text>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

function StatsBar() {
  return (
    <Box bg="brand.subtle" borderBottom="1px solid" borderColor="border.subtle">
      <Container maxW="7xl" px={{ base: "4", md: "6" }} py={{ base: "6", md: "8" }}>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: "4", md: "8" }}>
          {stats.map((stat) => (
            <VStack key={stat.label} gap="0" textAlign="center">
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="brand.fg" fontFamily="'Playfair Display', serif">
                {stat.value}
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="fg.muted" fontWeight="medium">
                {stat.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

function ServicesOverview() {
  return (
    <Section>
      <SectionHeader
        label="Our Services"
        title="Comprehensive Remodeling Solutions"
        description="From single-room makeovers to complete home transformations, we deliver exceptional results on every project."
      />
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="6">
        {services.map((service) => (
          <Card.Root
            key={service.id}
            variant="outline"
            _hover={{ shadow: "lg", borderColor: "brand.emphasized", transform: "translateY(-2px)" }}
            transition="all 0.3s"
            overflow="hidden"
          >
            <Image src={service.image} alt={service.title} w="full" h="40" objectFit="cover" />
            <Card.Body p="6">
              <VStack align="start" gap="4">
                <Heading as="h3" fontSize="lg" fontWeight="semibold">
                  {service.title}
                </Heading>
                <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                  {service.description}
                </Text>
                <Button
                  as={Link}
                  to={`/services/${service.id}`}
                  variant="ghost"
                  colorPalette="brand"
                  size="sm"
                  mt="auto"
                  p="0"
                >
                  Learn More <LuArrowRight />
                </Button>
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
      <Flex justify="center" mt="8">
        <Button as={Link} to="/services" variant="outline" colorPalette="brand" size="lg">
          View All Services <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}

function WhyChooseUsSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Why Hearthstone"
        title="What Sets Us Apart"
        description="We combine old-fashioned craftsmanship with modern project management to deliver an exceptional remodeling experience."
      />
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="6">
        {whyChooseUs.map((item, i) => {
          const icons = [LuHeart, LuCircleCheck, LuUsers, LuShieldCheck, LuHouse, LuAward, LuMessageSquare, LuShieldCheck]
          return (
            <VStack key={i} gap="3" align="center" textAlign="center" p="6" bg="bg" rounded="xl" shadow="sm" border="1px solid" borderColor="border.subtle">
              <Flex w="10" h="10" align="center" justify="center" rounded="full" bg="brand.muted">
                <Icon as={icons[i]} boxSize="5" color="brand.fg" />
              </Flex>
              <Text fontWeight="semibold" fontSize="sm">{item.title}</Text>
              <Text fontSize="xs" color="fg.muted">{item.description}</Text>
            </VStack>
          )
        })}
      </SimpleGrid>
    </Section>
  )
}

function FeaturedProjects() {
  const projects = [
    { title: "Modern Kitchen Transformation", location: "Frisco, TX", type: "Kitchen", image: "/project-kitchen-modern.webp" },
    { title: "Spa-Inspired Master Bath", location: "Plano, TX", type: "Bathroom", image: "/project-bath-luxury.webp" },
    { title: "Open-Concept Living Space", location: "McKinney, TX", type: "Whole Home", image: "/project-living-open.webp" },
    { title: "Covered Patio & Outdoor Kitchen", location: "Allen, TX", type: "Outdoor", image: "/project-outdoor-patio.webp" },
  ]
  return (
    <Section>
      <SectionHeader
        label="Our Work"
        title="Featured Projects"
        description="See how we've helped homeowners across North Texas transform their spaces."
      />
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
        {projects.map((project, i) => (
          <Box
            key={i}
            position="relative"
            h={{ base: "56", md: "72" }}
            rounded="xl"
            overflow="hidden"
            bg="gray.900"
            _hover={{ transform: "scale(1.02)" }}
            transition="transform 0.3s"
          >
            <Image src={project.image} alt={project.title} position="absolute" top="0" left="0" w="full" h="full" objectFit="cover" />
            <Box position="absolute" bottom="0" left="0" right="0" p="6" bgGradient="linear-gradient(to top, blackAlpha.800, transparent)">
              <Badge colorPalette="orange" mb="2" fontSize="xs">{project.type}</Badge>
              <Heading as="h3" fontSize="lg" color="white" fontWeight="semibold">{project.title}</Heading>
              <Text fontSize="sm" color="gray.300">{project.location}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Flex justify="center" mt="8">
        <Button as={Link} to="/gallery" variant="outline" colorPalette="brand" size="lg">
          View Full Gallery <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}

function ProcessPreview() {
  const previewSteps = processSteps.slice(0, 5)
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Our Process"
        title="From Vision to Reality"
        description="Our proven 10-step process ensures every project is delivered on time, on budget, and beyond expectations."
      />
      <VStack gap="4" align="stretch" maxW="3xl" mx="auto">
        {previewSteps.map((step) => (
          <HStack
            key={step.step}
            gap="4"
            p="4"
            bg="bg"
            rounded="lg"
            border="1px solid"
            borderColor="border.subtle"
          >
            <Flex
              minW="10"
              h="10"
              align="center"
              justify="center"
              rounded="full"
              bg="brand.muted"
              fontWeight="bold"
              fontSize="sm"
              color="brand.fg"
            >
              {step.step}
            </Flex>
            <VStack align="start" gap="0.5">
              <Text fontWeight="semibold" fontSize="sm">{step.title}</Text>
              <Text fontSize="xs" color="fg.muted">{step.description}</Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
      <Flex justify="center" mt="8">
        <Button as={Link} to="/process" variant="outline" colorPalette="brand" size="lg">
          See Full Process <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}

function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader
        label="Testimonials"
        title="What Our Clients Say"
        description="Don't just take our word for it — hear from homeowners who've experienced the Hearthstone difference."
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
        {testimonials.slice(0, 3).map((t, i) => (
          <Card.Root key={i} variant="outline">
            <Card.Body p="6">
              <VStack align="start" gap="4">
                <HStack gap="1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Icon key={j} as={LuStar} color="yellow.500" boxSize="4" fill="currentColor" />
                  ))}
                </HStack>
                <Text fontSize="sm" color="fg.muted" lineHeight="tall" fontStyle="italic">
                  "{t.text}"
                </Text>
                <Box>
                  <Text fontWeight="semibold" fontSize="sm">{t.name}</Text>
                  <Text fontSize="xs" color="fg.muted">{t.location} · {t.service}</Text>
                </Box>
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
      <Flex justify="center" mt="8">
        <Button as={Link} to="/reviews" variant="outline" colorPalette="brand" size="lg">
          Read All Reviews <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}

function DesignStylesSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Design Styles"
        title="Your Style, Your Space"
        description="We work in every design aesthetic to create spaces that reflect your personal taste."
      />
      <Flex flexWrap="wrap" gap="3" justify="center">
        {designStyles.map((style) => (
          <Badge
            key={style}
            variant="outline"
            size="lg"
            px="4"
            py="2"
            fontSize="sm"
            rounded="full"
            borderColor="border.emphasized"
            _hover={{ bg: "brand.muted", borderColor: "brand.fg" }}
            transition="all 0.2s"
            cursor="pointer"
          >
            {style}
          </Badge>
        ))}
      </Flex>
    </Section>
  )
}

function TeamPreview() {
  return (
    <Section>
      <SectionHeader
        label="Our Team"
        title="Meet the People Behind the Projects"
        description="A dedicated team of experienced professionals committed to delivering exceptional results."
      />
      <SimpleGrid columns={{ base: 2, md: 4 }} gap="6">
        {team.map((member) => (
          <VStack key={member.name} gap="3" textAlign="center">
            <Image
              src={member.image}
              alt={member.name}
              w={{ base: "16", md: "20" }}
              h={{ base: "16", md: "20" }}
              rounded="full"
              objectFit="cover"
              border="3px solid"
              borderColor="brand.emphasized"
            />
            <Box>
              <Text fontWeight="semibold" fontSize="sm">{member.name}</Text>
              <Text fontSize="xs" color="fg.muted">{member.role}</Text>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
      <Flex justify="center" mt="8">
        <Button as={Link} to="/about" variant="outline" colorPalette="brand" size="lg">
          Meet the Full Team <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}

function AreasSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Service Areas"
        title="Proudly Serving North Texas"
        description="From Plano to Prosper, we bring quality remodeling to communities across the region."
      />
      <Flex flexWrap="wrap" gap="3" justify="center" maxW="3xl" mx="auto">
        {serviceAreas.map((area) => (
          <HStack
            key={area}
            gap="1.5"
            px="4"
            py="2"
            bg="bg"
            rounded="full"
            border="1px solid"
            borderColor="border.subtle"
          >
            <Icon as={LuMapPin} boxSize="3.5" color="brand.fg" />
            <Text fontSize="sm" fontWeight="medium">{area}</Text>
          </HStack>
        ))}
      </Flex>
      <Flex justify="center" mt="8">
        <Button as={Link} to="/areas" variant="outline" colorPalette="brand" size="lg">
          View All Areas <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}

function FinancingSection() {
  return (
    <Section>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap="8"
        bg="brand.subtle"
        p={{ base: "6", md: "10" }}
        rounded="2xl"
        border="1px solid"
        borderColor="brand.emphasized"
      >
        <VStack align="start" gap="4" flex="1">
          <HStack gap="2">
            <Icon as={LuCreditCard} boxSize="6" color="brand.fg" />
            <Heading as="h3" fontSize="xl" fontFamily="'Playfair Display', serif">
              Flexible Financing Available
            </Heading>
          </HStack>
          <Text fontSize="sm" color="fg.muted" lineHeight="tall">
            Don't let budget hold back your dream renovation. We partner with trusted lenders to offer competitive financing options including 12-month promotional rates and fixed monthly payments.
          </Text>
          <Button as={Link} to="/financing" colorPalette="brand" size="md">
            Explore Financing Options <LuArrowRight />
          </Button>
        </VStack>
        <SimpleGrid columns={2} gap="4">
          {["12-Month Promo Rate", "Fixed Payments", "No Prepayment Penalty", "Quick Approval"].map((item) => (
            <HStack key={item} gap="2">
              <Icon as={LuCircleCheck} color="green.500" boxSize="4" />
              <Text fontSize="xs" fontWeight="medium">{item}</Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Flex>
    </Section>
  )
}

function AwardsSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Recognition"
        title="Award-Winning Craftsmanship"
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" maxW="4xl" mx="auto">
        {awards.map((award) => (
          <VStack key={award.year} gap="2" p="6" bg="bg" rounded="xl" border="1px solid" borderColor="border.subtle" textAlign="center">
            <Icon as={LuAward} boxSize="8" color="brand.fg" />
            <Text fontWeight="bold" fontSize="sm">{award.title}</Text>
            <Text fontSize="xs" color="fg.muted">{award.org}</Text>
            <Badge variant="subtle" colorPalette="brand" fontSize="xs">{award.year}</Badge>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function FAQPreview() {
  return (
    <Section>
      <SectionHeader
        label="FAQ"
        title="Common Questions"
        description="Quick answers to the questions we hear most from homeowners."
      />
      <Box maxW="3xl" mx="auto">
        <Accordion.Root multiple>
          {faqs.slice(0, 4).map((faq, i) => (
            <Accordion.Item key={i} value={`faq-${i}`}>
              <Accordion.ItemTrigger cursor="pointer" py="4">
                <Text flex="1" textAlign="start" fontWeight="medium" fontSize="sm">
                  {faq.question}
                </Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                    {faq.answer}
                  </Text>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
      <Flex justify="center" mt="8">
        <Button as={Link} to="/faq" variant="outline" colorPalette="brand" size="lg">
          View All FAQs <LuArrowRight />
        </Button>
      </Flex>
    </Section>
  )
}

function BrandsSection() {
  const allBrands = [
    ...brands.cabinetry,
    ...brands.countertops,
    ...brands.flooring,
    ...brands.fixtures,
    ...brands.appliances,
  ]
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Trusted Partners"
        title="Brands We Work With"
      />
      <Flex flexWrap="wrap" gap="4" justify="center" maxW="4xl" mx="auto">
        {allBrands.map((brand) => (
          <Box
            key={brand}
            px="5"
            py="3"
            bg="bg"
            rounded="lg"
            border="1px solid"
            borderColor="border.subtle"
          >
            <Text fontSize="sm" fontWeight="medium" color="fg.muted">{brand}</Text>
          </Box>
        ))}
      </Flex>
    </Section>
  )
}

function CTASection() {
  return (
    <Box bg="gray.900" py={{ base: "16", md: "24" }} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.2"
        bgImage="radial-gradient(circle at 50% 50%, {colors.brand.500} 0%, transparent 60%)"
      />
      <Container maxW="7xl" px={{ base: "4", md: "6" }} position="relative">
        <VStack gap="6" textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
            color="white"
          >
            Ready to Transform Your Home?
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.300" maxW="xl">
            Schedule your free in-home consultation today and take the first step toward the home you've always wanted.
          </Text>
          <Flex gap="4" flexWrap="wrap" justify="center" pt="4">
            <Button as={Link} to="/contact" colorPalette="brand" size="xl" fontWeight="semibold">
              Schedule Free Consultation
            </Button>
            <Button as="a" href="tel:(469) 555-8472" variant="outline" size="xl" color="white" borderColor="gray.600" _hover={{ bg: "whiteAlpha.100" }}>
              <LuPhone /> (469) 555-8472
            </Button>
          </Flex>
          <HStack gap="6" pt="4" flexWrap="wrap" justify="center">
            <HStack gap="2"><Icon as={LuCalendar} color="brand.400" /><Text fontSize="sm" color="gray.400">Same-Week Appointments</Text></HStack>
            <HStack gap="2"><Icon as={LuCircleCheck} color="brand.400" /><Text fontSize="sm" color="gray.400">No Obligation</Text></HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
