import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import ImageGallery from "@/components/image-gallery"

export default function AccommodationsPage() {
  const accommodationImages = [
    {
      src: "/accomodations/Graha_Ayoe_Accomodations.jpeg",
      alt: "Mountain Suite Bedroom",
    },
    {
      src: "/accomodations/Graha_Ayoe_Accomodations1.jpeg",
      alt: "Mountain Suite Bathroom",
    },
    {
      src: "/accomodations/The_Ayoe_Graha_Ayoe.jpeg",
      alt: "Mountain Suite Balcony",
    },
    {
      src: "/accomodations/Graha_Ayoe_Accomodations3.jpeg",
      alt: "Ricefield Villa Bedroom",
    },
    {
      src: "/accomodations/Graha_Ayoe_Accomodations4.jpeg",
      alt: "Ricefield Villa Living Room",
    },
    {
      src: "/accomodations/Graha_Ayoe_Accomodations5.jpeg",
      alt: "Ricefield Villa Terrace",
    },
    {
      src: "/accomodations/Graha_Ayoe_Accomodations6.jpeg",
      alt: "Private Pool Room Bedroom",
    },
    {
      src: "/GrahaAyoe.jpeg",
      alt: "Private Pool Room Bathroom",
    },
    {
      src: "/accomodations/Graha_Ayoe_Accomodations7.jpeg",
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
            subtitle="Immerse yourself in our thoughtfully designed spaces that blend nature with comfort."
          />

          <ImageGallery images={accommodationImages} columns={3} />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/accomodations/The_Ayoe_Graha_Ayoe_Main.jpeg"
                alt="Mountain Suite"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">The Ayoe</h2>
              <p className="mb-4 text-gray-700">
              Tucked away in a peaceful green oasis, The Ayoe Villa is your perfect tropical hideaway. Surrounded by vibrant gardens, natural serenity, and fresh air, this villa blends traditional charm with modern comfort.
              </p>
              <p className="mb-4 text-gray-700">
              With its distinctive A-frame roof and cozy minimalist design, The Ayoe offers a private sanctuary for couples, solo travelers, or anyone seeking calm away from the noise. Wake up to the sound of birds and unwind on your private terrace with lush garden views.
              </p>
              <p className="mb-6 text-gray-700">
              As the sun sets, the garden transforms with soft ambient lighting, leading you to a beautifully lit pool just steps away—perfect for a nighttime dip under the stars.
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
              <h2 className="text-3xl font-playfair font-bold mb-6">Graha Villas</h2>
              <p className="mb-4 text-gray-700">
                Graha Villas a stunning retreat where comfort, style, and nature exist in perfect harmony. Nestled in a tropical landscape and thoughtfully designed for privacy and relaxation, this villa features a sleek infinity pool overlooking lush greenery, offering the ultimate sanctuary for your getaway.
              </p>
              <p className="mb-4 text-gray-700">
              Start your morning with a swim as the sun rises, or spend your evening lounging by the water, surrounded by swaying palms and calming reflections. The open-concept living space flows naturally from the indoor dining area to the pool deck, creating a seamless connection between indoor comfort and outdoor beauty.
              </p>
              <p className="mb-6 text-gray-700">
              Whether you’re on a romantic escape, a family holiday, or a wellness break, Graha Villas offers the space and atmosphere to truly unwind.
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
                src="/accomodations/Graha_Villas_Graha_Ayoe_Accomodations2.jpeg"
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
                src="/accomodations/The_Joglo_Graha_Ayoe.jpeg"
                alt="Private Pool Room"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">The Joglo</h2>
              <p className="mb-4 text-gray-700">
              The Joglo — a beautifully preserved traditional wooden house, thoughtfully restored for comfort while retaining its cultural soul. Surrounded by lush gardens and open skies, this villa invites you to slow down, reconnect, and savor the simplicity of life in nature.
              </p>
              <p className="mb-4 text-gray-700">
              The open-air veranda and carved wooden details offer an authentic experience of Indonesia’s timeless elegance, making it perfect for those seeking peace, privacy, and cultural richness in one serene space.
              </p>
              <p className="mb-6 text-gray-700">
              Whether you’re enjoying a quiet morning coffee with the sound of birds or sharing an intimate dinner as the sun sets, The Joglo is the perfect blend of heritage and hospitality.
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
