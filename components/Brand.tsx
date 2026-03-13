"use client"

import { motion } from "framer-motion"

export default function Brand() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Brand Summary
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Organic Power 2020 was established to conduct a business of buying
            and selling agricultural products. We operate across the entire
            agricultural supply chain and aim to create sustainable standards
            for agricultural industries across Asia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="h-[350px] bg-neutral-100 rounded-2xl"
        />
      </div>
    </section>
  )
}