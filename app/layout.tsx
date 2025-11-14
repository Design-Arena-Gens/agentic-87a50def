import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Работа с Gemini Opal',
  description: 'Интерактивная презентация о работе с Gemini Opal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
