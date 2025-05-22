import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Graha Ayoe"
        subtitle="Learn about our philosophy, history, and commitment to providing an unparalleled experience."
        imageHeight="h-[50vh]"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Graha Ayoe was born from a vision to create a sanctuary where guests could experience the perfect
                harmony between luxury and nature. Nestled amidst the breathtaking landscapes of ricefields and
                mountains, our villa stands as a testament to elegant design and thoughtful hospitality.
              </p>
              <p className="mb-4 text-gray-700">
                The name "Graha Ayoe" itself reflects our philosophy – "Graha" meaning home or dwelling, and "Ayoe"
                representing beauty and tranquility. Together, they embody our commitment to providing a beautiful
                dwelling where serenity reigns supreme.
              </p>
              <p className="text-gray-700">
                Every aspect of Graha Ayoe has been carefully curated to ensure that our guests experience nothing short
                of extraordinary during their stay with us. From the architectural design that complements the natural
                surroundings to the personalized services that cater to individual preferences, we strive to create
                memories that last a lifetime.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/others/Graha_Ayoe_Sidemen_2.webp"
                alt="Graha Ayoe Exterior"
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
            title="Our Philosophy"
            subtitle="At Graha Ayoe, we believe in creating experiences that touch the soul."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-playfair font-semibold mb-3">Harmony with Nature</h3>
              <p className="text-gray-600">
                We believe in respecting and celebrating the natural beauty that surrounds us. Our design and operations
                are guided by sustainable practices that minimize our environmental footprint.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-playfair font-semibold mb-3">Personalized Luxury</h3>
              <p className="text-gray-600">
                True luxury lies in personalization. We take pride in understanding and anticipating the unique needs of
                each guest, ensuring a tailored experience that exceeds expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-playfair font-semibold mb-3">Cultural Authenticity</h3>
              <p className="text-gray-600">
                We celebrate the rich cultural heritage of our location, integrating local traditions, craftsmanship,
                and culinary arts into the Graha Ayoe experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/others/Graha_Ayoe_Sidemen_3.webp"
                alt="Graha Ayoe Service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">Our Commitment</h2>
              <p className="mb-4 text-gray-700">
                At Graha Ayoe, our commitment to excellence extends beyond providing luxurious accommodations. We are
                dedicated to creating an environment where every moment is infused with warmth, authenticity, and
                attention to detail.
              </p>
              <p className="mb-4 text-gray-700">
                Our team of passionate hospitality professionals works tirelessly to ensure that your stay is seamless
                and memorable. From the moment you inquire about a reservation to the time you depart, we are committed
                to providing service that is both attentive and unobtrusive.
              </p>
              <p className="text-gray-700">
                We believe that true luxury lies in the details – the freshness of the flowers in your room, the perfect
                temperature of your morning coffee, the softness of the linens, and the genuine smile that greets you
                each day. These are the elements that transform a stay into an experience, and it is our commitment to
                perfect each one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Experience Graha Ayoe</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We invite you to discover the symphony of serenity that awaits at Graha Ayoe. Book your stay today and
            embark on a journey of unparalleled luxury and tranquility.
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
