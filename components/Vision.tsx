"use client"

import { motion } from "framer-motion"

export default function Vision() {

  const items = [
    {
      title: "Vision",
      text: "Create sustainable standards for agricultural products and industries across Asia."
    },
    {
      title: "Mission",
      text: "Operate integrated agricultural businesses across the entire supply chain using technology and innovation."
    },
    {
      title: "Technology",
      text: "Utilizing Big Data and AI to analyze agricultural information and improve product standards."
    }
  ]

  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Vision & Mission
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-10 bg-white rounded-2xl shadow-sm border"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-neutral-600">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}