import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to add base path to asset URLs
export function assetUrl(path: string): string {
  const basePath = '/malang_website'
  return `${basePath}${path}`
}
