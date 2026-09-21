import { Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"
import HomePage from "@/pages/HomePage"
import ServicesPage from "@/pages/ServicesPage"
import KitchenPage from "@/pages/KitchenPage"
import BathroomPage from "@/pages/BathroomPage"
import WholeHomePage from "@/pages/WholeHomePage"
import AdditionsPage from "@/pages/AdditionsPage"
import OutdoorPage from "@/pages/OutdoorPage"
import InteriorPage from "@/pages/InteriorPage"
import AboutPage from "@/pages/AboutPage"
import GalleryPage from "@/pages/GalleryPage"
import ProcessPage from "@/pages/ProcessPage"
import ContactPage from "@/pages/ContactPage"
import ReviewsPage from "@/pages/ReviewsPage"
import FAQPage from "@/pages/FAQPage"
import AreasPage from "@/pages/AreasPage"
import FinancingPage from "@/pages/FinancingPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/kitchen" element={<KitchenPage />} />
        <Route path="services/bathroom" element={<BathroomPage />} />
        <Route path="services/whole-home" element={<WholeHomePage />} />
        <Route path="services/additions" element={<AdditionsPage />} />
        <Route path="services/outdoor" element={<OutdoorPage />} />
        <Route path="services/interior" element={<InteriorPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="areas" element={<AreasPage />} />
        <Route path="financing" element={<FinancingPage />} />
      </Route>
    </Routes>
  )
}

export default App
