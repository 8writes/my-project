/** @format */

'use client'

import Image from 'next/image'
import brand1 from '../../public/brands/fmoe-logo.png'
import brand2 from '../../public/brands/ndphc-logo.png'
import brand3 from '../../public/brands/nosdra-logo.png'
import brand4 from '../../public/brands/rea-logo.png'

const Brands = () => {
  return (
    <div className='bg-white pb-36 pt-10  p-5 lg:p-20'>
      <div className='pb-5'>
        <p className='uppercase text-blue-500 font-bold text-base tracking-wide pb-5'>
          Technical Partners & Clients
        </p>
        <div className=' w-32 h-1 bg-blue-500'></div>
      </div>
      <section className='flex bg-white gap-10 pb-10 overflow-x-auto md:overflow-hidden justify-center'>
        <Image src={brand3} alt='' width={200} height={50} />
        <Image src={brand4} alt='' width={200} height={50} />
        <Image src={brand1} alt='' width={200} height={50} />
        <Image src={brand2} alt='' width={200} height={50} />
        <Image src={brand3} alt='' width={200} height={50} />
        <Image src={brand4} alt='' width={200} height={50} />
      </section>
    </div>
  )
}

export default Brands
