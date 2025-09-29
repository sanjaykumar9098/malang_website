import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata = {
  title: "Contact Malang Interiors & Trolleys - Interior Design Consultation Pune",
  description:
    "Get in touch for interior design consultation in Pune. Call +91-9876543210 or WhatsApp for kitchen, bedroom, wardrobe & commercial interior design services.",
  keywords:
    "interior design consultation pune, contact interior designer pune, kitchen design quote, bedroom interior consultation, wardrobe design pune",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactHero />
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
