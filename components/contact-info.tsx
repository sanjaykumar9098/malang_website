"use client"

import { MapPin, Phone, Mail, Clock, Award, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <Card className="border-gold/20 shadow-gold">
        <CardHeader>
          <CardTitle className="text-2xl font-serif font-bold text-dark-walnut">
            Get in <span className="gold-gradient">Touch</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-dark-walnut" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-walnut mb-1">Visit Our Showroom</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Malang Interiors & Trolleys
                <br />
                Shop No. 15, Ground Floor
                <br />
                Furniture Market, Pune - 411001
                <br />
                Maharashtra, India
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-dark-walnut" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-walnut mb-1">Call or WhatsApp</h3>
              <p className="text-charcoal/70">
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                  +91-9876543210
                </a>
              </p>
              <p className="text-sm text-charcoal/60">Available: Mon-Sat, 9 AM - 7 PM</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-dark-walnut" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-walnut mb-1">Email Us</h3>
              <p className="text-charcoal/70">
                <a href="mailto:info@malanginteriors.com" className="hover:text-gold transition-colors">
                  info@malanginteriors.com
                </a>
              </p>
              <p className="text-sm text-charcoal/60">We respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-dark-walnut" />
            </div>
            <div>
              <h3 className="font-semibold text-dark-walnut mb-1">Business Hours</h3>
              <div className="text-charcoal/70 space-y-1">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: By Appointment Only</p>
                <p className="text-sm text-gold">Emergency consultations available</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <Card className="border-gold/20 shadow-gold bg-light-ash">
        <CardHeader>
          <CardTitle className="text-xl font-serif font-bold text-dark-walnut">Why Choose Us?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Award className="w-5 h-5 text-gold flex-shrink-0" />
            <span className="text-charcoal/80">15+ years of experience in interior design</span>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-gold flex-shrink-0" />
            <span className="text-charcoal/80">1-year warranty on all workmanship</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-gold flex-shrink-0" />
            <span className="text-charcoal/80">On-time project completion guarantee</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
            <span className="text-charcoal/80">Serving Pune, PCMC & Mumbai areas</span>
          </div>
        </CardContent>
      </Card>

      {/* Map Embed */}
      <Card className="border-gold/20 shadow-gold">
        <CardContent className="p-0">
          <div className="aspect-video bg-charcoal/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-serif font-semibold text-dark-walnut mb-2">Find Us on Map</h3>
              <p className="text-charcoal/70 mb-4">Located in the heart of Pune's furniture district</p>
              <button
                onClick={() => window.open("https://maps.google.com/?q=Malang+Interiors+Pune", "_blank")}
                className="bg-gold hover:bg-gold/90 text-dark-walnut px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Get Directions
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
