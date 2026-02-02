import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Sobre Mim
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Francisco Garcia
            </h2>
            <p className="mt-2 text-xl text-muted-foreground">
              Candidato à Presidência do CNJ
            </p>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
  <p>
    <em>“Se queres ir rápido, vai sozinho. Se queres ir longe, vai acompanhado”</em> transmite-nos a
    ideia de que juntos somos mais fortes, e foi sempre por esse princípio que procurei pautar a minha
    postura perante qualquer desafio.
  </p>

  <p>
    Sou natural de Lisboa e desde cedo tive o privilégio de ter um percurso marcado pelo contacto com
    diferentes realidades da nossa sociedade. O meu envolvimento cívico ativo começa ainda no ensino
    secundário, através da associação de estudantes da minha escola. A música, enquanto formação
    extracurricular na Escola de Música do Conservatório Nacional, e a prática desportiva federada
    como atleta de ginástica deram-me oportunidade de contactar com pessoas de origens e contextos
    diversos, contribuindo para uma visão mais aberta, plural, respeitadora e atenta à diversidade
    daqueles que nos rodeiam.
  </p>

  <p>
    Com a entrada no Instituto Superior Técnico, tive contacto com um núcleo mais técnico e
    especializado, aprofundando uma abordagem estruturada à resolução de problemas. Nesse contexto,
    integrei o TLMoto, experiência que reforçou o trabalho em equipa, a responsabilidade e a ligação
    entre conhecimento técnico e aplicação prática.
  </p>

  <p>
    Posteriormente, integrei a Associação dos Estudantes do Instituto Superior Técnico, onde
    desempenhei funções como Diretor do Gabinete de Desporto e Responsabilidade Social. Nessa posição,
    tive a oportunidade de trabalhar diretamente com centenas de estudantes-atletas, procurando
    compreender realidades distintas e encontrar soluções que respondessem ao interesse de uma
    comunidade ativa e alargada.
  </p>

  <p>
    Mais tarde, enquanto Presidente da Mesa da Assembleia Geral de Alunos, conduzimos um processo
    participativo ao organizar um referendo sobre o modelo de ensino que envolveu cerca de 2.000
    estudantes, confirmando que quando chamados a decidir sobre matérias que os afetam diretamente,
    os jovens mobilizam-se e participam.
  </p>

  <p>
    Nos últimos três anos, encarei o desafio de co-liderar a Federação Académica do Desporto
    Universitário, tendo lidado diretamente com a coordenação de uma estrutura profissional alargada
    e com a gestão de um orçamento de grande escala, bem como com a consolidação da sua implantação
    nacional e o reforço do impacto direto junto de milhares de jovens.
  </p>

  <p>
    Para além da vertente competitiva do desporto universitário, fico com particular orgulho de ter
    participado no desenvolvimento de projetos estratégicos como o programa
    <strong>“Desafia os Números”</strong>, focado no aumento da participação feminina no desporto
    universitário, e no programa de fomento às associações da FADU, reforçando a capacitação, a coesão
    e o papel do associativismo estudantil como motor de participação juvenil.
  </p>

  <p>
    Tive ainda a oportunidade de representar a FADU Portugal em diversos fóruns nacionais e
    internacionais, levando a voz do desporto universitário e da juventude portuguesa a diferentes
    espaços de decisão e reflexão, nomeadamente no Conselho Nacional de Juventude, no Conselho
    Consultivo da Juventude, bem como em estruturas internacionais do desporto universitário como a
    European University Sports Association e a International University Sports Federation,
    reforçando a dimensão internacional do seu percurso e a capacidade de articulação entre
    juventude, desporto e políticas públicas.
  </p>

  <p>
    Fruto deste percurso marcado por experiências ricas em diversidade, participação e
    responsabilidade institucional, proponho-me agora a liderar o Conselho Nacional de Juventude com
    a ambição de consolidar a estrutura como a grande plataforma de representação dos jovens em
    Portugal.
  </p>

  <p>
    Uma liderança focada nas causas que verdadeiramente unem os jovens, com capacidade para
    construir pontes entre organizações, reforçar a cooperação interna e afirmar um CNJ que saiba
    furar a bolha, indo ao encontro dos jovens, falando a sua linguagem e criando condições para que
    também as suas organizações ampliem esse alcance.
  </p>

  <p>
    Um CNJ cada vez mais aberto, mais próximo e mais relevante, capaz de gerar impacto real e de se
    afirmar como estrutura de referência quando o tema é juventude, participação e futuro coletivo.
  </p>
            </div>

            <div className="mt-12">
              <Button asChild>
                <Link href="carta_francisco" className="group">
                  Sabe mais sobre o compromisso do Francisco com o CNJ
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

{/* Image column */}
<div className="flex flex-col gap-16">
  {/* First image */}
  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/30">
    <Image
      src="/images/about.jpg"
      alt="Francisco Garcia - Candidato à Presidência do CNJ"
      width={600}
      height={750}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Second image */}
  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/30">
    <Image
      src="/images/about2.jpeg"
      alt="Francisco Garcia - Candidato à Presidência do CNJ"
      width={600}
      height={750}
      className="w-full h-full object-cover"
    />

    {/* Decorative elements */}
    <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-2xl" />
    <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-border rounded-2xl" />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

