import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '@/components/header'

const font = Roboto({ subsets: ['latin'] , weight:'300'})

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
          font-family: ${font.style.fontFamily};
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
