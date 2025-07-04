"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function VenuePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute("href")!)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-wedding-sage py-4">
        <div className="max-w-6xl mx-auto px-4 py-0">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/BC Logo.png"
                alt="Brittney & Cedric Wedding Logo - Elegant floral design with BC monogram and October 17th 2026"
                width={80}
                height={80}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
                Home
              </Link>
              <Link href="/menu" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
                Menu
              </Link>
              <Link
                href="/venue"
                className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium border-b-2 border-wedding-sage"
              >
                Venue
              </Link>
              <Link
                href="/registry"
                className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium"
              >
                Registry
              </Link>
              <Link href="/faq" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
                FAQ
              </Link>
              <Link href="/rsvp" className="text-wedding-teal hover:text-wedding-forest transition-colors">
                RSVP
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Manor Image */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hollyfield-manor.jpg"
            alt="Wedding ceremony at Hollyfield Manor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="venue-hero-logo">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <Image
                  src="/images/hollyfield-logo.png"
                  alt="Hollyfield Manor - A Southern Farm with Elegance and Charm"
                  width={600}
                  height={400}
                  className="venue-logo-image"
                  priority
                />
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#about"
                className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300"
              >
                Discover Our Venue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-wedding-blush to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-wedding-forest mb-6">About Hollyfield Manor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A timeless Southern estate where elegance meets romance, creating the perfect backdrop for your most
              cherished moments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif text-wedding-forest mb-4">Historic Grandeur</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Surrounded by the colors of autumn in King William County, Hollyfield Manor offers timeless beauty and
                  Southern charm. Built in 1750, Hollyfield Manor has graceful white columns and peaceful countryside
                  setting create the perfect backdrop for a celebration filled with love, warmth, and elegance.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-serif text-wedding-forest mb-4">Perfect Ceremony Setting</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We are so excited to share this special day with you. Our ceremony will take place in one of
                  Hollyfields romantic outdoor settings—whether beside the barn, on the grand manor steps, or
                  overlooking the lake dressed in beautiful fall hues. Afterward, we will gather in the glow of the
                  ballroom for dinner, dancing, and heartfelt moments. We are so excited to make these memories with you
                  in such a special setting!
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-wedding-sage">
                <h4 className="text-2xl font-serif text-wedding-forest mb-6 text-center">Venue Highlights</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-wedding-teal rounded-full"></div>
                    <span className="text-gray-700">Historic 1800s architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-wedding-teal rounded-full"></div>
                    <span className="text-gray-700">Stunning front lawn ceremony space</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-wedding-teal rounded-full"></div>
                    <span className="text-gray-700">Elegant interior reception areas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-wedding-teal rounded-full"></div>
                    <span className="text-gray-700">Professional event coordination</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-wedding-teal rounded-full"></div>
                    <span className="text-gray-700">Full catering facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-wedding-forest mb-6">Location & Contact</h2>
            <p className="text-xl text-gray-600">Conveniently located in the heart of Richmond, Virginia</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-wedding-blush rounded-2xl p-8">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-2xl font-serif text-wedding-forest mb-4 text-center">Address</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Hollyfield Manor
                  <br />
                  289 Hollyfield Ln
                  <br />
                  Manquin, VA 23106
                </p>
                <div className="mt-6 text-center">
                  <a
                    href="https://maps.google.com/maps?q=289+Hollyfield+Ln,+Manquin,+VA+23106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-wedding-teal text-white px-6 py-3 rounded-full font-medium hover:bg-wedding-forest transition-colors duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="bg-wedding-blush rounded-2xl p-8">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-2xl font-serif text-wedding-forest mb-4 text-center">Getting There</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">From Richmond International Airport (RIC):</p>
                    <p className="text-sm leading-relaxed">
                      30 min drive
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">From Downtown Richmond:</p>
                    <p className="text-sm leading-relaxed">
                      35 min drive
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">From Washington Dulles (IAD):</p>
                    <p className="text-sm leading-relaxed">
                      2 hr drive
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Section */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-wedding-sage overflow-hidden">
                <div className="p-6 bg-wedding-blush border-b border-wedding-sage">
                  <h3 className="text-2xl font-serif text-wedding-forest text-center mb-2">Find Hollyfield Manor</h3>
                  <p className="text-gray-600 text-center">Click the map to open in Google Maps</p>
                </div>

                {/* Google Maps Embed */}
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.123456789!2d-77.6311!3d37.4419!2m3!1f0!2f3!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI2JzMwLjgiTiA3N8KwMzgnNTIuMCJX!5e0!3m2!1sen!2us!4v1234567890123!5m2!1sen!2us&q=2468+Manor+Drive,+Richmond,+VA+23173"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hollyfield Manor Location"
                    className="w-full"
                  />

                  {/* Custom Overlay with Wedding Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-wedding-sage">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">Brittney & Cedric's Wedding</h4>
                          <p className="text-gray-600 text-xs">October 17, 2026 • 4:00 PM</p>
                        </div>
                        <div className="text-wedding-teal">
                          <span className="text-2xl">💒</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Actions */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href="https://maps.google.com/maps?q=2468+Manor+Drive,+Richmond,+VA+23173"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                      <span>🗺️</span>
                      Open in Google Maps
                    </a>
                    <a
                      href="https://maps.apple.com/?q=2468+Manor+Drive,+Richmond,+VA+23173"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-300"
                    >
                      <span>🍎</span>
                      Open in Apple Maps
                    </a>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: "Hollyfield Manor - Wedding Venue",
                            text: "Brittney & Cedric's Wedding Venue",
                            url: "https://maps.google.com/maps?q=2468+Manor+Drive,+Richmond,+VA+23173",
                          })
                        } else {
                          navigator.clipboard.writeText("2468 Manor Drive, Richmond, VA 23173")
                          alert("Address copied to clipboard!")
                        }
                      }}
                      className="flex items-center gap-2 bg-wedding-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-wedding-forest transition-colors duration-300"
                    >
                      <span>📋</span>
                      Share Location
                    </button>
                  </div>
                </div>
              </div>

              {/* Weather Backup Info */}
              <div className="mt-6 bg-wedding-teal/20 rounded-2xl p-6 border border-wedding-teal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-wedding-teal rounded-full flex items-center justify-center">
                    <span className="text-lg">☂️</span>
                  </div>
                  <h4 className="text-lg font-serif text-wedding-forest">Weather Contingency</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Don't worry about the weather! Hollyfield Manor has beautiful indoor ceremony and reception spaces that can accommodate the entire celebration if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-serif font-semibold mb-4">Hollyfield Manor</h4>
              <p className="text-gray-300 leading-relaxed">
                289 Hollyfield Ln
                <br />
                Manquin, VA 23106
              </p>
            </div>
            <div>
              <h4 className="text-xl font-serif font-semibold mb-4">Wedding Information</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Brittney & Cedric's Wedding
                <br />
                October 17, 2026
              </p>
              <Link href="/" className="text-wedding-blush hover:text-white font-medium transition-colors">
                Back to Wedding Website
              </Link>
            </div>
            <div>
              <h4 className="text-xl font-serif font-semibold mb-4">Important Dates</h4>
              <p className="text-gray-300 leading-relaxed">
                RSVP Deadline: September 1, 2026
                <br />
                Wedding Day: October 17, 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
