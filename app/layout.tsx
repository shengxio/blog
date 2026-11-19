import './globals.css'
import type { Metadata } from 'next'
import Sidebar from './components/Sidebar'
import site from '../content/site.json'

export const metadata: Metadata = site.metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={site.language} className="h-full">
      <body className="min-h-screen">
        <div className="mx-auto grid min-h-screen max-w-[86rem] md:grid-cols-[12.5rem_minmax(0,1fr)] lg:grid-cols-[14rem_minmax(0,1fr)]">
          <Sidebar />
          <main className="min-w-0 px-5 pb-10 sm:px-8 lg:px-12 xl:px-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
