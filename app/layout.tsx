import './globals.css'
import type { Metadata } from 'next'
import Sidebar from './components/Sidebar'

export const metadata: Metadata = {
  title: 'Sheng Xiong Ding - Portfolio',
  description: 'Python tools, web projects, and an industrial automation and electrical engineering background.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex min-h-screen flex-col md:flex-row">
          <Sidebar />
          <main className="min-w-0 flex-1 p-4 sm:p-6 md:ml-64 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
