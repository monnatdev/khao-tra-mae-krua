"use client"

import { motion } from "framer-motion"
import ParallaxImage from "./ParallaxImage"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-950 text-white py-20 px-4">
      <div className="max-w-7xl w-full px-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 px-2">
            Asia's Agricultural Warehouse
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 px-4">
            Creating sustainable standards for agricultural products
          </p>

          <div className="mt-10 text-neutral-400 text-sm">
            Scroll to explore
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <ParallaxImage src="/images/rice.jpg" />
        </motion.div>
      </div>
    </section>
  )
}