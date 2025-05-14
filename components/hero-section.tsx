import Link from "next/link"
import type { ReactNode } from "react"

interface HeroSectionProps {
  title: ReactNode
  subtitle: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
  imageHeight?: string
}

export default function HeroSection({
  title,
  subtitle,
  showButton = true,
  buttonText = "Book Your Symphony",
  buttonLink = "/contact",
  imageHeight = "h-[70vh]",
}: HeroSectionProps) {
  return (
    <section className={`relative ${imageHeight} bg-hero-pattern bg-cover bg-center flex items-center justify-center`}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        {showButton && (
          <Link href={buttonLink} className="btn-primary">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  )
}
