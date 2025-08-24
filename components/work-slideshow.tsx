"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface WorkItem {
  id: number
  title: string
  category: string
  description: string
  image: string
  metrics?: string
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "LFDY Campaign Video",
    category: "Professional Video",
    description: "High-quality ad campaign created as part of team project",
    image: "/professional-video-campaign-lfdy.png",
    metrics: "2.3M Views",
  },
  {
    id: 2,
    title: "Viral TikTok Content",
    category: "Personal Creation",
    description: "Self-made TikTok showcasing storytelling and trend editing",
    image: "/tiktok-viral-content-jeremy.png",
    metrics: "850K Views",
  },
  {
    id: 3,
    title: "Product Photography",
    category: "Ad Content",
    description: "Studio product shots with lifestyle elements",
    image: "/product-photography-studio.png",
    metrics: "Campaign Success",
  },
  {
    id: 4,
    title: "Model Campaign",
    category: "Ad Content",
    description: "Professional model photography for brand campaigns",
    image: "/model-photography-campaign.png",
    metrics: "Brand Partnership",
  },
  {
    id: 5,
    title: "Self-Modeling Content",
    category: "Personal Brand",
    description: "Personal brand content showcasing versatility",
    image: "/jeremy-self-modeling-campaign.png",
    metrics: "Personal Brand",
  },
  {
    id: 6,
    title: "Instagram Reels",
    category: "Social Media",
    description: "Creative Instagram content with engaging storytelling",
    image: "/instagram-reels-creative.png",
    metrics: "High Engagement",
  },
]

export default function WorkSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const getVisibleItems = () => {
    const items = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + workItems.length) % workItems.length
      items.push({
        ...workItems[index],
        position: i,
        isCenter: i === 0,
      })
    }
    return items
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center h-[60vh] relative">
        <div className="flex items-center space-x-4 transition-all duration-[2000ms] ease-out">
          {getVisibleItems().map((item, index) => (
            <div
              key={`${item.id}-${item.position}`}
              className={`relative rounded-2xl overflow-hidden transition-all duration-[2000ms] ease-out ${
                item.isCenter ? "w-72 h-80 scale-110 z-10" : "w-56 h-64 scale-90 opacity-60"
              }`}
              style={{
                transform: `translateX(${item.position * 15}px) ${item.isCenter ? "scale(1.1)" : "scale(0.9)"}`,
                transitionDelay: `${Math.abs(item.position) * 100}ms`,
              }}
            >
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {item.isCenter && (
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs font-medium text-white/80 mb-2 tracking-wide uppercase font-mono">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-2">{item.description}</p>
                  {item.metrics && <div className="text-xs font-medium text-white/80 font-mono">{item.metrics}</div>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {workItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-foreground scale-125" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
