import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LPK Jepang Binawan',
  description: 'Balai Pelatihan Tenaga Ahli Jepang Bianwan',
  keywords: ['LPK', 'Jepang', 'Binawan', 'Pelatihan', 'Tenaga Ahli'],
  authors: [{ name: 'LPK Binawan' }],
  creator: 'LPK Binawan',
  publisher: 'LPK Binawan',
  icons: {
    icon: [
      {
        url: '/iconbinawan.jpg',
        type: 'image/jpeg',
      },
      {
        url: '/iconbinawan.jpg',
        type: 'image/jpeg',
      },
      {
        url: '/iconbinawan.jpg',
        type: 'image/jpeg',
      },
    ],
    apple: '/iconbinawan.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
