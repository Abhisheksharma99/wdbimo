'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Image1 from "../assets/WdBimopp Image 2024-10-19 at 10.52.51 AM(1).jpeg"
import Image2 from "../assets/WdBimopp Image 2024-10-19 at 10.52.51 AM(2).jpeg"
import Image3 from "../assets/WdBimopp Image 2024-10-19 at 10.52.51 AM.jpeg"
import Image4 from "../assets/WdBimopp Image 2024-10-19 at 10.52.52 AM(1).jpeg"
import Image5 from "../assets/WdBimopp Image 2024-10-19 at 10.52.52 AM(2).jpeg"
import Image6 from "../assets/WdBimopp Image 2024-10-19 at 10.52.52 AM.jpeg"
import Image7 from "../assets/WdBimopp Image 2024-10-19 at 10.52.53 AM(1).jpeg"
import Image8 from "../assets/WdBimopp Image 2024-10-19 at 10.52.53 AM(2).jpeg"
import Image9 from "../assets/WdBimopp Image 2024-10-19 at 10.52.53 AM.jpeg"
import Image10 from "../assets/WdBimopp Image 2024-10-19 at 10.52.54 AM(1).jpeg"
import Image11 from "../assets/WdBimopp Image 2024-10-19 at 10.52.54 AM(2).jpeg"
import Image12 from "../assets/WdBimopp Image 2024-10-19 at 10.52.54 AM.jpeg"
import Image13 from "../assets/WdBimopp Image 2024-10-19 at 10.52.55 AM(1).jpeg"
import Image14 from "../assets/WdBimopp Image 2024-10-19 at 10.52.55 AM(2).jpeg"
import Image15 from "../assets/WdBimopp Image 2024-10-19 at 10.52.56 AM.jpeg"

const images = [
    Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15
]

export default function AutoCarousel() {
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
        <div className="w-full bg-gradient-to-br from-emerald-50 to-amber-50 pt-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-emerald-800 mb-4">Welcome to Wdbimo India Private Limited</h2>
                    <h3 className="text-3xl font-semibold text-amber-600 mb-6">Engineering Excellence Since 2019</h3>
                    <p className="text-2xl text-emerald-700 max-w-3xl mx-auto">
                        We are leading in engineering, fabrication, infrastructure, and project management for a diverse range of industries, offering a total PEB solution. Established in 2019 at the location of Faridabad Haryana, we have been at the forefront of innovation and quality in the construction industry.
                    </p>
                </div>
                <div 
                    className="relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-hidden"
                    >
                        <div className="flex animate-scroll">
                            {[...images].map((image, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex-shrink-0 w-64 h-64 mx-2 overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                                >
                                    <Image
                                        src={image}
                                        alt={`Wdbimo India project ${index + 1}`}
                                        width={256}
                                        height={256}
                                        objectFit="cover"
                                        className='h-64'
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}