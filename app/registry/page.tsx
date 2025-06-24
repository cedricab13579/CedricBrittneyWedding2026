"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Gift, Heart, ExternalLink, ShoppingCart, Package, Home, Utensils, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RegistryPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-wedding-blush to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-wedding-sage py-4">
        <div className="max-w-6xl mx-auto px-4 py-0">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/BC-Logo.png"
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
              <Link href="/faq" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
                FAQ
              </Link>
              <Link href="/venue" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
                Venue
              </Link>
              <Link
                href="/registry"
                className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium border-b-2 border-wedding-sage"
              >
                Registry
              </Link>
              <Link href="/rsvp" className="text-wedding-teal hover:text-wedding-forest transition-colors">
                RSVP
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-16 h-16 text-wedding-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-serif text-wedding-forest mb-6">Wedding Registry</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Your presence at our wedding is the greatest gift of all! However, if you'd like to help us start our new
            life together, we've created registries at some of our favorite places.
          </p>
          <div className="flex items-center justify-center gap-2 text-wedding-teal">
            <Heart className="w-5 h-5" />
            <span className="font-medium">Thank you for celebrating with us!</span>
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Registry Categories */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-wedding-forest mb-4">What We're Dreaming Of</h2>
            <p className="text-gray-600 text-lg">From kitchen essentials to honeymoon adventures</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-peach transition-colors duration-300">
                <Utensils className="w-8 h-8 text-wedding-teal" />
              </div>
              <h3 className="text-lg font-semibold text-wedding-forest mb-2">Kitchen & Dining</h3>
              <p className="text-gray-600 text-sm">Cookware, appliances, and dining essentials</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-peach transition-colors duration-300">
                <Home className="w-8 h-8 text-wedding-teal" />
              </div>
              <h3 className="text-lg font-semibold text-wedding-forest mb-2">Home & Decor</h3>
              <p className="text-gray-600 text-sm">Furniture, linens, and home accessories</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-peach transition-colors duration-300">
                <Package className="w-8 h-8 text-wedding-teal" />
              </div>
              <h3 className="text-lg font-semibold text-wedding-forest mb-2">Everyday Essentials</h3>
              <p className="text-gray-600 text-sm">Household items and practical necessities</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-peach transition-colors duration-300">
                <Plane className="w-8 h-8 text-wedding-teal" />
              </div>
              <h3 className="text-lg font-semibold text-wedding-forest mb-2">Experiences</h3>
              <p className="text-gray-600 text-sm">Honeymoon fund and memorable adventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Registry Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-wedding-forest mb-4">Our Registries</h2>
            <p className="text-gray-600 text-lg">Click on any registry to browse and shop</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Amazon Registry */}
            <Card className="border-wedding-sage shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-wedding-blush to-wedding-peach border-b border-wedding-sage">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-wedding-forest text-xl">Amazon Wedding Registry</CardTitle>
                      <p className="text-gray-600 text-sm">Everything for our new home</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    Primary
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full"></span>
                    Kitchen appliances & cookware
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full"></span>
                    Home decor & furniture
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full"></span>
                    Bedding & bath essentials
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full"></span>
                    Electronics & gadgets
                  </div>
                </div>

                {/* Amazon Registry Embed */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                  <div className="text-center">
                    <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-700 mb-2">Amazon Wedding Registry</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Browse our complete wishlist on Amazon with items for every room in our new home.
                    </p>

                    {/* Simulated Amazon Widget */}
                    <div className="bg-white rounded border p-4 text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">a</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Brittney & Cedric's Wedding Registry</p>
                          <p className="text-xs text-gray-500">Wedding Date: October 17, 2026</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-gray-600 mb-4">
                        <div className="flex justify-between">
                          <span>Items on registry:</span>
                          <span className="font-semibold">47 items</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Items purchased:</span>
                          <span className="font-semibold text-wedding-sage">12 items</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-wedding-sage h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => window.open("https://amazon.com/wedding/registry", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Full Registry on Amazon
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => window.open("https://amazon.com/wedding/registry", "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Shop Our Amazon Registry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Williams Sonoma Registry */}
            <Card className="border-wedding-sage shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-wedding-blush to-wedding-peach border-b border-wedding-sage">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-wedding-teal/20 rounded-full flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-wedding-teal" />
                    </div>
                    <div>
                      <CardTitle className="text-wedding-forest text-xl">Williams Sonoma</CardTitle>
                      <p className="text-gray-600 text-sm">Premium kitchen & dining</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-wedding-teal text-wedding-teal">
                    Kitchen
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-teal rounded-full"></span>
                    Professional cookware sets
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-teal rounded-full"></span>
                    High-quality kitchen appliances
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-teal rounded-full"></span>
                    Fine dining & entertaining
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-wedding-teal rounded-full"></span>
                    Specialty cooking tools
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                  <div className="text-center">
                    <Utensils className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-700 mb-2">Williams Sonoma Registry</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Premium kitchen essentials and entertaining pieces for our culinary adventures.
                    </p>

                    <div className="bg-white rounded border p-4 text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-wedding-teal rounded flex items-center justify-center">
                          <Utensils className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Brittney & Cedric Johnson-Williams</p>
                          <p className="text-xs text-gray-500">Registry ID: BJ2026WS</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-gray-600 mb-4">
                        <div className="flex justify-between">
                          <span>Registry items:</span>
                          <span className="font-semibold">23 items</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Items fulfilled:</span>
                          <span className="font-semibold text-wedding-teal">8 items</span>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-wedding-teal hover:bg-wedding-forest text-white"
                        onClick={() => window.open("https://williams-sonoma.com/registry", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Williams Sonoma Registry
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-wedding-teal text-wedding-teal hover:bg-wedding-blush"
                    onClick={() => window.open("https://williams-sonoma.com/registry", "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Shop Williams Sonoma
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Registries */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-wedding-sage hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wedding-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-wedding-sage" />
                </div>
                <h3 className="text-xl font-semibold text-wedding-forest mb-2">Crate & Barrel</h3>
                <p className="text-gray-600 mb-4 text-sm">Modern furniture and home decor for our new space</p>
                <Button
                  variant="outline"
                  className="border-wedding-sage text-wedding-sage hover:bg-wedding-blush"
                  onClick={() => window.open("https://crateandbarrel.com/gift-registry", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wedding-peach/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-wedding-forest" />
                </div>
                <h3 className="text-xl font-semibold text-wedding-forest mb-2">Target</h3>
                <p className="text-gray-600 mb-4 text-sm">Everyday essentials and household items</p>
                <Button
                  variant="outline"
                  className="border-wedding-sage text-wedding-sage hover:bg-wedding-blush"
                  onClick={() => window.open("https://target.com/gift-registry", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Registry
                </Button>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-wedding-teal" />
                </div>
                <h3 className="text-xl font-semibold text-wedding-forest mb-2">Honeymoon Fund</h3>
                <p className="text-gray-600 mb-4 text-sm">Help us create memories in Italy</p>
                <Button
                  variant="outline"
                  className="border-wedding-teal text-wedding-teal hover:bg-wedding-blush"
                  onClick={() => window.open("https://honeyfund.com/brittney-cedric", "_blank")}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Contribute
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gift Giving Tips */}
      <section className="py-16 px-4 bg-wedding-blush">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-wedding-forest mb-4">Gift Giving Made Easy</h2>
            <p className="text-gray-600 text-lg">A few helpful tips for our wonderful guests</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-wedding-sage bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-wedding-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Package className="w-5 h-5 text-wedding-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Shipping Gifts</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We recommend having gifts shipped directly to our home address rather than bringing them to the
                      wedding. This helps us focus on celebrating with you! Our address will be provided with your RSVP
                      confirmation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-wedding-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-5 h-5 text-wedding-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Group Gifts</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Many of our registries allow for group gifting on larger items! This is a great way for families
                      or friend groups to contribute together toward something special we'll treasure forever.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-wedding-peach/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Gift className="w-5 h-5 text-wedding-forest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Gift Cards</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      If you prefer to give a gift card, we'd love ones from our registry stores or general ones like
                      Visa/Mastercard that we can use for home improvements and experiences together.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wedding-sage bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-wedding-blush rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Plane className="w-5 h-5 text-wedding-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Experiences Over Things</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We're also excited about experience gifts! Consider contributing to our honeymoon fund or gifting
                      us date night experiences, cooking classes, or local adventure activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-wedding-forest to-wedding-teal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-wedding-blush" />
          <h2 className="text-4xl font-serif mb-6">Thank You</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Your love, support, and presence at our wedding mean the world to us. Any gift you choose to give is a
            wonderful bonus that will help us build our life together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-white text-wedding-forest px-6 py-3 rounded-full font-semibold hover:bg-wedding-blush transition-colors duration-300"
            >
              Back to Wedding Website
            </Link>
            <Link
              href="/#rsvp"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              RSVP Now
            </Link>
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
                289 Hollyfield Ln, Manquin
                <br />
                Richmond, VA 23106
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
