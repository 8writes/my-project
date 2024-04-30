/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/img-1.jpg'
import ServicesContent from '@/components/services-content'

const ServicesGeneralProcurement = () => {
  return (
    <div className=''>
      <ServicesContent title='General Procurement' image={image5} />
    </div>
  )
}

export default ServicesGeneralProcurement
