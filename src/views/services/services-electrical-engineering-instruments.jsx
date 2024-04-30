/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/electrical.jpg'
import ServicesContent from '@/components/services-content'

const ServicesElectricalEngineering = () => {
  return (
    <div className=''>
      <ServicesContent
        title='ELECTRICAL ENGINEERING / instruments'
        image={image5}
      />
    </div>
  )
}

export default ServicesElectricalEngineering
