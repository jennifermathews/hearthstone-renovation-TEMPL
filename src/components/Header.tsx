import { Box, Container, Flex, HStack, IconButton, Button } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { LuMenu, LuX } from "react-icons/lu"
import MobileDrawer from "./MobileDrawer"
import Logo from "./Logo"
import { ColorModeButton } from "@/components/ui/color-mode"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Process", path: "/process" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
        bg={isScrolled ? "bg.panel" : "transparent"}
        backdropFilter={isScrolled ? "blur(12px)" : "none"}
        borderBottom={isScrolled ? "1px solid" : "none"}
        borderColor="border.subtle"
        transition="all 0.3s"
        py={isScrolled ? "2" : "4"}
      >
        <Container maxW="7xl" px={{ base: "4", md: "6" }}>
          <Flex align="center" justify="space-between">
            <Link to="/">
              <Logo />
            </Link>

            <HStack gap="1" hideBelow="md">
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  as={Link}
                  to={link.path}
                  variant="ghost"
                  size="sm"
                  fontWeight={location.pathname === link.path ? "bold" : "medium"}
                  color={location.pathname === link.path ? "brand.fg" : "fg"}
                  _hover={{ bg: "brand.muted" }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                as={Link}
                to="/contact"
                colorPalette="brand"
                variant="solid"
                size="sm"
                ml="2"
              >
                Free Estimate
              </Button>
              <ColorModeButton />
            </HStack>

            <HStack gap="1" hideFrom="md">
              <ColorModeButton />
              <IconButton
                aria-label="Open menu"
                variant="ghost"
                onClick={() => setDrawerOpen(true)}
                size="lg"
              >
                {drawerOpen ? <LuX /> : <LuMenu />}
              </IconButton>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} links={navLinks} />
    </>
  )
}
