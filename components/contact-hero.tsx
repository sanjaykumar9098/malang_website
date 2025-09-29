"use client"

import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactHero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in interior design services. Can you help me with a consultation?",
    )
    window.open(`https://wa.me/919665795871?text=${message}`, "_blank")
  }

  const handleCall = () => {
    window.open("tel:+919665795871", "_self")
  }

  return (
    <section className="relative bg-dark-walnut py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/textures/dark-walnut.jpg')] bg-cover bg-center" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-light-ash mb-6">
            Let's Create Your
            <span className="block gold-gradient">Dream Space</span>
          </h1>
          <p className="text-xl text-light-ash/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your home or office? Get in touch for a free consultation and let's discuss how we can
            bring your vision to life.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-light-ash/10 backdrop-blur-sm p-6 rounded-2xl border border-gold/20 text-center">
            <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-light-ash mb-2">Call Us</h3>
            <p className="text-light-ash/70 text-sm mb-4">Speak directly with our team</p>
            <Button onClick={handleCall} className="bg-gold hover:bg-gold/90 text-dark-walnut font-semibold w-full">
              +91-9665795871
            </Button>
          </div>

          <div className="bg-light-ash/10 backdrop-blur-sm p-6 rounded-2xl border border-gold/20 text-center">
            <MessageCircle className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-light-ash mb-2">WhatsApp</h3>
            <p className="text-light-ash/70 text-sm mb-4">Quick response guaranteed</p>
            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full"
            >
              Chat Now
            </Button>
          </div>

          <div className="bg-light-ash/10 backdrop-blur-sm p-6 rounded-2xl border border-gold/20 text-center">
            <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-light-ash mb-2">Email</h3>
            <p className="text-light-ash/70 text-sm mb-4">Detailed project discussions</p>
            <Button
              onClick={() => window.open("mailto:info@malanginteriors.com", "_self")}
              className="bg-burnt-orange hover:bg-burnt-orange/90 text-white font-semibold w-full"
            >
              Send Email
            </Button>
          </div>

          <div className="bg-light-ash/10 backdrop-blur-sm p-6 rounded-2xl border border-gold/20 text-center">
            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-light-ash mb-2">Visit Us</h3>
            <p className="text-light-ash/70 text-sm mb-4">See our work in person</p>
            <Button
              onClick={() => window.open("https://maps.google.com/?q=Malang+Interiors+Pune", "_blank")}
              className="bg-dark-walnut hover:bg-dark-walnut/90 text-light-ash border border-gold/30 font-semibold w-full"
            >
              Get Directions
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-light-ash/60 text-sm">
            <strong className="text-gold">Business Hours:</strong> Monday to Saturday, 9:00 AM - 7:00 PM
          </p>
        </div>
      </div>
    </section>
  )
}
