import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Noir encore plus profond pour le contraste néon
        surface: "#0F0F0F",    // Gris quasi-noir
        primary: "#00FFFF",    // Cyan Néon (Intouché)
        secondary: "#FFD700",  // Or (Intouché)
        
        // Nuances pour le Glassmorphism
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-surface": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        // Dégradés subtils pour le fond
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.1)',
        'neon-strong': '0 0 15px rgba(0, 255, 255, 0.5), 0 0 30px rgba(0, 255, 255, 0.25), inset 0 0 10px rgba(0, 255, 255, 0.1)',
        'gold': '0 0 10px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      // 👇 LES NOUVELLES ANIMATIONS "VIVANTES"
      animation: {
        'blob': 'blob 10s infinite', // Des formes qui flottent en fond
        'shimmer': 'shimmer 2.5s linear infinite', // Reflet brillant sur les textes/boutons
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Battement de coeur lent
        'float': 'float 6s ease-in-out infinite', // Flottement classique
        'spin-slow': 'spin 15s linear infinite', // Rotation très lente (pour des cercles déco)
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;