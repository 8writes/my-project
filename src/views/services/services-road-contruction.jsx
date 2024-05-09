/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/road.jpg'
import ServicesContent from '@/components/services-content'
import PagesHeader from '@/components/pages-header'

const ServicesRoadConstruction = () => {
  return (
    <div className='pt-16 lg:pt-20'>
      <PagesHeader title='ROAD CONSTRUCTION' />
      <ServicesContent image={image5}>
        <h3 className='text-xl font-medium text-blue-500 leading-9'>
          Road Construction Services:
        </h3>
        <ol className='text-slate-800 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Road Planning and Design: Our experienced engineers collaborate with
            clients to create customized road designs that meet their needs and
            adhere to environmental standards.
          </li>
          <li>
            Site Preparation: We offer comprehensive site preparation services
            including land clearing, grading, and earthmoving to ensure a strong
            foundation for road construction.
          </li>
          <li>
            Pavement Construction: From asphalt to concrete, gravel, and
            interlocking pavers, we specialize in constructing durable and
            high-quality pavements tailored to our clients' requirements.
          </li>
          <li>
            Drainage Systems: Our team designs and installs efficient drainage
            systems such as culverts, ditches, and stormwater management
            solutions to prevent water damage and erosion.
          </li>
          <li>
            Structures Construction: We have the expertise to build bridges,
            overpasses, underpasses, and retaining walls as integral parts of
            road infrastructure projects.
          </li>
        </ol>

        <h3 className='text-xl font-medium text-blue-500 leading-9'>
          Erosion Control Services:
        </h3>
        <ol className='text-slate-800 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Erosion Assessment: Through detailed site assessments, we identify
            erosion risks and develop personalized erosion control plans to
            mitigate them effectively.
          </li>
          <li>
            Vegetation Management: Utilizing native plants and erosion control
            blankets, we implement vegetation strategies to stabilize soil and
            prevent erosion on slopes and embankments.
          </li>
          <li>
            Sediment Control: We deploy sediment control measures such as silt
            fences, sediment basins, and erosion control mats to contain and
            manage sediment runoff during and after construction activities.
          </li>
          <li>
            Bioengineering Solutions: Our bioengineering solutions, including
            vegetated retaining walls and live staking, leverage natural
            materials and ecological principles to reinforce slopes and control
            erosion in sensitive areas.
          </li>
          <li>
            Hydroseeding and Mulching: We utilize hydroseeding and mulching
            techniques to establish vegetation quickly and effectively,
            providing erosion control while promoting long-term stability and
            biodiversity.
          </li>
        </ol>

        <h3 className='text-xl font-medium text-blue-500 leading-9'>
          Maintenance and Monitoring:
        </h3>
        <ol className='text-slate-800 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Regular Inspections: We conduct routine inspections of roads and
            erosion control measures to identify issues early and implement
            timely maintenance to ensure their continued functionality and
            safety.
          </li>
          <li>
            Maintenance Services: Our maintenance services include pothole
            repair, pavement resurfacing, drainage clearing, and vegetation
            management to uphold the integrity and performance of roads and
            erosion control structures.
          </li>
          <li>
            Erosion Monitoring: We offer monitoring services to assess the
            effectiveness of erosion control measures over time and make
            adjustments as necessary to maintain their performance.
          </li>
        </ol>

        <h3 className='text-xl font-medium text-blue-500 leading-9'>
          Environmental Compliance:
        </h3>
        <ol className='text-slate-800 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            Regulatory Compliance: We ensure that all our road construction and
            erosion control activities comply with relevant environmental
            regulations and permitting requirements.
          </li>
          <li>
            Environmental Impact Mitigation: Our proactive approach minimizes
            the environmental impact of construction projects by implementing
            best practices for erosion control, habitat preservation, and
            pollution prevention.
          </li>
        </ol>
      </ServicesContent>
    </div>
  )
}

export default ServicesRoadConstruction
