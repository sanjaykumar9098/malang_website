import { MapPin, Palette, Hammer, HandHeart } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      icon: MapPin,
      number: "01",
      title: "Site Visit",
      description: "Free consultation and space assessment at your location",
    },
    {
      icon: Palette,
      number: "02",
      title: "Design",
      description: "Custom design creation based on your requirements and preferences",
    },
    {
      icon: Hammer,
      number: "03",
      title: "Execute",
      description: "Professional installation and construction with quality materials",
    },
    {
      icon: HandHeart,
      number: "04",
      title: "Handover",
      description: "Final inspection and project handover with warranty documentation",
    },
  ]

  return (
    <section className="py-20 bg-dark-walnut">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-light-ash mb-4">
            Our <span className="gold-gradient">Process</span>
          </h2>
          <p className="text-lg text-light-ash/70 max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results, from initial consultation to final handover
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-dark-walnut" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-3">{step.title}</h3>
              <p className="text-light-ash/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
