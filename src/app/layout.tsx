import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Configuration de la police
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-outfit",
});

// --- OPTIMISATION SEO (SCHEMA.ORG) ---
// C'est ce script qui dit à Google : "Je suis une entreprise locale légitime"
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService', // Plus précis que LocalBusiness pour une agence
  name: 'FIERLAH Agency',
  image: 'https://www.fierlah-agency.com/opengraph-image.png', // Idéalement une image de couverture
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
    latitude: 14.6928, // Coordonnées approx de Dakar (aide pour Google Maps)
    longitude: -17.4467
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: '09:00',
      closes: '22:00'
    }
  ],
  priceRange: '$$',
  sameAs: [
    // Ajoute ici tes réseaux sociaux si tu en as
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
    <html lang="fr" className="scroll-smooth">
      <body className={`${outfit.className} bg-background text-white antialiased overflow-x-hidden`} suppressHydrationWarning={true}>
        
        {/* 👇 C'EST ICI QUE LA MAGIE OPÈRE : Injection du JSON-LD pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}
      </body>
    </html >
  );
}