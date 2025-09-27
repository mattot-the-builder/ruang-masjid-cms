import React from 'react'

import payload from '@/helpers/payload/get-payload-instance';
import getCurrentMosque from '@/helpers/get-current-mosque';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ResponsiveSection from '@/components/layout/ResponsiveSection';
import Image from 'next/image';

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

function Hero() {
    return <div className="w-full max-w-(--breakpoint-2xl) mx-auto  h-[36rem] overflow-clip bg-red-100">
        <Image
            src="https://picsum.photos/1920/1080"
            alt="picsum photo"
            width={1920}
            height={1080}
            className="object-cover"
        />
    </div>
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
            <Hero />
            <ResponsiveSection>
                {homePage.title}
            </ResponsiveSection>
        </div>
    )
}
