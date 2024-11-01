'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Building } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';
import WdBimo from "../assets/wdbimo-high-resolution-logo-grayscale-transparent(1).png"

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-emerald-700 text-dark shadow-md}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Image src={WdBimo} alt='Logo' height={50} width={200}/>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className={`hover:text-amber-200 ${isScrolled ? 'font-semibold' : ''}`}>Home</Link>
          <Link href="#aboutus" className={`hover:text-amber-200 ${isScrolled ? 'font-semibold' : ''}`}>About Us</Link>
          <Link href="#services" className={`hover:text-amber-200 ${isScrolled ? 'font-semibold' : ''}`}>Services</Link>
          <Link href="#clients" className={`hover:text-amber-200 ${isScrolled ? 'font-semibold' : ''}`}>Clients</Link>
          <Link href="#contact" className={`hover:text-amber-200 ${isScrolled ? 'font-semibold' : ''}`}>Contact</Link>
        </nav>
        <button className="md:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-emerald-700' : 'bg-emerald-700 bg-opacity-90'}`}>
          <Link href="#" className="block py-2 px-4 text-sm text-dark hover:bg-emerald-600">Home</Link>
          <Link href="#services" className="block py-2 px-4 text-sm text-dark hover:bg-emerald-600">Services</Link>
          <Link href="#projects" className="block py-2 px-4 text-sm text-dark hover:bg-emerald-600">Projects</Link>
          <Link href="#clients" className="block py-2 px-4 text-sm text-dark hover:bg-emerald-600">Clients</Link>
          <Link href="#contact" className="block py-2 px-4 text-sm text-dark hover:bg-emerald-600">Contact</Link>
        </div>
      )}
    </header>
  )
}