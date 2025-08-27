"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState("Loading assets...")

  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img"))
    const videos = Array.from(document.querySelectorAll("video"))

    const total = images.length + videos.length
    if (total === 0) {
      setLoading(false)
      return
    }

    let loaded = 0
    function updateProgress() {
      loaded++
      const percent = Math.round((loaded / total) * 100)
      setProgress(percent)

      // Status text abwechselnd ändern
      if (loaded % 3 === 1) setStatusText("Loading pictures...")
      else if (loaded % 3 === 2) setStatusText("Loading videos...")
      else setStatusText("Loading assets...")

      if (loaded >= total) {
        setTimeout(() => setLoading(false), 500) // kleine Verzögerung
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        updateProgress()
      } else {
        img.onload = updateProgress
        img.onerror = updateProgress
      }
    })

    videos.forEach((video) => {
      if (video.readyState >= 3) {
        updateProgress()
      } else {
        video.oncanplaythrough = updateProgress
        video.onerror = updateProgress
      }
    })

    // Fallback: nach 15s Loader schließen
    const timeout = setTimeout(() => setLoading(false), 15000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
          <p className="mb-4 text-xl">{statusText}</p>
          <div className="w-64 bg-gray-700 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm">{progress}%</p>
        </div>
      ) : (
        <>
          <Navigation />
          {children}
          <Footer />
        </>
      )}
    </div>
  )
}
