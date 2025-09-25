import type { CollectionConfig } from 'payload'

export const Mosques: CollectionConfig = {
  slug: 'mosques',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'bankAccounts',
      type: 'array',
      fields: [
        { name: 'bankName', type: 'text', required: true },
        { name: 'accountHolderName', type: 'text', required: true },
        { name: 'accountNumber', type: 'text', required: true },
        { name: 'bankQrCode', type: 'relationship', relationTo: 'media' },
      ],
    },
    { name: 'coordinate', type: 'point', required: false },
  ],
}
