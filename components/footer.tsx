import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-walnut text-light-ash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-serif font-bold mb-2">
                <span className="gold-gradient">Malang</span>
                <span className="text-light-ash"> Interiors & Trolleys</span>
              </h3>
              <p className="text-gold font-medium mb-2">Crafting Spaces, Enhancing Living</p>
              <p className="text-light-ash/80 mb-4">
                Pune's trusted team for custom wooden furniture, complete interior design, modular kitchens, and home
                renovation services.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-light-ash/70">
                <strong>Proprietor:</strong> Sanjay Kumar
              </p>
              <p className="text-sm text-light-ash/70">
                <strong>GST:</strong> Registered & Compliant
              </p>
              <p className="text-sm text-light-ash/70">
                <strong>Warranty:</strong> 1-Year Workmanship Guarantee
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-burnt-orange" />
                <a href="tel:+919665795871" className="text-light-ash hover:text-gold transition-colors">
                  +91 9665795871
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-burnt-orange" />
                <a href="mailto:hello@malanginteriors.in" className="text-light-ash hover:text-gold transition-colors">
                  hello@malanginteriors.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-burnt-orange mt-1" />
                <div className="text-light-ash">
                  <p>Pune, Maharashtra, India</p>
                  <p className="text-sm text-light-ash/70 mt-1">Service Areas: Pune • PCMC • Mumbai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-gold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-light-ash hover:text-gold transition-colors">
                  Custom Wooden Furniture
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light-ash hover:text-gold transition-colors">
                  Complete Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light-ash hover:text-gold transition-colors">
                  Modular Kitchens
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light-ash hover:text-gold transition-colors">
                  Kitchen Trolleys
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light-ash hover:text-gold transition-colors">
                  Wardrobes
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light-ash hover:text-gold transition-colors">
                  Home Renovation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-light-ash/70">© 2025 Malang Interiors & Trolleys. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-light-ash/70">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
