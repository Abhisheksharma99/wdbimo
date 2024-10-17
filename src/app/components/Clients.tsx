'use client'

import { useState, useEffect, useRef } from 'react'
import { Milk, Factory, Cookie, Building2, Wheat, Beer, Egg, Recycle, Leaf, Utensils } from 'lucide-react'

const clients = [
  { name: "Amul Milk", Icon: Milk },
  { name: "Bankasta Co-operative", Icon: Factory },
  { name: "KM Sugar Mill Ayodhya", Icon: Cookie },
  { name: "Oriental Infrastructure", Icon: Building2 },
  { name: "Agri Solutions", Icon: Wheat },
  { name: "Craft Breweries", Icon: Beer },
  { name: "Poultry Farms Inc.", Icon: Egg },
  { name: "EcoWaste Management", Icon: Recycle },
  { name: "Green Gaushala", Icon: Leaf },
  { name: "Modern Meat Processing", Icon: Utensils }
]

export default function Clients() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 30)
    }

    if (!isHovered) {
      startScrolling()
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval)
    }
  }, [isHovered])

  return (
    <section id="clients" className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden scrollbar-hide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-4 w-32 transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <div className="flex flex-col items-center justify-center h-32 w-32 bg-white rounded-lg shadow-md">
                    <client.Icon size={48} className="text-green-600 mb-2" />
                    <p className="text-center text-sm px-2">{client.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}