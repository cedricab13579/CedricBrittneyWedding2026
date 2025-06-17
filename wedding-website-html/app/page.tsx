import { Calendar, MapPin, Heart, Users, Camera, Gift, Plane } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function WeddingWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif text-rose-800">B & C</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-rose-700 hover:text-rose-900 transition-colors">
                Home
              </a>
              <a href="#story" className="text-rose-700 hover:text-rose-900 transition-colors">
                Our Story
              </a>
              <a href="#details" className="text-rose-700 hover:text-rose-900 transition-colors">
                Details
              </a>
              <a href="#rsvp" className="text-rose-700 hover:text-rose-900 transition-colors">
                RSVP
              </a>
              <a href="#registry" className="text-rose-700 hover:text-rose-900 transition-colors">
                Registry
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Brittney and Cedric"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-6xl md:text-8xl font-serif mb-4">
                  Brittney <span className="text-rose-300">&</span> Cedric
                </h1>
                <p className="text-xl md:text-2xl font-light">are getting married!</p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Calendar className="w-6 h-6 text-rose-600" />
              <span className="text-2xl font-serif text-rose-800">October 17, 2026</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <MapPin className="w-6 h-6 text-rose-600" />
              <span className="text-xl text-rose-700">Hollyfield Manor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Our Love Story</h2>
            <p className="text-rose-600 text-lg">How we found each other</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Brittney and Cedric together"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-rose-800 mb-3">How We Met</h3>
                <p className="text-gray-700 leading-relaxed">
                  We first crossed paths at a mutual friend's birthday party in the summer of 2022. Cedric was telling
                  stories that had everyone laughing, and Brittney was captivated by his sense of humor and genuine
                  warmth. What started as a conversation about our shared love of hiking turned into talking until
                  sunrise.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-rose-800 mb-3">The Proposal</h3>
                <p className="text-gray-700 leading-relaxed">
                  On a crisp autumn morning in October 2024, Cedric surprised Brittney with a hike to their favorite
                  overlook. As the sun painted the valley below in golden hues, he got down on one knee and asked her to
                  be his adventure partner for life. Through happy tears, she said yes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Wedding Details</h2>
            <p className="text-rose-600 text-lg">Everything you need to know about our special day</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-rose-800">
                  <Calendar className="w-6 h-6" />
                  Ceremony
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Date & Time</p>
                  <p className="text-gray-600">Saturday, October 17, 2026 at 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Hollyfield Manor</p>
                  <p className="text-gray-600">2468 Manor Drive</p>
                  <p className="text-gray-600">Richmond, VA 23173</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dress Code</p>
                  <p className="text-gray-600">Garden Party Attire</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-rose-800">
                  <Users className="w-6 h-6" />
                  Reception
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Time</p>
                  <p className="text-gray-600">6:00 PM - 11:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Same venue as ceremony</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dinner</p>
                  <p className="text-gray-600">Plated dinner with wine pairings</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dancing</p>
                  <p className="text-gray-600">Live band and DJ</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-rose-200">
            <h3 className="text-2xl font-serif text-rose-800 mb-6 text-center">Schedule of Events</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-rose-300 text-rose-700">
                  3:30 PM
                </Badge>
                <p className="font-semibold">Guest Arrival</p>
                <p className="text-sm text-gray-600">Welcome drinks & mingling</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-rose-300 text-rose-700">
                  4:00 PM
                </Badge>
                <p className="font-semibold">Ceremony</p>
                <p className="text-sm text-gray-600">Exchange of vows</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-rose-300 text-rose-700">
                  4:30 PM
                </Badge>
                <p className="font-semibold">Cocktail Hour</p>
                <p className="text-sm text-gray-600">Photos & appetizers</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-rose-300 text-rose-700">
                  6:00 PM
                </Badge>
                <p className="font-semibold">Reception</p>
                <p className="text-sm text-gray-600">Dinner & toasts</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-rose-300 text-rose-700">
                  8:00 PM
                </Badge>
                <p className="font-semibold">First Dance</p>
                <p className="text-sm text-gray-600">Let the dancing begin!</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 border-rose-300 text-rose-700">
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
          <h2 className="text-4xl font-serif text-rose-800 mb-4">RSVP</h2>
          <p className="text-rose-600 text-lg mb-8">
            We can't wait to celebrate with you! Please respond by September 1, 2026.
          </p>

          <Card className="border-rose-200">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Will you be attending?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="attending" value="yes" className="mr-2" />
                      Joyfully accepts
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="attending" value="no" className="mr-2" />
                      Regretfully declines
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
                  <textarea
                    className="w-full px-3 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    rows={3}
                    placeholder="Please let us know about any dietary restrictions or allergies"
                  />
                </div>

                <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3">Send RSVP</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registry Section */}
      <section id="registry" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-4xl font-serif text-rose-800 mb-4">Wedding Registry</h2>
          <p className="text-rose-600 text-lg mb-8">
            Your presence is the greatest gift, but if you'd like to celebrate with us, we've registered at a few of our
            favorite places.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-rose-800 mb-2">Williams Sonoma</h3>
                <p className="text-gray-600 mb-4">Kitchen essentials and home goods</p>
                <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-rose-800 mb-2">Crate & Barrel</h3>
                <p className="text-gray-600 mb-4">Furniture and home decor</p>
                <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-rose-800 mb-2">Honeymoon Fund</h3>
                <p className="text-gray-600 mb-4">Help us explore Italy together</p>
                <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
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
            <Plane className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Travel & Stay</h2>
            <p className="text-rose-600 text-lg">Information for our out-of-town guests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="text-rose-800">Getting There</CardTitle>
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
                  <p className="text-gray-600">Shuttle services available</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="text-rose-800">Where to Stay</CardTitle>
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
                  <p className="text-gray-600">Special rates available at Napa Valley Lodge</p>
                  <p className="text-gray-600">Mention "Johnson-Williams Wedding at Hollyfield Manor"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Camera className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Our Journey</h2>
            <p className="text-rose-600 text-lg">A few of our favorite moments together</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Memory ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-serif mb-2">Brittney & Cedric</h3>
            <p className="text-rose-200">October 17, 2026 • Hollyfield Manor</p>
          </div>

          <Separator className="bg-rose-600 mb-8" />

          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-rose-200">Questions about the wedding?</p>
              <p className="text-rose-200">Email: wedding@brittneyandcedric.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Important Dates</h4>
              <p className="text-rose-200">RSVP Deadline: September 1, 2026</p>
              <p className="text-rose-200">Wedding Day: October 17, 2026</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Our Journey</h4>
              <p className="text-rose-200">Use #BrittneyAndCedric2026</p>
              <p className="text-rose-200">on social media</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-rose-600">
            <p className="text-rose-200 text-sm">Made with ❤️ for Brittney & Cedric's special day</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
