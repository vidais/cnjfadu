
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import PdfEmbed from "@/components/pdf-embed";

export default function SabeMais() {
  return (
    <main className="min-h-screen">
      <Header />
      <PdfEmbed
        src="/documents/CartaFADU_CNJ.pdf"
        width="100%"
        height="1600px"
        title="Manifesto PDF"
      />
      <Footer />
    </main>
  );
}

