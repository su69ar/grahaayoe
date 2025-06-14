import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Graha Ayoe"
        subtitle="Reach out to us for inquiries, reservations, or to plan your perfect stay."
        imageHeight="h-[50vh]"
        showButton={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Get in Touch"
            subtitle="We're here to answer any questions you may have about Graha Ayoe."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-emerald-700 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-600"><a href="tel:62816576485">+62 816-576-485</a></p>
                      <p className="text-gray-600"><a href="tel:628164711704">+62 816-4711-704</a></p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-emerald-700 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:graha.ayoe1@gmail.com" className="hover:text-emerald-700">
                        graha.ayoe1@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-emerald-700 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-gray-600">Jalan Dusun Dukuh, Sangkan Gn., Kec. Sidemen, Kabupaten Karangasem, Bali 80864</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-emerald-700 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Book Through Partners</h3>
                <p className="text-gray-600 mb-4">
                  You can also book your stay at Graha Ayoe through our trusted partners:
                </p>
                <div className="flex flex-col space-y-4">
                  <a
                    href="https://www.booking.com/hotel/id/graha-ayoe.id.html?aid=356980&label=gog235jc-1DCAsoaEIfZ3JhaGEtYXlvZS1rYWJ1cGF0ZW4ta2FyYW5nYXNlbUgSWANoaIgBAZgBErgBF8gBDNgBA-gBAfgBAogCAagCA7gCnfnrwAbAAgHSAiRkNDA3OWMzNi1hMTM2LTQ5MjgtODgyMy03OTc5YjdmYTc1M2XYAgTgAgE&sid=0a9c27f91aff5ab1a0a31eb8a62148f7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md mr-3">Booking.com</span>
                    Book on Booking.com
                  </a>
                  <a
                    href="https://www.agoda.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md mr-3">Agoda</span>
                    Book on Agoda
                  </a>
                </div>
              </div> */}
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6">Inquiry Form</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about staying at Graha Ayoe."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">What is the check-in and check-out time?</h3>
              <p className="text-gray-600">
                Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be
                arranged based on availability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">Is breakfast included in the room rate?</h3>
              <p className="text-gray-600">
                Yes, a complimentary breakfast is included with your stay. We offer both local and international
                breakfast options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">Do you offer airport transfers?</h3>
              <p className="text-gray-600">
                Yes, we can arrange airport transfers for an additional fee. Please let us know your flight details in
                advance so we can make the necessary arrangements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">Is there Wi-Fi available?</h3>
              <p className="text-gray-600">Yes, complimentary high-speed Wi-Fi is available throughout the property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">
                Can you accommodate special dietary requirements?
              </h3>
              <p className="text-gray-600">
                Absolutely. Please inform us of any dietary restrictions or preferences when making your reservation,
                and our chef will be happy to accommodate your needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-3">Are pets allowed?</h3>
              <p className="text-gray-600">
                We regret that pets are not allowed at Graha Ayoe, with the exception of service animals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
