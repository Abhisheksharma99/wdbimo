'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import wdbimoDesign from '../assets/wdbimo design.jpg'

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800"
        >
          About Us
        </motion.h2>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-10 ms-8">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Wdbimo was established in 2019 at the faridabad hariyana location.
              We are leading in engineering, fabrication, infrastructure, agriculture and project management for a deverse range of industries to compile a total pre-engineered building solution. Beside pre-engineered building, WDBIMO has the   manufacturing facilities for industries logistics, construction, automobiles, railways, Materials handling, hospital,school.
            </p>
          </motion.div>
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <Image
              src={wdbimoDesign}
              alt="Design process"
              width={500}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}