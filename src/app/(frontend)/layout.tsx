import React from 'react'
import '../globals.css'
import Navbar from '@/components/layout/Navbar'

export const metadata = {
    description: 'Ruang Masjid.',
    title: 'Ruang Masjid',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}
