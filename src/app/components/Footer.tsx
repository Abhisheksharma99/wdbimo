import Link from 'next/link';
import { Building, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <Building className="mr-2 h-6 w-6" />
              Wdbimo India Private Limited
            </h3>
            <p className="text-amber-200">Building innovative structures for agriculture and industry</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="#projects" className="hover:text-amber-400 transition-colors">Projects</Link></li>
              <li><Link href="#clients" className="hover:text-amber-400 transition-colors">Clients</Link></li>
              <li><Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:Wdbimoindia@gmail.com" className="hover:text-amber-400 transition-colors">info@wdbimo.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+919871838391" className="hover:text-amber-400 transition-colors">+91 9871838391</a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Faridabad, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Wdbimo India Private Limited. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed by:{' '}
            <a 
              href="https://abhishek-sharma-portfolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 hover:underline"
            >
              Abhishek Sharma
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}