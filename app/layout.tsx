import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { assetUrl } from "@/lib/utils"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Malang Interiors & Trolleys - Interior Designer in Pune",
  description:
    "Crafting Spaces, Enhancing Living. Custom wooden furniture, complete interior design, modular kitchens & home renovation in Pune, Maharashtra.",
  keywords:
    "interior designer pune, modular kitchen pune, custom furniture pune, kitchen trolleys pune, home renovation pune, interior design services pune, bedroom interior pune, wardrobe design pune, commercial interior pune",
  authors: [{ name: "Malang Interiors & Trolleys" }],
  creator: "Malang Interiors & Trolleys",
  publisher: "Malang Interiors & Trolleys",
  metadataBase: new URL("https://malanginteriors.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Malang Interiors & Trolleys - Interior Designer in Pune",
    description:
      "Crafting Spaces, Enhancing Living. Custom wooden furniture, complete interior design, modular kitchens & home renovation in Pune.",
    url: "https://malanginteriors.com",
    siteName: "Malang Interiors & Trolleys",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: assetUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Malang Interiors & Trolleys - Interior Design Services in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malang Interiors & Trolleys - Interior Designer in Pune",
    description:
      "Crafting Spaces, Enhancing Living. Custom wooden furniture, complete interior design, modular kitchens & home renovation in Pune.",
    images: [assetUrl("/og-image.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Malang Interiors & Trolleys",
              description:
                "Professional interior design services in Pune, Maharashtra. Specializing in custom furniture, modular kitchens, and complete home renovations.",
              url: "https://malanginteriors.com",
              telephone: "+91-9665795871",
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
              servesCuisine: [],
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
                "https://wa.me/919665795871",
              ],
            }),
          }}
        />
        <link rel="icon" href={assetUrl("/favicon.ico")} sizes="any" />
        <link rel="icon" href={assetUrl("/favicon.jpg")} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={assetUrl("/apple-touch-icon.jpg")} />
        <link rel="manifest" href={assetUrl("/manifest.json")} />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
