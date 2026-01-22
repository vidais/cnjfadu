import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Sobre Nós
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Francisco Garcia
            </h2>
            <p className="mt-2 text-xl text-muted-foreground">
              Candidato à Presidência do CNJ
            </p>
            
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A Federação Académica do Desporto Universitário apresenta a sua candidatura à presidência do Conselho Nacional da Juventude com uma visão clara e ambiciosa para o futuro da representação juvenil em Portugal.
              </p>
              <p>
                Acreditamos que a diversidade é a nossa maior força. Unidos nas nossas diferenças, podemos construir uma voz mais forte e representativa para a juventude portuguesa.
              </p>
              <p>
                A nossa proposta assenta em pilares fundamentais: democracia participativa, comunicação eficaz, impacto territorial e projeção internacional.
              </p>
            </div>
            
            <div className="mt-10">
              <Button asChild>
                <Link href="#contacto" className="group">
                  Entrar em Contacto
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/30">
              <Image
                src="/images/garcia.jpeg"
                alt="Francisco Garcia - Candidato à Presidência do CNJ"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-border rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
