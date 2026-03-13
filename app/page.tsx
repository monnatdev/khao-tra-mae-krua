import Hero from "@/components/Hero"
import Brand from "@/components/Brand"
import Vision from "@/components/Vision"
import Passion from "@/components/Passion"
import Products from "@/components/Products"
import Market from "@/components/Market"
import Stats from "@/components/Stats"
import Partners from "@/components/Partners"

export default function Page() {
  return (
    <main className="bg-white text-neutral-900">
      <Hero />
      <Brand />
      <Vision />
      <Passion />
      <Products />
      <Market />
      <Stats />
      <Partners />
    </main>
  )
}