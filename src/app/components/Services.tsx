'use client'

import * as FaIcons from 'react-icons/fa'

const services = [
  {
    title: "Pre-engineered Buildings",
    description: "Custom-designed metal buildings for rapid construction and cost-effectiveness.",
    IconComponent: FaIcons.FaBuilding
  },
  {
    title: "Pre-Fabricated Structures",
    description: "Factory-built components for quick on-site assembly and reduced construction time.",
    IconComponent: FaIcons.FaWarehouse
  },
  {
    title: "Pre-fabricated Infrastructure",
    description: "Modular infrastructure solutions for efficient and scalable development projects.",
    IconComponent: FaIcons.FaTools
  },
  {
    title: "Prefab Site Office",
    description: "Portable, ready-to-use office spaces for construction sites and temporary setups.",
    IconComponent: FaIcons.FaBriefcase
  },
  {
    title: "Portable Cabin",
    description: "Mobile living and working spaces for remote locations or temporary housing needs.",
    IconComponent: FaIcons.FaHome
  },
  {
    title: "Industrial Building Construction",
    description: "Comprehensive solutions for manufacturing facilities, warehouses, and industrial complexes.",
    IconComponent: FaIcons.FaIndustry
  },
  {
    title: "Construction",
    description: "Full-service construction management for diverse building projects.",
    IconComponent: FaIcons.FaHardHat
  },
  {
    title: "Institution",
    description: "Specialized construction services for educational and healthcare facilities.",
    IconComponent: FaIcons.FaSchool
  },
  {
    title: "Infrastructure",
    description: "Large-scale infrastructure development for public and private sector projects.",
    IconComponent: FaIcons.FaCity
  },
  {
    title: "Residential Sector",
    description: "Quality housing solutions from individual homes to large-scale residential complexes.",
    IconComponent: FaIcons.FaHome
  },
  {
    title: "Tank",
    description: "Custom-designed storage tanks for various industrial and agricultural applications.",
    IconComponent: FaIcons.FaDrumSteelpan
  },
  {
    title: "Pressure Vessel",
    description: "High-quality pressure vessels for industrial processes and storage needs.",
    IconComponent: FaIcons.FaFlask
  },
  {
    title: "Bio-Gas Plant",
    description: "Eco-friendly biogas production facilities for sustainable energy generation.",
    IconComponent: FaIcons.FaWind
  },
  {
    title: "WTP (Water Treatment Plant)",
    description: "Advanced water treatment solutions for clean and safe water supply.",
    IconComponent: FaIcons.FaTint
  },
  {
    title: "STP (Sewage Treatment Plant)",
    description: "Efficient sewage treatment systems for environmental protection and water reclamation.",
    IconComponent: FaIcons.FaTint
  },
  {
    title: "Cylinder",
    description: "Manufacturing and maintenance of industrial cylinders for various applications.",
    IconComponent: FaIcons.FaDrumSteelpan
  },
  {
    title: "Hydroponics Agriculture",
    description: "Innovative soilless farming structures for high-yield, water-efficient crop production.",
    IconComponent: FaIcons.FaLeaf
  },
  {
    title: "Poultry Shed",
    description: "State-of-the-art poultry housing designed for optimal bird health and productivity.",
    IconComponent: FaIcons.FaEgg
  },
  {
    title: "Fish and Poultry Shade",
    description: "Integrated facilities for fish and poultry farming, maximizing land use and production.",
    IconComponent: FaIcons.FaFish
  },
  {
    title: "Railway",
    description: "Specialized construction and fabrication services for railway infrastructure projects.",
    IconComponent: FaIcons.FaTrain
  },
  {
    title: "Fabrication Products",
    description: "Custom metal fabrication services for diverse industrial and construction needs.",
    IconComponent: FaIcons.FaWrench
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-emerald-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.IconComponent size={24} className="text-amber-500 mr-3" />
                  <h3 className="text-xl font-semibold text-emerald-700">{service.title}</h3>
                </div>
                <p className="text-emerald-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}