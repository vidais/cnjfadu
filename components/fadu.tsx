import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Fadu() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Sobre a FADU
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Federação Académica do Desporto Universitário
            </h2>
            <p className="mt-2 text-xl text-muted-foreground">
            </p>
            
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
  <p>
    A Federação Académica do Desporto Universitário de Portugal
    (<strong>FADU Portugal</strong>) é a estrutura nacional que representa e organiza o
    Desporto Universitário em Portugal, resultando da vontade das associações de
    estudantes em afirmarem uma federação verdadeiramente representativa deste
    ecossistema.
  </p>

  <p>
    Enquanto federação multidesportiva com estatuto de utilidade pública desportiva,
    integra diversos organismos nacionais e internacionais, assumindo um papel
    relevante na articulação entre o sistema desportivo, educativo e de juventude.
  </p>

  <p>
    Com uma missão que abrange as dimensões desportiva, educativa e social, a FADU
    promove e regula as competições universitárias a nível nacional e regional,
    assegura a organização e gestão das seleções nacionais universitárias e representa
    Portugal nas principais competições europeias e mundiais.
  </p>

  <p>
    Envolve anualmente mais de <strong>10.000 estudantes-atletas</strong> nas competições
    universitárias formais e impacta outras dezenas de milhares de jovens através das
    atividades, eventos e projetos dinamizados pelos seus clubes e associados.
  </p>

  <p>
    Neste contexto, assume igualmente como eixo estratégico a promoção da
    <strong>igualdade de género</strong>, garantindo o acesso equitativo à prática
    desportiva, à representação e à liderança no desporto universitário.
  </p>

  <p>
    Paralelamente, tem vindo a alargar a sua intervenção através do desenvolvimento de
    projetos nas áreas do desporto para todos, da formação, da responsabilidade social
    e da igualdade de oportunidades, contribuindo para a projeção internacional do país
    e das regiões.
  </p>

  <p>
    Desde 2012, a FADU Portugal integra o
    <strong>Conselho Nacional de Juventude</strong>, reconhecendo-o como o espaço
    privilegiado de convergência das múltiplas expressões do movimento juvenil.
  </p>

  <p>
    À semelhança do desporto, que reúne pessoas de origens, culturas e percursos
    distintos num mesmo campo, orientadas por regras comuns e um propósito partilhado,
    a FADU acredita que o CNJ é mais forte quando sabe unir na diversidade, transformar
    a pluralidade de vozes em ação coletiva e funcionar como uma verdadeira equipa ao
    serviço da juventude portuguesa.
  </p>
    </div>
            
            <div className="mt-10 flex flex-col gap-4">
              <Button asChild>
                <Link href="carta_fadu" className="group">
                  Sabe mais sobre o compromisso da FADU com o CNJ
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://www.fadu.pt/" className="group">
                  Sabe mais sobre a FADU
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/30">
              <Image
                src="/images/fadu.jpg"
                alt="FADU"
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
