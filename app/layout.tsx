import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const niveauGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/NiveauGroteskLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NiveauGroteskRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NiveauGroteskMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NiveauGroteskBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-niveau",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});



export const metadata: Metadata = {
  title: "FADU - Candidatura à Presidência do CNJ",
  description:
    "Federação Académica do Desporto Universitário - Candidatura à Presidência do Conselho Nacional da Juventude. Juntos na Diversidade pela nossa geração.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <body className={`${niveauGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
