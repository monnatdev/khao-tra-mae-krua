"use client"

import { motion } from "framer-motion"
import ParallaxImage from "./ParallaxImage"

export default function Brand() {

  return (

     <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/band-summary.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <img
              src="/logos/logo3.png"
              className="w-28"
            />
          </motion.div>

          {/* Header */}
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            BRAND SUMMARY
          </h2>

          {/* Sub Header */}
          <h3 className="font-semibold text-lg text-black mb-6">
            Industry, Market, and current situation
          </h3>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed text-lg">
            Organic Power 2020 was established to conduct
            a business of buying and selling agricultural
            products. All types, all formats, complete set.
          </p>

        </motion.div>


        {/* RIGHT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Divider */}
          <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-[2px] bg-black/40" />

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >

            <h2 className="text-4xl font-bold text-green-700 mb-4">
              VISION
            </h2>

            <h3 className="font-semibold text-lg mb-1">
              คลังสินค้าเกษตร ของเอเชีย
            </h3>

            <p className="mb-6 text-gray-800">
              Asia's agricultural Warehouse
            </p>

            <h3 className="font-semibold text-lg mb-1">
              สร้างมาตราฐานสินค้าเกษตรเเละอุสหกรรมการเกษตรด้วยความยั่งยืน
            </h3>

            <p className="text-gray-800">
              Create standards for agricultural products
              and the agricultural industry with sustainability.
            </p>

          </motion.div>


          {/* MISSION */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >

            <h2 className="text-4xl font-bold text-green-700 mb-4">
              MISSION
            </h2>

            <p className="text-gray-700 leading-relaxed">

              Operate integrated agricultural and agricultural industry
              businesses. Sincerely To create quality and agricultural
              standards with sustainability can be checked By committing
              to conducting business with a strategy that will support
              Every sector in the entire chain To grow and have standards
              at the same time By bringing in technology to create standards
              for data collection, Bigdata and Ai Technology in analyzing
              various data.

              In addition, it is important to consider the environment or
              ECO-Friendly as the main focus to raise the level of Thai
              agricultural products and Asia to be able to compete in the
              global market with the worthiness.

            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>

  )
}