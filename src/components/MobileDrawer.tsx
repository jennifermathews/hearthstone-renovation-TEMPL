import { Box, VStack, Button, Text, Separator } from "@chakra-ui/react"
import { Drawer, Portal } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { LuPhone } from "react-icons/lu"
import { company } from "@/data/content"

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
  links: { label: string; path: string }[]
}

export default function MobileDrawer({ open, onClose, links }: MobileDrawerProps) {
  const location = useLocation()

  return (
    <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end" size="xs">
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="bg.panel">
            <Drawer.Header borderBottom="1px solid" borderColor="border.subtle">
              <Drawer.Title fontFamily="'Playfair Display', serif" fontSize="lg">
                Menu
              </Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <Button variant="ghost" size="sm" position="absolute" top="3" right="3">
                  Close
                </Button>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body py="4">
              <VStack gap="1" align="stretch">
                {links.map((link) => (
                  <Button
                    key={link.path}
                    as={Link}
                    to={link.path}
                    variant={location.pathname === link.path ? "subtle" : "ghost"}
                    colorPalette={location.pathname === link.path ? "brand" : "gray"}
                    justifyContent="flex-start"
                    size="lg"
                    onClick={onClose}
                  >
                    {link.label}
                  </Button>
                ))}
                <Separator my="2" />
                <Button
                  as={Link}
                  to="/faq"
                  variant="ghost"
                  justifyContent="flex-start"
                  size="lg"
                  onClick={onClose}
                >
                  FAQ
                </Button>
                <Button
                  as={Link}
                  to="/areas"
                  variant="ghost"
                  justifyContent="flex-start"
                  size="lg"
                  onClick={onClose}
                >
                  Service Areas
                </Button>
                <Button
                  as={Link}
                  to="/financing"
                  variant="ghost"
                  justifyContent="flex-start"
                  size="lg"
                  onClick={onClose}
                >
                  Financing
                </Button>
              </VStack>
            </Drawer.Body>
            <Drawer.Footer borderTop="1px solid" borderColor="border.subtle">
              <Box w="full">
                <Button
                  as="a"
                  href={`tel:${company.phone}`}
                  w="full"
                  colorPalette="brand"
                  variant="solid"
                  size="lg"
                >
                  <LuPhone />
                  <Text>Call {company.phone}</Text>
                </Button>
              </Box>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
