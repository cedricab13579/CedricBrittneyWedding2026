import { Calendar, MapPin, Heart, Users, Gift, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CountdownTimer from "@/components/countdown-timer"

export default function WeddingWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-blush to-wedding-peach">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-wedding-sage py-4">
        <div className="max-w-6xl mx-auto px-4 py-0">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/BC Logo.png"
                alt="Brittney & Cedric Wedding Logo - Elegant floral design with BC monogram and October 17th 2026"
                width={80}
                height={80}
                className="hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium border-b-2 border-wedding-sage">
                Home
              </a>
              <Link href="/faq" className="text-wedding-teal hover:text-wedding-forest font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/venue" className="text-wedding-teal hover:text-wedding-forest font-medium transition-colors">
                Venue
              </Link>
              <Link href="/registry" className="text-wedding-teal hover:text-wedding-forest font-medium transition-colors">
                Registry
              </Link>
              <Link href="/rsvp" className="text-wedding-teal hover:text-wedding-forest font-medium transition-colors">
                RSVP
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/backs.jpg"
            alt="Romantic forest path representing Brittney and Cedric's journey together"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          {/* Centered Custom Title */}
          <div className="text-center my-8">
            <Image
              src="/Images/Brittney and Cedric Text Hi Res.png"
              alt="Brittney and Cedric elegant script typography"
              width={800}
              height={250}
              className="drop-shadow-2xl my-8"
              priority
              sizes="(max-width: 768px) 90vw, 800px"
            />

            {/* Date and Location Info */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-xl mx-auto mb-6 border border-white/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Calendar className="w-6 h-6 text-white" />
                <span className="text-3xl font-serif text-white">October 17, 2026</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <MapPin className="w-6 h-6 text-white" />
                <span className="text-3xl text-white">Hollyfield Manor</span>
              </div>
                <div className="flex items-center justify-center gap-4">
                <span className="text-xl text-white">289 Hollyfield Lan Manquin</span>
              </div>
                <div className="flex items-center justify-center gap-4">
                <span className="text-xl text-white">Richmond, VA 2310</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-wedding-teal mx-auto mb-4" />
            <h2 className="text-4xl font-serif text-wedding-forest mb-4">Our Love Story</h2>
            <p className="text-wedding-teal text-lg">How we found each other</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/close_up.jpg"
                alt="Brittney and Cedric together"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-wedding-forest mb-3">How We Met</h3>
                <p className="text-gray-700 leading-relaxed">
                  We've known each other for 17 years, stretching waaaaay back to third grade, where we were fast friends. It took Cedric only 8-ish more years to muster the courage, asking for a first date in December 2016, where our love story begins. From there we've been inseperable, through long distance in undergrad to living together as Brittney completes her doctorate. 
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-wedding-forest mb-3">The Proposal</h3>
                <p className="text-gray-700 leading-relaxed">
                  In February 2025 after 8 years of dating, Cedric and Brittney were finally ready to take the next step in their lives togehter. After an exciting day of falconry on a gorgous winter day, Cedric and Brittney came home to a warm home-cooked meal where through happy tears, she said yes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-16 px-4 bg-gradient-to-b from-wedding-blush to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-wedding-forest mb-4">Wedding Details</h2>
            <p className="text-wedding-teal text-lg">Everything you need to know about our special day</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-wedding-sage bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-wedding-forest">
                  <Calendar className="w-6 h-6" />
                  Ceremony
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Date & Time</p>
                  <p className="text-gray-600">Saturday, October 17, 2026 at 3:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Hollyfield Manor</p>
                  <p className="text-gray-600">289 Hollyfield Lan Manquin</p>
                  <p className="text-gray-600">Richmond, VA 2310</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dress Code</p>
                  <p className="text-gray-600">Formal Attire</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-wedding-forest">
                  <Users className="w-6 h-6" />
                  Reception
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Time</p>
                  <p className="text-gray-600">5:00 PM - 11:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Same venue as ceremony</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dinner</p>
                  <p className="text-gray-600">Buffet style with open bar</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dancing</p>
                  <p className="text-gray-600">DJ and fireworks!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-wedding-sage">
            <h3 className="text-2xl font-serif text-wedding-forest mb-6 text-center">Schedule of Events</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-wedding-teal text-wedding-teal bg-wedding-blush">
                  2:30 PM
                </Badge>
                <p className="font-semibold">Guest Arrival</p>
                <p className="text-sm text-gray-600">Welcome drinks & mingling</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-wedding-teal text-wedding-teal bg-wedding-blush">
                  3:00 PM
                </Badge>
                <p className="font-semibold">Ceremony</p>
                <p className="text-sm text-gray-600">Exchange of vows</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-wedding-teal text-wedding-teal bg-wedding-blush">
                  3:30 PM
                </Badge>
                <p className="font-semibold">Cocktail Hour</p>
                <p className="text-sm text-gray-600">Photos & appetizers</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-wedding-teal text-wedding-teal bg-wedding-blush">
                  4:30 PM
                </Badge>
                <p className="font-semibold">Reception</p>
                <p className="text-sm text-gray-600">Dinner & toasts</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-wedding-teal text-wedding-teal bg-wedding-blush">
                  7:00 PM
                </Badge>
                <p className="font-semibold">First Dance</p>
                <p className="text-sm text-gray-600">Let the dancing begin!</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-wedding-teal text-wedding-teal bg-wedding-blush">
                  11:00 PM
                </Badge>
                <p className="font-semibold">Send Off</p>
                <p className="text-sm text-gray-600">Sparkler exit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-wedding-forest mb-4">RSVP</h2>
          <p className="text-wedding-teal text-lg mb-8">
            We can't wait to celebrate with you! Please respond by September 1, 2026.
          </p>

          <Card className="border-wedding-sage bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif text-wedding-forest mb-4">Ready to RSVP?</h3>
              <p className="text-gray-600 mb-6">
                Please use our dedicated RSVP form to let us know if you'll be joining us for our special day.
              </p>
              <Link href="/rsvp">
                <Button className="bg-wedding-teal hover:bg-wedding-forest text-white py-3 px-8 text-lg">
                  Complete RSVP Form
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">RSVP deadline: September 1, 2026</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="py-16 px-4 bg-gradient-to-b from-wedding-blush to-wedding-peach">
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-12 h-12 text-wedding-teal mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-wedding-forest mb-4">Wedding Registry</h2>
          <p className="text-wedding-teal text-lg mb-8">
            Your presence is the greatest gift, but if you'd like to celebrate with us, we've registered at a few of our
            favorite places.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-wedding-sage hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-wedding-teal" />
                </div>
                <h3 className="text-xl font-semibold text-wedding-forest mb-2">Williams Sonoma</h3>
                <p className="text-gray-600 mb-4">Kitchen essentials and home goods</p>
                <Button variant="outline" className="border-wedding-sage text-wedding-teal hover:bg-wedding-blush">
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-wedding-teal" />
                </div>
                <h3 className="text-xl font-semibold text-wedding-forest mb-2">Crate & Barrel</h3>
                <p className="text-gray-600 mb-4">Furniture and home decor</p>
                <Button variant="outline" className="border-wedding-sage text-wedding-teal hover:bg-wedding-blush">
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-wedding-teal" />
                </div>
                <h3 className="text-xl font-semibold text-wedding-forest mb-2">Honeymoon Fund</h3>
                <p className="text-gray-600 mb-4">Help us explore Italy together</p>
                <Button variant="outline" className="border-wedding-sage text-wedding-teal hover:bg-wedding-blush">
                  Contribute
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Travel & Accommodations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Plane className="w-12 h-12 text-wedding-teal mx-auto mb-4" />
            <h2 className="text-4xl font-serif text-wedding-forest mb-4">Travel & Stay</h2>
            <p className="text-wedding-teal text-lg">Information for our out-of-town guests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-wedding-sage bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-wedding-forest">Getting There</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Nearest Airport</p>
                  <p className="text-gray-600">Richmond International (RIC)</p>
                  <p className="text-gray-600">About 30 minutes to Hollyfield Manor</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Alternative Airport</p>
                  <p className="text-gray-600">Washington Dulles (IAD)</p>
                  <p className="text-gray-600">About 2 hours to Hollyfield Manor</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Transportation</p>
                  <p className="text-gray-600">Rental car recommended</p>
                  <p className="text-gray-600">Uber/Lyft available</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-wedding-forest">Where to Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Hotel Recommendations</p>
                  <p className="text-gray-600">• The Jefferson Hotel</p>
                  <p className="text-gray-600">• Omni Richmond Hotel</p>
                  <p className="text-gray-600">• Linden Row Inn</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Group Rate</p>
                  <p className="text-gray-600">Special rates available at select hotels</p>
                  <p className="text-gray-600">Mention "Johnson-Williams Wedding at Hollyfield Manor"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-forest text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-serif mb-2">Brittney & Cedric</h3>
            <p className="text-wedding-blush">October 17, 2026 • Hollyfield Manor</p>
          </div>

          <Separator className="bg-wedding-teal mb-8" />

          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-wedding-blush">Questions about the wedding?</p>
              <p className="text-wedding-blush">Email: wedding@brittneyandcedric.com</p>
            </div>
            <div className="flex justify-center items-center">
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src="/Images/BC Logo.png"
                  alt="Brittney & Cedric Wedding Logo - Elegant BC monogram"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300"
                  sizes="120px"
                />
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Important Dates</h4>
              <p className="text-wedding-blush">RSVP Deadline: September 1, 2026</p>
              <p className="text-wedding-blush">Wedding Day: October 17, 2026</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-wedding-teal">
            <Link href="/rsvp" className="block text-gray-300 hover:text-white transition-colors">
              RSVP
            </Link>
            <p className="text-wedding-blush text-sm">Made with ❤️ for Brittney & Cedric's special day</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
