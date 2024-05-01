/** @format */

'use client'

import Image from 'next/image'
import image from '../../../public/images/borehole.jpg'
import ServicesContent from '@/components/services-content'

const ServicesBorehole = () => {
  return (
    <div className=''>
      <ServicesContent title='BOREHOLE DRILLING' image={image}>
        <h1 className='text-blue-500 pb-2 font-semibold uppercase'>
          BOREHOLE DRILLING SERVICES.
        </h1>
        <ol className='text-slate-800 list-decimal ml-5 leading-relaxed tracking-wide'>
          <li>Supervision of Drilling Operations.</li>
          <li>Cashing Design.</li>
          <li>Cement System design.</li>
          <li>Underground or surface steel tank reservoirs.</li>
          <li>Elevated steel tank reservoirs.</li>
          <li>Pumping Equipment.</li>
          <li>Logging and logging Analysis.</li>
        </ol>
        <h1 className='text-blue-500 py-2 font-semibold uppercase'>
          MANAGEMENT.
        </h1>
        <ol className='text-slate-800 list-decimal ml-5 leading-relaxed tracking-wide'>
          <li>Supervision and Maintenance of wells and rigs.</li>
          <li>Development of Prospects and properties.</li>
          <li>Servicing and maintenance of Pumping.</li>
        </ol>
        <p className='text-slate-800 pt-5 pb-2 leading-relaxed tracking-wide'>
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}
          since inception has participated in the provision of mechanized bored
          wells in a number of states in some States and parastatals.
        </p>
        <p className='text-slate-800 py-2 leading-relaxed tracking-wide'>
          <span className='text-blue-500 font-semibold'>
            ON-POINT DYNAMICS SYNERGY LIMITED
          </span>{' '}
          is a specialist in drilling or boreholes constructions, treatment and
          water distribution network, support equipment and completion equipment
          including surface pipe, tank separators down-hole equipment, water
          flooding, pumping units, motors and other specialties. We also
          specialize in designing and supervising the construction of drilling
          rigs and platforms.
        </p>
      </ServicesContent>
    </div>
  )
}

export default ServicesBorehole
