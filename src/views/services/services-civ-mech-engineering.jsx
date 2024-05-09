/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/civil-building.jpg'
import ServicesContent from '@/components/services-content'
import PagesHeader from '@/components/pages-header'

const ServicesCivilMechanicalWorks = () => {
  return (
    <div className='pt-16 lg:pt-20'>
      <PagesHeader title='Civil / Mechanical Engineering' />
      <ServicesContent image={image5}>
        <h3 className='text-xl font-medium text-blue-500 leading-9'>
          Civil Engineering Services:
        </h3>
        <ol className='text-slate-800 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Structural Engineering: Designing safe and sturdy buildings,
            bridges, and other structures.
          </li>
          <li>
            Transportation Engineering: Planning and designing roads, highways,
            railways, and airports.
          </li>
          <li>
            Geotechnical Engineering: Assessing soil and rock conditions for
            construction projects.
          </li>
          <li>
            Environmental Engineering: Managing waste, controlling pollution,
            and promoting sustainability.
          </li>
          <li>
            Water Resources Engineering: Managing water supply, flood control,
            and wastewater treatment.
          </li>
          <li>
            Construction Engineering: Overseeing construction projects to ensure
            they're completed safely and on schedule.
          </li>
        </ol>

        <h3 className='text-xl font-medium text-blue-500 leading-9'>
          Mechanical Engineering Services:
        </h3>
        <ol className='text-slate-800 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Product Design and Development: Creating new products, from
            household appliances to industrial machinery.
          </li>
          <li>
            Manufacturing and Production: Improving manufacturing processes to
            make products more efficiently.
          </li>
          <li>
            HVAC Systems: Designing heating, ventilation, and air conditioning
            systems for buildings.
          </li>
          <li>
            Energy Systems: Developing sustainable energy solutions like solar
            and wind power.
          </li>
          <li>
            Automotive Engineering: Designing vehicles and their components for
            performance and safety.
          </li>
          <li>
            Robotics and Automation: Creating robotic systems for tasks like
            manufacturing and healthcare.
          </li>
        </ol>
      </ServicesContent>
    </div>
  )
}

export default ServicesCivilMechanicalWorks
