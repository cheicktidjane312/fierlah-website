import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Configuration de la police
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Fierlah Agency | Transformation Digitale & Web au Sénégal",
    template: "%s | Fierlah Agency"
  },
  description: "Agence digitale 360° experte en création de sites web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      {/* On garde juste suppressHydrationWarning pour éviter les erreurs techniques */}
      <body className={`${outfit.className} bg-background text-white antialiased overflow-x-hidden`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html >
  );
}