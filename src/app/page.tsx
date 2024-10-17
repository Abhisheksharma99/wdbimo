import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import OurBusinesses from './components/OurBusiness'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <AboutUs />
      <OurBusinesses />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}