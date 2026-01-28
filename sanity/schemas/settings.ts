// sanity/schemas/settings.ts
export default {
  name: 'settings',
  title: 'Paramètres & Contact',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email de Contact',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Numéro de Téléphone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse Postale',
      type: 'text', // Type 'text' permet d'avoir plusieurs lignes
    },
    // 👇 NOUVELLE SECTION : RÉSEAUX SOCIAUX
    {
      name: 'socialLinks',
      title: 'Réseaux Sociaux',
      type: 'object',
      description: 'Copiez ici les liens complets de vos profils (ex: https://instagram.com/fierlah_agency)',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ]
    },
  ],
}