import React from 'react'

import payload from '@/helpers/payload/get-payload-instance';
import getCurrentMosque from '@/helpers/get-current-mosque';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ResponsiveSection from '@/components/layout/ResponsiveSection';
import Hero from '@/components/common/Hero';
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

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

    const richTextData = homePage.content as SerializedEditorState


    return (
        <main>
            <Hero {...homePage.hero} />
            <ResponsiveSection>
                <RichText data={richTextData} className="prose dark:prose-invert" />
            </ResponsiveSection>
        </main>
    )
}
