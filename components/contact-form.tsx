"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create WhatsApp message with form data
    const whatsappMessage = `
New Interior Design Inquiry:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message: ${formData.message}
    `.trim()

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="border-gold/20 shadow-gold">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-4">Thank You!</h3>
          <p className="text-charcoal/70 leading-relaxed">
            Your inquiry has been sent via WhatsApp. We'll get back to you within 2 hours during business hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-gold/20 shadow-gold">
      <CardHeader>
        <CardTitle className="text-2xl font-serif font-bold text-dark-walnut">
          Get Your Free <span className="gold-gradient">Consultation</span>
        </CardTitle>
        <p className="text-charcoal/70">
          Fill out the form below and we'll send your details via WhatsApp for a quick response.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dark-walnut mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                className="border-gold/30 focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-walnut mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+91 9876543210"
                className="border-gold/30 focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-walnut mb-2">Email Address</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your.email@example.com"
              className="border-gold/30 focus:border-gold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dark-walnut mb-2">
                Service Required <span className="text-red-500">*</span>
              </label>
              <Select required value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger className="border-gold/30 focus:border-gold">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen Design</SelectItem>
                  <SelectItem value="bedroom">Bedroom Interior</SelectItem>
                  <SelectItem value="living-room">Living Room Design</SelectItem>
                  <SelectItem value="wardrobe">Wardrobe & Storage</SelectItem>
                  <SelectItem value="bathroom">Bathroom Design</SelectItem>
                  <SelectItem value="commercial">Commercial Interior</SelectItem>
                  <SelectItem value="complete-home">Complete Home Interior</SelectItem>
                  <SelectItem value="consultation">Design Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-walnut mb-2">Budget Range</label>
              <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                <SelectTrigger className="border-gold/30 focus:border-gold">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1-lakh">Under ₹1 Lakh</SelectItem>
                  <SelectItem value="1-3-lakh">₹1 - 3 Lakh</SelectItem>
                  <SelectItem value="3-5-lakh">₹3 - 5 Lakh</SelectItem>
                  <SelectItem value="5-10-lakh">₹5 - 10 Lakh</SelectItem>
                  <SelectItem value="above-10-lakh">Above ₹10 Lakh</SelectItem>
                  <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-walnut mb-2">Project Timeline</label>
            <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
              <SelectTrigger className="border-gold/30 focus:border-gold">
                <SelectValue placeholder="When do you want to start?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediately">Immediately</SelectItem>
                <SelectItem value="within-month">Within a Month</SelectItem>
                <SelectItem value="1-3-months">1-3 Months</SelectItem>
                <SelectItem value="3-6-months">3-6 Months</SelectItem>
                <SelectItem value="planning-stage">Just Planning</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-walnut mb-2">Project Details</label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your project requirements, space dimensions, style preferences, or any specific needs..."
              rows={4}
              className="border-gold/30 focus:border-gold"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold/90 text-dark-walnut font-semibold py-3 text-lg"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </>
            )}
          </Button>

          <p className="text-xs text-charcoal/60 text-center">
            By submitting this form, you agree to be contacted via WhatsApp for project discussions.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
