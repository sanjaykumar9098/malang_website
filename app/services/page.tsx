import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import ServiceHero from "@/components/service-hero"
import ServiceCard from "@/components/service-card"
import { Sofa, PaintBucket, ChefHat, Shirt, Zap, Home } from "lucide-react"

export const metadata = {
  title: "Interior Design Services in Pune - Malang Interiors & Trolleys",
  description:
    "Complete interior design services in Pune including custom furniture, modular kitchens, wardrobes, painting, electrical & plumbing work. Get free quote today.",
  keywords:
    "interior design services pune, modular kitchen pune, custom furniture pune, wardrobe design pune, home renovation pune",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Sofa,
      title: "Custom Wooden Furniture",
      description: "Handcrafted furniture designed specifically for your space and lifestyle needs",
      inclusions: [
        "Design consultation & 3D visualization",
        "Premium quality wood selection",
        "Custom measurements & fitting",
        "Professional installation",
        "1-year warranty on craftsmanship",
      ],
      materials: ["Teak Wood", "Sheesham", "Mango Wood", "Engineered Wood", "Premium Laminates"],
      timeline: "2-4 weeks",
      startingPrice: "₹15,000",
      faqs: [
        {
          question: "What types of wood do you use?",
          answer:
            "We use premium quality teak, sheesham, mango wood, and engineered wood based on your budget and requirements.",
        },
        {
          question: "Do you provide design visualization?",
          answer:
            "Yes, we provide 3D design visualization so you can see exactly how your furniture will look before we start crafting.",
        },
      ],
    },
    {
      icon: Home,
      title: "Complete Interior Design",
      description: "End-to-end interior solutions transforming your entire home with cohesive design",
      inclusions: [
        "Complete space planning",
        "Interior design concepts",
        "Material selection & sourcing",
        "Project management",
        "Furniture & decor coordination",
      ],
      materials: ["Designer Tiles", "Premium Paints", "Quality Fixtures", "Branded Accessories", "Custom Lighting"],
      timeline: "6-12 weeks",
      startingPrice: "₹2,50,000",
      faqs: [
        {
          question: "Do you handle everything from design to execution?",
          answer:
            "Yes, we provide complete end-to-end service from initial design concepts to final installation and handover.",
        },
        {
          question: "Can I see design samples before starting?",
          answer: "We provide detailed design presentations with material samples and 3D visualizations.",
        },
      ],
    },
    {
      icon: ChefHat,
      title: "Modular Kitchens & Kitchen Trolleys",
      description: "Modern kitchen designs with smart storage solutions and premium finishes",
      inclusions: [
        "Kitchen layout planning",
        "Modular cabinet design",
        "Countertop installation",
        "Kitchen trolleys & accessories",
        "Electrical & plumbing coordination",
      ],
      materials: ["HDHMR Boards", "Soft-close Hinges", "Granite/Quartz Countertops", "SS Accessories", "LED Lighting"],
      timeline: "3-5 weeks",
      startingPrice: "₹1,20,000",
      faqs: [
        {
          question: "What's included in a modular kitchen?",
          answer:
            "Complete kitchen setup including cabinets, countertops, storage solutions, and coordination with electrical/plumbing work.",
        },
        {
          question: "Do you provide kitchen trolleys separately?",
          answer:
            "Yes, we design and manufacture custom kitchen trolleys starting from ₹8,000 based on size and features.",
        },
      ],
    },
    {
      icon: Shirt,
      title: "Custom Wardrobes",
      description: "Spacious wardrobe designs with optimized storage and elegant aesthetics",
      inclusions: [
        "Space optimization planning",
        "Custom compartment design",
        "Sliding/hinged door options",
        "Interior accessories & fittings",
        "Mirror & lighting integration",
      ],
      materials: ["Plywood/HDHMR", "Laminate Finishes", "Soft-close Hardware", "LED Strip Lights", "Mirrors"],
      timeline: "2-3 weeks",
      startingPrice: "₹35,000",
      faqs: [
        {
          question: "Can you design wardrobes for small spaces?",
          answer:
            "Yes, we specialize in space optimization and can design efficient wardrobes even for compact bedrooms.",
        },
        {
          question: "What door options are available?",
          answer:
            "We offer both sliding and hinged door options with various finishes including mirrors, laminates, and glass.",
        },
      ],
    },
    {
      icon: PaintBucket,
      title: "Painting, Electrical & Plumbing",
      description: "Complete home services including professional painting and utility installations",
      inclusions: [
        "Surface preparation & priming",
        "Premium paint application",
        "Electrical wiring & fixtures",
        "Plumbing installations",
        "Safety compliance checks",
      ],
      materials: ["Asian Paints", "Berger Paints", "Havells Electricals", "Hindware Fittings", "Quality Pipes & Wires"],
      timeline: "1-3 weeks",
      startingPrice: "₹12/sqft",
      faqs: [
        {
          question: "What paint brands do you use?",
          answer:
            "We use premium brands like Asian Paints, Berger, and Dulux with options for different budgets and finishes.",
        },
        {
          question: "Do you handle electrical and plumbing together?",
          answer:
            "Yes, we coordinate all services to ensure proper integration and avoid any conflicts during execution.",
        },
      ],
    },
    {
      icon: Zap,
      title: "Full Home Renovation",
      description: "Complete home transformation including structural changes and modern upgrades",
      inclusions: [
        "Structural assessment & planning",
        "Complete interior renovation",
        "Electrical & plumbing upgrades",
        "Flooring & ceiling work",
        "Final finishing & handover",
      ],
      materials: [
        "Quality Construction Materials",
        "Modern Fixtures",
        "Premium Finishes",
        "Energy-efficient Solutions",
      ],
      timeline: "8-16 weeks",
      startingPrice: "₹5,00,000",
      faqs: [
        {
          question: "Do you handle structural changes?",
          answer:
            "Yes, we work with certified structural engineers for any major modifications and ensure all safety standards.",
        },
        {
          question: "Can I stay in the house during renovation?",
          answer:
            "We plan the work in phases to minimize disruption, though complete renovation may require temporary relocation.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServiceHero />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
