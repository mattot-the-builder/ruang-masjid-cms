import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const HomePage: CollectionConfig = {
    slug: 'homepage',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'hero',
            type: 'group',
            required: false,
            fields: [
                {
                    name: 'image',
                    type: 'relationship',
                    relationTo: 'media',
                    required: true
                },
                {
                    name: 'heading',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor(),
        }
    ],
}
