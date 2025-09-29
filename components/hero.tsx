import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-dark-walnut min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-walnut/90 to-dark-walnut/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="gold-gradient">Malang Interiors</span>
            <br />
            <span className="text-light-ash">& Trolleys</span>
          </h1>

          <p className="text-xl md:text-2xl text-light-ash/90 mb-4 font-medium">Crafting Spaces, Enhancing Living</p>

          <p className="text-lg md:text-xl text-light-ash/80 mb-8 max-w-3xl leading-relaxed">
            Custom wooden furniture, complete interior design, painting, electrical, plumbing & home renovation in Pune,
            Maharashtra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                WhatsApp Us
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

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-light-ash text-light-ash hover:bg-light-ash hover:text-dark-walnut bg-transparent font-semibold text-lg px-8 py-4 h-auto"
              asChild
            >
              <a href="/contact">
                <FileText className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
            </Button>
          </div>

          <div className="text-light-ash/70">
            <p className="text-sm">
              <span className="text-gold font-medium">Serving:</span> Pune • PCMC • Mumbai
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
