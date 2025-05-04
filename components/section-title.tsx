interface SectionTitleProps {
  title: string
  subtitle?: string
  alignment?: "left" | "center"
}

export default function SectionTitle({ title, subtitle, alignment = "center" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <h2 className="mb-3">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
