/** @format */

'use client'

import Link from 'next/link'

const ServicesBtn = () => {
  return (
    <div className='services-btn flex justify-center pt-20 lg:pt-28 pb-10'>
      <button className=' bg-blue-500 py-3 z-50 w-5/6 md:w-2/4 md:text-xl'>
        <Link href='#'> Explore all our services</Link>
      </button>
    </div>
  )
}

export default ServicesBtn
