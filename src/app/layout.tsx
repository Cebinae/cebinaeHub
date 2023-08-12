import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CebinaeHub',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style> */}
      <body className= 'bg-bg400'>
        <header className='sticky z-[999] w-full h-min top-0 flex justify-center'>
          <Header></Header>
        </header>
        
        
        {children}
        
        </body>
    </html>
  )
}
