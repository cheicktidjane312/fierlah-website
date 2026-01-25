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
    <main className="min-h-screen bg-background pt-40 pb-20 px-4 md:px-8">
      
      <div className="text-center mb-20 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl md:text-7xl font-black"
        >
          Notre <span className="text-primary">Blog</span>
        </motion.h1>
        <p className="text-gray-400 text-lg">L'actualité du digital, décryptée pour vous.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {posts.map((post: any, i: number) => {
          // Fallback image sécurisé
          const finalImage = post.imageUrl || (post.mainImage ? urlFor(post.mainImage).url() : null);

          return (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }} // Effet cascade
            >
              <Link 
                href={`/blog/${post.slug.current}`} 
                className="group block bg-surface border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-lg"
              >
                <div className="relative h-64 w-full bg-gray-900 overflow-hidden">
                  {finalImage ? (
                    <Image
                      src={finalImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized // Pour éviter les bugs de chargement récents
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-600 font-bold">FIERLAH</span>
                    </div>
                  )}
                </div>

                <div className="p-8 space-y-4">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">
                    {post.publishedAt && new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                  </p>
                  <h2 className="text-2xl font-bold leading-tight group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <div className="text-gray-500 text-sm group-hover:text-primary transition-colors font-medium">
                    Lire l'article →
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}