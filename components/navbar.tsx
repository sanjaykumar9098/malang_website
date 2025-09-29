"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gold-thin shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-serif font-bold text-dark-walnut">
              <span className="gold-gradient">Malang</span>
              <span className="text-dark-walnut"> Interiors</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-gold text-gold hover:bg-gold hover:text-dark-walnut bg-transparent"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-gold hover:bg-gold/90 text-dark-walnut font-medium" asChild>
              <a
                href="https://wa.me/919876543210?text=Hi%20Malang%20Interiors%2C%20I%27d%20like%20a%20free%20consultation%20for%20interior%20design%20in%20Pune."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-charcoal">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gold-thin">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-charcoal hover:text-gold transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gold text-gold hover:bg-gold hover:text-dark-walnut bg-transparent"
                  asChild
                >
                  <a href="tel:+919876543210">
                    <Phone className="w-4 h-4 mr-2" />
                    Call +91 9876543210
                  </a>
                </Button>
                <Button size="sm" className="bg-gold hover:bg-gold/90 text-dark-walnut font-medium" asChild>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Malang%20Interiors%2C%20I%27d%20like%20a%20free%20consultation%20for%20interior%20design%20in%20Pune."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
