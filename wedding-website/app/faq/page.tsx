"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, MessageCircle, Mail, MapPin, Calendar, Users, Gift, Camera } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // Venue & Location
  {
    category: "Venue & Location",
    question: "Where exactly is Hollyfield Manor located?",
    answer:
      "Hollyfield Manor is located at 2468 Manor Drive, Richmond, VA 23173. It's about 30 minutes from Richmond International Airport and easily accessible via major highways.",
  },
  {
    category: "Venue & Location",
    question: "Is there parking available at the venue?",
    answer:
      "Yes! Hollyfield Manor provides ample complimentary parking for all wedding guests. The parking area is well-lit and just a short walk from the ceremony and reception areas.",
  },
  {
    category: "Venue & Location",
    question: "Is the venue wheelchair accessible?",
    answer:
      "Yes, Hollyfield Manor is fully wheelchair accessible. There are ramps available for the ceremony area, and the reception spaces are all on the ground level with accessible restrooms.",
  },
  {
    category: "Venue & Location",
    question: "What happens if it rains on the wedding day?",
    answer:
      "Don't worry! Hollyfield Manor has a beautiful indoor ceremony space that can accommodate the entire ceremony if needed. The reception will be held indoors in the elegant ballroom, so weather won't affect the celebration.",
  },

  // Wedding Day Logistics
  {
    category: "Wedding Day Logistics",
    question: "What time should I arrive?",
    answer:
      "Please plan to arrive by 2:30 PM for welcome drinks and mingling. The ceremony will begin promptly at 3:00 PM. We recommend arriving a few minutes early to find parking and get settled.",
  },
  {
    category: "Wedding Day Logistics",
    question: "What is the dress code?",
    answer:
      "Dress to impress—formal attire is the vibe! Suits, ties, tuxes, long dresses, or cocktail dresses are all great choices. The ceremony will be outdoors in the beautiful fall weather, so do not forget to bring a stylish jacket or cozy wrap just in case the breeze joins us too!",
  },
  {
    category: "Wedding Day Logistics",
    question: "How long will the ceremony and reception last?",
    answer:
      "The ceremony will be about 30 minutes, followed by cocktail hour from 3:30-4:30 PM. The reception runs from 5:00-11:00 PM, ending with a sparkler send-off.",
  },
  {
    category: "Wedding Day Logistics",
    question: "Will there be assigned seating?",
    answer:
      "Ceremony seating is open - feel free to sit anywhere! For the reception dinner, we'll have assigned tables to help everyone mingle and meet new friends. Your table assignment will be at the welcome table.",
  },
  {
    category: "Wedding Day Logistics",
    question: "Is transportation provided to/from hotels?",
    answer:
      "While we don't provide shuttle service, rideshare services like Uber and Lyft are readily available in Richmond. We also recommend renting a car if you plan to explore the area.",
  },

  // Food & Beverages
  {
    category: "Food & Beverages",
    question: "What type of food will be served?",
    answer:
      "Come hungry—we have got you covered! Dinner will be served upscale buffet-style with two delicious main courses and a variety of tasty sides. During the cocktail hour, we will have a selection of hors d oeuvres to nibble on, and later in the evening, while we are all dancing the night away, late-night finger foods will make an appearance. It is going to be a feast!",
  },
  {
    category: "Food & Beverages",
    question: "Can dietary restrictions be accommodated?",
    answer:
      "Please let us know about any dietary restrictions or food allergies when you RSVP. Our caterers can accommodate vegetarian, vegan, gluten-free, and other dietary needs.",
  },
  {
    category: "Food & Beverages",
    question: "Will there be an open bar?",
    answer:
      "Yes! We'll have a full open bar throughout cocktail hour and the reception, featuring wine, beer, signature cocktails, and standard spirits.",
  },

  // RSVP & Gifts
  {
    category: "RSVP & Gifts",
    question: "When do I need to RSVP by?",
    answer:
      "Please RSVP by September 1, 2026. You can RSVP through our website or contact us directly if you have any issues with the online form.",
  },
  {
    category: "RSVP & Gifts",
    question: "Can I bring a plus-one?",
    answer:
      "Plus-ones are by invitation only due to venue capacity. Your invitation will specify if you're invited with a guest. If you have questions about your invitation, please contact us directly.",
  },
  {
    category: "RSVP & Gifts",
    question: "Where are you registered?",
    answer:
      "We're registered at Williams Sonoma, Crate & Barrel, and have a honeymoon fund for our trip to Italy. You can find links to all our registries on our website. Your presence is the greatest gift!",
  },
  {
    category: "RSVP & Gifts",
    question: "Should I bring my gift to the wedding?",
    answer:
      "While we appreciate your thoughtfulness, we recommend having gifts shipped directly to our home or purchasing from our online registries. If you do bring a gift, there will be a designated gift table at the reception.",
  },

  // Photography & Social Media
  {
    category: "Photography & Social Media",
    question: "Can I take photos during the ceremony?",
    answer:
      "We're having an unplugged ceremony, so please keep phones and cameras put away during the vows. Our professional photographer will capture everything! Feel free to take photos during cocktail hour and reception.",
  },
  {
    category: "Photography & Social Media",
    question: "Will you share professional photos with guests?",
    answer:
      "Yes! We'll create a shared album with highlights from our professional photos that all guests can access. We'll send the link out a few weeks after the wedding.",
  },

  // Children & Special Needs
  {
    category: "Children & Special Needs",
    question: "Are children welcome at the wedding?",
    answer:
      "We love your little ones, but our wedding will be an adults-only celebration. We hope this gives you a chance to enjoy a night off, relax, and celebrate with us! Thank you for understanding.",
  },
  {
    category: "Children & Special Needs",
    question: "Is there a quiet space available if needed?",
    answer:
      "Yes, Hollyfield Manor has several quiet parlor rooms that can be used if anyone needs a break from the festivities or a quiet space.",
  },
]

const categories = [
  { name: "Venue & Location", icon: MapPin },
  { name: "Wedding Day Logistics", icon: Calendar },
  { name: "Food & Beverages", icon: Users },
  { name: "RSVP & Gifts", icon: Gift },
  { name: "Photography & Social Media", icon: Camera },
  { name: "Children & Special Needs", icon: Users },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const filteredFAQs =
    selectedCategory === "All" ? faqData : faqData.filter((item) => item.category === selectedCategory)

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
              <Link href="/menu" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
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
              <Link
                href="/faq"
                className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium border-b-2 border-wedding-sage"
              >
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
          <MessageCircle className="w-16 h-16 text-wedding-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-serif text-wedding-forest mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about Brittney & Cedric's wedding at Hollyfield Manor. Can't find what you're
            looking for? Just ask!
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-wedding-teal text-white shadow-lg"
                  : "bg-white text-wedding-teal border border-wedding-sage hover:bg-wedding-blush"
              }`}
            >
              All Questions
            </button>
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? "bg-wedding-teal text-white shadow-lg"
                      : "bg-white text-wedding-teal border border-wedding-sage hover:bg-wedding-blush"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-wedding-sage shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-wedding-blush rounded-2xl transition-colors duration-300"
                >
                  <div>
                    <div className="text-sm text-wedding-teal font-medium mb-1">{faq.category}</div>
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  </div>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-wedding-teal flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-wedding-teal flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-wedding-sage">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-wedding-forest text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Still Have Questions?</h2>
          <p className="text-white mb-8 text-lg">
            We're here to help! Don't hesitate to reach out if you need any additional information.
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-wedding-blush rounded-2xl p-6">
              <Mail className="w-8 h-8 text-wedding-teal mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2 text-xl">Email Us</h3>
              <p className="text-gray-600 text-xl mb-3">For general questions</p>
              <a
                href="mailto:wedding@brittneyandcedric.com"
                className="text-wedding-teal hover:text-wedding-forest font-medium text-xl"
              >
                wedding@brittneyandcedric.com
              </a>
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
