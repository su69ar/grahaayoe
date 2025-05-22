import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import { UtensilsCrossed, Coffee, Wine, Salad } from "lucide-react"

export default function DiningPage() {
  return (
    <>
      <HeroSection
        title="Culinary Journey"
        subtitle="Savor the flavors of Graha Ayoe with our culinary offerings."
        imageHeight="h-[50vh]"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-playfair font-bold mb-6">Home-Style Kitchen</h2>
              <p className="mb-4 text-gray-700">
              At Graha Ayoe, we provide a comfortable and practical kitchen for guests who prefer to prepare their own meals. Equipped with basic cooking tools and appliances, it’s ideal for making simple dishes or snacks during your stay.
              </p>
              <p className="mb-4 text-gray-700">
              If you’d rather not cook, we can help connect you with local chef services upon request.
              </p>
              {/* <p className="mb-6 text-gray-700">
                For those who prefer to leave the cooking to the experts, our private chef service offers a range of
                dining options, from casual family-style meals to elegant multi-course dinners.
              </p> */}
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Chef Service
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/dining/Graha_Ayoe_Dining_4.jpg"
                alt="Gourmet Kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Culinary Experiences"
            subtitle="Explore the diverse dining options available at Graha Ayoe."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/others/Graha_Ayoe_Sidemen.webp"
                  alt="Private Chef Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <UtensilsCrossed className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">In-Villa Dining</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Private Chef Service</h3>
                <p className="text-gray-600 mb-4">
                  Indulge in the luxury of having your meals prepared by our skilled chef in the comfort of your villa.
                  From breakfast to dinner, our chef will create personalized menus based on your preferences and
                  dietary requirements.
                </p>
                <p className="text-gray-600">
                  This service is perfect for special occasions, romantic dinners, or simply for those who want to enjoy
                  restaurant-quality meals without leaving the comfort of Graha Ayoe.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/dining/Graha_Ayoe_ Dining_2.jpeg"
                  alt="Local Delicacies"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Salad className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">Cultural Experience</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Local Delicacies</h3>
                <p className="text-gray-600 mb-4">
                  Immerse yourself in the tastes of the region with our curated menus showcasing the best of local
                  cuisine. Our chef sources fresh, seasonal ingredients from nearby markets and farms to create
                  authentic dishes that tell the story of the local culinary heritage.
                </p>
                <p className="text-gray-600">
                  This is a wonderful opportunity to expand your palate and discover new flavors that you might not
                  encounter elsewhere.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/dining/Graha_Ayoe_ Dining_1.jpeg"
                  alt="Cooking Classes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Coffee className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">Interactive Experience</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Cooking Classes</h3>
                <p className="text-gray-600 mb-4">
                  Learn the secrets of local and international cuisine with our hands-on cooking classes. Our chef will
                  guide you through the preparation of various dishes, sharing techniques, tips, and stories along the
                  way.
                </p>
                <p className="text-gray-600">
                  These classes are suitable for all skill levels and can be customized based on your interests. It's a
                  fun, educational activity that allows you to take a piece of your Graha Ayoe experience home with you.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/others/Graha_Ayoe_Sidemen_2.webp"
                  alt="Special Dining Events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Wine className="h-5 w-5 text-emerald-700 mr-2" />
                  <span className="text-sm text-gray-500">Curated Experience</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Special Dining Events</h3>
                <p className="text-gray-600 mb-4">
                  Elevate your stay with our special dining events, such as wine tastings, themed dinners, or barbecue
                  nights. These events combine exceptional food and drinks with a convivial atmosphere, creating
                  memorable experiences.
                </p>
                <p className="text-gray-600">
                  Whether you're celebrating a special occasion or simply want to add a unique touch to your stay, our
                  special dining events offer something extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/dining/Graha_Ayoe_ Dining.jpeg"
                alt="Fresh Local Ingredients"
                fill
                className="object-cover"
                objectPosition="top"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Culinary Philosophy</h2>
              <p className="mb-4 text-gray-700">
                At Graha Ayoe, our culinary philosophy is rooted in a deep respect for ingredients, traditions, and the
                connection between food and place. We believe that the best dining experiences are those that tell a
                story and create a sense of connection.
              </p>
              <p className="mb-4 text-gray-700">
                We prioritize fresh, seasonal, and locally-sourced ingredients, working closely with farmers, fishermen,
                and artisanal producers to ensure that every dish we serve reflects the bounty of the region. This
                approach not only results in more flavorful food but also supports the local community and reduces our
                environmental footprint.
              </p>
              <p className="mb-6 text-gray-700">
                Whether you're enjoying a simple breakfast or an elaborate dinner, you can expect thoughtfully prepared
                dishes that balance tradition and innovation, familiarity and discovery, comfort and excitement.
              </p>
              <Link href="/contact" className="btn-primary">
                Inquire About Dining Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Savor the Symphony of Flavors</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book your culinary journey at Graha Ayoe and discover a world of flavors that will delight your palate and
            nourish your soul.
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
