import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pronto Atende Vidas | Acolhimento 24 horas",
  description: "Acolhimento humano e confidencial para você e sua família em São Paulo e Minas Gerais.",
  icons: {
    icon: [{ url: "/pronto-atende-vidas-logo.png", type: "image/png" }],
    shortcut: "/pronto-atende-vidas-logo.png",
    apple: "/pronto-atende-vidas-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
