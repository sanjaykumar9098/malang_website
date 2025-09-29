"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filters = ["All", "Kitchen", "Living", "Bedroom", "Wardrobes", "Commercial"]

  interface GalleryItem {
    id: number
    title: string
    category: string
    image: string
    description: string
  }

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Modern Modular Kitchen",
      category: "Kitchen",
      image: "/gallery/modern-modular-kitchen-with-island-and-wooden-ca.jpg",
      description: "Spacious modular kitchen with island design and premium wooden cabinets",
    },
    {
      id: 2,
      title: "Elegant Living Room",
      category: "Living",
      image: "/gallery/elegant-living-room-with-wooden-furniture-and-wa.jpg",
      description: "Contemporary living room with custom wooden furniture and warm lighting",
    },
    {
      id: 3,
      title: "Master Bedroom Interior",
      category: "Bedroom",
      image: "/gallery/luxurious-master-bedroom-with-wooden-bed-and-war.jpg",
      description: "Luxurious master bedroom with coordinated wooden furniture",
    },
    {
      id: 4,
      title: "Walk-in Wardrobe",
      category: "Wardrobes",
      image: "/gallery/spacious-walk-in-wardrobe-with-wooden-shelves-an.jpg",
      description: "Spacious walk-in wardrobe with organized storage solutions",
    },
    {
      id: 5,
      title: "Office Interior Design",
      category: "Commercial",
      image: "/gallery/modern-office-interior-with-wooden-furniture-and.jpg",
      description: "Professional office space with modern wooden furniture",
    },
    {
      id: 6,
      title: "Traditional Kitchen Design",
      category: "Kitchen",
      image: "/gallery/traditional-indian-kitchen-with-wooden-cabinets.jpg",
      description: "Traditional Indian kitchen with wooden cabinets and modern appliances",
    },
    {
      id: 7,
      title: "Cozy Living Space",
      category: "Living",
      image: "/gallery/cozy-living-room-with-wooden-sofa-and-coffee-tab.jpg",
      description: "Cozy living room with custom wooden sofa and coffee table",
    },
    {
      id: 8,
      title: "Kids Bedroom",
      category: "Bedroom",
      image: "/gallery/colorful-kids-bedroom-with-wooden-bunk-bed-and-s.jpg",
      description: "Colorful kids bedroom with wooden bunk bed and study area",
    },
    {
      id: 9,
      title: "Built-in Wardrobe",
      category: "Wardrobes",
      image: "/gallery/built-in-wardrobe-with-mirror-doors-and-interior.jpg",
      description: "Built-in wardrobe with mirror doors and interior lighting",
    },
    {
      id: 10,
      title: "Restaurant Interior",
      category: "Commercial",
      image: "/gallery/restaurant-interior-with-wooden-tables-and-warm.jpg",
      description: "Restaurant interior with wooden tables and warm ambiance",
    },
    {
      id: 11,
      title: "L-Shaped Kitchen",
      category: "Kitchen",
      image: "/gallery/l-shaped-kitchen-with-granite-countertop-and-woo.jpg",
      description: "L-shaped kitchen with granite countertop and wooden cabinets",
    },
    {
      id: 12,
      title: "Minimalist Living Room",
      category: "Living",
      image: "/gallery/minimalist-living-room-with-wooden-tv-unit-and-s.jpg",
      description: "Minimalist living room with wooden TV unit and seating",
    },
  ]

  const filteredItems =
    activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="py-20 bg-light-ash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-gold hover:bg-gold/90 text-dark-walnut font-medium"
                  : "border-gold text-gold hover:bg-gold hover:text-dark-walnut bg-transparent font-medium"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-gold border border-gold/20 hover:shadow-walnut transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-dark-walnut/0 group-hover:bg-dark-walnut/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-semibold text-dark-walnut mb-1">{item.title}</h3>
                <p className="text-sm text-charcoal/60 mb-2">{item.description}</p>
                <span className="inline-block text-xs text-burnt-orange font-medium bg-burnt-orange/10 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-dark-walnut/80 text-white p-2 rounded-full hover:bg-dark-walnut transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-2">{selectedImage.title}</h3>
                <p className="text-charcoal/70 mb-4">{selectedImage.description}</p>
                <span className="inline-block text-sm text-burnt-orange font-medium bg-burnt-orange/10 px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-gold border border-gold/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-dark-walnut mb-4">Inspired by Our Work?</h3>
            <p className="text-charcoal/70 mb-6">
              Let's create something beautiful for your space. Get a free consultation and quote for your interior
              design project.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-dark-walnut font-semibold" asChild>
              <a
                href="https://wa.me/919665795871?text=Hi%20Malang%20Interiors%2C%20I%20saw%20your%20gallery%20and%20would%20like%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
