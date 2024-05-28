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
  keywords:
    'civil engineering, onpoint, dynamics, dynamic, synergy,  onpoint dynamics synergy, onpointdynamicssynergy, onpointdynamicsynergy, onpoint dynamic synergy, construction, waste management, oil and gas',
  verification: {
    google: 'M6OoraMA-ohCavhaLIPO65l2LPu-TZVMkdMms9-2Df0',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} inmaintabuse='1'>
        <DesktopNav />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
