"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const jobTitles = [
    "Social Media Manager",
    "Content Creator",
    "Art Director",
    "Content Strategist",
    "Video Editor",
    "Trend Researcher",
  ]

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1))
        setIsVisible(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [jobTitles.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Title with Rotating Text */}
          <h1 className="text-white mb-8">
            <span className="block text-6xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-black tracking-tighter leading-none mb-4 font-oswald uppercase scroll-animate">
              Your future Junior
            </span>
            <span
              className={`block text-6xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-black tracking-tighter leading-none font-oswald uppercase transition-opacity duration-300 animate-color-shift text-sky-400 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {jobTitles[currentTitleIndex]}
            </span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-animate">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
