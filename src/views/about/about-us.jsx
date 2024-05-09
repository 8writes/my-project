/** @format */

'use client'

import Image from 'next/image'
import image from '../../../public/images/img-1.jpg'
import PagesHeader from '@/components/pages-header'

const AboutUs = () => {
  return (
    <div className='bg-white pt-16 lg:pt-20'>
      <PagesHeader title='Company History' />
      <div className='p-5 lg:px-20'>
        <div className='flex flex-wrap py-20 gap-10 relative '>
          <div className=' lg:flex-1 lg:ml-5 w-full lg:w-fit'>
            <p className='uppercase text-blue-500 font-bold text-base tracking-wide pb-5'>
              Who we are
            </p>
            <div className='w-32 h-1 bg-blue-400'></div>
            <h1 className='text-3xl md:text-5xl uppercase py-10 text-blue-500 font-extrabold'>
              ON-PO𝕀NT DYNAMICS SYNERGY History.
            </h1>
            <p className='text-slate-800 text-sm leading-loose tracking-wider font-medium'>
              Founded in 2015 with Registration Number 1260047.
            </p>
            <p className='text-slate-800 py-4 text-sm leading-relaxed tracking-wider font-medium'>
              ON-POINT DYNAMICS SYNERGY LIMITED provides general contracting,
              oil and gas services, construction management, and pre-engineered
              metal buildings services to a broad range of commercial and
              industrial clients throughout Nigeria. <br /> Anchored by loyal
              employees who are dedicated to providing superior service, and
              grounded in the philosophy that honesty and integrity are as
              important as the bottom line.
            </p>

            <p className='text-slate-800 text-sm leading-loose tracking-wider font-medium'>
              ON-POINT DYNAMICS SYNERGY LIMITED has enjoyed an impeccable
              reputation for over 8 years. We have never failed to complete a
              project and have never had a bond claim. Schedules and budgets are
              meant to be kept, and we strive every day to do so. <br />{' '}
              <span className='py-5 block'>
                ON-POINT DYNAMICS SYNERGY LIMITED has the ability to
                self-perform many aspects of a construction project, and the
                financial strength of the entire organization ensures each
                client of our ability to always perform – from ground breaking
                to ribbon cutting, and just as important, though the warranty
                period. Ultimately, our success in this business is measured one
                project at a time. After the completion of each project we
                undertake, there must remain a satisfied client – one who will
                ask us back for the next project and recommend us to others. We
                simply try harder, and the result speak for themselves – give us
                a call if we can help you with your next project.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
