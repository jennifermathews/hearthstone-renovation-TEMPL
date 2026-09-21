import { HStack, Text, Image } from "@chakra-ui/react"

export default function Logo() {
  return (
    <HStack gap="2">
      <Image src="/logo.webp" alt="Hearthstone" w="8" h="8" objectFit="contain" />
      <Text
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="bold"
        fontFamily="'Playfair Display', serif"
        color="fg"
        lineHeight="1"
      >
        Hearthstone Renovation Co.
      </Text>
    </HStack>
  )
}
