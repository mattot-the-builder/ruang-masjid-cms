import { rootDomain } from '@/constants';
import { NextRequest } from 'next/server';

export default function extractSubdomain(request: NextRequest): string | null {
    const url = request.url;
    const host = request.headers.get('host') || '';
    const hostname = host.split(':')[0]; // strip port if exists

    // Local development (e.g. http://foo.localhost:3000)
    if (url.includes('localhost') || url.includes('127.0.0.1')) {
        const match = url.match(/http:\/\/([^.]+)\.localhost/);
        if (match?.[1]) return match[1];

        if (hostname.includes('.localhost')) {
            return hostname.split('.')[0];
        }
        return null;
    }

    // Production environment
    const rootDomainFormatted = rootDomain.split(':')[0];

    const isSubdomain =
        hostname !== rootDomainFormatted &&
        hostname !== `www.${rootDomainFormatted}` &&
        hostname.endsWith(`.${rootDomainFormatted}`);

    return isSubdomain
        ? hostname.replace(`.${rootDomainFormatted}`, '')
        : null;
}
