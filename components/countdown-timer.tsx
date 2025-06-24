"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = (): TimeLeft => {
      // Wedding date: October 17, 2026 at 4:00 PM
      const weddingDate = new Date("2026-10-17T16:00:00").getTime()
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    // Calculate initial time
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-wedding-sage shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-serif text-wedding-forest mb-6">Counting Down to Our Special Day</h3>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="bg-wedding-blush rounded-xl p-4 mb-2">
                  <div className="text-3xl md:text-4xl font-bold text-wedding-forest">--</div>
                </div>
                <div className="text-sm font-medium text-wedding-teal">Loading</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: timeLeft.days === 1 ? "Day" : "Days" },
    { value: timeLeft.hours, label: timeLeft.hours === 1 ? "Hour" : "Hours" },
    { value: timeLeft.minutes, label: timeLeft.minutes === 1 ? "Minute" : "Minutes" },
    { value: timeLeft.seconds, label: timeLeft.seconds === 1 ? "Second" : "Seconds" },
  ]

  // Check if the wedding has passed
  const weddingPassed = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-wedding-sage shadow-lg">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-serif text-wedding-forest mb-2">
          {weddingPassed ? "We're Married!" : "Counting Down to Our Special Day"}
        </h3>
        <p className="text-wedding-teal mb-6 text-lg">
          {weddingPassed ? "Thank you for celebrating with us!" : "October 17, 2026 at 4:00 PM"}
        </p>

        {weddingPassed ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">💒💕</div>
            <p className="text-xl text-wedding-teal font-medium">Brittney & Cedric are now married!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeUnits.map((unit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-wedding-blush to-wedding-peach rounded-xl p-4 mb-2 group-hover:from-wedding-peach group-hover:to-wedding-sage transition-all duration-300 shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-wedding-forest tabular-nums">
                    {unit.value.toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="text-sm md:text-base font-medium text-wedding-teal">{unit.label}</div>
              </div>
            ))}
          </div>
        )}

        {!weddingPassed && (
          <div className="mt-6 pt-6 border-t border-wedding-sage">
            <p className="text-sm text-gray-600">Can't wait to celebrate with you at Hollyfield Manor!</p>
          </div>
        )}
      </div>
    </div>
  )
}
