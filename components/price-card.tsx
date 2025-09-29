import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, Star } from "lucide-react"

interface PricePlan {
  title: string
  startingPrice: string
  description: string
  features: string[]
  popular: boolean
}

interface PriceCardProps {
  plan: PricePlan
}

export default function PriceCard({ plan }: PriceCardProps) {
  return (
    <div
      className={`relative bg-white p-8 rounded-2xl shadow-gold border-2 transition-all duration-300 hover:shadow-walnut hover:-translate-y-1 ${
        plan.popular ? "border-gold" : "border-gold/20"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gold text-dark-walnut px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-2">{plan.title}</h3>
        <div className="text-3xl font-bold text-gold mb-2">{plan.startingPrice}</div>
        <p className="text-charcoal/70">{plan.description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <span className="text-charcoal/80">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={`w-full ${
          plan.popular
            ? "bg-gold hover:bg-gold/90 text-dark-walnut"
            : "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-dark-walnut"
        } font-semibold`}
        asChild
      >
        <a
          href={`https://wa.me/919665795871?text=Hi%20Malang%20Interiors%2C%20I%27d%20like%20a%20quote%20for%20${plan.title}.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Get Quote
        </a>
      </Button>

      <p className="text-xs text-charcoal/50 text-center mt-4">
        Final price after site visit and requirement assessment
      </p>
    </div>
  )
}
