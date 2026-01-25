import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Noir Profond
        surface: "#121212",    // Gris très sombre (Cartes)
        primary: "#00FFFF",    // Cyan Néon (Identité)
        secondary: "#FFD700",  // Or (Luxe/Boutons)
        "text-main": "#FFFFFF",
        "text-muted": "#A1A1AA",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // On configurera la police plus tard
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.1)',
        'gold': '0 0 10px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;