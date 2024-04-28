/** @format */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import hr from '../../../public/images/hr.svg'
import AboutUs from '../about/about'
const Services = () => {
  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (!isVisible && scrollY > 200) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible, scrollY])

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      })
    } else {
      controls.start({
        opacity: Math.max(0, 1 - scrollY / 500),
        transition: {
          duration: 0.5,
        },
      })
    }
  }, [isVisible, scrollY, controls])

  return (
    <div className='services relative pb-10 bg-white'>
      <svg
        className='vector w-full absolute -bottom-16 lg:-bottom-52 md:-bottom-28 transform rotate-180'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,202.7C672,203,768,181,864,160C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        />
      </svg>
      <AboutUs />
      <div className='services-bg flex flex-wrap justify-center sticky top-96 px-5 gap-10 w-full pt-10 md:pt-16 '>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
          }}
          className='services-left-content'>
          <div className='sticky w-11/12 top-40'>
            <p className='uppercase text-blue-500 font-bold tracking-wide pb-5'>
              ON-PO𝕀NT DYNAMICS SYNERGY
            </p>

            <h1 className='services-left-content-h1 pb-10 text-blue-500 font-extrabold '>
              Services
            </h1>
            <span className='flex items-center justify-center mx-auto'>
              <Image
                className=' w-fit'
                src={hr}
                width={200}
                height={200}
                alt=''
              />
            </span>
            <p className='services-text text-base font-medium text-slate-800 py-10 '>
              <span className=' font-semibold text-blue-500 text-xl'>We</span>{' '}
              ensure that our clients' construction needs and requirements are
              fulfilled through accessible and cost-effective solutions that
              generate, retain, and enhance value for all stakeholders.
            </p>
            <div className=' h-0.5 bg-blue-400'></div>
          </div>
        </motion.div>
        <div>
          <div className='services-right-content'>
            <div className='card flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                CIVIL / MECHANICAL ENGINEERING WORKS
              </h2>
            </div>
            <div className='card lg:-ml-4 lg:mr-4 flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                Construction Materials / heavy duty equipment leasing
              </h2>
            </div>
            <div className='card lg:-ml-8 lg:mr-8 flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                Road Construction Works / Erosion Control
              </h2>
            </div>
            <div className='card lg:-ml-12 lg:mr-12 flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                Electrical Engineering / Installation
              </h2>
            </div>
            <div className='card lg:-ml-16 lg:mr-16 flex items-center'>
              <h2 className=' drop-shadow-2xl'>Waste Management</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
