/** @format */

'use client'

import Image from 'next/image'
import image from '../../../public/images/building.jpg'
import ServicesContent from '@/components/services-content'

const ServicesBuildingConst = () => {
  return (
    <div className=''>
      <ServicesContent title='Building Construction' image={image}>
        <ol className='text-slate-800 ml-5 pb-2 list-decimal leading-9 tracking-wide'>
          <li>
            <h3 className='text-xl font-medium text-blue-500 leading-9'>
              Residential Construction
            </h3>
            <p>
              We specialize in crafting custom residential properties tailored
              to your unique vision and lifestyle. From luxurious estates to
              cozy family homes, we bring your dream residence to life with
              precision and attention to detail. Our team ensures that every
              aspect of your home reflects your taste and fulfills your
              practical needs, from architectural design to interior finishes.
            </p>
          </li>
          <li>
            <h3 className='text-xl font-medium text-blue-500 leading-9'>
              Commercial Construction
            </h3>
            <p>
              Our expertise also encompasses the creation of sophisticated
              commercial buildings that inspire innovation and productivity.
              Whether you require office space, retail establishments, or
              mixed-use developments, we deliver solutions that align with your
              business objectives. From concept to completion, we prioritize
              functionality, aesthetics, and sustainability to enhance your
              commercial property's value and appeal.
            </p>
          </li>
          <li>
            <h3 className='text-xl font-medium text-blue-500 leading-9'>
              Quality Assurance
            </h3>
            <p>
              At every stage of the construction process, we uphold the highest
              standards of quality craftsmanship. Our experienced professionals
              employ advanced techniques and premium materials to ensure the
              durability, longevity, and integrity of each structure we build.
              From foundation to finishing touches, we adhere to stringent
              quality control measures to exceed your expectations.
            </p>
          </li>
          <li>
            <h3 className='text-xl font-medium text-blue-500 leading-9'>
              Efficiency Optimization
            </h3>
            <p>
              We recognize the importance of timely project delivery and
              cost-effective solutions. Through meticulous planning, streamlined
              workflows, and efficient resource management, we optimize the
              construction process to minimize delays and expenses without
              compromising quality. Our commitment to efficiency ensures that
              your project is completed on schedule and within budget.
            </p>
          </li>
          <li>
            <h3 className='text-xl font-medium text-blue-500 leading-9'>
              Safety Standards
            </h3>
            <p>
              Safety is paramount in everything we do. We prioritize the
              well-being of our team members, subcontractors, and stakeholders
              by implementing comprehensive safety protocols and adhering to
              industry regulations. From site inspections to employee training,
              we maintain a culture of safety awareness to mitigate risks and
              prevent accidents, creating a secure environment for everyone
              involved in the construction process.
            </p>
          </li>
        </ol>
        <p className='text-slate-800 pt-5 pb-2 leading-9 tracking-wide'>
          In summary, whether you envision a personalized residential retreat or
          a cutting-edge commercial hub, our comprehensive services encompass
          design, construction, and project management, all driven by a
          dedication to quality, efficiency, and safety. We are committed to
          bringing your architectural aspirations to fruition while exceeding
          your expectations every step of the way.
        </p>
      </ServicesContent>
    </div>
  )
}

export default ServicesBuildingConst
