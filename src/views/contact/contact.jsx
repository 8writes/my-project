/** @format */

'use client'

import PagesHeader from '@/components/pages-header'

const Contact = () => {
  return (
    <div className='projects-page pt-16 lg:pt-20'>
      <PagesHeader title='Contact' />
      <div className='font text-slate-700 pb-60 lg:pb-40 px-6 pt-20 flex flex-wrap justify-center gap-20'>
        <div className='w-full lg:w-96'>
          {' '}
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Location</h1>{' '}
            <p className=' tracking-wide font-medium'>
              <span className='font-semibold'> Head Office:</span> 132 Woji Road
              GRA Phase II, Port Harcourt, Rivers State. <br />
              <span className='font-semibold'>Branch:</span> Suite 109, 6 Sapele
              Street, Off Ladoke Akinlola Boulevard, Garki 2, Abuja
            </p>
          </div>
        </div>
        <div className='w-full lg:w-fit'>
          {' '}
          <div className='flex flex-col gap-4 justify-start'>
            <h1 className='text-xl font-semibold'>Call Center</h1>{' '}
            <p>+234 816 469 8085</p>
          </div>
        </div>
        <div className='w-full lg:w-fit'>
          {' '}
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Email Us</h1>{' '}
            <p>onpointsynergyltd@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
