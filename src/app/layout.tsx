import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";
import { ThemeProvider } from "../components/ThemeProvider";
// 👇 J'ajoute Navbar et Footer ici pour qu'ils soient présents sur TOUTES les pages automatiquement
import Navbar from "../components/layout/Navbar"; 
import Footer from "../components/layout/Footer";

// Configuration de la police
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-outfit",
});

// --- OPTIMISATION SEO (SCHEMA.ORG) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService', 
  name: 'FIERLAH Agency',
  image: 'https://www.fierlah-agency.com/opengraph-image.png', 
  description: 'Agence digitale experte en création de sites web modernes, stratégies SEO et branding à Dakar.',
  '@id': 'https://www.fierlah-agency.com',
  url: 'https://www.fierlah-agency.com',
  telephone: '+221 78 990 07 90',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fass',
    addressLocality: 'Dakar',
    addressRegion: 'Dakar',
    addressCountry: 'SN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 14.6928, 
    longitude: -17.4467
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: '09:00',
      closes: '22:00'
    }
  ],
  priceRange: '$$',
  sameAs: [
    "https://www.instagram.com/fierlah_agency",
    "https://www.facebook.com/fierlah_agency" 
  ]
}

export const metadata: Metadata = {
  title: {
    default: 'FIERLAH Agency | Création de Sites Web & Marketing Digital au Sénégal',
    template: '%s | FIERLAH Agency'
  },
  description: 'Agence digitale experte en création de sites web modernes, stratégies SEO et branding. Transformez votre vision en succès numérique avec FIERLAH.',
  metadataBase: new URL('https://www.fierlah-agency.com'),
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
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      
      {/* MODIFS ICI : 
         1. bg-gray-50 pour le mode jour (plus doux que blanc pur)
         2. dark:bg-black pour le mode nuit (noir profond)
         3. transition-colors duration-300 pour l'effet fluide
      */}
      <body className={`${outfit.className} bg-gray-50 dark:bg-black text-gray-900 dark:text-white antialiased overflow-x-hidden transition-colors duration-300`}>
        
        <ThemeProvider
            attribute="class"
            defaultTheme="dark" // Force le mode sombre par défaut
            enableSystem={false} // Désactive la détection système pour éviter les conflits
            disableTransitionOnChange
        >
            {/* Le fond animé reste en arrière-plan */}
            <AnimatedBackground />

            {/* Script SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            {/* 👇 STRUCTURE GLOBALE DU SITE 
                J'ai ajouté Navbar et Footer ici.
                Cela t'évite de devoir les importer sur chaque page (Accueil, À propos, etc.)
            */}
            <Navbar />
            <div className="relative z-10">
                {children}
            </div>
            <Footer />

        </ThemeProvider>

      </body>
    </html >
  );
}