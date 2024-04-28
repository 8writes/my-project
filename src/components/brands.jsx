/** @format */
'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import brand1 from '../../public/brands/fmoe-logo.png'
import brand2 from '../../public/brands/ndphc-logo.png'
import brand3 from '../../public/brands/nosdra-logo.png'
import brand4 from '../../public/brands/efinor.svg'
import brand5 from '../../public/brands/hoppecke-logo.png'

const Brands = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let intervalId

    if (container) {
      const containerWidth = container.offsetWidth
      const contentWidth = container.scrollWidth
      const scrollSpeed = 50 // Adjust scroll speed as needed

      if (contentWidth > containerWidth) {
        intervalId = setInterval(() => {
          container.scrollLeft += 1 // Change the scroll direction and speed as needed
        }, scrollSpeed)
      }
    }

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='bg-white pb-48 pt-16 p-5 lg:p-20'>
      <div className='pb-5'>
        <p className='uppercase text-blue-500 font-bold text-base tracking-wide pb-5'>
          Technical Partners & Clients
        </p>
        <div className='w-32 h-1 bg-blue-500'></div>
      </div>
      <section className='flex w-full bg-white justify-center'>
        <div
          ref={containerRef}
          className='flex gap-10 items-center pb-10 overflow-x-hidden'>
          <Image src={brand4} alt='' width={200} height={50} />
          <Image src={brand5} alt='' width={200} height={50} />
          <Image src={brand1} alt='' width={200} height={50} />
          <Image src={brand2} alt='' width={200} height={50} />
          <Image src={brand3} alt='' width={200} height={50} />
          {/* Repeat images as needed */}
        </div>
      </section>
    </div>
  )
}

export default Brands

