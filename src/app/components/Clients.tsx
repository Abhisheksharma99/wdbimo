'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Milk, Factory, Cookie, Building2, HardHat } from 'lucide-react'

const clients = [
  { name: "Amul Milk", Icon: Milk },
  { name: "Bankasta Co-operative", Icon: Factory },
  { name: "KM Sugar Mill Ayodhya", Icon: Cookie },
  { name: "Oriental Infrastructure", Icon: Building2 },
  { name: "Sahyog Industries", Icon: HardHat }
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
    <section id="clients" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-emerald-800"
        >
          Our Clients
        </motion.h2>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden scrollbar-hide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <motion.div 
                  key={index} 
                  className="flex-shrink-0 mx-4 w-32 transition-transform duration-300 ease-in-out hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center justify-center h-32 w-32 bg-white rounded-lg shadow-md border border-emerald-100">
                    <client.Icon size={48} className="text-amber-500 mb-2" />
                    <p className="text-center text-sm px-2 text-emerald-700">{client.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}