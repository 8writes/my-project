/** @format */

'use client'

import Image from 'next/image'
import image from '../../../public/images/img-1.jpg'

const AboutUs = () => {
  return (
    <div className='bg-white p-5 lg:p-20'>
      <div className='flex flex-wrap py-20 gap-10 relative '>
        <div className=' lg:flex-1 w-full lg:w-fit'>
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
            ON-POINT DYNAMICS SYNERGY LIMITED provides general contracting, oil
            and gas services, construction management, and pre-engineered metal
            buildings services to a broad range of commercial and industrial
            clients throughout Nigeria. <br /> Anchored by loyal employees who
            are dedicated to providing superior service, and grounded in the
            philosophy that honesty and integrity are as important as the bottom
            line.
          </p>

          <p className='text-slate-800 text-sm leading-loose tracking-wider font-medium'>
            ON-POINT DYNAMICS SYNERGY LIMITED has enjoyed an impeccable
            reputation for over 8 years. We have never failed to complete a
            project and have never had a bond claim. Schedules and budgets are
            meant to be kept, and we strive every day to do so. <br />{' '}
            <span className='py-5 block'>
              ON-POINT DYNAMICS SYNERGY LIMITED has the ability to self-perform
              many aspects of a construction project, and the financial strength
              of the entire organization ensures each client of our ability to
              always perform – from ground breaking to ribbon cutting, and just
              as important, though the warranty period. Ultimately, our success
              in this business is measured one project at a time. After the
              completion of each project we undertake, there must remain a
              satisfied client – one who will ask us back for the next project
              and recommend us to others. We simply try harder, and the result
              speak for themselves – give us a call if we can help you with your
              next project.
            </span>
          </p>
        </div>
        <div className='flex-1 '>
          <div className='lg:sticky lg:top-36'>
            <Image src={image} alt='' style={{ height: '30rem' }} />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-10 lg:gap-14 pb-32 lg:pb-10'>
        <div className='w-full lg:w-fit lg:flex-1'>
          <h1 className='text-2xl pt-10 pb-5 font-semibold uppercase text-blue-500'>
            Company profile
          </h1>
          <p className='text-slate-800 py-4 text-sm leading-relaxed tracking-wider font-medium'>
            Our company began in 2015 with the construction of electrical
            distribution network within Nigeria mostly for NIGER DELTA POWER
            HOLDING COMPANY and RURAL ELECTRIFICATION AGENCY in Delta, Anambra,
            Abia, and Kogi state Nigeria. Today, ON-POINT DYNAMICS SYNERGY
            LIMITED is one of the most trusted construction companies in
            Nigeria. Under the current leadership of the present Management,
            hardworking principles continue to make ON-POINT an award-winning
            general contractor specializing in multi-family, commercial,
            institutional, municipal, and historic renovation construction.
          </p>
        </div>
        <div className='w-full lg:flex-1 pb-20'>
          <h1 className='text-2xl pt-10 pb-5 font-semibold uppercase text-blue-500'>
            Our Vision
          </h1>
          <p className='text-slate-800 text-sm leading-loose tracking-wider font-medium'>
            To be the top civil and electrical engineering company in Nigeria,
            delivering superior quality service, geared towards customer
            satisfaction.
          </p>
          <h1 className='text-2xl pt-10 pb-5 font-semibold uppercase text-blue-500'>
            Our Mission
          </h1>
          <p className='text-slate-800 text-sm leading-loose tracking-wider font-medium'>
            To ensure that customers' construction needs and demands are met
            through the most accessible and affordable way that creates,
            captures, and sustains value of all stakeholders.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
