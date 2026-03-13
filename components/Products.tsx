"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const products = [
  {
    title: "THAI WHITE RICE",
    image: "/images/product1.jpg",
  },
  {
    title: "HOM MALI RICE",
    image: "/images/product2.jpg",
  },
  {
    title: "GLUTINOUS RICE",
    image: "/images/product3.jpg",
  },
]

export default function Products() {
  return (
    <section className="py-32 bg-[#F8F6F1] overflow-hidden">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold tracking-tight">
          Our Products
        </h2>

        <p className="text-gray-600 mt-4">
          Premium Thai rice products
        </p>
      </motion.div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2
            }}
            whileHover={{
              y: -12,
              scale: 1.03
            }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >

            <Image
              src={product.image}
              alt={product.title}
              width={700}
              height={900}
              className="object-cover w-full h-[520px] transition-transform duration-500 group-hover:scale-105"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* title */}
            <h3 className="absolute top-8 left-8 text-black text-2xl font-bold tracking-wide">
              {product.title}
            </h3>

          </motion.div>
        ))}

      </div>
    </section>
  )
}