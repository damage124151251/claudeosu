import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude OSU! - AI Rhythm Master',
  description: 'Watch Claude AI play osu! in real-time',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
