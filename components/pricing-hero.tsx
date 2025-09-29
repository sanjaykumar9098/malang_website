export default function PricingHero() {
  return (
    <section className="relative bg-dark-walnut py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-walnut/90 to-dark-walnut/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-light-ash mb-6">
          Transparent <span className="gold-gradient">Pricing</span>
        </h1>
        <p className="text-xl text-light-ash/80 max-w-3xl mx-auto leading-relaxed mb-8">
          Get clear, upfront pricing for all our interior design services. No hidden costs, no surprises - just honest,
          competitive rates for quality craftsmanship.
        </p>
        <div className="inline-flex items-center bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium">
          All prices are starting estimates • Final quote after free site visit
        </div>
      </div>
    </section>
  )
}
