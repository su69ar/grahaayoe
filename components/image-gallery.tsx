import Image from "next/image"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  columns?: 2 | 3 | 4
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const columnClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid ${columnClass[columns]} gap-4 md:gap-6`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative w-full h-64">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
