import Hero from "@/components/Hero"
import Brand from "@/components/Brand"
import Vision from "@/components/Vision"
import Passion from "@/components/Passion"
import Roadmap from "@/components/Roadmap"
import Domestic from "@/components/Domestic"
import Certificates from "@/components/Certificates"
import International from "@/components/International"
import Products from "@/components/Products"
import RetailNetwork from "@/components/RetailNetwork"
import Partners from "@/components/Partners"

export default function Page() {
  return (
    <main className="bg-white text-neutral-900">
      <Hero />
      <Vision />
      <Brand />
      <Passion />
      <Roadmap />
      <Certificates />
      <Products />
      <Domestic />
      <International />
      <RetailNetwork />
      <Partners />
    </main>
  )
}