export function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Malang Interiors & Trolleys",
    description:
      "Professional interior design services in Pune, Maharashtra. Specializing in custom furniture, modular kitchens, and complete home renovations.",
    url: "https://malanginteriors.com",
    telephone: "+91-9876543210",
    email: "info@malanginteriors.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 15, Ground Floor, Furniture Market",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5204",
      longitude: "73.8567",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "₹₹",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "18.5204",
        longitude: "73.8567",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Interior Design",
            description: "Custom modular kitchen design and installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bedroom Interior Design",
            description: "Complete bedroom interior design and furniture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wardrobe Design",
            description: "Custom wardrobe and storage solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Interior Design",
            description: "Office and commercial space interior design",
          },
        },
      ],
    },
    founder: {
      "@type": "Person",
      name: "Sanjay Kumar",
      jobTitle: "Proprietor & Lead Designer",
    },
    sameAs: [
      "https://www.facebook.com/malanginteriors",
      "https://www.instagram.com/malanginteriors",
      "https://wa.me/919876543210",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function ServiceStructuredData({ service }: { service: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service,
    provider: {
      "@type": "LocalBusiness",
      name: "Malang Interiors & Trolleys",
      telephone: "+91-9876543210",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service} Services`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
