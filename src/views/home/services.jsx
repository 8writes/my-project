/** @format */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import hr from '../../../public/images/hr.svg'
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
          stiffness: 200,
          damping: 10,
          duration: 0.5,
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
    <div className='services wrapper relative'>
      <div className='flex flex-wrap justify-center sticky top-96 px-6 gap-10 w-full bg-white'>
        <div className='services-left-content'>
          <div className='sticky w-11/12 top-36'>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
              }}
              className='text-slate-700'>
              Delivering excellence to our clients.
            </motion.p>
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
              }}
              className='pb-10 text-blue-500 font-extrabold '>
              ON-PO𝕀NT DYNAMICS SYNERGY
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
              }}
              className='flex items-center justify-center mx-auto'>
              <Image
                className=' w-fit'
                src={hr}
                width={200}
                height={200}
                alt=''
              />
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
              }}
              className='text-sm md:text-base pl-2 border-b-2 pb-5 border-slate-200 text-slate-800 pt-10  tracking-tight'>
              We ensure that our clients' construction needs and requirements
              are fulfilled through accessible and cost-effective solutions that
              generate, retain, and enhance value for all stakeholders.
            </motion.p>
          </div>
        </div>
        <div>
          <div className='services-right-content'>
            <div className='card flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                CIVIL / MECHANICAL ENGINEERING WORKS
              </h2>
            </div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className='card lg:-ml-4 lg:mr-4 flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                Construction Materials / heavy duty equipment leasing
              </h2>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className='card lg:-ml-8 lg:mr-8 flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                Road Construction Works / Erosion Control
              </h2>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className='card lg:-ml-12 lg:mr-12 flex items-center'>
              <h2 className=' drop-shadow-2xl'>
                Electrical Engineering / Installation
              </h2>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className='card lg:-ml-16 lg:mr-16 flex items-center'>
              <h2 className=' drop-shadow-2xl'>Waste Management</h2>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
