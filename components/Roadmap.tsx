"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const items = [
  {
    title: "THAI BROKEN 100% WHITE RICE (A1-SUPER):",
    text: "The 100% broken rice is come from milling white rice process. It is detached and damaged from white rice. Its high energy is retained on the broken rice, but low fiber texture. The popular specification for broken white rice 100% is A1-Super type which is lot of export to Africa market.",
    image: "/images/rice1.jpg",
    align: "left",
  },
  {
    title: "THAI PATHUMTHANI FRAGRANT RICE:",
    text: "Thai Pathumthani fragant rice is categorized as white rice and has called the second type of Thai jasmine rice because of its appearance authentic soft texture and regular fragrant. The most favorable area for Thai Pathumthani rice farming is in the central part of Thailand because of having good irrigation system.",
    image: "/images/rice2.jpg",
    align: "right",
  },
  {
    title: "THAI HOM MALI RICE:",
    text: `Thai Home Mali Rice or Thai Jasmine Rice is an original species developed by a local Thai farmer and improved to be a premium, white rice with pandan-like. It's globally known for its quality, long grain, curled-up tips, and clear, glossy exterior. When cooked, the rice maintains its white color and long grain, although the texture becomes tender, fragranced with fresh and appetizing aroma.

The northern east of Thailand is a malor area tor the cultivation ot Hom Mall rice. Even through it can be grown in the hot, sunny, climates of Southeast Asia, but production is still limited.`,
    image: "/images/rice3.jpg",
    align: "left",
  },
  {
    title: "WHITE RICE:",
    text: `White rice means rice that is obtained by removing bran from cargo rice. The outer husk is removed and the layer of bran milled is completely away until the grain is white. It can be planted for several crops per year mainly cultivated in the central part of Thailand where there is a proper irrigation system. \n
Thai white rice is often referred to polished or fully milled rice. It is popular because of its long grain type. When cooked, it has a firm texture and gives a high volume of cooked rice. There are many grades of Thai white rice for export such as 100%, 5% broken, 10% broken, 15% broken, 25% broken and till 100% broken.`,
    image: "/images/rice4.jpg",
    align: "right",
  },
]

export default function Roadmap() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/factory.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-32">

        {items.map((item, i) => {

          const isLeft = item.align === "left"

          return (
            <motion.div
                key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-6 max-w-5xl flex gap-6"
              >

                {/* image */}
                <div className="w-40 h-40 relative flex-shrink-0">
                  <Image
                    src={item.image}
                    alt="rice"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                {/* text */}
                <div>

                  <h3 className="font-bold text-sm mb-2 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            </motion.div>
          )
        })}
      </div>
    </section>
  )
}