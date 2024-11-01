import Header from './components/Header'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import OurBusinesses from './components/OurBusiness'
import AutoCarousel from './components/HomeCarousel'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <AutoCarousel />
      <AboutUs />
      <OurBusinesses />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}