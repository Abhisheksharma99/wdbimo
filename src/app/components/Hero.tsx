'use client'

import { motion } from 'framer-motion'

export default function Hero() {

  return (
    <div className="bg-gradient-to-br from-emerald-700 to-amber-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 mt-4"
        >
           Building the Future of Agriculture and Industry
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Innovative Construction Solutions for Agriculture anf farming
          </motion.p>
          </div>
          </div>
  )}