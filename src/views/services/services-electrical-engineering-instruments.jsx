/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/electrical.jpg'
import image2 from '../../../public/images/instrument.jpg'
import ServicesContent from '@/components/services-content'

const ServicesElectricalEngineering = () => {
  return (
    <div className=''>
      <ServicesContent
        title='ELECTRICAL ENGINEERING / instruments'
        image={image5}>
        <p className='text-slate-800 pb-2 leading-relaxed tracking-wide'>
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}
          considers itself a pioneer in the Nigerian Power industry. We pride
          ourselves as being one of the best companies involved in urban
          electrification in Nigeria.
        </p>
        <div className='py-2'>
          <p className='text-blue-500 font-semibold pb-2 leading-relaxed tracking-wide'>
            Construction, installation and maintenance of electrical /
            instrumentation equipment.
          </p>
          <Image src={image2} alt='' />
          <p className='text-sm text-slate-500 text-center'>
            Electrical/Instrument
          </p>
        </div>
        <p className='text-slate-800 pt-5 pb-2 leading-relaxed tracking-wide'>
          Following Nigeria’s push for consistent Energy supply and the passing
          of the Power Reform Act in 2005,{' '} <br />
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}<br />
          has been increasing its portfolio of renewable energy technologies and
          services to match the growing need for alternative energy sources. As
          a technology provider partnering with World Class Performers from
          Germany{' '}
          <span className='text-orange-500 font-semibold'>
            (Hoppecke batterien){' '}
          </span>{' '}
          , and in line with its goal of promoting industrialization and driving
          positive economic growth,{' '}<br/>
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}
          identified an opportunity to provide electric power to customers in
          various states. Port Harcourt is a major commercial centre in South
          Eastern Nigeria, and the supply of electric power to the town is
          grossly inadequate to serve the needs of consumers.{' '}
        </p>
        <p className='text-slate-800 pb-2 leading-relaxed tracking-wide'>
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}
          has found a solution to this imbalance with a combination of power
          generation and distribution projects, collectively referred to as the
          Integrated Power Project(IPP).
        </p>
        <p className='text-slate-800 pb-2 leading-relaxed tracking-wide'>
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}
          is determined to play a leading role in the emerging private sector,
          post- privatisation energy market in Nigeria and to expand beyond the
          Nigerian market to other countries.{' '} <br />
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}
          is poised to play a pivotal role in the Nigerian coal-to-power sector.
        </p>
      </ServicesContent>
    </div>
  )
}

export default ServicesElectricalEngineering
