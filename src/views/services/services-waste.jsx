/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/cleaning-shore.jpg'
import arrow from '../../../public/images/arrow-square-out-bold-svgrepo-com.svg'
import ServicesContent from '@/components/services-content'
import Link from 'next/link'
import PagesHeader from '@/components/pages-header'

const ServicesWaste = () => {
  return (
    <div className='pt-16 lg:pt-20'>
      <PagesHeader title='WASTE MANAGEMENT' />
      <ServicesContent image={image5}>
        <p className='text-slate-700 pb-2 leading-9 tracking-wide'>
          Our expertise extends to the management of hazardous and biohazardous
          waste, ensuring safe handling and proper disposal in accordance with
          industry standards. Recognizing the importance of specialized sectors,
          we also offer dedicated services for oil and gas waste management,
          encompassing the handling, treatment, and recycling of waste generated
          from exploration, production, and refining activities. Additionally,
          our proficiency in water bodies waste management enables us to
          undertake the remediation and restoration of aquatic ecosystems
          impacted by pollution, employing advanced techniques and equipment for
          effective cleanup and rehabilitation. With a commitment to excellence
          and innovation, we strive to deliver comprehensive waste management
          solutions that promote a cleaner, healthier environment for current
          and future generations.
        </p>
        <h2>8. Oil and Gas Waste Management</h2>
        <p className='text-slate-700 pb-2 leading-9 tracking-wide'>
          - Handling and treatment of waste generated from oil and gas
          exploration, production, and refining operations.
        </p>
        <p className='text-slate-700 pb-2 leading-9 tracking-wide'>
          - Recovery and recycling of oil and gas drilling fluids and muds.
        </p>
        <p className='text-slate-700 pb-2 leading-9 tracking-wide'>
          - Disposal of produced water, contaminated soils, and other waste
          streams in compliance with industry regulations.
        </p>

        <h2>9. Water Bodies Waste Management</h2>
        <p className='text-slate-700 pb-2 leading-9 tracking-wide'>
          - Cleanup and remediation of water bodies contaminated with various
          pollutants, including plastics, chemicals, and oil spills.
        </p>
        <p className='text-slate-700 pb-2 leading-9 tracking-wide'>
          - Utilization of specialized equipment such as skimmers, booms, and
          absorbents for water pollution control.
        </p>
        <p className='text-slate-700 pb-2 leading-9 tracking-wide'>
          - Restoration and rehabilitation of aquatic ecosystems affected by
          waste pollution.
        </p>

        <h3 className='text-xl font-medium text-blue-500 leading-9'>
          Technical Partner
        </h3>
        <p className='text-orange-500 pb-2 leading-9 font-semibold uppercase tracking-wide'>
          <Link
            href='https://en.efinorseacleaner.com/'
            target='_blank'
            className='flex items-center gap-2'>
            Efinor Sea Cleaner France
            <Image src={arrow} alt='' className='w-4' />
          </Link>
        </p>
      </ServicesContent>
    </div>
  )
}

export default ServicesWaste
