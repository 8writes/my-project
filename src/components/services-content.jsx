/** @format */

// Import the necessary modules and images
'use client'

import Image from 'next/image'
import Link from 'next/link'

const ServicesContent = ({ title, image, children }) => {
  return (
    <div className='px-5 lg:px-20 lg:pt-24 pb-24 bg-white'>
      <section className='relative flex flex-wrap lg:min-h-screen lg:justify-center gap-5 lg:gap-5 xl:gap-10'>
        <div className='pt-10 lg:ml-4 lg:pt-10 flex-1'>
          <div
            className='border-t-4 border-b-4 border-r-4 pr-3 pt-3 block flex-1  border-blue-400 lg:block lg:w-2/4 lg:hidden lg:top-36'
            style={{ height: '24rem' }}>
            <Image
              src={image}
              alt={title}
              className=''
              style={{ height: '24rem' }}
            />
          </div>
          <div className='py-20 lg:pt-0'>{children}</div>
        </div>
        <div
          className='border-t-4 border-b-4 border-r-4 pr-3 pt-3 hidden flex-1  border-blue-400 lg:block lg:w-2/4 lg:sticky lg:top-36'
          style={{ height: '29rem' }}>
          <Image
            src={image}
            alt={title}
            className='w-full'
            style={{ height: '29rem' }}
          />
        </div>
      </section>
    </div>
  )
}

export default ServicesContent
