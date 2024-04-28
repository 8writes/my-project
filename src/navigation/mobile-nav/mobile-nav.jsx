/** @format */

'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logo from '../../../public/logo/logo.png'
import openMenu from '../../../public/images/menu.png'
import closeMenu from '../../../public/images/close.png'
import dropdown from '../../../public/images/down.png'

const MobileNav = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dropdownStates, setDropdownStates] = useState({
    services: false,
    projects: false,
    technical: false,
    company: false,
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdownName) => {
    setDropdownStates({
      ...dropdownStates,
      [dropdownName]: !dropdownStates[dropdownName],
    })
  }

  return (
    <div className='block lg:hidden z-50 fixed w-full'>
      <section className='mobile-nav flex items-center justify-between shadow bg-white py-1 px-5'>
        <div className='mobile-nav-logo'>
          <Link href='/' onClick={toggleMenu}>
            <Image src={logo} alt='Company Logo' width={65} loading='eager' />
          </Link>
        </div>
        <div className='mobile-nav-end'>
          <div className='bg-blue-500 opacity-90 p-1' onClick={toggleMenu}>
            <motion.div whileTap={{ scale: 0.1 }}>
              {isMenuOpen ? (
                <Image
                  src={closeMenu}
                  alt='Close Icon'
                  width={30}
                  loading='eager'
                />
              ) : (
                <Image
                  src={openMenu}
                  alt='Open Icon'
                  width={30}
                  loading='eager'
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : 20,
          transition: {
            duration: 0.2,
          },
        }}>
        <div
          className={`mobile-menu h-screen ${
            isMenuOpen ? 'block' : 'hidden'
          } overflow-y-auto shadow-2xl bg-white w-full border-r-2 border-slate-200`}>
          <div className='mobile-menu-link pt-10 pb-10'>
            <div className='flex flex-col p-5 gap-7 font-semibold text-slate-700 uppercase text-lg'>
              <div className='relative group'>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 20,
                    transition: {
                      duration: 0.3,
                      delay: 0.3,
                    },
                  }}>
                  <Link
                    href='services'
                    className={`border-slate-200 flex items-center justify-between  ${
                      pathname === '/services'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    onClick={toggleMenu}>
                    Services
                  </Link>
                  {/**   <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: dropdownStates.services ? 1 : 0,
                      y: dropdownStates.services ? 0 : -10,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className={`relative ml-2 border-l-2 border-slate-200 bg-white ${
                      dropdownStates.services ? 'block' : 'hidden'
                    }`}>
                    
                    <div className='flex flex-col w-full text-base text-blue-500 opacity-90 py-3'>
                      <Link
                        className=' border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Water Borehole
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Equipment Supplies
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Building Construction
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Civil/Mechanical Engineering Works
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Construction Materials / Heavy Duty Equipment Leasing
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Waste Management
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        General Contracts
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        General Procurement
                      </Link>
                      <Link
                        className='   border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Road Construction Works/Erosion Control
                      </Link>
                      <Link
                        className='  border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Electrical Engineering/Instrumentation
                      </Link>
                    </div>
                  </motion.div>*/}
                </motion.div>
              </div>
              <div className='relative group'>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 20,
                    transition: {
                      duration: 0.3,
                      delay: 0.4,
                    },
                  }}>
                  <Link
                    href='projects'
                    className={`border-slate-200 flex items-center justify-between ${
                      pathname === '/projects'
                        ? 'text-blue-500'
                        : 'text-slate-800'
                    }`}
                    onClick={toggleMenu}>
                    Projects
                  </Link>
                  {/*<motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: dropdownStates.projects ? 1 : 0,
                      y: dropdownStates.projects ? 0 : -10,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className={`relative ml-2 border-l-2 border-slate-200 bg-white ${
                      dropdownStates.projects ? 'block' : 'hidden'
                    }`}>
                     Dropdown content 
                    <div className='flex flex-col w-80 text-base text-blue-500 opacity-90 py-3'>
                      <Link
                        className=' border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Ongoing Projects
                      </Link>
                      <Link
                        className=' border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Finished Projects
                      </Link>
                    </div>
                  </motion.div>*/}
                </motion.div>
              </div>
              <div className='relative group'>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 20,
                    transition: {
                      duration: 0.3,
                      delay: 0.5,
                    },
                  }}>
                  <div
                    className='border-slate-200 flex items-center justify-between '
                    onClick={() => toggleDropdown('technical')}>
                    Technical Partners
                    <Image
                      src={dropdown}
                      alt='Dropdown Icon'
                      width={30}
                      loading='lazy'
                      className={`transform origin-center transition-all ${
                        dropdownStates.technical ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: dropdownStates.technical ? 1 : 0,
                      y: dropdownStates.technical ? 0 : -10,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className={`relative ml-2 border-l-2 border-slate-200 bg-white ${
                      dropdownStates.technical ? 'block' : 'hidden'
                    }`}>
                    {/* Dropdown content */}
                    <div className='flex flex-col w-80 text-base py-3'>
                      <Link
                        className=' border-transparent p-3 text-orange-500 hover:border-slate-200 scale-95'
                        href='#'>
                        EFINOR SEA CLEANER FRANCE
                      </Link>
                      <Link
                        className=' border-transparent p-3 text-green-500 hover:border-slate-200 scale-95'
                        href='#'>
                        HOPPECKE BATTERIEN GERMANY
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              <div className='relative group'>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 20,
                    transition: {
                      duration: 0.3,
                      delay: 0.6,
                    },
                  }}>
                  <div
                    className='border-slate-200 flex items-center justify-between '
                    onClick={() => toggleDropdown('company')}>
                    Company Overview
                    <Image
                      src={dropdown}
                      alt='Dropdown Icon'
                      width={30}
                      loading='lazy'
                      className={`transform origin-center transition-all ${
                        dropdownStates.company ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: dropdownStates.company ? 1 : 0,
                      y: dropdownStates.company ? 0 : -10,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className={`relative ml-2 border-l-2 border-slate-200 bg-white ${
                      dropdownStates.company ? 'block' : 'hidden'
                    }`}>
                    {/* Dropdown content */}
                    <div className='flex flex-col w-80 text-base text-blue-500 opacity-90 py-3'>
                      <Link
                        className=' border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        About Us
                      </Link>
                      <Link
                        className=' border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Board Of Directors
                      </Link>
                      <Link
                        className=' border-transparent p-3 hover:border-slate-200 scale-95'
                        href='#'>
                        Gallery
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              <div className='mobile-menu-end pb-5'>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : 20,
                    transition: {
                      duration: 0.3,
                      delay: 0.7,
                    },
                  }}>
                  <button className='font-medium border-x-2 border-t-2 border-transparent bg-blue-500 opacity-95 px-10 py-4 text-white uppercase'>
                    Contact
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileNav
