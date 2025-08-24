"use client"

import { useState } from "react"

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "ALL WORK" },
    { id: "video", name: "VIDEO PROJECTS" },
    { id: "tiktok", name: "TIKTOK CREATIONS" },
    { id: "photo", name: "AD CONTENT" },
    { id: "social", name: "SOCIAL MEDIA" },
  ]

  const portfolioItems = [
    {
      id: 1,
      category: "video",
      title: "LFDY Campaign Video",
      description: "High-quality ad campaign created as part of team project",
      format: "16:9 • Teamwork",
      image: "/professional-video-campaign-lfdy.png",
      type: "video",
    },
    {
      id: 2,
      category: "tiktok",
      title: "Viral TikTok Series",
      description: "Self-made TikToks showcasing storytelling and trend editing",
      format: "9:16 • Solo Work",
      image: "/tiktok-viral-content-jeremy.png",
      type: "video",
    },
    {
      id: 3,
      category: "photo",
      title: "Product Photography",
      description: "Studio and lifestyle product shots for brand campaigns",
      format: "Photo • Studio",
      image: "/product-photography-studio.png",
      type: "image",
    },
    {
      id: 4,
      category: "photo",
      title: "Model Campaign Shoot",
      description: "Professional model photography for brand content",
      format: "Photo • Campaign",
      image: "/model-photography-campaign.png",
      type: "image",
    },
    {
      id: 5,
      category: "photo",
      title: "Self-Modeling Content",
      description: "On-camera talent work for various brand campaigns",
      format: "Photo • Self-Modeling",
      image: "/jeremy-self-modeling-campaign.png",
      type: "image",
    },
    {
      id: 6,
      category: "video",
      title: "Instagram Reels Series",
      description: "Creative Instagram content with advanced editing techniques",
      format: "9:16 • Solo Work",
      image: "/instagram-reels-creative.png",
      type: "video",
    },
    {
      id: 7,
      category: "social",
      title: "LFDY TikTok Management",
      description: "Complete TikTok account management and content strategy",
      format: "Social Media • Management",
      image: "/lfdy-tiktok-management.png",
      type: "image",
    },
    {
      id: 8,
      category: "video",
      title: "Trend Research Video",
      description: "Analysis and implementation of emerging social media trends",
      format: "16:9 • Research",
      image: "/trend-research-video.png",
      type: "video",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
            MY <span className="text-red-500">WORK</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            A showcase of creative projects spanning video production, social media content, and brand campaigns.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === category.id ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <span className="text-xs text-red-500 font-semibold">{item.format}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-black text-white p-12 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-red-500 mb-2">50+</div>
              <div className="text-sm font-semibold tracking-wider">VIDEOS CREATED</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2">2M+</div>
              <div className="text-sm font-semibold tracking-wider">TOTAL VIEWS</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2">15+</div>
              <div className="text-sm font-semibold tracking-wider">BRAND CAMPAIGNS</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2">100%</div>
              <div className="text-sm font-semibold tracking-wider">PASSION DRIVEN</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create something amazing?</h2>
          <button
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="inline-block bg-red-500 text-white px-8 py-4 text-lg font-bold tracking-wider hover:bg-red-600 transition-colors duration-300"
          >
            LET'S WORK TOGETHER
          </button>
        </div>
      </div>
    </section>
  )
}
