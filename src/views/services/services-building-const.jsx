/** @format */

'use client'

import Image from 'next/image'
import image from '../../../public/images/building.jpg'
import ServicesContent from '@/components/services-content'

const ServicesBuildingConst = () => {
  return (
    <div className=''>
      <ServicesContent title='Building Construction' image={image} />
    </div>
  )
}

export default ServicesBuildingConst
