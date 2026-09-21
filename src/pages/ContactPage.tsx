import { Box, SimpleGrid, VStack, HStack, Heading, Text, Button, Flex, Icon, Card, Input, Textarea } from "@chakra-ui/react"
import { LuPhone, LuMail, LuMapPin, LuClock, LuSend, LuCircleCheck } from "react-icons/lu"
import { PageHero, Section, SectionHeader } from "@/components/Section"
import { company } from "@/data/content"
import { useState } from "react"
import { Field } from "@/components/ui/field"
import { NativeSelect } from "@chakra-ui/react"

export default function ContactPage() {
  return (
    <Box>
      <PageHero
        title="Get In Touch"
        description="Ready to start your remodeling project? Schedule a free in-home consultation or reach out with any questions. We typically respond within one business day."
        image="/hero-main.webp"
      />      <ContactFormSection />
      <OfficeInfo />
      <OfficeHours />
    </Box>
  )
}

function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Section>
        <VStack gap="4" textAlign="center" py="12">
          <Flex w="16" h="16" align="center" justify="center" rounded="full" bg="green.100">
            <Icon as={LuCircleCheck} boxSize="8" color="green.500" />
          </Flex>
          <Heading as="h2" fontSize="2xl" fontFamily="'Playfair Display', serif">
            Thank You for Your Message!
          </Heading>
          <Text color="fg.muted" maxW="md">
            We've received your inquiry and will get back to you within one business day. In the meantime, feel free to call us directly.
          </Text>
          <Button as="a" href={`tel:${company.phone}`} colorPalette="brand" size="lg" mt="4">
            <LuPhone /> Call {company.phone}
          </Button>
        </VStack>
      </Section>
    )
  }

  return (
    <Section>
      <Flex direction={{ base: "column", lg: "row" }} gap="10">
        <Box flex="1">
          <SectionHeader title="Request a Free Estimate" align="start" description="Tell us about your project and we'll schedule a free consultation at your convenience." />
          <Box as="form" onSubmit={handleSubmit}>
            <VStack gap="4" align="stretch">
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
                <Field label="Full Name" required>
                  <Input placeholder="Your full name" size="lg" required />
                </Field>
                <Field label="Email Address" required>
                  <Input type="email" placeholder="you@email.com" size="lg" required />
                </Field>
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
                <Field label="Phone Number" required>
                  <Input type="tel" placeholder="(469) 555-0000" size="lg" required />
                </Field>
                <Field label="Service Interested In">
                  <NativeSelect.Root size="lg">
                    <NativeSelect.Field placeholder="Select a service">
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Remodeling</option>
                      <option value="whole-home">Whole Home Renovation</option>
                      <option value="addition">Room Addition</option>
                      <option value="outdoor">Outdoor Living</option>
                      <option value="interior">Interior Upgrades</option>
                      <option value="other">Other</option>
                    </NativeSelect.Field>
                  </NativeSelect.Root>
                </Field>
              </SimpleGrid>
              <Field label="Budget Range">
                <NativeSelect.Root size="lg">
                  <NativeSelect.Field placeholder="Select budget range">
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k-150k">$100,000 – $150,000</option>
                    <option value="150k-plus">$150,000+</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </NativeSelect.Field>
                </NativeSelect.Root>
              </Field>
              <Field label="Project Description">
                <Textarea placeholder="Tell us about your project — what rooms, what changes, any timeline considerations..." rows={5} size="lg" />
              </Field>
              <Field label="Preferred Contact Method">
                <NativeSelect.Root size="lg">
                  <NativeSelect.Field>
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                  </NativeSelect.Field>
                </NativeSelect.Root>
              </Field>
              <Button type="submit" colorPalette="brand" size="xl" mt="2">
                <LuSend /> Submit Request
              </Button>
              <Text fontSize="xs" color="fg.muted" textAlign="center">
                Free estimate • No obligation • Response within 1 business day
              </Text>
            </VStack>
          </Box>
        </Box>
        <Box w={{ base: "full", lg: "sm" }}>
          <Card.Root variant="outline" position="sticky" top="24">
            <Card.Body p="6">
              <VStack gap="5" align="start">
                <Heading as="h3" fontSize="lg">Contact Information</Heading>
                <HStack gap="3">
                  <Flex w="10" h="10" align="center" justify="center" rounded="lg" bg="brand.muted">
                    <Icon as={LuPhone} color="brand.fg" />
                  </Flex>
                  <VStack align="start" gap="0">
                    <Text fontSize="xs" color="fg.muted">Phone</Text>
                    <Text fontSize="sm" fontWeight="medium">{company.phone}</Text>
                  </VStack>
                </HStack>
                <HStack gap="3">
                  <Flex w="10" h="10" align="center" justify="center" rounded="lg" bg="brand.muted">
                    <Icon as={LuMail} color="brand.fg" />
                  </Flex>
                  <VStack align="start" gap="0">
                    <Text fontSize="xs" color="fg.muted">Email</Text>
                    <Text fontSize="sm" fontWeight="medium">{company.email}</Text>
                  </VStack>
                </HStack>
                <HStack gap="3">
                  <Flex w="10" h="10" align="center" justify="center" rounded="lg" bg="brand.muted">
                    <Icon as={LuMapPin} color="brand.fg" />
                  </Flex>
                  <VStack align="start" gap="0">
                    <Text fontSize="xs" color="fg.muted">Office</Text>
                    <Text fontSize="sm" fontWeight="medium">{company.address.street}</Text>
                    <Text fontSize="xs" color="fg.muted">{company.address.suite}, {company.address.city}, {company.address.state} {company.address.zip}</Text>
                  </VStack>
                </HStack>
                <HStack gap="3">
                  <Flex w="10" h="10" align="center" justify="center" rounded="lg" bg="brand.muted">
                    <Icon as={LuClock} color="brand.fg" />
                  </Flex>
                  <VStack align="start" gap="0">
                    <Text fontSize="xs" color="fg.muted">Hours</Text>
                    <Text fontSize="sm" fontWeight="medium">Mon–Fri: 8AM–6PM</Text>
                    <Text fontSize="xs" color="fg.muted">Sat: 9AM–3PM</Text>
                  </VStack>
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Box>
      </Flex>
    </Section>
  )
}

function OfficeInfo() {
  return (
    <Section bg="bg.subtle">
      <SectionHeader title="Visit Our Office" description="We welcome walk-ins during business hours, or schedule an appointment for dedicated time with our team." />
      <Box
        maxW="3xl"
        mx="auto"
        h={{ base: "48", md: "64" }}
        rounded="xl"
        bgGradient="linear-gradient(135deg, #e8d5b7 0%, #b8860b33 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="border.subtle"
      >
        <VStack gap="2">
          <Icon as={LuMapPin} boxSize="8" color="brand.fg" />
          <Text fontWeight="semibold">{company.address.street}, {company.address.suite}</Text>
          <Text color="fg.muted">{company.address.city}, {company.address.state} {company.address.zip}</Text>
        </VStack>
      </Box>
    </Section>
  )
}

function OfficeHours() {
  return (
    <Section>
      <SectionHeader title="Office Hours" />
      <VStack gap="2" maxW="md" mx="auto" align="stretch">
        {company.hours.map((h) => (
          <HStack key={h.day} justify="space-between" py="2" borderBottom="1px solid" borderColor="border.subtle">
            <Text fontSize="sm" fontWeight="medium">{h.day}</Text>
            <Text fontSize="sm" color={h.time === "Closed" ? "red.500" : "fg.muted"}>{h.time}</Text>
          </HStack>
        ))}
      </VStack>
    </Section>
  )
}
