"use client";
import { client } from "../../../lib/sanity";
import { motion, Variants } from "framer-motion";

// --- 1. DÉFINITION DES ICÔNES ---

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

const IconMapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

// --- 2. LOGIQUE ---

interface Settings {
  email: string;
  phone: string;
  address: string;
}

async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  return await client.fetch(query);
}

export const revalidate = 0;

export default async function ContactPage() {
  const settings: Settings = await getSettings();

  return (
    // MODIF: Fond clair (jour) / Fond noir (nuit)
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-20 transition-colors duration-300">
      
      {/* En-tête */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Parlons de votre <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Projet</span>
        </h1>
        {/* MODIF: Gris moyen (jour) / Gris clair (nuit) */}
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Une idée ? Un besoin spécifique ? Remplissez le formulaire et nous vous répondrons sous 24h.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLONNE GAUCHE : Infos */}
        {/* MODIF: Fond gris clair (jour) / Surface (nuit) */}
        <div className="space-y-8 bg-gray-50 dark:bg-surface p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Nos Coordonnées</h2>
          
          <div className="space-y-6">
            {/* EMAIL */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                 <IconMail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href={`mailto:${settings?.email}`} className="text-lg font-medium hover:text-primary transition-colors text-gray-900 dark:text-white">
                  {settings?.email || "contact@fierlah.com"}
                </a>
              </div>
            </div>

            {/* TÉLÉPHONE */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                 <IconPhone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <a href={`tel:${settings?.phone}`} className="text-lg font-medium hover:text-primary transition-colors text-gray-900 dark:text-white">
                  {settings?.phone || "+221 77 000 00 00"}
                </a>
              </div>
            </div>

            {/* ADRESSE */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                 <IconMapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Adresse</p>
                <p className="text-lg font-medium whitespace-pre-line text-gray-900 dark:text-white">
                  {settings?.address || "Dakar, Sénégal"}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Nous sommes disponibles du Lundi au Dimanche de 9h à 22h.
            </p>
          </div>
        </div>

        {/* COLONNE DROITE : Formulaire */}
        {/* MODIF: Fond blanc (jour) / Surface (nuit) avec ombre */}
        <form 
          action="https://formspree.io/f/xjgyqzqj" 
          method="POST"
          className="space-y-6 bg-white dark:bg-surface p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="nom" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
              <input 
                type="text" 
                name="name" 
                id="nom" 
                required
                // MODIF: Input blanc (jour) / noir (nuit) avec bordure adaptée
                className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="Votre nom"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="sujet" className="text-sm font-medium text-gray-700 dark:text-gray-300">Sujet</label>
            <select 
              name="subject"
              id="sujet"
              className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            >
              <option value="Site Web">Création de Site Web</option>
              <option value="Ads">Publicité / Marketing</option>
              <option value="Branding">Design / Branding</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea 
              name="message"
              id="message" 
              rows={5}
              required
              className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
              placeholder="Racontez-nous votre projet..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-blue-600 text-black font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)]"
          >
            Envoyer le message
          </button>
        </form>

      </div>
    </main>
  );
}