"use client"

import { motion } from "framer-motion"

export default function Products() {

  const products = [
    "Hom Mali Rice",
    "Thai White Rice",
    "Glutinous Rice"
  ]

  return (
    <section className="py-32 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl border p-10 hover:shadow-xl transition"
            >
              <div className="h-40 bg-neutral-100 rounded-xl mb-6" />

              <h3 className="text-xl font-semibold">{p}</h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}