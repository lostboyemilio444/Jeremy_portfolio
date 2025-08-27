"use client"
import { useEffect, useState } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

function LoadingScreen({ text, progress }: { text: string; progress: number }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-6"></div>

      {/* Text */}
      <p className="text-lg mb-4">{text}</p>

      {/* Progress-Bar */}
      <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-sm">{progress}%</p>
    </div>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [loaderText, setLoaderText] = useState("Loading pictures")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Scroll sperren während Loading
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [loading])

  useEffect(() => {
    const startTime = Date.now()
    const minDisplay = 5000 // mindestens 5 Sekunden sichtbar

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
      const percent = Math.round((loadedCount / totalAssets) * 100)
      setProgress(percent)

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

    // Videos überwachen → nur bis sie abspielbereit sind
    videos.forEach(video => {
      if (video.readyState >= 3) {
        checkAllLoaded()
      } else {
        video.addEventListener("canplaythrough", checkAllLoaded, { once: true })
        video.addEventListener("error", checkAllLoaded, { once: true })
      }
    })
  }, [])

  // Loader-Text wechselt dynamisch
  useEffect(() => {
    const texts = ["Loading pictures", "Loading videos", "Loading assets"]
    let index = 0
    const interval = setInterval(() => {
      setLoaderText(texts[index])
      index = (index + 1) % texts.length
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {loading && <LoadingScreen text={loaderText} progress={progress} />}
      {!loading && <Navigation />}
      {children}
      {!loading && <Footer />}
    </>
  )
}
