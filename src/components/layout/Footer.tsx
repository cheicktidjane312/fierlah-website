import Link from "next/link";
import { client } from "../../lib/sanity";

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
                <span className="mr-2 text-primary">📍</span>
                <span>{settings?.address || "Dakar, Sénégal"}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">📧</span>
                <a href={`mailto:${settings?.email}`} className="hover:text-white transition-colors">
                  {settings?.email || "contact@fierlah.com"}
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">📱</span>
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