import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-dark-walnut">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-light-ash mb-6">
          Ready to Transform <span className="gold-gradient">Your Space?</span>
        </h2>

        <p className="text-xl text-light-ash/80 mb-8 leading-relaxed">
          Get a free consultation and quote for your interior design project. Let's bring your vision to life with our
          expert craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-dark-walnut font-semibold text-lg px-8 py-4 h-auto"
            asChild
          >
            <a
              href="https://wa.me/919665795871?text=Hi%20Malang%20Interiors%2C%20I%27d%20like%20a%20free%20site%20visit%20in%20Pune."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp for Free Quote
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-dark-walnut bg-transparent font-semibold text-lg px-8 py-4 h-auto"
            asChild
          >
            <a href="tel:+919665795871">
              <Phone className="w-5 h-5 mr-2" />
              Call +91 9665795871
            </a>
          </Button>
        </div>

        <div className="mt-8 text-light-ash/60 text-sm">
          <p>Free site visit • No obligation quote • 1-year warranty</p>
        </div>
      </div>
    </section>
  )
}
