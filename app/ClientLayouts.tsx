"use client"
import { useEffect, useState } from "react"

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
      <p className="text-lg">Loading...</p>
    </div>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const startTime = Date.now()
    const minDisplay = 5000 // mindestens 5 Sekunden

    // Alle Bilder
    const images = Array.from(document.images)
    const videos = Array.from(document.querySelectorAll("video"))

    const totalAssets = images.length + videos.length
    if (totalAssets === 0) {
      setTimeout(() => setLoading(false), minDisplay)
      return
    }

    let loadedCount = 0

    const checkAllLoaded = () => {
      loadedCount++
      if (loadedCount >= totalAssets) {
        const elapsed = Date.now() - startTime
        const remaining = minDisplay - elapsed
        setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0)
      }
    }

    // Bilder überwachen
    images.forEach(img => {
      if (img.complete) {
        checkAllLoaded()
      } else {
        img.addEventListener("load", checkAllLoaded, { once: true })
        img.addEventListener("error", checkAllLoaded, { once: true })
      }
    })

    // Videos überwachen: loaded + play
    videos.forEach(video => {
      const handleReady = () => {
        // Warten bis Video startet
        if (!video.paused) {
          checkAllLoaded()
        } else {
          video.addEventListener("play", checkAllLoaded, { once: true })
          // autostart erzwingen falls möglich
          video.play().catch(() => checkAllLoaded()) 
        }
      }

      if (video.readyState >= 3) {
        handleReady()
      } else {
        video.addEventListener("canplaythrough", handleReady, { once: true })
        video.addEventListener("error", handleReady, { once: true })
      }
    })

    // Cleanup
    return () => {
      images.forEach(img => {
        img.removeEventListener("load", checkAllLoaded)
        img.removeEventListener("error", checkAllLoaded)
      })
      videos.forEach(video => {
        video.removeEventListener("canplaythrough", checkAllLoaded)
        video.removeEventListener("play", checkAllLoaded)
        video.removeEventListener("error", checkAllLoaded)
      })
    }
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      {children}
    </>
  )
}
