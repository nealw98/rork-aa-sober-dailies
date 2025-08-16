import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AA Sober Dailies - Your Daily Recovery Companion',
  description: 'Transform your recovery journey with daily reflections, gratitude tracking, evening reviews, and AI sponsor support. Download the app that helps you stay sober, one day at a time.',
  keywords: 'alcoholics anonymous, recovery, sobriety, daily reflections, gratitude, AI sponsor, sober app',
  authors: [{ name: 'AA Sober Dailies' }],
  openGraph: {
    title: 'AA Sober Dailies - Your Daily Recovery Companion',
    description: 'Transform your recovery journey with daily reflections, gratitude tracking, evening reviews, and AI sponsor support.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AA Sober Dailies - Your Daily Recovery Companion',
    description: 'Transform your recovery journey with daily reflections, gratitude tracking, evening reviews, and AI sponsor support.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
