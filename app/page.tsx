import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Video } from "@/components/video";
import { StrategicVision } from "@/components/strategic-vision";
import { InterventionAreas } from "@/components/intervention-areas";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import VideoSection from "@/components/video";
import {ScrollVideo} from "@/components/scrollvideo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero mainImage="/images/slogan-verde.png" topLeftImage="/images/logo-branco.png" bottomRightImage="/images/CANDIDATO.png"/>
      <div className="flex flex-row gap-0 bg-background/40 backdrop-blur-sm">
      <div className="w-1/4"><ScrollVideo src="video.mp4" /></div>
      <div className="w-3/4"><StrategicVision /></div>
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
