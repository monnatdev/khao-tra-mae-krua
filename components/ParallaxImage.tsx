"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxImage({
  src
}: {
  src: string
}) {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl"
    >
      <motion.img
        src={src}
        style={{ y }}
        className="w-full h-[600px] md:h-[700px] object-cover"
      />
    </div>
  )
}