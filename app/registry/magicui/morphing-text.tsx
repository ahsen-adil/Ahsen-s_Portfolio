"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "../../lib/utils"

interface MorphingTextProps {
  className?: string
  texts: string[]
}

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, 500)
    }, 2000)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <span
      className={cn(
        "inline-block transition-all duration-500",
        isAnimating ? "opacity-0 blur-sm" : "opacity-100 blur-0",
        className
      )}
    >
      {texts[currentIndex]}
    </span>
  )
}
