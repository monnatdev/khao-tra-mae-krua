"use client"

import { motion } from "framer-motion"
import ParallaxImage from "./ParallaxImage"

export default function Passion() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white py-20 overflow-hidden">
      <div className="max-w-7xl w-full px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-green-400">
            OUR PASSION
          </h2>

          <p className="text-xl text-neutral-300">
            Driven by quality and commitment to excellence
          </p>
        </motion.div>

        {/* Image with Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* ParallaxImage with Overlay */}
          <div className="relative rounded-2xl overflow-hidden">
            <ParallaxImage src="/images/arlive.jpg" />
            
            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl" />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl"
              >
                <h3 className="text-4xl md:text-6xl font-bold text-green-400 mb-6">
                  Passion
                </h3>
                <p className="text-xl md:text-3xl font-semibold text-white leading-relaxed">
                  "I would like people to enjoy high-quality, export-standard Thai rice at an affordable price."
                </p>
              </motion.div>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-2xl border-4 border-green-500/20 pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}