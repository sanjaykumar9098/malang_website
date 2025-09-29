import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function SEOHead({
  title = "Malang Interiors & Trolleys - Interior Designer in Pune",
  description = "Crafting Spaces, Enhancing Living. Custom wooden furniture, complete interior design, modular kitchens & home renovation in Pune, Maharashtra.",
  keywords = "interior designer pune, modular kitchen pune, custom furniture pune, kitchen trolleys pune, home renovation pune",
  canonical,
  ogImage = "/og-image.jpg",
  noindex = false,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="author" content="Malang Interiors & Trolleys" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en-IN" />
    </Head>
  )
}
