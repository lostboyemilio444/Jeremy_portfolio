"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [animatedText, setAnimatedText] = useState("")

  useEffect(() => {
    if (inView) {
      let currentIndex = 0
      const timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setAnimatedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(timer)
        }
      }, 50 + delay)

      return () => clearInterval(timer)
    }
  }, [inView, text, delay])

  return (
    <div ref={ref} className={className}>
      {animatedText}
      <span className="animate-pulse">|</span>
    </div>
  )
}
