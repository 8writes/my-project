/** @format */
'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import brand1 from '../../public/brands/fmoe-logo.png'
import brand2 from '../../public/brands/ndphc-logo.png'
import brand3 from '../../public/brands/nosdra-logo.png'
import brand4 from '../../public/brands/efinor.svg'
import brand5 from '../../public/brands/hoppecke-logo.png'
import { motion } from 'framer-motion'

const Brands = () => {
 const containerRef = useRef(null)
 let intervalId = useRef(null)

 useEffect(() => {
   const container = containerRef.current

   const scroll = () => {
     if (container) {
       container.scrollLeft += 1 // Adjust scroll speed as needed

       // Reset scroll position to the beginning if it reaches the end
       if (
         container.scrollLeft >=
         container.scrollWidth - container.clientWidth
       ) {
         container.scrollLeft = 0
       }
     }
   }

   intervalId.current = setInterval(scroll, 50) // Adjust scroll speed as needed

   return () => clearInterval(intervalId.current)
 }, [])
    
  return (
    <div className='bg-white pb-48 pt-16 p-5 lg:p-20'>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
            duration: 0.2,
        }}
        className='pb-5'>
        <p className='uppercase text-blue-500 font-bold text-base tracking-wide pb-5'>
          Technical Partners & Clients
        </p>
        <div className='w-32 h-1 bg-blue-500'></div>
      </motion.div>
      <section className='flex w-full bg-white justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
          }}
          ref={containerRef}
          className='flex gap-10 items-center pb-10 overflow-x-hidden'>
          <Image src={brand4} alt='' width={200} height={50} />
          <Image src={brand5} alt='' width={200} height={50} />
          <Image src={brand1} alt='' width={200} height={50} />
          <Image src={brand2} alt='' width={200} height={50} />
          <Image src={brand3} alt='' width={200} height={50} />
          {/* Repeat images as needed */}
        </motion.div>
      </section>
    </div>
  )
}

export default Brands

