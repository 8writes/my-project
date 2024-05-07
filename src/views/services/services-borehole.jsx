/** @format */

'use client'

import Image from 'next/image'
import image from '../../../public/images/borehole.jpg'
import ServicesContent from '@/components/services-content'

const ServicesBorehole = () => {
  return (
    <div className=''>
      <ServicesContent title='BOREHOLE DRILLING' image={image}>
        <p className='text-slate-800 pb-2 leading-9 tracking-wide leading-9'>
          At On-Point Dynamics Synergy Limited, we recognize that access to
          clean water is not just a luxury but a fundamental necessity for life
          and development. With our unwavering commitment to quality and
          sustainability, we offer a comprehensive range of water borehole
          services to cater to various needs:
        </p>
        <h1 className='text-blue-500 py-2 font-semibold uppercase'>
          Water Borehole Services:
        </h1>
        <ol className='text-slate-800 ml-5 pt-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Our team of experienced hydrogeologists and drilling experts utilize
            state-of-the-art equipment and innovative techniques to locate and
            tap into reliable underground water sources.
          </li>
          <li>
            We conduct thorough site assessments to determine the optimal
            drilling locations, taking into account geological conditions, water
            table depth, and aquifer characteristics.
          </li>
          <li>
            Whether for industrial, agricultural, or domestic purposes, our
            water borehole installations are designed to provide a sustainable
            and dependable water supply, even in the most challenging
            environments.
          </li>
          <li>
            We adhere to stringent quality and safety standards throughout the
            drilling process, ensuring that the water extracted meets regulatory
            requirements and is safe for consumption and use.
          </li>
          <li>
            In addition to borehole drilling, we offer comprehensive water
            management solutions, including pump installation, water treatment,
            and ongoing maintenance services to ensure the long-term reliability
            and efficiency of your water supply system.
          </li>
          <li>
            Our commitment to sustainability extends beyond the drilling
            process, as we actively promote water conservation practices and
            implement strategies to minimize environmental impact and maximize
            resource efficiency.
          </li>
        </ol>
        <p className='text-slate-800 pt-5 pb-2 leading-9 tracking-wide'>
          Partner with On-Point Dynamics Synergy Limited for all your water
          borehole needs and experience the peace of mind that comes with
          knowing you have a reliable and sustainable water supply solution
          tailored to your specific requirements. Let us help you unlock the
          potential of underground water resources and ensure access to clean
          water for generations to come.
        </p>
      </ServicesContent>
    </div>
  )
}

export default ServicesBorehole
