"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { assetUrl } from "@/lib/utils"

export default function FeaturedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "Kitchen",
      before: assetUrl("/old-traditional-kitchen-before-renovation.jpg"),
      after: assetUrl("/modern-modular-kitchen-with-wooden-cabinets-and-go.jpg"),
      description: "Complete kitchen transformation with modular design and premium finishes",
    },
    {
      id: 2,
      title: "Living Room Interior",
      category: "Living Room",
      before: assetUrl("/empty-living-room-before-interior-design.jpg"),
      after: assetUrl("/elegant-living-room-with-wooden-furniture-and-warm.jpg"),
      description: "Elegant living space with custom wooden furniture and warm lighting",
    },
    {
      id: 3,
      title: "Master Bedroom Wardrobe",
      category: "Bedroom",
      before: assetUrl("/bedroom-without-wardrobe-storage.jpg"),
      after: assetUrl("/bedroom-with-large-wooden-wardrobe-and-organized-s.jpg"),
      description: "Spacious wardrobe design with optimized storage solutions",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 bg-light-ash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-walnut mb-4">
            Featured <span className="gold-gradient">Projects</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            See the transformation we bring to homes across Pune with our expert craftsmanship
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-walnut">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Before */}
                    <div className="relative">
                      <img
                        src={project.before || "/placeholder.svg"}
                        alt={`${project.title} - Before`}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-dark-walnut/80 text-light-ash px-3 py-1 rounded-full text-sm font-medium">
                        Before
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative">
                      <img
                        src={project.after || "/placeholder.svg"}
                        alt={`${project.title} - After`}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gold text-dark-walnut px-3 py-1 rounded-full text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-burnt-orange font-medium bg-burnt-orange/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-3">{project.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="border-gold text-gold hover:bg-gold hover:text-dark-walnut bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-gold" : "bg-gold/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="border-gold text-gold hover:bg-gold hover:text-dark-walnut bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
