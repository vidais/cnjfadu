import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Instagram } from "lucide-react"

const navigation = {
  main: [
    { name: "Visão Estratégica", href: "#visao" },
    { name: "Áreas de Intervenção", href: "#areas" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Contacto", href: "#contacto" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background/60 backdrop-blur-md border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center">
          <Link href="/" className="mb-6">
            <Image
              src="/images/logo_corner.png"
              alt="FADU - Francisco Garcia"
              width={180}
              height={44}
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex gap-6 mb-8">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Juntos na Diversidade pela nossa Geração
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Federação Académica do Desporto Universitário. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
