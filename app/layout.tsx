import type { Metadata } from 'next'
import { Jost, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DVSY | Design & Freedom',
  description: 'Explore o estilo independente abraçando a singularidade com nossas peças exclusivas de estilistas autorais.',
  keywords: 'moda, design, roupas, estilo, independência, sustentabilidade',
  authors: [{ name: 'DVSY' }],
  openGraph: {
    title: 'DVSY | Design & Freedom',
    description: 'Explore o estilo independente abraçando a singularidade com nossas peças exclusivas de estilistas autorais.',
    url: 'https://dvsy.com.br',
    siteName: 'DVSY',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${jost.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}