import payload from '@/helpers/payload/get-payload-instance';
import { getTenant } from '@/helpers/get-tenant';
import { notFound } from 'next/navigation';

export default async function getCurrentMosque() {
    const subdomain = await getTenant();

    const mosque = (await payload.find({
        collection: "mosques",
        where: {
            slug: { equals: subdomain }
        }
    })
    ).docs[0]

    if (!mosque) return notFound()

    return mosque
}
