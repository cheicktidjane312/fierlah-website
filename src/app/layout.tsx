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
    default: 'FIERLAH Agency | Création de Sites Web & Stratégie Digitale',
    template: '%s | FIERLAH Agency' // Pour les autres pages (ex: "Contact | FIERLAH...")
  },
  description: 'Agence digitale experte en création de sites web performants, branding et stratégie marketing. Propulsez votre business avec FIERLAH.',
  keywords: ['Agence web', 'Création site internet', 'Marketing digital', 'Développeur web', 'Freelance'],
  openGraph: {
    title: 'FIERLAH Agency',
    description: 'Transformez votre vision en réalité digitale.',
    url: 'https://fierlah-website.vercel.app',
    siteName: 'FIERLAH Agency',
    images: [
      {
        url: '/images/og-image.jpg', // Une image de partage pour LinkedIn/WhatsApp
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

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