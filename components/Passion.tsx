"use client"

import { motion } from "framer-motion"

export default function Passion() {
  return (
    <section className="py-40 bg-neutral-900 text-white text-center">

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-3xl font-light leading-relaxed px-6"
      >
        “I would like people to enjoy high-quality,
        export-standard Thai rice at an affordable price.”
      </motion.blockquote>

    </section>
  )
}