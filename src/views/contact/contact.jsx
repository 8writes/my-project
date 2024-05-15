/** @format */

'use client'

import PagesHeader from '@/components/pages-header'
import Image from 'next/image'
import location from '../../../public/images/location.png'
import support from '../../../public/images/support.png'
import email from '../../../public/images/email.png'

const Contact = () => {
  return (
    <div className='bg-white pt-16 lg:pt-20'>
      <PagesHeader title='Contact' />
      <div className='projects-page font text-slate-700 pb-60 lg:pb-40 px-6 pt-20 flex flex-wrap justify-center gap-20'>
        <div className='w-full lg:flex justify-center  gap-5 items-center'>
          {' '}
          <Image
            src={location}
            alt=''
            width={100}
            height={30}
            className='py-5'
          />
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>Location</h1>{' '}
            <p className=' tracking-wide font-medium text-xl leading-7'>
              <span className='font-semibold'> Head Office:</span> 132 Woji Road
              GRA Phase II, Port Harcourt, Rivers State. <br />{' '}
              <span className='font-semibold'>Branch:</span> Suite 109, 6 Sapele
              Street, Off Ladoke Akinlola Boulevard, Garki 2, Abuja
            </p>
          </div>
        </div>
        <div className='w-full lg:w-fit lg:flex gap-5 items-center'>
          {' '}
          <Image
            src={support}
            alt=''
            width={100}
            height={50}
            className='py-5'
          />
          <div className='flex flex-col gap-4 justify-start'>
            <h1 className='text-2xl font-semibold'>Call Center</h1>{' '}
            <p className='font-medium text-xl'>+234 816 469 8085</p>
            <p className='font-medium text-xl'>+234 808 864 1689</p>
          </div>
        </div>
        <div className='w-full lg:w-fit lg:flex gap-5 items-center'>
          {' '}
          <Image src={email} alt='' className='py-5 w-20' />
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold'>Email Us</h1>{' '}
            <p className='font-medium text-xl'>onpointsynergyltd@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
