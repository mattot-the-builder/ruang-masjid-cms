import React from 'react'
import '../globals.css'

export const metadata = {
  description: 'Ruang Masjid.',
  title: 'Ruang Masjid',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
