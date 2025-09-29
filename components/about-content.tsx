import { Award, Shield, Users, Clock } from "lucide-react"
import { assetUrl } from "@/lib/utils"

export default function AboutContent() {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every piece is crafted with attention to detail and premium materials",
    },
    {
      icon: Shield,
      title: "Warranty Assurance",
      description: "1-year warranty on all workmanship with ongoing support",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Your vision and satisfaction are at the heart of everything we do",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to project timelines without compromising on quality",
    },
  ]

  return (
    <section className="py-20">
      {/* About Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-walnut mb-6">
              Our <span className="gold-gradient">Story</span>
            </h2>
            <div className="space-y-6 text-charcoal/80 leading-relaxed">
              <p>
                Malang Interiors & Trolleys was founded with a simple yet powerful vision: to transform living spaces
                into beautiful, functional environments that reflect the unique personality and lifestyle of each
                client.
              </p>
              <p>
                Under the leadership of proprietor <strong className="text-dark-walnut">Sanjay Kumar</strong>, we have
                built a reputation for exceptional craftsmanship, innovative design solutions, and unwavering commitment
                to customer satisfaction across Pune and Maharashtra.
              </p>
              <p>
                From custom wooden furniture to complete home renovations, we bring together traditional craftsmanship
                with modern design sensibilities to create spaces that are both timeless and contemporary.
              </p>
            </div>
          </div>

          <div className="bg-light-ash p-8 rounded-2xl border border-gold/20">
            <img
              src={assetUrl("/sanjay-kumar-proprietor-malang-interiors-pune.jpg")}
              alt="Sanjay Kumar - Proprietor, Malang Interiors & Trolleys"
              className="w-full h-80 object-cover rounded-xl mb-6"
            />
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-2">Sanjay Kumar</h3>
              <p className="text-gold font-medium mb-4">Proprietor & Lead Designer</p>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                "Every space has the potential to be extraordinary. My passion lies in discovering that potential and
                bringing it to life through thoughtful design and meticulous craftsmanship."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-walnut mb-4">
              Our <span className="gold-gradient">Values</span>
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              The principles that guide every project and interaction with our valued clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl border border-gold/20 shadow-gold hover:shadow-walnut transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-dark-walnut" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-dark-walnut mb-3">{value.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Information */}
        <div className="bg-dark-walnut p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-serif font-bold text-light-ash mb-8">
            Why Choose <span className="gold-gradient">Malang Interiors?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-3">GST Compliant</h3>
              <p className="text-light-ash/80">
                Fully registered business with transparent, GST-compliant billing for all projects
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-3">Experienced Team</h3>
              <p className="text-light-ash/80">
                Skilled craftsmen and designers with years of experience in interior design and furniture making
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-3">Local Expertise</h3>
              <p className="text-light-ash/80">
                Deep understanding of Pune's architecture, climate, and lifestyle preferences
              </p>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8">
            <p className="text-light-ash/70 mb-4">
              <strong className="text-gold">Service Areas:</strong> Pune • PCMC • Mumbai and surrounding areas
            </p>
            <p className="text-light-ash/70">
              <strong className="text-gold">Business Hours:</strong> Monday to Saturday, 9:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
