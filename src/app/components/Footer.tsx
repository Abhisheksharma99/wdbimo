import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import WdBimo from "../assets/wdbimo-high-resolution-logo-grayscale-transparent(1).png"

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 flex items-center">
            <Image src={WdBimo} alt='Logo' height={50} width={200}/>
            </h3>
            <p className="text-dark">Building innovative structures for all</p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="#projects" className="hover:text-amber-400 transition-colors">Projects</Link></li>
              <li><Link href="#clients" className="hover:text-amber-400 transition-colors">Clients</Link></li>
              <li><Link href="#contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-center">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:Wdbimoindia@gmail.com" className="hover:text-amber-400 transition-colors">info@wdbimo.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+919871838391" className="hover:text-amber-400 transition-colors">+91 9871838391</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+919852721697" className="hover:text-amber-400 transition-colors">+919852721697</a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Faridabad, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-dark">
          <p>&copy; 2019 - {new Date().getFullYear()} Wdbimo India Private Limited. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed by:{' '}
            <a 
              href="https://abhishek-sharma-portfolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-dark hover:underline"
            >
              Abhishek Sharma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
