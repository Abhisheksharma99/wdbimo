'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Peb from '../assets/PEB.jpeg';
import Tank from '../assets/Tank.jpg';
import BioGas from '../assets/BioGas.jpg';

const businesses = [
  {
    title: 'PEB Structure',
    img: Peb, // Replace with your own image path
  },
  {
    title: 'Tank Vessel',
    img: Tank, // Replace with your own image path
  },
  {
    title: 'Bio Gas Plant',
    img: BioGas, // Replace with your own image path
  }
];

export default function OurBusinesses() {
  return (
    <section
      id="our-businesses"
      className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800"
        >
          Our Businesses
        </motion.h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-emerald-800"
            >
               <Image
                src={business.img} // Use the correct src format
                alt={business.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                layout="responsive" // Ensure the image scales correctly
                width={500} // Provide width
                height={300} // Provide height
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-emerald-700">
                  {business.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
