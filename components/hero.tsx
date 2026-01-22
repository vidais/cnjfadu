import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 text-center">
        <p className="text-sm font-medium tracking-widest text-accent uppercase mb-8">
        </p>
        
        <div className="flex justify-center mb-10">
          <Image
            src="/images/juntos_c_verde.png"
            alt="Juntos na Diversidade, pela nossa Geração"
            width={600}
            height={450}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto"
            priority
          />
        </div>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Candidatura à Presidência do Conselho Nacional da Juventude
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="#visao">
              Conhecer a Visão
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[200px] bg-transparent">
            <Link href="#sobre">
              Sobre Nós
            </Link>
          </Button>
        </div>
        
        <div className="mt-20">
          <Link 
            href="#visao"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors animate-bounce"
          >
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
