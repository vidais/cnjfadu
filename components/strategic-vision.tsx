import { Card, CardContent } from "@/components/ui/card"
import { Users, Building, TrendingUp, Megaphone, Globe, Wallet, Lightbulb, MessageCircle } from "lucide-react"

const pillars = [
  {
    icon: Users,
    title: "Democracia + Jovem, Democracia + Forte",
    description: "Fortalecer a participação jovem na democracia, garantindo que a voz da juventude seja ouvida nas decisões que moldam o nosso futuro.",
  },
  {
    icon: MessageCircle,
    title: "Auscultar, Construir, Representar",
    description: "Ouvir ativamente as necessidades da juventude, construir soluções colaborativas e representar fielmente os seus interesses.",
  },
  {
    icon: TrendingUp,
    title: "Impacto e Implantação",
    description: "Desenvolver iniciativas com impacto real e garantir a sua implementação efetiva em todo o território nacional.",
  },
  {
    icon: Megaphone,
    title: "Comunicação, OOMM's e Juventude",
    description: "Estabelecer canais de comunicação eficazes entre organizações de massas e movimentos de juventude.",
  },
  {
    icon: Globe,
    title: "Projeção Mediática",
    description: "Aumentar a visibilidade das questões juvenis nos media e na esfera pública nacional e internacional.",
  },
  {
    icon: Building,
    title: "Orgão de Comunicação",
    description: "Criar e gerir plataformas de comunicação modernas que conectem a juventude portuguesa.",
  },
  {
    icon: Wallet,
    title: "Financiamento",
    description: "Garantir recursos sustentáveis para projetos juvenis e maximizar o aproveitamento de fundos disponíveis.",
  },
  {
    icon: Lightbulb,
    title: "Projetar e Transformar",
    description: "Inovar nas abordagens às questões juvenis e transformar ideias em ações concretas.",
  },
]

export function StrategicVision() {
  return (
    <section id="visao" className="py-24 sm:py-32 bg-background/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Os Nossos Pilares
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Visão Estratégica
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Uma abordagem holística para representar e capacitar a juventude portuguesa no cenário nacional e internacional.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.title} 
              className="group bg-card border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-medium text-muted-foreground mb-2">0{index + 1}</p>
                <h3 className="font-semibold text-foreground mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
