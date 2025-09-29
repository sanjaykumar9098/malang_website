import { Sofa, PaintBucket, ChefHat, Shirt, Zap, Home } from "lucide-react"

export default function Expertise() {
  const services = [
    {
      icon: Sofa,
      title: "Custom Wooden Furniture",
      description: "Handcrafted furniture tailored to your space and style preferences",
    },
    {
      icon: Home,
      title: "Complete Interior Design",
      description: "End-to-end interior solutions from concept to completion",
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens & Trolleys",
      description: "Modern kitchen designs with smart storage solutions",
    },
    {
      icon: Shirt,
      title: "Wardrobes",
      description: "Custom wardrobes with optimized storage and elegant designs",
    },
    {
      icon: PaintBucket,
      title: "Painting & Finishing",
      description: "Professional painting services with premium quality finishes",
    },
    {
      icon: Zap,
      title: "Electrical & Plumbing",
      description: "Complete electrical and plumbing solutions for your home",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-walnut mb-4">
            Our <span className="gold-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            From custom furniture to complete home renovation, we bring your vision to life with exceptional
            craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-light-ash rounded-2xl border border-gold/20 hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gold/20 group-hover:border-gold/40 transition-colors">
                  <service.icon className="w-6 h-6 text-burnt-orange" />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-dark-walnut mb-3">{service.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
