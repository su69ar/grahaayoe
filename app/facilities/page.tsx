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
              Welcome to a hidden sanctuary nestled in nature — a peaceful villa retreat where tranquility meets the beauty of the outdoors. Surrounded by lush tropical greenery, tall trees, and a backdrop of rolling hills, this villa offers an escape from the noise and rush of everyday life.
              </p>
              <p className="mb-4 text-gray-700">
              Designed with a harmonious blend of traditional charm and modern comfort, the villa features warm terracotta roofs, open terraces, and cozy interiors that invite the natural light and fresh air in. The landscaped garden is filled with blooming tropical flowers, creating a serene atmosphere that soothes the soul.
              </p>
              <p className="mb-6 text-gray-700">
              Whether you’re relaxing by the private pool overlooking the jungle, sipping coffee on the porch, or simply listening to the sounds of nature, this villa promises a rejuvenating stay in perfect harmony with its surroundings.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Your Stay
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/experiences/Outdoor_OpenSpace_Graha_Ayoe_Unique_Experience.jpeg"
                alt="Outdoor Living Space"
                fill
                className="object-cover"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Additional Services"
            subtitle="Enhance your stay with curated experiences designed to bring you deeper relaxation, ease, and harmony with nature."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Personalized Concierge</h3>
              <p className="text-gray-600">
              Let our attentive concierge team assist you with everything from nature excursions and cultural experiences to personalized dining and wellness requests — all to ensure your stay is seamless and soul-nourishing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">In-Villa Spa Rituals</h3>
              <p className="text-gray-600">
              Surrender to serenity with our in-villa spa offerings. Enjoy a selection of therapeutic massages, facials, and holistic treatments performed by experienced therapists in the peaceful privacy of your villa, surrounded by nature.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Gentle Childcare Services</h3>
              <p className="text-gray-600">
              Traveling with little ones? Our nurturing childcare service allows you to fully unwind while your children are lovingly cared for and engaged in playful, enriching activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Grocery Pre-Stocking</h3>
              <p className="text-gray-600">
              Arrive to a thoughtfully stocked kitchen filled with your favorite fresh foods, snacks, and beverages. Simply share your preferences, and we’ll take care of the rest, so you can settle in with ease.
              </p>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Special Moment Planning</h3>
              <p className="text-gray-600">
              Mark your special occasion with the beauty of nature as your backdrop. Whether it’s a romantic evening, a birthday celebration, or an intimate gathering, our team will arrange flowers, decor, and more to create unforgettable memories.
              </p>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-xl font-playfair font-semibold mb-3">Nature Adventures</h3>
              <p className="text-gray-600">
              Reconnect with the earth through guided outdoor experiences — from forest walks and hidden waterfalls to sunrise hikes and local cultural trails. Each journey is designed to awaken your senses and deepen your connection to nature.
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
