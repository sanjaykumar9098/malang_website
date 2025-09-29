import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import GalleryHero from "@/components/gallery-hero"
import GalleryGrid from "@/components/gallery-grid"

export const metadata = {
  title: "Interior Design Gallery - Malang Interiors & Trolleys Portfolio",
  description:
    "Browse our portfolio of completed interior design projects in Pune. Kitchen, living room, bedroom, wardrobe & commercial interior designs.",
  keywords:
    "interior design portfolio pune, kitchen design gallery, bedroom interior pune, wardrobe designs, commercial interiors pune",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
