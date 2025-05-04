"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Accommodations", href: "/accommodations" },
  { name: "Facilities", href: "/facilities" },
  { name: "Experiences", href: "/experiences" },
  { name: "Dining", href: "/dining" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="container-custom flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-playfair font-bold text-emerald-800">
            Graha Ayoe
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-emerald-700 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Book now button */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button type="button" className="text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
