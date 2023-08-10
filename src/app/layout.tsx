
import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import Navbar from '@/components/Navbar/Navbar'


export const metadata: Metadata = {
  title: 'Codelogy',
  description: 'Toda la gestion de tu institucion educativa en un solo lugar',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <html lang='es'>
        
        <body>
          <Providers>
            <Navbar />
              {children}
          </Providers>
        </body>
      </html>

  )
}
