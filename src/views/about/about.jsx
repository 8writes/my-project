/** @format */

'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <div className='about-us flex flex-wrap justify-center gap-10 px-5 md:px-10 lg:px-28 pt-11 md:pb-10'>
      <motion.div
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.2,
        }}
        className=' w-full lg:flex-1'>
        <p className='uppercase text-blue-500 font-bold text-base tracking-wide pb-5'>
          About
        </p>

        <h1 className='font-extrabold pb-10 text-slate-800 text-3xl md:text-4xl'>
          Building Nigeria's Future, One Project at a Time.
        </h1>

        <div className=' w-32 h-1 bg-blue-400'></div>
      </motion.div>
      <motion.div
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.2,
        }}
        className='my-auto w-full lg:flex-1 flex flex-col gap-5'>
        <p className='text-slate-800 text-base pt-3 font-medium'>
          We are a leading construction company in Nigeria. Specializing in
          general contracting, oil and gas services, construction management,
          and pre-engineered metal buildings, we serve commercial and industrial
          clients with excellence and integrity.
        </p>
        <div className='uppercase bg-blue-500 text-white w-fit text-xs my-1 tracking-wide font-semibold'>
          <Link href='about-us' className='group flex items-center py-1 px-3'>
            Learn About Us{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 ml-1 lg:group-hover:translate-x-2 transition-all'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutUs
