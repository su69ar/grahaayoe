import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import ImageGallery from "@/components/image-gallery"

export default function AccommodationsPage() {
  const accommodationImages = [
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+mountain+view+bedroom",
      alt: "Mountain Suite Bedroom",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+mountain+view+bathroom",
      alt: "Mountain Suite Bathroom",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+mountain+view+balcony",
      alt: "Mountain Suite Balcony",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+ricefield+view+bedroom",
      alt: "Ricefield Villa Bedroom",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+ricefield+view+living+room",
      alt: "Ricefield Villa Living Room",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+ricefield+view+terrace",
      alt: "Ricefield Villa Terrace",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+private+pool+villa+bedroom",
      alt: "Private Pool Room Bedroom",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+private+pool+villa+bathroom",
      alt: "Private Pool Room Bathroom",
    },
    {
      src: "/placeholder.svg?height=600&width=800&query=luxury+private+pool+villa+pool",
      alt: "Private Pool",
    },
  ]

  return (
    <>
      <HeroSection
        title="Elegant Sanctuaries"
        subtitle="At Graha Ayoe, each room and suite is a canvas of comfort and sophistication."
        imageHeight="h-[50vh]"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Accommodations"
            subtitle="Immerse yourself in our thoughtfully designed spaces that blend luxury with comfort."
          />

          <ImageGallery images={accommodationImages} columns={3} />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200&query=luxury+mountain+view+suite+interior"
                alt="Mountain Suite"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Mountain Suites</h2>
              <p className="mb-4 text-gray-700">
                Our Mountain Suites offer a perfect blend of modern luxury and traditional charm. Each suite is designed
                to maximize the breathtaking mountain views, creating a serene atmosphere that soothes the soul.
              </p>
              <p className="mb-4 text-gray-700">
                The spacious layout includes a comfortable king-sized bed, a private ensuite bathroom with premium
                amenities, and a cozy sitting area where you can relax and take in the panoramic vistas.
              </p>
              <p className="mb-6 text-gray-700">
                Natural materials and earthy tones dominate the décor, complementing the surrounding landscape and
                enhancing the sense of harmony with nature.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Now
                </Link>
                <Link href="/facilities" className="btn-secondary">
                  View Facilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ricefield Villas</h2>
              <p className="mb-4 text-gray-700">
                Our Ricefield Villas offer a unique experience where serenity meets opulence. These spacious retreats
                overlook the lush ricefields, providing a constantly changing tapestry of greens and golds as the
                seasons progress.
              </p>
              <p className="mb-4 text-gray-700">
                Each villa features a generous living space, a luxurious bedroom with premium bedding, and a private
                terrace where you can enjoy your morning coffee while watching the farmers tend to their crops.
              </p>
              <p className="mb-6 text-gray-700">
                The interiors showcase a thoughtful blend of contemporary design and traditional elements, creating a
                space that is both sophisticated and welcoming.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Now
                </Link>
                <Link href="/facilities" className="btn-secondary">
                  View Facilities
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=800&width=1200&query=luxury+ricefield+view+villa+interior"
                alt="Ricefield Villa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200&query=luxury+villa+with+private+pool+sunset"
                alt="Private Pool Room"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Private Pool Rooms</h2>
              <p className="mb-4 text-gray-700">
                For the ultimate indulgence, our Private Pool Rooms offer an exclusive retreat where you can dive into
                relaxation at any time of the day. Each room opens onto a secluded terrace with a private pool,
                surrounded by lush greenery for complete privacy.
              </p>
              <p className="mb-4 text-gray-700">
                The elegant interiors feature a sumptuous king-sized bed, a luxurious bathroom with both indoor and
                outdoor shower options, and a comfortable lounge area perfect for unwinding after a day of exploration.
              </p>
              <p className="mb-6 text-gray-700">
                These rooms are ideal for honeymooners or anyone seeking an extra special experience where every detail
                has been considered for your comfort and pleasure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Now
                </Link>
                <Link href="/facilities" className="btn-secondary">
                  View Facilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Room Amenities"
            subtitle="All our accommodations include these premium amenities for your comfort."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Comfort</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Premium king-sized beds</li>
                <li>• Luxury linens and pillows</li>
                <li>• Climate control</li>
                <li>• Blackout curtains</li>
                <li>• Comfortable seating area</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Bathroom</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rainfall shower</li>
                <li>• Luxury toiletries</li>
                <li>• Plush bathrobes and slippers</li>
                <li>• Hair dryer</li>
                <li>• Makeup mirror</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Technology</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High-speed Wi-Fi</li>
                <li>• Smart TV</li>
                <li>• Bluetooth sound system</li>
                <li>• USB charging ports</li>
                <li>• Electronic safe</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Daily housekeeping</li>
                <li>• Turndown service</li>
                <li>• In-room dining</li>
                <li>• Laundry service</li>
                <li>• 24-hour concierge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Experience Graha Ayoe?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact us to book your preferred accommodation and start your journey into a world of tranquility and
            luxury.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-emerald-800 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}
