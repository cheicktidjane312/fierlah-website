import Link from "next/link";
import { client } from "../../lib/sanity";

// --- 1. DÉFINITION DES ICÔNES (Directement ici pour éviter les erreurs d'import) ---

const IconMapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const IconMail = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const IconPhone = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);

// --- 2. TON CODE EXISTANT (Avec les émojis remplacés) ---

// On récupère les infos de contact depuis Sanity
async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  return await client.fetch(query);
}

export default async function Footer() {
  const settings = await getSettings();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
              FIERLAH<span className="text-primary">.</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Agence digitale spécialisée dans la création de sites web performants et la publicité en ligne. Nous transformons vos visiteurs en clients.
            </p>
          </div>

          {/* COLONNE 2 : Liens Rapides */}
          <div>
            <h3 className="text-white font-bold mb-4">Agence</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/a-propos" className="hover:text-primary transition-colors">À Propos</Link></li>
              <li><Link href="/realisations" className="hover:text-primary transition-colors">Réalisations</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">Création de Site Web</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Publicité (Ads)</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">SEO & Référencement</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Branding</Link></li>
            </ul>
          </div>

          {/* COLONNE 4 : Contact (Dynamique Sanity) */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                {/* Remplacement emoji 📍 */}
                <span className="mr-2 text-primary mt-0.5">
                    <IconMapPin className="w-5 h-5" />
                </span>
                <span>{settings?.address || "Dakar, Sénégal"}</span>
              </li>
              <li className="flex items-center">
                {/* Remplacement emoji 📧 */}
                <span className="mr-2 text-primary">
                    <IconMail className="w-5 h-5" />
                </span>
                <a href={`mailto:${settings?.email}`} className="hover:text-white transition-colors">
                  {settings?.email || "contact@fierlah.com"}
                </a>
              </li>
              <li className="flex items-center">
                 {/* Remplacement emoji 📱 */}
                <span className="mr-2 text-primary">
                    <IconPhone className="w-5 h-5" />
                </span>
                <a href={`tel:${settings?.phone}`} className="hover:text-white transition-colors">
                  {settings?.phone || "+221 77 000 00 00"}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BARRE DE COPYRIGHT + LIEN POLITIQUE */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} Fierlah Agency. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}