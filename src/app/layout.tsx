import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Configuration de la police
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-outfit",
});
// Exemple de script JSON-LD à mettre dans le <head> ou via next/script
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FIERLAH Agency',
  image: 'https://www.fierlah-agency.com/icon.png',
  '@id': 'https://www.fierlah-agency.com',
  url: 'https://www.fierlah-agency.com',
  telephone: '+221 78 990 07 90', // Ton numéro
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fass',
    addressLocality: 'Dakar',
    addressCountry: 'SN'
  },
  priceRange: '$$'
}

export const metadata: Metadata = {
  title: {
    default: 'FIERLAH Agency | Création de Sites Web & Marketing Digital au Sénégal',
    template: '%s | FIERLAH Agency'
  },
  description: 'Agence digitale experte en création de sites web modernes, stratégies SEO et branding. Transformez votre vision en succès numérique avec FIERLAH.',
  metadataBase: new URL('https://www.fierlah-agency.com'), // Ton vrai domaine ici
  openGraph: {
    title: 'FIERLAH Agency - Votre Partenaire Digital',
    description: 'Sites web performants et design unique.',
    url: 'https://www.fierlah-agency.com',
    siteName: 'FIERLAH Agency',
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