"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
  { name: "Partner 7" },
  { name: "Partner 8" },
  { name: "Partner 9" },
  { name: "Partner 10" },
  { name: "Partner 11" },
  { name: "Partner 12" },
  { name: "Partner 13" },
  { name: "Partner 14" },
  { name: "Partner 15" },
  { name: "Partner 16" },
  { name: "Partner 17" },
  { name: "Partner 18" },
  { name: "Partner 19" },
]

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
            className="text-5xl font-bold text-green-700 mb-4"
          >
            OUR PARTNERS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
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

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 aspect-square flex items-center justify-center">
                
                {/* Mock Logo - Placeholder */}
                <div className="relative w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-green-600 transition-colors duration-300 font-medium">
                    {partner.name}
                  </span>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-green-500/0 group-hover:border-green-500/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

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
