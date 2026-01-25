import { client, urlFor } from "../../../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react"; // Pour afficher le texte riche

// Fonction pour récupérer UN SEUL projet grâce au slug
async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export const revalidate = 0;

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return <div className="text-white text-center pt-40">Projet introuvable.</div>;
  }

  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-20">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Bouton Retour */}
        <Link href="/realisations" className="text-gray-400 hover:text-primary mb-8 inline-block transition-colors">
          ← Retour aux réalisations
        </Link>

        {/* Titre & Catégorie */}
        <div className="mb-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
                {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">{project.title}</h1>
        </div>

        {/* Image Principale (Grande) */}
        {project.mainImage && (
          <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 border border-gray-800 shadow-2xl">
            <Image
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Contenu (Description Riche) */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
            {/* Si une description existe, on l'affiche avec PortableText */}
            {project.description ? (
                <PortableText value={project.description} />
            ) : (
                <p className="text-gray-500 italic">Aucune description détaillée disponible pour ce projet.</p>
            )}
        </div>

        {/* Bouton vers le site externe (si le lien existe) */}
        {project.link && (
            <div className="mt-8 pt-8 border-t border-gray-800">
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                >
                    Voir le site en ligne ↗
                </a>
            </div>
        )}

      </div>
    </main>
  );
}