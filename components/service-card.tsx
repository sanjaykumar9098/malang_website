import { Button } from "@/components/ui/button"
import { Clock, IndianRupee, CheckCircle, MessageCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceProps {
  icon: LucideIcon
  title: string
  description: string
  inclusions: string[]
  materials: string[]
  timeline: string
  startingPrice: string
  faqs: { question: string; answer: string }[]
}

interface ServiceCardProps {
  service: ServiceProps
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
      {/* Content */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <div className="flex items-center mb-6">
          <div className="p-4 bg-gold rounded-2xl mr-4">
            <service.icon className="w-8 h-8 text-dark-walnut" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark-walnut">{service.title}</h2>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center text-burnt-orange">
                <IndianRupee className="w-4 h-4 mr-1" />
                <span className="font-semibold">Starting {service.startingPrice}</span>
              </div>
              <div className="flex items-center text-charcoal/60">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">{service.timeline}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">{service.description}</p>

        {/* Inclusions */}
        <div className="mb-8">
          <h3 className="text-xl font-serif font-semibold text-dark-walnut mb-4">What's Included</h3>
          <div className="grid grid-cols-1 gap-3">
            {service.inclusions.map((inclusion, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-charcoal/70">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="mb-8">
          <h3 className="text-xl font-serif font-semibold text-dark-walnut mb-4">Materials & Brands</h3>
          <div className="flex flex-wrap gap-2">
            {service.materials.map((material, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-light-ash text-charcoal/70 rounded-full text-sm border border-gold/20"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        <Button size="lg" className="bg-gold hover:bg-gold/90 text-dark-walnut font-semibold" asChild>
          <a
            href="https://wa.me/919665795871?text=Hi%20Malang%20Interiors%2C%20I%27d%20like%20a%20quote%20for%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Quote for {service.title}
          </a>
        </Button>
      </div>

      {/* FAQ Section */}
      <div className={`bg-light-ash p-8 rounded-2xl border border-gold/20 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {service.faqs.map((faq, i) => (
            <div key={i}>
              <h4 className="font-semibold text-dark-walnut mb-2">{faq.question}</h4>
              <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-white rounded-xl border border-gold/20">
          <p className="text-sm text-charcoal/60 mb-2">
            <strong>Note:</strong> Final pricing depends on specific requirements, materials chosen, and site
            conditions.
          </p>
          <p className="text-sm text-burnt-orange font-medium">Free site visit and detailed quote provided.</p>
        </div>
      </div>
    </div>
  )
}
