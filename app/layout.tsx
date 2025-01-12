import type {Metadata} from 'next';

import './global.css'

export const metadata:Metadata = {
  title: "dorimiamn's Portfolio",
  description: "dorimiamn's Portfolio Site",
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ja">
        <body>{children}</body>
      </html>
    )
  }