import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Refresher',
  description: 'A NextJS refresher with some new stuff i\'ve not done before',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <nav className='pb-5 border-b border-black'>
          <h1>Some Nav Bar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
