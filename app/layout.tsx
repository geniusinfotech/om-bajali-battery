import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Young_Serif, Bungee_Inline } from 'next/font/google'
import './globals.css'

const youngSerif = Young_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-young-serif',
})

const bungeeInline = Bungee_Inline({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bungee-inline',
})

export const metadata: Metadata = {
  title: 'PowerCell Batteries & Auto Care | Surat',
  description: 'Trusted Amaron and Exide car and bike batteries, jump starts, battery service and auto care in Surat.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${bungeeInline.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
