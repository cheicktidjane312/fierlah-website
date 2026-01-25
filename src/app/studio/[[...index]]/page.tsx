"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config"; // Assure-toi que le chemin vers sanity.config est bon (ajuste les ../ si besoin)

export default function StudioPage() {
  return (
    // On ajoute 'pt-28' (padding-top) pour que le Studio commence SOUS la Navbar
    <div className="pt-28 min-h-screen bg-[#101112]">
      <NextStudio config={config} />
    </div>
  );
}