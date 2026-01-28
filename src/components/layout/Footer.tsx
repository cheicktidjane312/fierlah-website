import Link from "next/link";
import { client } from "../../lib/sanity";

// --- 1. DÉFINITION DES ICÔNES (Toutes rassemblées ici) ---

const IconMapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);
export const revalidate = 0; // Force la mise à jour instantanée des données
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

// 👇 NOUVELLES ICÔNES SOCIALES
const IconInstagram = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconFacebook = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const IconLinkedin = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
     <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.321c0-4.605 5.438-4.975 5.438-.009v8.33h5v-9.409c0-7.398-7.944-7.214-10.469-3.491v-3.11z"/>
  </svg>
);

// --- 2. TON CODE ---

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
          
          {/* COLONNE 1 : Logo, Description & Réseaux Sociaux */}
          <div className="space-y-6">
            <div>
                <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                FIERLAH<span className="text-primary">.</span>
                </Link>
                <p className="text-sm leading-relaxed mt-4">
                Agence digitale spécialisée dans la création de sites web performants et la publicité en ligne. Nous transformons vos visiteurs en clients.
                </p>
            </div>

            {/* 👇 ICÔNES SOCIALES (S'affichent uniquement si le lien est dans Sanity) */}
            {settings?.socialLinks && (
                <div className="flex items-center space-x-5">
                    
                    {/* Instagram */}
                    {settings.socialLinks.instagram && (
                        <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors" title="Instagram">
                            <IconInstagram className="w-5 h-5" />
                        </a>
                    )}

                    {/* Facebook */}
                    {settings.socialLinks.facebook && (
                        <a href={settings.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors" title="Facebook">
                            <IconFacebook className="w-5 h-5" />
                        </a>
                    )}

                    {/* LinkedIn */}
                    {settings.socialLinks.linkedin && (
                        <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B5] transition-colors" title="LinkedIn">
                            <IconLinkedin className="w-5 h-5" />
                        </a>
                    )}
                </div>
            )}
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
                <span className="mr-2 text-primary mt-0.5">
                    <IconMapPin className="w-5 h-5" />
                </span>
                <span>{settings?.address || "Dakar, Sénégal"}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">
                    <IconMail className="w-5 h-5" />
                </span>
                <a href={`mailto:${settings?.email}`} className="hover:text-white transition-colors">
                  {settings?.email || "contact@fierlah.com"}
                </a>
              </li>
              <li className="flex items-center">
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