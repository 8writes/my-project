/** @format */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrow from '../../public/images/arrow-right-333-svgrepo-com.svg'

function PagesHeader({ title }) {
  return (
    <div className='projects-header flex flex-wrap gap-5 justify-between py-10 px-6 lg:py-20 lg:px-24'>
      <h1 className='text-2xl md:text-4xl uppercase text-white font-bold'>
        {title}
      </h1>
      <div className='text-white uppercase text-sm items-center flex font-semibold gap-2'>
        <Link href='/'>Home</Link>
        <Image src={arrow} alt='' className='w-3' />
        <p> {title}</p>
      </div>
    </div>
  )
}

export default PagesHeader
