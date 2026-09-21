import { Box, SimpleGrid, VStack, HStack, Heading, Text, Card, Icon, Flex, Badge, Image } from "@chakra-ui/react"
import { LuHeart, LuShieldCheck, LuEye, LuClock, LuHandshake, LuCircleCheck, LuTarget, LuSmile, LuAward } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { team, awards, certifications, stats } from "@/data/content"

const values = [
  { icon: LuHeart, title: "Integrity", description: "Honest communication and ethical practices in everything we do." },
  { icon: LuHammer, title: "Craftsmanship", description: "Meticulous attention to detail and pride in quality workmanship." },
  { icon: LuEye, title: "Transparency", description: "Clear pricing, open timelines, and no surprises along the way." },
  { icon: LuClock, title: "Reliability", description: "We show up on time, every time, and honor our commitments." },
  { icon: LuHandshake, title: "Respect", description: "We treat your home and family with the utmost care and consideration." },
  { icon: LuTarget, title: "Accountability", description: "We own our work and stand behind every project we complete." },
  { icon: LuShieldCheck, title: "Innovation", description: "Embracing new techniques and materials that benefit our clients." },
  { icon: LuSmile, title: "Client Satisfaction", description: "Your happiness is our measure of success on every project." },
]

import { LuHammer } from "react-icons/lu"

export default function AboutPage() {
  return (
    <Box>
      <PageHero
        title="About Hearthstone Renovation"
        description="A family-owned Texas remodeling company dedicated to transforming homes and exceeding expectations since 2011."
        image="/about-story.webp"
      />
      <StorySection />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <AwardsSection />
      <CertificationsSection />
    </Box>
  )
}

function StorySection() {
  return (
    <Section>
      <Flex direction={{ base: "column", md: "row" }} gap="10" align="center">
        <Box flex="1">
          <Text color="brand.fg" fontWeight="semibold" fontSize="sm" mb="2">Our Story</Text>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontFamily="'Playfair Display', serif" mb="4">
            Built on Craftsmanship, Driven by Care
          </Heading>
          <VStack align="start" gap="4">
            <Text color="fg.muted" lineHeight="tall">
              Hearthstone Renovation Co. was founded in 2011 by Rowan Mercer after spending over a decade managing custom residential construction projects throughout North Texas. What started as a small operation focused on kitchen and bathroom renovations has grown into one of the region's most trusted full-service remodeling companies.
            </Text>
            <Text color="fg.muted" lineHeight="tall">
              Today, our team of designers, project managers, and skilled tradespeople delivers exceptional results on over 100 projects each year. We've maintained our family-business values even as we've grown — every client gets a dedicated project manager, transparent communication, and the personal attention that larger firms can't provide.
            </Text>
            <Text color="fg.muted" lineHeight="tall">
              Our mission is simple: create beautiful, functional spaces that improve our clients' daily lives. We believe every homeowner deserves a renovation experience that's organized, respectful, and delivers lasting quality.
            </Text>
          </VStack>
        </Box>
        <Box
          w={{ base: "full", md: "sm" }}
          h={{ base: "64", md: "80" }}
          rounded="2xl"
          position="relative"
          overflow="hidden"
        >
          <Image src="/about-story.webp" alt="Hearthstone team on site" w="full" h="full" objectFit="cover" />
        </Box>
      </Flex>
    </Section>
  )
}

function StatsSection() {
  return (
    <Section bg="bg.subtle">
      <SimpleGrid columns={{ base: 2, md: 4 }} gap="6">
        {stats.map((stat) => (
          <VStack key={stat.label} gap="1" textAlign="center" p="6" bg="bg" rounded="xl" border="1px solid" borderColor="border.subtle">
            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="brand.fg" fontFamily="'Playfair Display', serif">
              {stat.value}
            </Text>
            <Text fontSize="sm" color="fg.muted" fontWeight="medium">{stat.label}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function ValuesSection() {
  return (
    <Section>
      <SectionHeader
        label="Our Values"
        title="What We Stand For"
        description="These principles guide every decision we make and every project we undertake."
      />
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="6">
        {values.map((v) => (
          <VStack key={v.title} gap="3" p="5" align="center" textAlign="center">
            <Flex w="12" h="12" align="center" justify="center" rounded="full" bg="brand.muted">
              <Icon as={v.icon} boxSize="5" color="brand.fg" />
            </Flex>
            <Text fontWeight="semibold" fontSize="sm">{v.title}</Text>
            <Text fontSize="xs" color="fg.muted">{v.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function TeamSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader
        label="Leadership"
        title="Meet Our Team"
        description="Experienced professionals dedicated to delivering exceptional remodeling results."
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
        {team.map((member) => (
          <Card.Root key={member.name} variant="outline">
            <Card.Body p="6">
              <Flex gap="5" direction={{ base: "column", sm: "row" }} align={{ base: "center", sm: "start" }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  w="20"
                  h="20"
                  rounded="full"
                  objectFit="cover"
                  border="3px solid"
                  borderColor="brand.emphasized"
                  flexShrink={0}
                />
                <VStack align={{ base: "center", sm: "start" }} gap="2" textAlign={{ base: "center", sm: "start" }}>
                  <Box>
                    <Heading as="h3" fontSize="md">{member.name}</Heading>
                    <Text fontSize="sm" color="brand.fg" fontWeight="medium">{member.role}</Text>
                  </Box>
                  <Badge variant="subtle" fontSize="xs">{member.experience} experience</Badge>
                  <Text fontSize="sm" color="fg.muted" lineHeight="tall">{member.bio}</Text>
                  <Flex flexWrap="wrap" gap="1.5" mt="1">
                    {member.specialties.map((s) => (
                      <Badge key={s} variant="outline" fontSize="2xs" colorPalette="gray">{s}</Badge>
                    ))}
                  </Flex>
                </VStack>
              </Flex>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function AwardsSection() {
  return (
    <Section>
      <SectionHeader label="Recognition" title="Awards & Achievements" />
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" maxW="4xl" mx="auto">
        {awards.map((award) => (
          <VStack key={award.year} gap="3" p="6" bg="brand.subtle" rounded="xl" border="1px solid" borderColor="brand.emphasized" textAlign="center">
            <Icon as={LuAward} boxSize="8" color="brand.fg" />
            <Text fontWeight="bold" fontSize="sm">{award.title}</Text>
            <Text fontSize="xs" color="fg.muted">{award.org}</Text>
            <Badge colorPalette="brand" variant="subtle">{award.year}</Badge>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

function CertificationsSection() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader label="Credentials" title="Certifications & Memberships" />
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4" maxW="3xl" mx="auto">
        {certifications.map((cert) => (
          <HStack key={cert} gap="3" p="4" bg="bg" rounded="lg" border="1px solid" borderColor="border.subtle">
            <Icon as={LuCircleCheck} color="green.500" boxSize="5" flexShrink={0} />
            <Text fontSize="sm" fontWeight="medium">{cert}</Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}
