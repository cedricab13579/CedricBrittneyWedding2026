"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Utensils, Wine, Coffee, Cake } from "lucide-react"

export default function MenuPage() {
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
              <Link
                href="/menu"
                className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium border-b-2 border-wedding-sage"
              >
                Menu
              </Link>
              <Link href="/venue" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Utensils className="w-16 h-16 text-wedding-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-serif text-wedding-forest mb-6">Wedding Menu</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Join us for a delicious buffet-style dinner featuring seasonal ingredients and flavors that celebrate our
            love story. Our menu has been carefully crafted to offer something special for everyone.
          </p>
        </div>
      </section>

      {/* Menu Overview */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-wedding-forest mb-4">Buffet Style Dining</h2>
            <p className="text-gray-600 text-lg">Served from 5:30 PM - 8:00 PM</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-peach transition-colors duration-300">
                <Utensils className="w-8 h-8 text-wedding-teal" />
              </div>
              <h3 className="text-lg font-semibold text-wedding-forest mb-2">Fresh & Local</h3>
              <p className="text-gray-600 text-sm">Sourced from local Virginia farms and suppliers</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-peach transition-colors duration-300">
                <Wine className="w-8 h-8 text-wedding-teal" />
              </div>
              <h3 className="text-lg font-semibold text-wedding-forest mb-2">Wine Pairings</h3>
              <p className="text-gray-600 text-sm">Carefully selected wines to complement each dish</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-wedding-blush rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wedding-peach transition-colors duration-300">
                <Cake className="w-8 h-8 text-wedding-teal" />
              </div>
              <h3 className="text-lg font-semibold text-wedding-forest mb-2">Sweet Endings</h3>
              <p className="text-gray-600 text-sm">Decadent desserts to celebrate our special day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Entrees */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-wedding-forest mb-4">Main Entrees</h2>
              <p className="text-gray-600 text-lg">
                Choose from our signature dishes, each prepared with love and attention to detail
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-wedding-blush rounded-2xl p-8 shadow-lg border border-wedding-sage">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-wedding-peach rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥩</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-wedding-forest">Herb-Crusted Beef Tenderloin</h3>
                    <p className="text-wedding-teal font-medium">Chef's Signature</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Premium beef tenderloin seasoned with fresh rosemary, thyme, and garlic, slow-roasted to perfection
                  and served with a rich red wine reduction. This elegant cut melts in your mouth and represents the
                  finest in Virginia cuisine.
                </p>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Accompaniments:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Red wine and shallot reduction</li>
                    <li>• Fresh herb garnish</li>
                    <li>• Roasted garlic aioli on the side</li>
                  </ul>
                </div>
              </div>

              <div className="bg-wedding-blush rounded-2xl p-8 shadow-lg border border-wedding-sage">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-wedding-peach rounded-full flex items-center justify-center">
                    <span className="text-2xl">🐟</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-wedding-forest">Pan-Seared Atlantic Salmon</h3>
                    <p className="text-wedding-teal font-medium">Ocean Fresh</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fresh Atlantic salmon fillet pan-seared to golden perfection, topped with a delicate lemon-dill butter
                  sauce. Sourced sustainably and prepared with Mediterranean-inspired flavors that celebrate the bounty
                  of the sea.
                </p>
                <div className="bg-white/50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Accompaniments:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lemon-dill butter sauce</li>
                    <li>• Capers and fresh herbs</li>
                    <li>• Lemon wedge garnish</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sides */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-wedding-forest mb-4">Signature Sides</h2>
              <p className="text-gray-600 text-lg">
                Thoughtfully prepared accompaniments that complement our main dishes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-wedding-sage">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-wedding-sage/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥔</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-wedding-forest">Truffle Parmesan Potatoes</h3>
                    <p className="text-wedding-teal font-medium">Indulgent Classic</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Creamy Yukon Gold potatoes whipped to perfection with butter, cream, and a hint of truffle oil, then
                  topped with aged Parmesan cheese and fresh chives. A luxurious twist on the beloved comfort food
                  classic.
                </p>
                <div className="bg-wedding-blush/30 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Special Features:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Made with locally sourced Yukon Gold potatoes</li>
                    <li>• Infused with white truffle oil</li>
                    <li>• Topped with aged Parmigiano-Reggiano</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-wedding-sage">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-wedding-sage/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥬</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-wedding-forest">Seasonal Roasted Vegetables</h3>
                    <p className="text-wedding-teal font-medium">Garden Fresh</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A colorful medley of seasonal vegetables including rainbow carrots, Brussels sprouts, butternut
                  squash, and red onions, roasted with olive oil, fresh herbs, and a touch of balsamic glaze.
                  Celebrating the harvest season.
                </p>
                <div className="bg-wedding-blush/30 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Seasonal Selection:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Rainbow carrots and Brussels sprouts</li>
                    <li>• Butternut squash and red onions</li>
                    <li>• Finished with balsamic glaze</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif text-wedding-forest mb-4">Sweet Celebrations</h2>
              <p className="text-gray-600 text-lg">An array of desserts to sweeten our special day</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-wedding-peach/30 rounded-2xl p-6 shadow-lg border border-wedding-sage text-center">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍰</span>
                </div>
                <h3 className="text-xl font-serif text-wedding-forest mb-3">Wedding Cake</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Three-tier vanilla bean cake with raspberry filling and cream cheese frosting, decorated with fresh
                  flowers and elegant piping.
                </p>
                <div className="text-xs text-gray-600">
                  <p className="font-medium">Flavors: Vanilla Bean & Raspberry</p>
                </div>
              </div>

              <div className="bg-wedding-peach/30 rounded-2xl p-6 shadow-lg border border-wedding-sage text-center">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥧</span>
                </div>
                <h3 className="text-xl font-serif text-wedding-forest mb-3">Seasonal Fruit Tarts</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Individual pastry tarts filled with vanilla pastry cream and topped with fresh seasonal fruits
                  including berries, peaches, and figs.
                </p>
                <div className="text-xs text-gray-600">
                  <p className="font-medium">Features: Fresh Seasonal Fruits</p>
                </div>
              </div>

              <div className="bg-wedding-peach/30 rounded-2xl p-6 shadow-lg border border-wedding-sage text-center">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍫</span>
                </div>
                <h3 className="text-xl font-serif text-wedding-forest mb-3">Chocolate Truffles</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Handcrafted dark chocolate truffles with various fillings including salted caramel, raspberry, and
                  espresso, dusted with cocoa powder.
                </p>
                <div className="text-xs text-gray-600">
                  <p className="font-medium">Varieties: Caramel, Raspberry, Espresso</p>
                </div>
              </div>

              <div className="bg-wedding-peach/30 rounded-2xl p-6 shadow-lg border border-wedding-sage text-center">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍨</span>
                </div>
                <h3 className="text-xl font-serif text-wedding-forest mb-3">Artisan Ice Cream</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Locally made ice cream in flavors of vanilla bean, chocolate fudge, and seasonal peach, served in
                  elegant glass bowls.
                </p>
                <div className="text-xs text-gray-600">
                  <p className="font-medium">Flavors: Vanilla, Chocolate, Peach</p>
                </div>
              </div>

              <div className="bg-wedding-peach/30 rounded-2xl p-6 shadow-lg border border-wedding-sage text-center">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧁</span>
                </div>
                <h3 className="text-xl font-serif text-wedding-forest mb-3">Mini Cheesecakes</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Individual New York-style cheesecakes with graham cracker crust, topped with fresh berry compote and
                  whipped cream.
                </p>
                <div className="text-xs text-gray-600">
                  <p className="font-medium">Topped: Fresh Berry Compote</p>
                </div>
              </div>

              <div className="bg-wedding-peach/30 rounded-2xl p-6 shadow-lg border border-wedding-sage text-center">
                <div className="w-16 h-16 bg-wedding-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍪</span>
                </div>
                <h3 className="text-xl font-serif text-wedding-forest mb-3">Wedding Cookies</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Sugar cookies decorated with royal icing in our wedding colors, featuring hearts, flowers, and our
                  initials as sweet keepsakes.
                </p>
                <div className="text-xs text-gray-600">
                  <p className="font-medium">Decorated: Wedding Theme Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beverages Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-wedding-blush to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Coffee className="w-12 h-12 text-wedding-teal mx-auto mb-4" />
            <h2 className="text-4xl font-serif text-wedding-forest mb-4">Beverages</h2>
            <p className="text-gray-600 text-lg">A full selection of drinks to toast our celebration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-wedding-sage">
              <div className="text-center mb-6">
                <Wine className="w-12 h-12 text-wedding-teal mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-wedding-forest mb-2">Wine Selection</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Red Wines</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Virginia Cabernet Sauvignon</li>
                    <li>• Pinot Noir</li>
                    <li>• Merlot</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">White Wines</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Virginia Viognier</li>
                    <li>• Chardonnay</li>
                    <li>• Sauvignon Blanc</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sparkling</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Champagne for toasts</li>
                    <li>• Prosecco</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-wedding-sage">
              <div className="text-center mb-6">
                <span className="text-4xl block mb-4">🍹</span>
                <h3 className="text-2xl font-serif text-wedding-forest mb-2">Signature Cocktails</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">"The Brittney"</h4>
                  <p className="text-sm text-gray-700">Peach bellini with prosecco and fresh peach puree</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">"The Cedric"</h4>
                  <p className="text-sm text-gray-700">Bourbon old fashioned with maple syrup and orange</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Classic Bar</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Premium spirits</li>
                    <li>• Beer selection</li>
                    <li>• Mixed drinks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-wedding-sage">
              <div className="text-center mb-6">
                <Coffee className="w-12 h-12 text-wedding-teal mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-wedding-forest mb-2">Non-Alcoholic</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Hot Beverages</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Freshly brewed coffee</li>
                    <li>• Selection of teas</li>
                    <li>• Hot chocolate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cold Beverages</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sparkling water</li>
                    <li>• Soft drinks</li>
                    <li>• Fresh fruit juices</li>
                    <li>• Iced tea</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-wedding-forest mb-4">Dietary Accommodations</h2>
            <p className="text-gray-600 text-lg">We want everyone to enjoy our celebration</p>
          </div>

          <div className="bg-wedding-blush rounded-2xl p-8 shadow-lg border border-wedding-sage">
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <h3 className="text-xl font-serif text-wedding-forest mb-4">Please Let Us Know</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you RSVP, please inform us of any dietary restrictions, food allergies, or special requirements.
                  Our catering team will work to ensure everyone has delicious options to enjoy.
                </p>
                <div className="text-center">
                  <Link
                    href="/rsvp"
                    className="inline-block bg-wedding-teal text-white px-6 py-3 rounded-full font-medium hover:bg-wedding-forest transition-colors duration-300"
                  >
                    RSVP & Share Dietary Needs
                  </Link>
                </div>
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
