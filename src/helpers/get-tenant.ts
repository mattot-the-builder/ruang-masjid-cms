import { headers } from 'next/headers';

/**
 * Reads tenant (subdomain) from middleware-injected header.
 *
 * @author mattot <mattot.builder@gmail.com>
 */
export async function getTenant() {
    const h = await headers();
    return h.get('x-tenant');
}
