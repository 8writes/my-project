/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/road.jpg'
import ServicesContent from '@/components/services-content'

const ServicesRoadConstruction = () => {
  return (
    <div className=''>
      <ServicesContent
        title='ROAD CONSTRUCTION / EROSION CONTROL'
        image={image5}
      />
      <p>
        From the development of robust road networks to the implementation of
        erosion control measures, we deploy advanced methodologies and
        sustainable practices to deliver infrastructure solutions that stand the
        test of time.
      </p>
    </div>
  )
}

export default ServicesRoadConstruction
