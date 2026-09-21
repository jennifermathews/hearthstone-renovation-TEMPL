import { Box, Container, SimpleGrid, VStack, HStack, Text, Separator, Icon, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu"
import { company, serviceAreas } from "@/data/content"

export default function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="gray.100" mb={{ base: "16", md: "0" }}>
      <Container maxW="7xl" px="6" py="16">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="10">
          <VStack align="start" gap="4">
            <HStack gap="2">
              <Image src="/logo.webp" alt="Hearthstone" w="6" h="6" objectFit="contain" />
              <Text fontFamily="'Playfair Display', serif" fontSize="xl" fontWeight="bold" color="white">
                Hearthstone
              </Text>
            </HStack>
            <Text fontSize="sm" color="gray.400" lineHeight="tall">
              {company.shortDescription}
            </Text>
            <VStack align="start" gap="2" mt="2">
              <HStack gap="2">
                <Icon as={LuPhone} color="brand.400" />
                <Text fontSize="sm">{company.phone}</Text>
              </HStack>
              <HStack gap="2">
                <Icon as={LuMail} color="brand.400" />
                <Text fontSize="sm">{company.email}</Text>
              </HStack>
              <HStack gap="2">
                <Icon as={LuMapPin} color="brand.400" />
                <Text fontSize="sm">{company.address.street}, {company.address.city}, {company.address.state}</Text>
              </HStack>
              <HStack gap="2">
                <Icon as={LuClock} color="brand.400" />
                <Text fontSize="sm">Mon–Fri: 8AM–6PM | Sat: 9AM–3PM</Text>
              </HStack>
            </VStack>
          </VStack>

          <VStack align="start" gap="3">
            <Text fontWeight="bold" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              Services
            </Text>
            {[
              { label: "Kitchen Remodeling", path: "/services/kitchen" },
              { label: "Bathroom Remodeling", path: "/services/bathroom" },
              { label: "Whole Home Renovation", path: "/services/whole-home" },
              { label: "Room Additions", path: "/services/additions" },
              { label: "Outdoor Living", path: "/services/outdoor" },
              { label: "Interior Upgrades", path: "/services/interior" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <Text fontSize="sm" color="gray.400" _hover={{ color: "brand.300" }} transition="color 0.2s">
                  {item.label}
                </Text>
              </Link>
            ))}
          </VStack>

          <VStack align="start" gap="3">
            <Text fontWeight="bold" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              Company
            </Text>
            {[
              { label: "About Us", path: "/about" },
              { label: "Our Process", path: "/process" },
              { label: "Gallery", path: "/gallery" },
              { label: "Reviews", path: "/reviews" },
              { label: "FAQ", path: "/faq" },
              { label: "Financing", path: "/financing" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <Text fontSize="sm" color="gray.400" _hover={{ color: "brand.300" }} transition="color 0.2s">
                  {item.label}
                </Text>
              </Link>
            ))}
          </VStack>

          <VStack align="start" gap="3">
            <Text fontWeight="bold" color="white" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
              Service Areas
            </Text>
            {serviceAreas.slice(0, 8).map((area) => (
              <Link key={area} to="/areas">
                <Text fontSize="sm" color="gray.400" _hover={{ color: "brand.300" }} transition="color 0.2s">
                  {area}
                </Text>
              </Link>
            ))}
            <Link to="/areas">
              <Text fontSize="sm" color="brand.300" fontWeight="medium">
                View all areas →
              </Text>
            </Link>
          </VStack>
        </SimpleGrid>

        <Separator my="8" borderColor="gray.700" />

        <HStack justify="space-between" flexWrap="wrap" gap="4">
          <Text fontSize="xs" color="gray.500">
            © {new Date().getFullYear()} {company.legalName}. All rights reserved. Licensed & Insured.
          </Text>
          <HStack gap="4">
            <Text fontSize="xs" color="gray.500">NAHB Member</Text>
            <Text fontSize="xs" color="gray.500">NKBA Member</Text>
            <Text fontSize="xs" color="gray.500">BBB Accredited</Text>
            <Text fontSize="xs" color="gray.500">EPA Lead-Safe</Text>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
