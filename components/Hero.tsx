"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-neutral-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center max-w-4xl px-6"
      >
        <h1 className="text-6xl font-bold mb-6">
          Asia's Agricultural Warehouse
        </h1>

        <p className="text-xl text-neutral-300">
          Creating sustainable standards for agricultural products
        </p>

        <div className="mt-10 text-neutral-400 text-sm">
          Scroll to explore
        </div>
      </motion.div>
    </section>
  )
}