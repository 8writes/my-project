/** @format */

'use client'

import Image from 'next/image'
import image5 from '../../../public/images/civil-building.jpg'
import ServicesContent from '@/components/services-content'

const ServicesCivilMechanicalWorks = () => {
  return (
    <div className=''>
      <ServicesContent title='Civil / Mechanical Engineering' image={image5} />
      <h1>Proficiency in Civil Engineering Constructions </h1>
      <p>
        Our company is quite proficient in the field of civil and structural
        construction, and prides itself of a consortium of experts with special
        expertise in concrete and block, structural steel buildings on raft
        foundations/pilings.
      </p>
      <p>
        Construction of new buildings, renovation and maintenance of existing
        structures, including roofing, plumbing, carpentry and painting.
        Construction of new roads/bridges and rehabilitation of old ones.
        Construction of culverts, dykes and jetties.{' '}
      </p>
      <h1>Mechanical Engineering and Constructions</h1>
      <p>
        This includes plant additions, modifications, upgrades and maintenance.
        This department provides prompt services in quality control / assurance
        using accurate and reliable procedures based on international standard,
        system measurements and reporting. You can rely on the expertise and
        experience of the Personnel retained in this section not only carry out
        the tests but give intelligent interpretation of results using accurate
        and reliable procedure to meet international standard of reporting.
      </p>
    </div>
  )
}

export default ServicesCivilMechanicalWorks
