/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/civil-building.jpg'
import ServicesContent from '@/components/services-content'

const ServicesCivilMechanicalWorks = () => {
  return (
    <div className=''>
      <ServicesContent title='Civil / Mechanical Engineering' image={image5} />
    </div>
  )
}

export default ServicesCivilMechanicalWorks
