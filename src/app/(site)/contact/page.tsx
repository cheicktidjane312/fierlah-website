import { client } from "../../../lib/sanity";
import { motion, Variants } from "framer-motion";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
// Interface pour TypeScript
interface Settings {
  email: string;
  phone: string;
  address: string;
}

// Fonction pour récupérer les infos depuis Sanity
async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  return await client.fetch(query);
}

// Pour que les infos se mettent à jour instantanément quand tu modifies Sanity
export const revalidate = 0;

export default async function ContactPage() {
  const settings: Settings = await getSettings();

  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-20">
      
      {/* En-tête */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Parlons de votre <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Projet</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Une idée ? Un besoin spécifique ? Remplissez le formulaire et nous vous répondrons sous 24h.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLONNE GAUCHE : Infos Dynamiques (Venant de Sanity) */}
        <div className="space-y-8 bg-surface p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white">Nos Coordonnées</h2>
          
          <div className="space-y-6">
            {/* EMAIL */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">📧</div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href={`mailto:${settings?.email}`} className="text-lg font-medium hover:text-primary transition-colors">
                  {settings?.email || "contact@fierlah.com"}
                </a>
              </div>
            </div>

            {/* TÉLÉPHONE */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">📱</div>
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <a href={`tel:${settings?.phone}`} className="text-lg font-medium hover:text-primary transition-colors">
                  {settings?.phone || "+221 77 000 00 00"}
                </a>
              </div>
            </div>

            {/* ADRESSE */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">📍</div>
              <div>
                <p className="text-sm text-gray-500">Adresse</p>
                <p className="text-lg font-medium whitespace-pre-line">
                  {settings?.address || "Dakar, Sénégal"}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Nous sommes disponibles du Lundi au Dimanche de 9h à 22h.
            </p>
          </div>
        </div>

        {/* COLONNE DROITE : Formulaire Formspree Connecté */}
        <form 
          action="https://formspree.io/f/xykebpzz" 
          method="POST"
          className="space-y-6 bg-surface p-8 rounded-2xl border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="nom" className="text-sm font-medium text-gray-300">Nom</label>
              <input 
                type="text" 
                name="name" 
                id="nom" 
                required
                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Votre nom"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="sujet" className="text-sm font-medium text-gray-300">Sujet</label>
            <select 
              name="subject"
              id="sujet"
              className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-300"
            >
              <option value="Site Web">Création de Site Web</option>
              <option value="Ads">Publicité / Marketing</option>
              <option value="Branding">Design / Branding</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <textarea 
              name="message"
              id="message" 
              rows={5}
              required
              className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Racontez-nous votre projet..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-blue-600 text-black font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            Envoyer le message
          </button>
        </form>

      </div>
    </main>
  );
}