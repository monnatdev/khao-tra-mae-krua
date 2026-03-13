"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-green-700 mb-4"
          >
            OUR PARTNERS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Trusted by leading organizations worldwide
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-green-500 mx-auto mt-8"
          />
        </motion.div>

        {/* All Logos Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-white rounded-2xl p-4 md:p-8 lg:p-12 shadow-xl border border-gray-100 overflow-hidden">
            <div className="relative w-full" style={{ marginTop: '-60px' }}>
              <Image
                src="/logos/all-logo.jpg"
                alt="Our Partners"
                width={1400}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-2xl border-4 border-green-500/10 pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"
          />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            And many more trusted partners across the globe
          </p>
        </motion.div>

      </div>

      {/* Decorative Background Elements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 w-56 h-56 bg-green-500/5 rounded-full blur-3xl pointer-events-none"
      />

    </section>
  )
}
