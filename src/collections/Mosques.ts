import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Mosques: CollectionConfig = {
    slug: 'mosques',
    admin: {
        useAsTitle: 'name',
        group: 'Admin'
    },
    fields: [
        { name: 'name', type: 'text', required: true },
        {
            name: 'address',
            type: 'group',
            fields: [
                {
                    name: 'addressLine1',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'addressLine2',
                    type: 'text',
                },
                {
                    name: 'postcode',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'district',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'state',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'contact',
            type: 'group',
            fields: [
                { name: 'telephone', type: 'text', required: false },
                {
                    name: 'socialMedia',
                    type: 'array',
                    fields: [
                        {
                            name: 'platform',
                            type: 'select',
                            options: [
                                { label: 'Facebook', value: 'facebook' },
                                { label: 'Instagram', value: 'instagram' },
                                { label: 'Twitter', value: 'twitter' },
                                { label: 'YouTube', value: 'youtube' },
                                { label: 'TikTok', value: 'tiktok' },
                            ],
                            required: true,
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
            ],
        },
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
        ...slugField('name'),
    ],
}
