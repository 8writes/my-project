/** @format */
'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

import dropdown from '../../../public/images/down-arrow.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    controls.start({
      opacity: Math.max(0, 1 - scrollY / 300), // Gradually fade out based on scroll position
      transition: {
        duration: 0.3,
        damping: 8,
      },
    })
  }, [scrollY, controls])

  return (
    <div
      id='hero'
      className='hero relative px-5 py-20 pb-5 md:p-14 lg:p-16 flex flex-col items-center justify-center w-full md:min-h-screen'>
      <svg
        className='vector w-full absolute lg:-bottom-20 -bottom-1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,202.7C672,203,768,181,864,160C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        />
      </svg>
      <motion.section
        animate={controls}
        className='hero-content my-auto flex p-2 md:p-5 lg:p-10 xl:p-20 flex-col gap-5 md:gap-10 uppercase'>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          className='text-white text-center font-bold tracking-wide'>
          <span>Innovation</span>{' '}
          <span className='text-3xl md:text-6xl lg:text-7xl'>For a</span>{' '}
          Sustainable Future.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className='text-white text-center md:px-10 lg:px-20 xl:px-24 font-semibold text-base tracking-wide md:text-xl'>
          Leading civil and electrical engineering in Nigeria, delivering
          quality service.
        </motion.p>
      </motion.section>
      <span className='get-started'>
        <Link href='#about'>
          <Image
            src={dropdown}
            alt='Dropdown Icon'
            width={50}
            loading='lazy'
            className={`animate-bounce pt-5`}
          />
        </Link>
      </span>
    </div>
  )
}

export default Hero
