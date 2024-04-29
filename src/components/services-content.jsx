/** @format */

// Import the necessary modules and images
'use client'

import Image from 'next/image'
import Link from 'next/link'

const ServicesContent = ({ title, image }) => {
  return (
    <div className='px-5 lg:px-20 lg:pt-40 pb-24 bg-white'>
      <section className='relative flex flex-wrap lg:min-h-screen lg:justify-center gap-5 lg:gap-5 xl:gap-10'>
        <div className='pt-28 lg:pt-10 lg:w-1/3'>
          <h1 className='text-5xl uppercase md:text-6xl lg:text-7xl pb-5 text-blue-500 font-extrabold '>
            Services
          </h1>
          <div className=' w-32 h-1 bg-blue-400 '></div>
          <h1 className='text-2xl uppercase lg:text-4xl pt-10 text-slate-800 font-bold'>
            {title}.
          </h1>
          {/* You can add additional props for other data to display */}
        </div>
        <div
          className='border-l-8 border-blue-500 lg:w-2/4 lg:sticky lg:top-36'
          style={{ height: '24rem' }}>
          <Image
            src={image}
            alt={title}
            className=''
            style={{ height: '24rem' }}
          />
          <div className='mt-16 h-1 mx-10 bg-blue-400 '></div>
        </div>
      </section>
    </div>
  )
}

export default ServicesContent
