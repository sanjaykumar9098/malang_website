import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Hero from "@/components/hero"
import TrustBadges from "@/components/trust-badges"
import Expertise from "@/components/expertise"
import ProcessSteps from "@/components/process-steps"
import FeaturedProjects from "@/components/featured-projects"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Expertise />
        <ProcessSteps />
        <FeaturedProjects />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
