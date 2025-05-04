import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Graha Ayoe</h3>
            <p className="text-emerald-100 mb-4">A symphony of serenity where luxury harmonizes with nature.</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/GrahaAyoe"
                className="text-white hover:text-emerald-200 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/GrahaAyoe"
                className="text-white hover:text-emerald-200 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:Grahaayoe02@gmail.com" className="text-white hover:text-emerald-200 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Accommodations", href: "/accommodations" },
                { name: "Facilities", href: "/facilities" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-emerald-100 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { name: "Experiences", href: "/experiences" },
                { name: "Dining", href: "/dining" },
                { name: "Contact", href: "/contact" },
                { name: "Book Now", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-emerald-100 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100">+62816576485</p>
                  <p className="text-emerald-100">+6285922461901</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:Grahaayoe02@gmail.com" className="text-emerald-100 hover:text-white transition-colors">
                  Grahaayoe02@gmail.com
                </a>
              </li>
              <li className="text-emerald-100 mt-2">
                Available on{" "}
                <a href="https://www.booking.com" className="underline hover:text-white">
                  Booking.com
                </a>{" "}
                and{" "}
                <a href="https://www.agoda.com" className="underline hover:text-white">
                  Agoda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-12 pt-6 text-center text-emerald-200">
          <p>&copy; {new Date().getFullYear()} Graha Ayoe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
