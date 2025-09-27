// storage-adapter-import-placeholder
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, Config } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import { Mosques } from './collections/Mosques'
import { isSuperAdmin } from './access/isSuperAdmin'
import { seed } from './seed'
import { Galleries } from './collections/Galleries'
import { HomePage } from './collections/HomePage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Mosques, HomePage, Users, Media, Galleries,],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: vercelPostgresAdapter({
        pool: {
            connectionString: process.env.VERCEL_POSTGRES_URL || '',
        },
        idType: 'uuid',
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        multiTenantPlugin<Config>({
            tenantsSlug: 'mosques',
            collections: { homepage: { isGlobal: true }, galleries: {} },
            tenantField: { name: 'mosque' },
            tenantsArrayField: {
                arrayFieldName: 'mosques',
                arrayTenantFieldName: 'mosque',
            },
            tenantSelectorLabel: {
                en: 'Mosque',
            },
            userHasAccessToAllTenants: (user) => isSuperAdmin(user),
        }),
        // storage-adapter-placeholder
    ],
    onInit: async (args) => {
        if (process.env.SEED_DB) {
            await seed(args)
        }
    },
})
