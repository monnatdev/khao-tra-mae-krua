"use client"

import { useState, useRef, useEffect } from "react"

export default function LazyVideo({ 
  src, 
  poster 
}: { 
  src: string
  poster?: string 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true)
        }
      },
      { threshold: 0.1 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className="w-full h-auto"
      controls
      preload="none"
      poster={poster}
    >
      {isLoaded && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  )
}
