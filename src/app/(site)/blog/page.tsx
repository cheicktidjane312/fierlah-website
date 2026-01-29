import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../../lib/sanity";
import * as motion from "framer-motion/client"; // Import compatible Server Components

// Sécurité Sanity conservée
async function getPosts() {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, slug, publishedAt, "imageUrl": mainImage.asset->url, mainImage
  }`;
  return await client.fetch(query);
}

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background pt-40 pb-20 px-4 md:px-8 transition-colors duration-300 overflow-hidden">
      
      {/* HEADER DE PAGE (Style Hero) */}
      <div className="text-center mb-24 space-y-6 relative z-10">
        
        {/* Décoration d'arrière-plan du titre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <motion.div
           initial={{ opacity: 0, y: -20 }} 
           animate={{ opacity: 1, y: 0 }} 
           className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-4"
        >
            ● Journal de bord
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white"
        >
          L'Actualité <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">Digital</span>
        </motion.h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Analyses, tendances et stratégies. Plongez dans le futur du web.
        </p>
      </div>

      {/* GRILLE D'ARTICLES (Style High-Tech) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post: any, i: number) => {
          // Fallback image sécurisé
          const finalImage = post.imageUrl || (post.mainImage ? urlFor(post.mainImage).url() : null);

          return (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Animation de flottement organique
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                delay: i * 0.2, // Apparition en cascade
                duration: 0.8, 
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                }
              }}
            >
              <Link 
                href={`/blog/${post.slug.current}`} 
                // STYLE CARTE : Glassmorphism + Bordures Néons au survol
                className="group block h-full bg-white dark:bg-surface/60 backdrop-blur-md border border-gray-200 dark:border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-lg dark:shadow-none hover:shadow-neon relative"
              >
                {/* Lueur arrière au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                {/* Container Image */}
                <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-900 overflow-hidden border-b border-gray-100 dark:border-white/5">
                  {finalImage ? (
                    <Image
                      src={finalImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-600 font-bold tracking-widest">FIERLAH</span>
                    </div>
                  )}
                  
                  {/* Badge Date Flottant */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {post.publishedAt && new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                  </div>
                </div>

                <div className="p-8 space-y-4 relative z-10">
                  {/* Titre */}
                  <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Footer Carte */}
                  <div className="pt-4 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
                     <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Lire l'article</span>
                     <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                     </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      
      {/* CTA Final Blog */}
      <div className="mt-20 text-center">
         <p className="text-gray-500 dark:text-gray-500 text-sm animate-pulse">
            ● Fin des articles récents
         </p>
      </div>

    </main>
  );
}