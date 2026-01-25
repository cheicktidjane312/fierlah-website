/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Ta configuration d'images (Sanity) - JE N'AI RIEN TOUCHÉ ICI
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // 2. La nouvelle redirection "Anti-Doublon" (Vercel.app -> .com)
  async redirects() {
    return [
      {
        source: '/:path*', // S'applique à toutes les pages
        has: [
          {
            type: 'host',
            value: 'fierlah-website.vercel.app', // Si l'utilisateur est sur l'ancien domaine
          },
        ],
        destination: 'https://www.fierlah-agency.com/:path*', // On l'envoie sur le nouveau
        permanent: true, // Code 301 (Message "Déménagement définitif" pour Google)
      },
    ];
  },
};

export default nextConfig;