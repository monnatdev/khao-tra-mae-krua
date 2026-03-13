"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Certificates() {
  return (
    <section className="relative py-32 bg-[#F6C23E] overflow-hidden">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold tracking-tight text-black">
          Certification
        </h2>

        <p className="text-gray-800 mt-4 text-lg">
          International food safety standards
        </p>
      </motion.div>

      {/* Certificates */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

        {/* Certificate 1 */}
        <motion.div
          initial={{ opacity: 0, x: -120, rotate: -4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-6 rounded-2xl shadow-2xl"
        >
          <Image
            src="/images/cert1.jpg"
            alt="certificate"
            width={800}
            height={1000}
            className="rounded-lg"
          />
        </motion.div>

        {/* Certificate 2 */}
        <motion.div
          initial={{ opacity: 0, x: 120, rotate: 4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-6 rounded-2xl shadow-2xl"
        >
          <Image
            src="/images/cert2.jpg"
            alt="certificate"
            width={800}
            height={1000}
            className="rounded-lg"
          />
        </motion.div>

      </div>

    </section>
  )
}