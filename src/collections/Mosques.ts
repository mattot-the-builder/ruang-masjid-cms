import type { CollectionConfig } from 'payload'

export const Mosques: CollectionConfig = {
  slug: 'mosques',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'coordinate', type: 'point', required: false },
  ],
}
