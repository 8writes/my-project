/** @format */

'use client'

import Image from 'next/image'
import logo from '../../../public/logo/logo.png'
import arrow from '../../../public/images/arrow-square-out-bold-svgrepo-com.svg'
import Link from 'next/link'
import ContactBanner from '@/components/contact-banner'

const Footer = () => {
  return (
    <div>
      <ContactBanner />
      <div className='px-5 md:px-20 pt-12 pb-5 bg-slate-900'>
        <section className='footer flex flex-wrap py-10 md:py-20 gap-10 justify-between font-semibold w-full'>
          <div className=' w-96'>
             <Link className='' href='/'>
            <Image
              src={logo}
              alt='Company Logo'
              width={83}
              loading='eager'
              className='pb-5'
            /></Link>
            <p className='text-sm text-white leading-6'>
              Providing services in general contracting, oil and gas,
              construction management and pre-engineered metal buildings
              services to a broad range of commercial and industrial clients
              throughout Nigeria.
            </p>
            <div className='socials'></div>
          </div>
          {/**  <div>
          <h1 className='uppercase text-xl pb-5'>Services</h1>
          <ul className=' text-base grid gap-3 '>
            <li>Water Borehole Construction</li>
            <li>Equipment Supplies</li>
            <li>Building Construction</li>
            <li>Civil/Mechanical Engineering Works</li>
            <li>Materials/Heavy Duty Equipment Leasing</li>
            <li>Waste Management</li>
            <li>General Contracts</li>
            <li>General Procurement</li>
            <li>Road Construction Works/Erosion Control</li>
            <li>Electrical Engineering/Instrumentation</li>
          </ul>
        </div>*/}

          <div className='w-full lg:w-fit text-white'>
            <h1 className='uppercase font-bold pb-10'>Company</h1>
            <ul className=' text-base md:text-sm grid gap-5'>
              <li>
                <Link
                  className='hover:text-blue-500 hover:underline'
                  href='/about-us'>
                  About Us
                </Link>{' '}
              </li>
              <li>
                {' '}
                <Link
                  className='hover:text-blue-500 hover:underline'
                  href='/board-of-directors'>
                  {' '}
                  Board Of Directors
                </Link>
              </li>
              <li>
                {' '}
                <Link className='hover:text-blue-500 hover:underline' href='/gallery'>
                  {' '}
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-fit text-white'>
            <h1 className='uppercase font-bold pb-10'>Technical Partners</h1>
            <ul className='text-base md:text-sm grid gap-5 '>
              <li>
                {' '}
                <Link
                  target='_blank'
                  className=' hover:text-orange-500 flex items-center gap-2 hover:underline'
                  href='https://en.efinorseacleaner.com/'>
                  Efinor Sea Cleaner France{' '}
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  className=' hover:text-green-500 flex items-center gap-2 hover:underline'
                  href='https://www.hoppecke.com/en/products/'>
                  Hoppecke Batterien Germany{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-fit text-white'>
            <h1 className='uppercase font-bold pb-10'>Resources</h1>
            <ul className=' text-base md:text-sm grid gap-5 '>
              <li>
                {' '}
                <Link
                  className='hover:text-blue-500 hover:underline'
                  href='/contact'>
                  Contact
                </Link>
              </li>
              <li>
                {' '}
                <Link className='hover:text-blue-500 hover:underline' href='#'>
                  Careers
                </Link>
              </li>
              <li>
                {' '}
                <Link className='hover:text-blue-500 hover:underline' href='/terms-policy'>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                {' '}
                <Link className='hover:text-blue-500 hover:underline' href='/cookies'>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <div className='footer-bar flex justify-center pt-10'>
          <p className='text-xs text-white'>
            © 2024 ON-POINT DYNAMICS SYNERGY{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
