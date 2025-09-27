import React from 'react'
import '../globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
                <Footer />
            </body>
        </html>
    )
}
