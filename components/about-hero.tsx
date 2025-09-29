export default function AboutHero() {
  return (
    <section className="relative bg-dark-walnut py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-walnut/90 to-dark-walnut/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-light-ash mb-6">
          About <span className="gold-gradient">Malang Interiors</span>
        </h1>
        <p className="text-xl text-light-ash/80 max-w-3xl mx-auto leading-relaxed">
          Crafting exceptional interiors with passion, precision, and unwavering commitment to quality since our
          inception in Pune.
        </p>
      </div>
    </section>
  )
}
