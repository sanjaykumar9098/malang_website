import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import PricingHero from "@/components/pricing-hero"
import PriceCard from "@/components/price-card"

export const metadata = {
  title: "Interior Design Pricing in Pune - Malang Interiors & Trolleys",
  description:
    "Transparent pricing for interior design services in Pune. Get starting prices for modular kitchens, wardrobes, furniture & complete home renovation.",
  keywords: "interior design cost pune, modular kitchen price pune, wardrobe cost pune, furniture pricing pune",
}

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "Modular Kitchen",
      startingPrice: "₹1,20,000",
      description: "Complete modular kitchen with premium finishes",
      features: [
        "8-10 linear feet coverage",
        "HDHMR cabinets with soft-close hinges",
        "Granite countertop",
        "Basic electrical & plumbing coordination",
        "1-year warranty",
      ],
      popular: true,
    },
    {
      title: "Custom Wardrobe",
      startingPrice: "₹35,000",
      description: "Spacious wardrobe with optimized storage",
      features: [
        "6-7 feet width coverage",
        "Plywood construction",
        "Laminate finish",
        "Interior accessories included",
        "Soft-close hardware",
      ],
      popular: false,
    },
    {
      title: "Living Room Furniture Set",
      startingPrice: "₹85,000",
      description: "Complete living room furniture package",
      features: [
        "Sofa set (3+2+1)",
        "Coffee table & side tables",
        "TV unit with storage",
        "Premium wood finish",
        "Custom cushioning",
      ],
      popular: false,
    },
    {
      title: "Bedroom Interior",
      startingPrice: "₹1,50,000",
      description: "Complete bedroom interior solution",
      features: [
        "Double bed with storage",
        "Wardrobe (8 feet)",
        "Dressing table with mirror",
        "Side tables (pair)",
        "Coordinated design theme",
      ],
      popular: false,
    },
    {
      title: "Painting Services",
      startingPrice: "₹12/sqft",
      description: "Professional painting with premium paints",
      features: [
        "Surface preparation included",
        "Premium paint brands",
        "2 coats application",
        "Clean-up after work",
        "Color consultation",
      ],
      popular: false,
    },
    {
      title: "Complete Home Renovation",
      startingPrice: "₹5,00,000",
      description: "Full home transformation package",
      features: [
        "Complete interior design",
        "All electrical & plumbing work",
        "Flooring & ceiling work",
        "Kitchen & bathroom renovation",
        "Project management included",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PricingHero />
        <section className="py-20 bg-light-ash">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PriceCard key={index} plan={plan} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-gold border border-gold/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-4">Important Pricing Notes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-dark-walnut mb-2">Final Quote Process</h4>
                    <p className="text-charcoal/70 text-sm">
                      All prices are starting estimates. Final quote provided after free site visit and requirement
                      assessment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-walnut mb-2">What's Included</h4>
                    <p className="text-charcoal/70 text-sm">
                      Prices include design, materials, labor, and installation. Transportation and site preparation may
                      be additional.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-walnut mb-2">Payment Terms</h4>
                    <p className="text-charcoal/70 text-sm">
                      Flexible payment options available. Typically 40% advance, 40% during work, 20% on completion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-walnut mb-2">Warranty Coverage</h4>
                    <p className="text-charcoal/70 text-sm">
                      1-year warranty on workmanship. Material warranty as per manufacturer terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
