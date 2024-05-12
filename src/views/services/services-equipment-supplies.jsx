/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/supply-truck.jpg'
import ServicesContent from '@/components/services-content'
import PagesHeader from '@/components/pages-header'

const ServicesEquipmentSupplies = () => {
  return (
    <div className='pt-16 lg:pt-20'>
      <PagesHeader title='Equipments Supplies' />
      <ServicesContent image={image5}>
        <ol className='text-slate-700 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Product Sourcing: Finding and selecting construction materials &
            equipments from reliable suppliers.
          </li>
          <li>
            Inventory Management: Keeping track of available materials and
            restocking as needed.
          </li>
          <li>
            Order Processing: Taking and fulfilling customer orders for
            materials.
          </li>
          <li>
            Delivery and Logistics: Organizing and ensuring timely delivery of
            materials to construction sites.
          </li>
          <li>
            Customer Support: Providing assistance and guidance with material
            selection and usage.
          </li>
          <li>
            Customization Options: Providing tailored solutions for specific
            project requirements.
          </li>
          <li>
            Consulting Services: Advising customers on material options and best
            practices for construction projects.
          </li>
        </ol>
      </ServicesContent>
    </div>
  )
}

export default ServicesEquipmentSupplies
