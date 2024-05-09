/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/img-1.jpg'
import ServicesContent from '@/components/services-content'
import PagesHeader from '@/components/pages-header'

const ServicesGeneralProcurement = () => {
  return (
    <div className='pt-16 lg:pt-20'>
      <PagesHeader title='General Procurement' />
      <ServicesContent image={image5}>
        <p className='text-slate-800 pb-2 leading-9 tracking-wide'>
          Our general procurement services provide comprehensive solutions to
          streamline the sourcing and acquisition processes for businesses
          across various industries. From sourcing raw materials and components
          to procuring goods and services, we leverage our extensive network and
          industry expertise to meet the diverse procurement needs of our
          clients. <br /> Our services encompass vendor management, contract
          negotiation, and strategic sourcing to optimize supply chain
          efficiency and cost-effectiveness. Whether it's identifying reliable
          suppliers, negotiating favorable terms, or ensuring timely delivery,
          we are committed to delivering value-driven procurement solutions that
          enhance operational performance and drive business growth. With a
          focus on transparency, integrity, and customer satisfaction, we strive
          to be the trusted partner for all your procurement requirements.
        </p>
      </ServicesContent>
    </div>
  )
}

export default ServicesGeneralProcurement
