import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Pune",
      rating: 5,
      text: "Malang Interiors transformed our kitchen completely. Sanjay and his team were professional, punctual, and delivered exactly what they promised. The quality of work is exceptional!",
      project: "Modular Kitchen",
    },
    {
      name: "Rajesh Patel",
      location: "PCMC",
      rating: 5,
      text: "We got our entire home renovated by Malang Interiors. From furniture to electrical work, everything was handled perfectly. Great value for money and excellent craftsmanship.",
      project: "Complete Home Renovation",
    },
    {
      name: "Anita Desai",
      location: "Pune",
      rating: 5,
      text: "The custom wardrobe they designed for our bedroom is amazing. Perfect use of space and beautiful finish. Highly recommend their services for anyone looking for quality interior work.",
      project: "Custom Wardrobe",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-walnut mb-4">
            What Our <span className="gold-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Pune
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light-ash p-8 rounded-2xl border border-gold/20 shadow-gold hover:shadow-walnut transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-gold mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-charcoal/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              <div className="border-t border-gold/20 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-serif font-semibold text-dark-walnut">{testimonial.name}</h4>
                    <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-burnt-orange font-medium">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
