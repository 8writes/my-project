/** @format */

'use client'

import Image from 'next/image'
import Link from 'next/link'
import mail from '../../public/images/mail.png'

const ContactBanner = () => {
  return (
    <div className='relative'>
      <div className='absolute -bottom-14 w-full text-xl md:text-2xl flex font-semibold flex-wrap justify-between lg:px-20 '>
        <div className='flex text-white rounded-lg flex-wrap w-full justify-between'>
          <h1 className='flex-1 text-2xl text-center p-5 lg:p-10 lg:px-10 lg:py-10 bg-blue-600'>
            Business Enquiries and Consultations :
          </h1>
          <Link
            href='mailto:onpointsynergyltd@gmail.com'
            className='group flex flex-wrap items-center justify-center gap-2 md:gap-5 flex-1 py-10 px-2 lg:px-10 lg:py-0 transition-all text-center lg:hover:bg-blue-600 lg:hover:drop-shadow-2xl bg-blue-500'>
            {' '}
            <Image
              src={mail}
                          alt=''
                          width={30}
                          height={30}
              className='group-hover:-rotate-6 lg:-translate-x-1 lg:group-hover:translate-x-1 transition-all'
            />
            <p className='text-xl'>onpointsynergyltd@gmail.com</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
