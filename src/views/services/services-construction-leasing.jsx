/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/heavy-truck.jpg'
import ServicesContent from '@/components/services-content'

const ServicesConstructionMaterialsLeasing = () => {
  return (
    <div className=''>
      <ServicesContent
        title='CONSTRUCTION MATERIALS / HEAVY DUTY EQUIPMENT LEASING'
        image={image5}
      />
    </div>
  )
}

export default ServicesConstructionMaterialsLeasing
