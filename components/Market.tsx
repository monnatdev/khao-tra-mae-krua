"use client"

import { motion } from "framer-motion"

export default function Market() {

  return (
    <section className="py-32 bg-neutral-50">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Domestic Market
          </h3>

          <p className="text-neutral-600">
            Distribution across more than 100 retail shops in the central
            region through retail and wholesale partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            International Market
          </h3>

          <p className="text-neutral-600">
            Expanding Thai agricultural products into international markets
            with export-standard quality and sustainable production.
          </p>
        </motion.div>

      </div>

    </section>
  )
}