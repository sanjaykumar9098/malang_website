import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"

export const metadata = {
  title: "About Malang Interiors & Trolleys - Sanjay Kumar, Interior Designer Pune",
  description:
    "Learn about Malang Interiors & Trolleys, led by proprietor Sanjay Kumar. Quality craftsmanship, GST-compliant billing, and 1-year warranty on all interior work in Pune.",
  keywords: "about malang interiors, sanjay kumar interior designer, pune interior designer, quality craftsmanship",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
