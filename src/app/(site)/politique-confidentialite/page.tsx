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
// 1. On récupère les infos depuis Sanity (comme pour le Footer)
async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  return await client.fetch(query);
}

// 2. On empêche la mise en cache pour que les modifs soient immédiates
export const revalidate = 0;

export default async function PolitiqueConfidentialite() {
  // 3. On charge les données
  const settings = await getSettings();
  const emailContact = settings?.email || "contact@fierlah.com"; // Fallback si vide

  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Politique de Confidentialité</h1>

        <section className="space-y-4">
          <p className="text-gray-400 leading-relaxed">
            Chez <strong>Fierlah Agency</strong>, nous accordons une grande importance à la protection de vos données personnelles. Cette politique vise à vous informer de la manière dont nous collectons et utilisons vos informations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">1. Données collectées</h2>
          <p className="text-gray-400 leading-relaxed">
            Nous collectons les informations suivantes lorsque vous remplissez notre formulaire de contact :
          </p>
          <ul className="list-disc list-inside text-gray-400 ml-4 space-y-2">
            <li>Nom et Prénom</li>
            <li>Adresse Email</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Informations concernant votre projet</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">2. Utilisation des données</h2>
          <p className="text-gray-400 leading-relaxed">
            Vos données sont utilisées uniquement pour :
          </p>
          <ul className="list-disc list-inside text-gray-400 ml-4 space-y-2">
            <li>Répondre à vos demandes de devis ou d'information.</li>
            <li>Vous recontacter dans le cadre de la relation commerciale.</li>
          </ul>
          <p className="text-gray-400 mt-4">
            <strong>Nous ne vendons ni ne louons jamais vos données à des tiers.</strong>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">3. Vos Droits</h2>
          <p className="text-gray-400 leading-relaxed">
            Conformément à la loi sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, envoyez-nous simplement un email à : <a href={`mailto:${emailContact}`} className="text-white font-bold hover:text-primary transition-colors">{emailContact}</a>.
          </p>
        </section>

      </div>
    </main>
  );
}