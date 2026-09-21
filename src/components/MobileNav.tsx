import { Box, HStack, VStack, Text, Icon } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { LuHouse, LuHammer, LuImage, LuStar, LuPhone } from "react-icons/lu"

const tabs = [
  { label: "Home", path: "/", icon: LuHouse },
  { label: "Services", path: "/services", icon: LuHammer },
  { label: "Gallery", path: "/gallery", icon: LuImage },
  { label: "Reviews", path: "/reviews", icon: LuStar },
  { label: "Contact", path: "/contact", icon: LuPhone },
]

export default function MobileNav() {
  const location = useLocation()

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="bg.panel"
      borderTop="1px solid"
      borderColor="border.subtle"
      hideFrom="md"
      zIndex="docked"
      pb="env(safe-area-inset-bottom)"
      backdropFilter="blur(12px)"
    >
      <HStack justify="space-around" py="2" px="2">
        {tabs.map((tab) => {
          const isActive = tab.path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(tab.path)
          return (
            <Link key={tab.path} to={tab.path} style={{ flex: 1 }}>
              <VStack gap="0.5" align="center">
                <Icon
                  as={tab.icon}
                  boxSize="5"
                  color={isActive ? "brand.fg" : "fg.muted"}
                  transition="color 0.2s"
                />
                <Text
                  fontSize="2xs"
                  fontWeight={isActive ? "semibold" : "normal"}
                  color={isActive ? "brand.fg" : "fg.muted"}
                  transition="color 0.2s"
                >
                  {tab.label}
                </Text>
              </VStack>
            </Link>
          )
        })}
      </HStack>
    </Box>
  )
}
