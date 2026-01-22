import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StrategicVision } from "@/components/strategic-vision"
import { InterventionAreas } from "@/components/intervention-areas"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StrategicVision />
      <InterventionAreas />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
