"use client"

import { useState, useEffect } from "react"

export function TypewriterText({ phrases, className = "" }: { phrases: string[], className?: string }) {
  const [displayedText, setDisplayedText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!phrases || phrases.length === 0) return

    const currentPhrase = phrases[phraseIndex]
    let timer: NodeJS.Timeout
    
    if (isDeleting) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1))
        if (displayedText.length <= 1) {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }, 30) // faster delete
    } else {
      // Typing
      if (displayedText.length === currentPhrase.length) {
        // Pause at the end before deleting
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2500) // Pause for 2.5s
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
        }, 60) // Typing speed
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, phraseIndex, phrases])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse opacity-70 ml-0.5">|</span>
    </span>
  )
}
