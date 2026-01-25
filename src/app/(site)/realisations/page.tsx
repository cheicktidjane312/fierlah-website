import { client, urlFor } from "../../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const projects = [
  { title: "E-commerce Mode", cat: "Site Web", color: "from-purple-500 to-blue-500" },
  { title: "Refonte Branding", cat: "Design", color: "from-pink-500 to-orange-400" },
  // Tu pourras ajouter tes vrais projets ici plus tard
];

// On définit à quoi ressemble un Projet pour TypeScript
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  category: string;
  link: string;
}

// Fonction pour récupérer les données (C'est ici que la magie opère)
async function getProjects() {
  // Le langage GROQ de Sanity pour dire "Donne-moi tous les projets triés par date"
  const query = `*[_type == "project"] | order(_createdAt desc)`;
  return await client.fetch(query);
}

// Pour que la page se mette à jour à chaque visite (pas de cache vieux)
export const revalidate = 0; 

export default async function RealisationsPage() {
  const projects: Project[] = await getProjects();

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-20 bg-background text-white">
      
      {/* En-tête de page */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nos <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Réalisations</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Découvrez comment nous transformons les idées en produits digitaux performants.
        </p>
      </div>

      {/* Grille des Projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Link 
              href={project.link || "#"} 
              key={project._id}
              target="_blank" // Ouvre dans un nouvel onglet
              className="group relative block overflow-hidden rounded-2xl border border-gray-800 bg-surface hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            >
              
              {/* Image du projet */}
              <div className="relative h-64 w-full overflow-hidden">
                {project.mainImage && (
                  <Image
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary font-bold border border-primary px-4 py-2 rounded-full">
                    Voir le projet
                  </span>
                </div>
              </div>

              {/* Contenu textuel */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {project.category || "Projet"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-20">
            Aucun projet publié pour le moment. Allez dans le Studio pour en ajouter !
          </p>
        )}
      </div>

    </main>
  );
}