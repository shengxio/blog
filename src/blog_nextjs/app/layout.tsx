import './globals.css'
import type { Metadata } from 'next'
import Sidebar from './components/Sidebar'

export const metadata: Metadata = {
  title: 'Sheng Xiong Ding - Data Science & Machine Learning',
  description: 'Personal website of Sheng Xiong Ding (Roland) - Data Scientist, AI & ML Specialist, and Solutions Architect',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 ml-64 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
