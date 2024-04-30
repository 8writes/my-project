/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/supply-truck.jpg'
import ServicesContent from '@/components/services-content'

const ServicesEquipmentSupplies = () => {
  return (
    <div className=''>
      <ServicesContent title='Equipment Supplies' image={image5} />
    </div>
  )
}

export default ServicesEquipmentSupplies
