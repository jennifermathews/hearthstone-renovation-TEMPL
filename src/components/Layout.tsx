import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  return (
    <Box minH="100dvh" display="flex" flexDirection="column">
      <ScrollToTop />
      <Header />
      <Box as="main" flex="1" pt={{ base: "16", md: "18" }} pb={{ base: "20", md: "0" }}>
        <Outlet />
      </Box>
      <Footer />
      <MobileNav />
    </Box>
  )
}
