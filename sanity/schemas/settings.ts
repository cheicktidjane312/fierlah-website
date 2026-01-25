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
  ],
}