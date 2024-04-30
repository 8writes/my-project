/** @format */

'use client'

import Image from 'next/image'
import image1 from '../../../public/images/reconstroction.jpg'
import image2 from '../../../public/images/reconstroction.jpg'
import image3 from '../../../public/images/renovation.jpg'
import image4 from '../../../public/images/electrical.jpg'
import image5 from '../../../public/images/cleaning-shore.jpg'
import ServicesContent from '@/components/services-content'

const ServicesGeneralContracts = () => {
  return (
    <div className=''>
      <ServicesContent title='General Contracts' image={image5} />
    </div>
  )
}

export default ServicesGeneralContracts
