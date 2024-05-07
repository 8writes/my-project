/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/img-3.jpg'
import ServicesContent from '@/components/services-content'

const OilAndGas = () => {
  return (
    <div className=''>
      <ServicesContent title='Oil And Gas' image={image5} />
    </div>
  )
}

export default OilAndGas
