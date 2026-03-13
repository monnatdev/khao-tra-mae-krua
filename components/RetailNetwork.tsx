"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function RetailNetwork() {
  return (
    <section className="py-32 bg-white overflow-hidden">

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[400px_1fr] gap-12 px-6 items-start">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 sticky top-8"
        >

          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg flex items-center justify-center h-[240px]"
          >
            <Image
              src="/logos/logo-mae.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>

          {/* Mini Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[240px] relative"
          >
            <Image
              src="/images/minimap.jpg"
              alt="distribution area"
              fill
              className="object-cover"
            />
            {/* Green border overlay */}
            <div className="absolute inset-0 border-4 border-green-500/20 rounded-xl pointer-events-none" />
          </motion.div>

        </motion.div>


        {/* RIGHT MAIN MAP */}

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >

          <div className="relative h-[600px] lg:h-[700px]">
            <Image
              src="/images/map.jpg"
              alt="retail network"
              fill
              className="object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Green border overlay */}
            <div className="absolute inset-0 border-4 border-green-500/30 rounded-2xl pointer-events-none" />

            {/* title */}
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-10 left-10 text-white text-4xl lg:text-5xl font-bold drop-shadow-lg"
            >
              <span className="text-green-400">Retail Market</span>
              <br />
              <span className="text-white">& Wholesale</span>
            </motion.h3>

            {/* bottom text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-10 right-10 text-right text-white"
            >
              <p className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                100+
              </p>
              <p className="text-lg lg:text-xl text-white/90 font-medium">
                Local shops around<br />
                central region
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute top-6 right-6 w-24 h-24 bg-green-500/10 rounded-full blur-xl"
            />
          </div>

        </motion.div>

      </div>

    </section>
  )
}