"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Leaf,
  Users,
  MapPin,
  Palette,
  Monitor,
  Heart,
  GraduationCap,
  Globe,
  Briefcase,
  Home,
  Activity,
  HandHeart,
} from "lucide-react"

const areas = [
  {
    title: "Ambiente e Sustentabilidade",
    description: "Promover políticas ambientais sustentáveis e consciencializar a juventude para a importância da preservação do planeta e da transição ecológica.",
    icon: Leaf,
    colorClass: "bg-[#4aedc4]",
    textColor: "text-[#0a1e6e]",
    size: "medium",
  },
  {
    title: "Associativismo e Participação Cívica",
    description: "Fortalecer o tecido associativo juvenil e promover a participação ativa dos jovens na vida cívica e democrática.",
    icon: Users,
    colorClass: "bg-[#0a1e6e]",
    textColor: "text-white",
    size: "small",
  },
  {
    title: "Coesão Territorial e Mobilidade",
    description: "Garantir igualdade de oportunidades em todo o território nacional e facilitar a mobilidade dos jovens.",
    icon: MapPin,
    colorClass: "bg-[#2563eb]",
    textColor: "text-white",
    size: "medium",
  },
  {
    title: "Cultura",
    description: "Democratizar o acesso à cultura, apoiar a criação artística jovem e preservar o património cultural.",
    icon: Palette,
    colorClass: "bg-[#4aedc4]",
    textColor: "text-[#0a1e6e]",
    size: "small",
  },
  {
    title: "Digitalização e Tecnologias",
    description: "Capacitar os jovens para a era digital, promover a literacia tecnológica e garantir acesso equitativo às tecnologias.",
    icon: Monitor,
    colorClass: "bg-[#1e40af]",
    textColor: "text-white",
    size: "medium",
  },
  {
    title: "Direitos Humanos, Paz e Inclusão",
    description: "Defender os direitos humanos, promover a paz e garantir a inclusão de todos os jovens independentemente da sua origem ou condição.",
    icon: Heart,
    colorClass: "bg-[#3b82f6]",
    textColor: "text-white",
    size: "small",
  },
  {
    title: "Educação e Qualificação",
    description: "Melhorar a qualidade do ensino, combater o abandono escolar e promover a formação ao longo da vida.",
    icon: GraduationCap,
    colorClass: "bg-[#0a1e6e]",
    textColor: "text-[#4aedc4]",
    size: "medium",
  },
  {
    title: "Comunidades, Europa, Lusofonia e Mundo",
    shortTitle: "Comunidades e Mundo",
    description: "Fortalecer a ligação com as comunidades portuguesas, a integração europeia e as relações com os países lusófonos.",
    icon: Globe,
    colorClass: "bg-[#4aedc4]",
    textColor: "text-[#0a1e6e]",
    size: "small",
  },
  {
    title: "Emprego e Inovação",
    description: "Combater o desemprego jovem, promover o empreendedorismo e fomentar a inovação como motor de desenvolvimento.",
    icon: Briefcase,
    colorClass: "bg-[#2563eb]",
    textColor: "text-white",
    size: "small",
  },
  {
    title: "Habitação",
    description: "Garantir o acesso a habitação digna e acessível para os jovens, combatendo a precariedade habitacional.",
    icon: Home,
    colorClass: "bg-[#1e40af]",
    textColor: "text-[#4aedc4]",
    size: "medium",
  },
  {
    title: "Saúde, Bem-Estar e Desporto",
    description: "Promover estilos de vida saudáveis, garantir acesso a cuidados de saúde e incentivar a prática desportiva.",
    icon: Activity,
    colorClass: "bg-[#4aedc4]",
    textColor: "text-[#0a1e6e]",
    size: "medium",
  },
  {
    title: "Voluntariado",
    description: "Valorizar e promover o voluntariado como forma de participação cívica e de desenvolvimento pessoal dos jovens.",
    icon: HandHeart,
    colorClass: "bg-[#0a1e6e]",
    textColor: "text-white",
    size: "small",
  },
]

export function InterventionAreas() {
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null)

  return (
    <section id="areas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Os Nossos Focos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Áreas de Intervenção
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Trabalhamos em áreas fundamentais para o desenvolvimento e bem-estar da juventude portuguesa.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px] sm:auto-rows-[140px]">
          {areas.map((area) => {
            const Icon = area.icon
            const sizeClasses = {
              small: "col-span-1 row-span-1",
              medium: "col-span-2 row-span-1",
              large: "col-span-2 row-span-2",
            }
            
            const displayTitle = area.size === 'small' && 'shortTitle' in area ? area.shortTitle : area.title
            
            return (
              <div
                key={area.title}
                className={`group relative overflow-hidden rounded-2xl ${area.colorClass} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${sizeClasses[area.size as keyof typeof sizeClasses]}`}
                onClick={() => setSelectedArea(area)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedArea(area)}
                role="button"
                tabIndex={0}
              >
                {/* Background pattern - circles like the brand pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-white/10" />
                  <div className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 rounded-full bg-black/5" />
                </div>
                
                <div className="relative h-full flex flex-col justify-between p-3 sm:p-4 lg:p-5">
                  <div className="flex items-start justify-between">
                    <div className={`rounded-xl ${area.textColor === 'text-white' ? 'bg-white/20' : 'bg-[#0a1e6e]/10'} backdrop-blur-sm p-2 ${area.size === 'large' ? 'sm:p-3' : ''}`}>
                      <Icon className={`${area.textColor} ${area.size === 'large' ? 'h-6 w-6 sm:h-8 sm:w-8' : area.size === 'medium' ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-4 w-4 sm:h-5 sm:w-5'}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`font-bold ${area.textColor} leading-tight line-clamp-2 ${area.size === 'large' ? 'text-lg sm:text-xl lg:text-2xl' : area.size === 'medium' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                      {displayTitle}
                    </h3>
                    {area.size === 'large' && (
                      <p className={`mt-2 ${area.textColor} opacity-80 text-xs sm:text-sm line-clamp-2 hidden sm:block`}>
                        {area.description}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>

      <Dialog open={!!selectedArea} onOpenChange={() => setSelectedArea(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
              {selectedArea && (
                <div className={`rounded-xl ${selectedArea.colorClass} p-3`}>
                  <selectedArea.icon className={`h-6 w-6 ${selectedArea.textColor}`} strokeWidth={1.5} />
                </div>
              )}
              <DialogTitle className="text-xl font-bold text-foreground">
                {selectedArea?.title}
              </DialogTitle>
            </div>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed pt-4">
              {selectedArea?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button 
              className={`w-full ${selectedArea?.colorClass} hover:opacity-90 ${selectedArea?.textColor}`}
              onClick={() => setSelectedArea(null)}
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
