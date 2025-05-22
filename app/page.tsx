import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import FeatureCard from "@/components/feature-card"
import { Bed, UtensilsCrossed, Mountain, PocketIcon as Pool, Coffee, MapPin } from "lucide-react"

export default function Home() {
  return (
    <>
<HeroSection
  title={
    <>
      <span className="text-sm block text-white">Welcome to Graha Ayoe</span>
      <span >A Symphony of Serenity</span>
    </>
  }
  subtitle="Discover a haven where luxury harmonizes with nature. Immerse yourself in the enchanting beauty of ricefields and mountains, and let the art of serenity unfold."
/>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Explore Graha Ayoe"
            subtitle="Immerse yourself in a world of tranquility, where every stay is a masterpiece of comfort and elegance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              title="Elegant Accommodations"
              description="Dive into the details of our elegantly designed rooms and suites, each a sanctuary of refined aesthetics."
              icon={Bed}
            />
            <FeatureCard
              title="Culinary Journey"
              description="Savor the flavors with our home-style kitchen and curated menus showcasing the best of local cuisine."
              icon={UtensilsCrossed}
            />
            <FeatureCard
              title="Unique Experiences"
              description="Immerse yourself in nature walks, cultural excursions, and thrilling adventure tours."
              icon={Mountain}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">A Sanctuary of Peace and Luxury</h2>
              <p className="mb-6 text-gray-700">
                At Graha Ayoe, we invite you to escape into a world of tranquility. Our villa is nestled amidst the
                breathtaking beauty of ricefields and mountains, offering an unparalleled experience of comfort and
                elegance.
              </p>
              <p className="mb-8 text-gray-700">
                Each aspect of our property is designed to create a harmonious blend of luxury and nature, ensuring that
                your stay is nothing short of extraordinary.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
                <Link href="/contact" className="btn-primary">
                  Book Your Stay
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/GrahaAyoe_Banner.jpg" alt="Graha Ayoe Interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Facilities"
            subtitle="Indulge in our luxurious amenities that make Graha Ayoe a destination in itself."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Pool className="h-10 w-10 text-emerald-700 mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-2">Private Pool</h3>
              <p className="text-gray-600">
                Dive into relaxation with our private pool, surrounded by nature's embrace.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <UtensilsCrossed className="h-10 w-10 text-emerald-700 mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-2">Gourmet Kitchen</h3>
              <p className="text-gray-600">
                Explore our fully-equipped kitchen or indulge in the creations of our private chef.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Coffee className="h-10 w-10 text-emerald-700 mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-2">Lounge Area</h3>
              <p className="text-gray-600">
                Unwind in our spacious lounge area with panoramic views of the surrounding landscape.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Mountain className="h-10 w-10 text-emerald-700 mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-2">Scenic Views</h3>
              <p className="text-gray-600">
                Wake up to breathtaking views of mountains and ricefields from every room.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <MapPin className="h-10 w-10 text-emerald-700 mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Perfectly situated to explore local attractions while enjoying privacy and tranquility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Bed className="h-10 w-10 text-emerald-700 mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-2">Luxury Bedding</h3>
              <p className="text-gray-600">
                Experience ultimate comfort with premium bedding and linens for a restful night's sleep.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/facilities" className="btn-primary">
              Explore All Facilities
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Book Your Symphony of Serenity</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact us to reserve your spot in this sanctuary of peace and luxury.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-emerald-800 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Accommodations"
            subtitle="Each room and suite is a canvas of comfort and sophistication."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image src="accomodations/The_Ayoe_Graha_Ayoe_Main.jpeg" alt="Mountain Suite" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">The Ayoe</h3>
                <p className="text-gray-600 mb-4">
                Surrounded by vibrant gardens, natural serenity, and fresh air, this villa blends traditional charm with modern comfort.
                </p>
                <Link
                  href="/accommodations"
                  className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image src="/accomodations/Graha_Villas_Graha_Ayoe_Accomodations2.jpeg" alt="Ricefield Villa" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">The Graha Villas</h3>
                <p className="text-gray-600 mb-4">
                Graha Villas a stunning retreat where comfort, style, and nature exist in perfect harmony.
                </p>
                <Link
                  href="/accommodations"
                  className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image src="accomodations/The_Joglo_Graha_Ayoe.jpeg" alt="Private Pool Villa" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">The Joglo</h3>
                <p className="text-gray-600 mb-4">
                Beautiful preserved traditional wooden house, thoughtfully restored for comfort while retaining its cultural soul.
                </p>
                <Link
                  href="/accommodations"
                  className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
