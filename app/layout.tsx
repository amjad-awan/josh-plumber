import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { WhatsAppFloat } from '@/components/Header'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pursgloveplumbing.co.uk'),
  title: {
    default: 'Pursglove Plumbing & Heating | Manchester',
    template: '%s | Pursglove Plumbing & Heating',
  },
  description: 'Professional plumbing and heating services in Manchester and surrounding areas.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Pursglove Plumbing & Heating | Manchester',
    description: 'Professional plumbing and heating services in Manchester and surrounding areas.',
    url: 'https://www.pursgloveplumbing.co.uk',
    siteName: 'Pursglove Plumbing & Heating',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Pursglove Plumbing & Heating', description: 'Professional plumbing and heating services in Manchester.' },
  generator: 'v0.app',
 icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#77B14D' },
    { media: '(prefers-color-scheme: dark)', color: '#4d7e2f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
