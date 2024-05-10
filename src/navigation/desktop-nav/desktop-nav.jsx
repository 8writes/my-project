/** @format */

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import logo from '../../../public/logo/logo.png'

const DesktopNav = () => {
  const pathname = usePathname()

  return (
    <div className='hidden lg:block fixed w-full z-50'>
      <section className='desktop-nav flex items-center justify-between border-b-2 border-slate-100 bg-white p-1'>
        <div className='desktop-nav-logo mx-auto'>
          <Link className='' href='/'>
            <Image src={logo} alt='Company Logo' width={83} loading='eager' />
          </Link>
        </div>
        <div className='desktop-nav-link mx-auto'>
          <div className='flex font-normal text-slate-800 uppercase text-sm'>
            <div className='relative group'>
              <Link
                className={`border-l-2 font-semibold border-slate-100 p-9 group-hover:shadow-md`}
                href='#'>
                Services
              </Link>
              <div className='absolute border-l-2 pb-1 font-semibold border-slate-100 left-0 mt-8 bg-white shadow-md hidden group-hover:flex'>
                <div className='flex flex-col w-80 gap-1 text-base py-5'>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/borehole-drilling'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/borehole-drilling'>
                    Borehole Drilling
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/equipment-supplies'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/equipment-supplies'>
                    Equipment Supplies
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/building-construction'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/building-construction'>
                    Building Construction
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/civil-mechanical-engineering'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/civil-mechanical-engineering'>
                    Civil / Mechanical Engineering Works
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/construction-materials-leasing'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/construction-materials-leasing'>
                    Construction Materials / Heavy Duty Equipment Leasing
                  </Link>
                </div>
                <div className='flex flex-col w-80 gap-1 text-base py-5'>
                  <Link
                    className={`border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/waste-management'
                        ? 'text-blue-500'
                        : 'text-slate-700'
                    }`}
                    href='/services/waste-management'>
                    Waste Management
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/oil&gas'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/oil&gas'>
                    Oil and Gas
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/general-procurement'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/general-procurement'>
                    General Procurement
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/services/road-construction-erosion-control'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/road-construction-erosion-control'>
                    Road Construction / Erosion Control
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname ===
                      '/services/electrical-engineering-instruments'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/services/electrical-engineering-instruments'>
                    Electrical Engineering / instruments
                  </Link>
                </div>
              </div>
            </div>
            <div className='relative group'>
              <Link
                className={`border-l-2 border-r-2 font-semibold border-slate-100 p-9 group-hover:shadow-md ${
                  pathname === '/projects' ? 'text-blue-500' : 'text-slate-800'
                }`}
                href='/projects'>
                Projects
              </Link>
              {/*  <div className='absolute border-l-2 border-t-2 font-semibold border-slate-200 left-0 mt-8 bg-white shadow-2xl hidden group-hover:flex'>
              
                <div className='flex flex-col w-80 gap-1 text-base py-5'>
                  <Link
                    className='border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all'
                    href='#'>
                    Ongoing Projects
                  </Link>
                  <Link
                    className='border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all'
                    href='#'>
                    Finished Projects
                  </Link>
                </div>
              </div>*/}
            </div>
            <div className='relative group'>
              <Link
                className='border-r-2 border-slate-100 font-semibold p-9 group-hover:shadow-md '
                href='#'>
                Technical Partners
              </Link>
              <div className='absolute font-semibold border-slate-100 left-0 mt-8 bg-white shadow-md hidden group-hover:flex'>
                {/* Dropdown content */}
                <div className='flex flex-col w-80 gap-1 text-base py-5'>
                  <Link
                    className=' border-transparent p-3 hover:text-orange-500 hover:border-slate-200 scale-95 transition-all'
                    href='https://en.efinorseacleaner.com/'>
                    EFINOR SEA CLEANER FRANCE
                  </Link>
                  <Link
                    className='border-transparent p-3 hover:text-green-500 hover:border-slate-200 scale-95 transition-all'
                    href='https://www.hoppecke.com/en/products/'>
                    HOPPECKE BATTERIEN GERMANY
                  </Link>
                </div>
              </div>
            </div>
            <div className='relative group'>
              <Link
                className='border-r-2 border-slate-100 font-semibold p-9 group-hover:shadow-md'
                href='#'>
                Company Overview
              </Link>
              <div className='absolute font-semibold border-slate-100 left-0 mt-8 bg-white shadow-md hidden group-hover:flex'>
                {/* Dropdown content */}
                <div className='flex flex-col w-80 gap-1 text-base py-5'>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/about-us'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/about-us'>
                    Company History
                  </Link>
                  <Link
                    className={` border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all ${
                      pathname === '/board-of-directors'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    href='/board-of-directors'>
                    Board Of Directors
                  </Link>
                  <Link
                    className='border-transparent p-3 hover:text-blue-500 hover:border-slate-200 scale-95 transition-all'
                    href='#'>
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='desktop-nav-end  mx-auto'>
          <Link href='/contact'>
            <button className='font-medium border-2 border-transparent bg-blue-400 px-10 py-4 text-white uppercase hover:bg-white hover:shadow-md hover:text-blue-500 hover:border-blue-400  transition-all'>
              Contact
            </button>
          </Link>
        </div>
      </section> 
    </div>
  )
}

export default DesktopNav
