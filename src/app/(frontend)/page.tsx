import React from 'react'

import payload from '@/helpers/payload/get-payload-instance';
import getCurrentMosque from '@/helpers/get-current-mosque';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ResponsiveSection from '@/components/layout/ResponsiveSection';
import Image from 'next/image';
import Hero from '@/components/common/Hero';

async function getHomePage() {
    const mosque = await getCurrentMosque();

    const homePage = (await payload.find({
        collection: "homepage",
        where: {
            mosque: { equals: mosque.id }
        }
    })).docs[0]

    if (!homePage) return notFound()

    return homePage
}

export async function generateMetadata(): Promise<Metadata> {
    const homePage = await getHomePage();

    // TODO: update description field
    return {
        title: homePage.title,
        description: homePage.title
    }
}

export default async function HomePage() {
    const homePage = await getHomePage();

    return (
        <div className="home">
            <Hero {...homePage.hero} />
            <ResponsiveSection>
                {homePage.title}
            </ResponsiveSection>
        </div>
    )
}
