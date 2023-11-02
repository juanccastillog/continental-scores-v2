import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Continental scores',
  description: 'Helps you register and calculate scores for the popular cards game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
