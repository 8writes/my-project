/** @format */

import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'

import DesktopNav from '@/navigation/desktop-nav/desktop-nav'
import MobileNav from '@/navigation/mobile-nav/mobile-nav'
import Footer from '@/navigation/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ON-POINT DYNAMICS SYNERGY',
  description: 'Top civil and electrical engineering company in Nigeria',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} inmaintabuse='1' >
        <DesktopNav />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
