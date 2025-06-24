"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Users, Utensils, Wine, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    attending: "",
    guestCount: "",
    alcoholCount: "",
    dietaryRestrictions: "",
    songRequest: "",
    additionalComments: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email"
    if (!formData.attending) newErrors.attending = "Please let us know if you'll be attending"

    if (formData.attending === "yes") {
      if (!formData.guestCount) newErrors.guestCount = "Please specify number of guests"
      if (!formData.alcoholCount) newErrors.alcoholCount = "Please specify number drinking alcohol"

      const guestCount = Number.parseInt(formData.guestCount)
      const alcoholCount = Number.parseInt(formData.alcoholCount)

      if (alcoholCount > guestCount) {
        newErrors.alcoholCount = "Cannot exceed total number of guests"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-wedding-blush to-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-wedding-sage py-4">
          <div className="max-w-6xl mx-auto px-4 py-0">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Images/BC-Logo.png"
                  alt="Brittney & Cedric Wedding Logo"
                  width={80}
                  height={80}
                  sizes="80px"
                  className="hover:scale-105 transition-transform duration-300"
                  priority
                />
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
                  Home
                </Link>
                <Link href="/faq" className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium">
                  FAQ
                </Link>
                <Link
                  href="/venue"
                  className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium"
                >
                  Venue
                </Link>
                <Link
                  href="/registry"
                  className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium"
                >
                  Registry
                </Link>
                <Link
                  href="/rsvp"
                  className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium border-b-2 border-wedding-teal"
                >
                  RSVP
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-wedding-sage">
              <CheckCircle className="w-20 h-20 text-wedding-sage mx-auto mb-6" />
              <h1 className="text-4xl font-serif text-wedding-forest mb-4">Thank You!</h1>
              <p className="text-xl text-gray-600 mb-6">
                Your RSVP has been received successfully. We're so excited to celebrate with you!
              </p>

              <div className="bg-wedding-blush rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-wedding-forest mb-3">What's Next?</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• You'll receive a confirmation email shortly</p>
                  <p>• We'll send venue details and parking information closer to the date</p>
                  <p>• Check our FAQ page for answers to common questions</p>
                  <p>• Follow #BrittneyAndCedric2026 for updates</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/">
                  <Button className="bg-wedding-teal hover:bg-wedding-forest text-white">
                    Back to Wedding Website
                  </Button>
                </Link>
                <Link href="/venue">
                  <Button variant="outline" className="border-wedding-sage text-wedding-teal hover:bg-wedding-blush">
                    View Venue Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-blush to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-wedding-sage py-4">
        <div className="max-w-6xl mx-auto px-4 py-0">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/BC-Logo.png"
                alt="Brittney & Cedric Wedding Logo"
                width={80}
                height={80}
                sizes="80px"
                className="hover:scale-105 transition-transform duration-300"
                priority
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
                className="text-wedding-teal hover:text-wedding-forest transition-colors font-medium"
              >
                Registry
              </Link>
              <Link
                href="/rsvp"
                className="text-wedding-teal hover:text-wedding-forest transition-colors border-b-2 border-wedding-teal font-medium"
              >
                RSVP
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-16 h-16 text-wedding-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-serif text-wedding-forest mb-6">RSVP</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
            We can't wait to celebrate with you at Hollyfield Manor!
          </p>
          <p className="text-lg text-wedding-teal font-medium">Please respond by September 1, 2026</p>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-wedding-sage shadow-xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-wedding-blush to-wedding-peach border-b border-wedding-sage">
              <CardTitle className="text-2xl font-serif text-wedding-forest text-center">Wedding RSVP Form</CardTitle>
              <p className="text-center text-gray-600">October 17, 2026 • Hollyfield Manor</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-serif text-wedding-forest flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Your Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`mt-1 ${errors.firstName ? "border-red-500" : "border-wedding-sage"} focus:ring-wedding-teal`}
                        placeholder="Your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={`mt-1 ${errors.lastName ? "border-red-500" : "border-wedding-sage"} focus:ring-wedding-teal`}
                        placeholder="Your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`mt-1 ${errors.email ? "border-red-500" : "border-wedding-sage"} focus:ring-wedding-teal`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1 border-wedding-sage focus:ring-wedding-teal"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Attendance */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-wedding-forest">Will you be attending? *</h3>
                  <RadioGroup
                    value={formData.attending}
                    onValueChange={(value) => handleInputChange("attending", value)}
                    className="flex gap-8"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" className="text-wedding-teal" />
                      <Label htmlFor="yes" className="text-gray-700 font-medium cursor-pointer">
                        ✨ Joyfully accepts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" className="text-wedding-teal" />
                      <Label htmlFor="no" className="text-gray-700 font-medium cursor-pointer">
                        💔 Regretfully declines
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.attending && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.attending}
                    </p>
                  )}
                </div>

                {/* Conditional fields for attending guests */}
                {formData.attending === "yes" && (
                  <div className="space-y-6 p-6 bg-wedding-blush rounded-2xl border border-wedding-sage">
                    <h3 className="text-xl font-serif text-wedding-forest">Party Details</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="guestCount" className="text-gray-700 font-medium flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Number of Guests Attending *
                        </Label>
                        <Select
                          value={formData.guestCount}
                          onValueChange={(value) => handleInputChange("guestCount", value)}
                        >
                          <SelectTrigger
                            className={`mt-1 ${errors.guestCount ? "border-red-500" : "border-wedding-sage"}`}
                          >
                            <SelectValue placeholder="Select number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5 Guests</SelectItem>
                            <SelectItem value="6">6+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.guestCount && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.guestCount}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="alcoholCount" className="text-gray-700 font-medium flex items-center gap-2">
                          <Wine className="w-4 h-4" />
                          Guests Drinking Alcohol *
                        </Label>
                        <Select
                          value={formData.alcoholCount}
                          onValueChange={(value) => handleInputChange("alcoholCount", value)}
                        >
                          <SelectTrigger
                            className={`mt-1 ${errors.alcoholCount ? "border-red-500" : "border-wedding-sage"}`}
                          >
                            <SelectValue placeholder="Select number drinking" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0 Guests</SelectItem>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5 Guests</SelectItem>
                            <SelectItem value="6">6+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.alcoholCount && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.alcoholCount}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 mt-1">
                          This helps us plan bar service and non-alcoholic options
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="dietaryRestrictions"
                        className="text-gray-700 font-medium flex items-center gap-2"
                      >
                        <Utensils className="w-4 h-4" />
                        Dietary Restrictions & Allergies
                      </Label>
                      <Textarea
                        id="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                        className="mt-1 border-wedding-sage focus:ring-wedding-teal"
                        rows={3}
                        placeholder="Please let us know about any dietary restrictions, food allergies, or special meal requirements..."
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        Our caterers can accommodate vegetarian, vegan, gluten-free, and other dietary needs
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="songRequest" className="text-gray-700 font-medium">
                        Song Request (Optional)
                      </Label>
                      <Input
                        id="songRequest"
                        value={formData.songRequest}
                        onChange={(e) => handleInputChange("songRequest", e.target.value)}
                        className="mt-1 border-wedding-sage focus:ring-wedding-teal"
                        placeholder="Any song you'd love to hear at the reception?"
                      />
                    </div>
                  </div>
                )}

                {/* Additional Comments */}
                <div>
                  <Label htmlFor="additionalComments" className="text-gray-700 font-medium">
                    Additional Comments or Questions
                  </Label>
                  <Textarea
                    id="additionalComments"
                    value={formData.additionalComments}
                    onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                    className="mt-1 border-wedding-sage focus:ring-wedding-teal"
                    rows={3}
                    placeholder="Anything else you'd like us to know? Questions about the venue, accommodations, or the celebration?"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-wedding-sage">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-wedding-teal hover:bg-wedding-forest text-white py-4 text-lg font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending RSVP...
                      </div>
                    ) : (
                      "Send RSVP"
                    )}
                  </Button>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    By submitting this form, you'll receive a confirmation email with all the wedding details.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
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
