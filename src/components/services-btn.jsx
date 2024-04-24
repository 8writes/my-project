/** @format */

'use client'

import Link from 'next/link'

const ServicesBtn = () => {
  return (
    <div className='services-btn flex justify-center pt-20 lg:pt-28 pb-10'>
      <button className=' bg-blue-500 text-white uppercase border-2 border-transparent hover:bg-transparent hover:border-blue-500 scale-95 hover:scale-100 transition-all drop-shadow-md font-medium shadow-2xl py-3 w-5/6 md:w-2/4 md:text-xl'>
        <Link href='#'>Explore all our services</Link>
      </button>
    </div>
  )
}

export default ServicesBtn
