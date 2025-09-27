import '../globals.css'
import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ThemeProvider from '@/providers/ThemeProvider'

export const metadata = {
    description: 'Ruang Masjid.',
    title: 'Ruang Masjid',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="ms-MY" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
