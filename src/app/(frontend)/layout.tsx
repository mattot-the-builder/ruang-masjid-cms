import React from 'react'
import '../globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ThemeProvider from '@/providers/ThemeProvider'

export const metadata = {
    description: 'Ruang Masjid.',
    title: 'Ruang Masjid',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en" suppressHydrationWarning>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </ThemeProvider>
        </html>
    )
}
