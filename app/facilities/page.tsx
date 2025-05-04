import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import { PocketIcon as Pool, Wifi, UtensilsCrossed, Shield, Car, Sparkles } from "lucide-react"

export default function FacilitiesPage() {
  return (
    <>
      <HeroSection
        title="Our Facilities"
        subtitle="Indulge in our luxurious amenities that make Graha Ayoe a destination in itself."
        imageHeight="h-[50vh]"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Luxury Amenities"
            subtitle="Experience comfort and convenience with our premium facilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Pool className="h-12 w-12 text-emerald-700 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-3">Private Pool</h3>
              <p className="text-gray-600 mb-4">
                Dive into relaxation with our private pool, surrounded by nature's embrace. The crystal-clear waters
                provide a refreshing escape from the heat, while the surrounding deck offers the perfect spot for
                sunbathing or enjoying a cool drink.
              </p>
              <p className="text-gray-600">
                The pool area is designed for both privacy and beauty, with lush landscaping and comfortable loungers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <UtensilsCrossed className="h-12 w-12 text-emerald-700 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-3">Gourmet Kitchen</h3>
              <p className="text-gray-600 mb-4">
                Explore our fully-equipped kitchen or indulge in the creations of our private chef. The kitchen features
                premium appliances, ample counter space, and all the utensils and cookware you might need.
              </p>
              <p className="text-gray-600">
                Whether you're a culinary enthusiast or prefer to have meals prepared for you, our kitchen provides the
                perfect setting for memorable dining experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Wifi className="h-12 w-12 text-emerald-700 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-3">High-Speed Wi-Fi</h3>
              <p className="text-gray-600 mb-4">
                Stay connected with complimentary high-speed Wi-Fi available throughout the property. Whether you need
                to catch up on work, share your experiences on social media, or stream your favorite content, our
                reliable internet service has you covered.
              </p>
              <p className="text-gray-600">
                We understand the importance of staying connected, even in a tranquil retreat like Graha Ayoe.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Shield className="h-12 w-12 text-emerald-700 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-3">24/7 Security</h3>
              <p className="text-gray-600 mb-4">
                Enjoy peace of mind with our comprehensive security measures. Our property is equipped with surveillance
                systems and staffed by professional security personnel who ensure your safety and privacy around the
                clock.
              </p>
              <p className="text-gray-600">
                We prioritize creating a secure environment where you can relax completely and focus on enjoying your
                stay.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Car className="h-12 w-12 text-emerald-700 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-3">Transportation Services</h3>
              <p className="text-gray-600 mb-4">
                Explore the surrounding area with ease using our transportation services. We offer airport transfers,
                car rentals, and chauffeur services to ensure that you can discover all that the region has to offer
                without any logistical concerns.
              </p>
              <p className="text-gray-600">
                Our knowledgeable drivers can also provide recommendations and insights about local attractions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <Sparkles className="h-12 w-12 text-emerald-700 mb-6" />
              <h3 className="text-xl font-playfair font-semibold mb-3">Housekeeping Services</h3>
              <p className="text-gray-600 mb-4">
                Relax and enjoy your stay while our attentive housekeeping team takes care of the details. Daily
                cleaning, turndown service, and laundry assistance are all available to ensure that your accommodations
                remain pristine throughout your stay.
              </p>
              <p className="text-gray-600">
                Our staff is trained to be thorough yet unobtrusive, respecting your privacy while maintaining the
                highest standards of cleanliness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Outdoor Living Spaces</h2>
              <p className="mb-4 text-gray-700">
                At Graha Ayoe, we believe that the boundaries between indoor and outdoor living should be fluid. Our
                thoughtfully designed outdoor spaces allow you to fully immerse yourself in the natural beauty that
                surrounds our property.
              </p>
              <p className="mb-4 text-gray-700">
                From spacious terraces with comfortable seating to intimate garden nooks perfect for morning meditation
                or afternoon tea, our outdoor areas provide numerous opportunities to connect with nature while enjoying
                the comforts of luxury living.
              </p>
              <p className="mb-6 text-gray-700">
                The gentle sounds of nature, the fragrance of tropical flowers, and the breathtaking views create an
                ambiance that soothes the soul and rejuvenates the spirit.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Your Stay
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200&query=luxury+villa+terrace+with+mountain+view"
                alt="Outdoor Living Space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Additional Services"
            subtitle="Enhance your stay with our premium services designed for your comfort and convenience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Concierge Services</h3>
              <p className="text-gray-600">
                Our dedicated concierge team is available to assist with restaurant reservations, activity bookings,
                special requests, and local recommendations to ensure that your stay is seamless and memorable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">In-Villa Spa Treatments</h3>
              <p className="text-gray-600">
                Indulge in relaxation with our in-villa spa services. Choose from a menu of massages, facials, and body
                treatments delivered by skilled therapists in the comfort of your accommodation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Childcare Services</h3>
              <p className="text-gray-600">
                Traveling with family? Our professional childcare services allow parents to enjoy some adult time while
                ensuring that children are well-cared for and entertained.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Grocery Pre-Stocking</h3>
              <p className="text-gray-600">
                Arrive to a fully stocked kitchen with our grocery pre-stocking service. Simply provide your
                preferences, and we'll ensure that your favorite foods and beverages are waiting for you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Special Occasion Planning</h3>
              <p className="text-gray-600">
                Celebrating a special event? Our team can help arrange decorations, cakes, flowers, and other elements
                to make your celebration truly memorable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Fitness Equipment</h3>
              <p className="text-gray-600">
                Maintain your fitness routine with our selection of exercise equipment available upon request, from yoga
                mats to free weights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Experience Luxury at Graha Ayoe</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Our facilities and services are designed to create an unforgettable stay where every detail is taken care
            of. Book now and immerse yourself in the symphony of serenity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-emerald-800 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  )
}
