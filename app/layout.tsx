import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'ข้าวตราเเม่ครัว ข้าวคุณภาพ เพื่อคนสำคัญ',
  description: 'ข้าวตราเเม่ครัว ข้าวคุณภาพสูง ได้รับมาตราสากล เพื่อการส่งออก',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <head>
        <meta name="google-site-verification" content="r6GQ40Tm68KA2uwlepxE551WHK5EclZzEW03YsScSLk" />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
