import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to add base path to asset URLs
export function assetUrl(path: string): string {
  // Use Next.js basePath from environment or config
  const basePath = process.env.NODE_ENV === 'production' ? '/malang_website' : ''
  return `${basePath}${path}`
}
