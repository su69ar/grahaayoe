import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import { MapPin, Mountain, Compass, Users } from "lucide-react"

export default function ExperiencesPage() {
  return (
    <>
      <HeroSection
        title="Beyond the Expected"
        subtitle="Graha Ayoe offers more than a stay; it's an exploration of experiences."
        imageHeight="h-[50vh]"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Curated Experiences"
            subtitle="Immerse yourself in a world of unique activities and adventures."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=scenic+nature+walk+in+bali+ricefields"
                  alt="Nature Walks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">On-site & Surrounding Areas</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Nature Walks</h3>
                <p className="text-gray-600 mb-4">
                  Embark on guided walks that reveal the secrets of the surrounding landscape. Our knowledgeable guides
                  will introduce you to the local flora and fauna, and share insights about the ecosystem that makes
                  this region so special.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 2-3 hours</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Easy to Moderate
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=balinese+cultural+ceremony+with+traditional+dancers"
                  alt="Cultural Excursions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">Local Villages & Temples</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Cultural Excursions</h3>
                <p className="text-gray-600 mb-4">
                  Immerse yourself in the rich local culture with visits to villages, temples, and markets. Experience
                  traditional ceremonies, learn about ancient customs, and interact with local artisans to gain a deeper
                  understanding of the cultural heritage.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: Half-day or Full-day</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Cultural Immersion
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=mountain+trekking+adventure+in+bali"
                  alt="Adventure Tours"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Mountain className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">Regional Attractions</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Adventure Tours</h3>
                <p className="text-gray-600 mb-4">
                  For the thrill-seekers, we offer a range of exciting activities like trekking, cycling, and
                  white-water rafting. These adventures are tailored to different skill levels and provide a perfect
                  balance of adrenaline and safety.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: Varies by Activity</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    Moderate to Challenging
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=cooking+class+with+fresh+ingredients+in+bali"
                  alt="Culinary Workshops"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Compass className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">On-site</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Culinary Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Discover the secrets of local cuisine through hands-on cooking classes. Learn to prepare traditional
                  dishes using fresh, locally-sourced ingredients, and take home recipes that will allow you to recreate
                  the flavors of your stay.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 2-3 hours</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    All Skill Levels
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=yoga+session+in+bali+with+mountain+view"
                  alt="Wellness Activities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Compass className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">On-site</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Wellness Activities</h3>
                <p className="text-gray-600 mb-4">
                  Nurture your body and mind with our wellness offerings. From sunrise yoga sessions to meditation
                  workshops and traditional spa treatments, these experiences are designed to promote relaxation and
                  rejuvenation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 1-2 hours</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">All Levels</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=photography+tour+in+bali+ricefields+sunset"
                  alt="Photography Tours"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">Surrounding Areas</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Photography Tours</h3>
                <p className="text-gray-600 mb-4">
                  Capture the beauty of the region with our specialized photography tours. Whether you're a beginner or
                  a seasoned photographer, our guides will take you to the most photogenic locations at the optimal
                  times of day.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: Half-day or Full-day</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    All Skill Levels
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200&query=luxury+villa+with+private+guide+planning+excursion"
                alt="Personalized Experiences"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Personalized Experiences</h2>
              <p className="mb-4 text-gray-700">
                At Graha Ayoe, we understand that each guest is unique, with different interests and preferences. That's
                why we offer the option to create customized experiences tailored specifically to you.
              </p>
              <p className="mb-4 text-gray-700">
                Our experienced concierge team will work closely with you to design an itinerary that aligns with your
                interests, whether that's exploring hidden gems off the beaten path, arranging private cultural
                performances, or organizing special celebrations.
              </p>
              <p className="mb-6 text-gray-700">
                From the moment you make your reservation, we're here to ensure that your stay at Graha Ayoe is filled
                with meaningful experiences that create lasting memories.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us to Plan Your Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready for an Unforgettable Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Graha Ayoe and embark on a symphony of experiences that will enrich your journey and
            create memories to last a lifetime.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-emerald-800 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Book Your Experience
          </Link>
        </div>
      </section>
    </>
  )
}
