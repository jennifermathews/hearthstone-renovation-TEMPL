import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  bg?: string
  py?: Record<string, string> | string
  id?: string
}

export function Section({ children, bg = "bg", py = { base: "12", md: "20" }, id }: SectionProps) {
  return (
    <Box as="section" bg={bg} py={py} id={id}>
      <Container maxW="7xl" px={{ base: "4", md: "6" }}>
        {children}
      </Container>
    </Box>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "center" | "start"
}

export function SectionHeader({ label, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <VStack gap="3" mb={{ base: "8", md: "12" }} align={align} textAlign={align}>
      {label && (
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="brand.fg"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          {label}
        </Text>
      )}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        fontFamily="'Playfair Display', serif"
        fontWeight="bold"
        lineHeight="tight"
        maxW="3xl"
      >
        {title}
      </Heading>
      {description && (
        <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted" maxW="2xl" lineHeight="tall">
          {description}
        </Text>
      )}
    </VStack>
  )
}

import { Image } from "@chakra-ui/react"

interface PageHeroProps {
  title: string
  description: string
  image?: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <Box
      bg="gray.900"
      py={{ base: "16", md: "24" }}
      position="relative"
      overflow="hidden"
    >
      {image && (
        <Image
          src={image}
          alt=""
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          objectFit="cover"
          opacity="0.3"
        />
      )}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear-gradient(135deg, rgba(26,15,5,0.85) 0%, rgba(45,24,16,0.8) 50%, rgba(26,35,50,0.85) 100%)"
      />
      <Container maxW="7xl" px={{ base: "4", md: "6" }} position="relative">
        <VStack gap="4" align="start" maxW="2xl">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
            color="white"
            lineHeight="tight"
          >
            {title}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.300" lineHeight="tall">
            {description}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
