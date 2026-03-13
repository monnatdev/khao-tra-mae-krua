import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Simple landing page built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
