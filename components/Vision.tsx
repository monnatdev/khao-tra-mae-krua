"use client"

import { motion } from "framer-motion"

export default function Vision() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-20">
      <div className="max-w-7xl w-full px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-green-400"
          >
            OUR VISION
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            Discover our journey in creating sustainable agricultural standards across Asia
          </motion.p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Video */}
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster="/images/rice.jpg"
            >
              <source src="/videos/04_20240702_export_Rice_aleef.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-2xl border-4 border-green-500/20 pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500/10 rounded-full blur-xl"
          />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-neutral-400 text-sm">
            Watch our story unfold
          </p>
        </motion.div>

      </div>
    </section>
  )
}
