'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import WdbimoLogo from '../assets/WdbimoLogo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-green-600 text-white shadow-md' : 'bg-transparent text-white'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold flex"> <Image height={80} width={80} src={WdbimoLogo} alt='Logo' ></Image> <span className='mt-4 ms-2'>Wdbimo India pvt ltd </span></div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className={`hover:text-green-200 ${isScrolled ? 'font-semibold' : ''}`}>Home</a>
          <a href="#services" className={`hover:text-green-200 ${isScrolled ? 'font-semibold' : ''}`}>Services</a>
          <a href="#clients" className={`hover:text-green-200 ${isScrolled ? 'font-semibold' : ''}`}>Clients</a>
          <a href="#contact" className={`hover:text-green-200 ${isScrolled ? 'font-semibold' : ''}`}>Contact</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-green-600' : 'bg-green-600 bg-opacity-90'}`}>
          <a href="#" className="block py-2 px-4 text-sm text-white hover:bg-green-700">Home</a>
          <a href="#services" className="block py-2 px-4 text-sm text-white hover:bg-green-700">Services</a>
          <a href="#clients" className="block py-2 px-4 text-sm text-white hover:bg-green-700">Clients</a>
          <a href="#contact" className="block py-2 px-4 text-sm text-white hover:bg-green-700">Contact</a>
        </div>
      )}
    </header>
  )
}