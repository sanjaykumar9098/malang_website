import { Shield, Clock, Award } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Clock,
      title: "On-time Delivery",
      description: "Committed to project timelines",
    },
    {
      icon: Award,
      title: "Skilled Crew",
      description: "Experienced craftsmen & designers",
    },
    {
      icon: Shield,
      title: "1-Year Warranty",
      description: "Workmanship guarantee",
    },
  ]

  return (
    <section className="py-16 bg-light-ash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-gold border border-gold/20"
            >
              <div className="flex-shrink-0">
                <badge.icon className="w-8 h-8 text-burnt-orange" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-dark-walnut mb-1">{badge.title}</h3>
                <p className="text-charcoal/70 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
