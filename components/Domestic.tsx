"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function Domestic() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (

    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-neutral-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            DOMESTIC MARKET
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Serving quality agricultural products across Thailand
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          
          {/* Image with Parallax */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              style={{ y }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/images/domestic.jpg"
                alt="domestic"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
            >
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
                Domestic
              </h3>
              <p className="text-base md:text-lg text-white/90 max-w-2xl">
                Building strong partnerships with local businesses and communities
              </p>
            </motion.div>

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-2xl border-4 border-green-500/20 pointer-events-none" />
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

      </div>

    </section>

  )
}