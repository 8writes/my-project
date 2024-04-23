/** @format */

'use client'

import { motion } from 'framer-motion'

const dummyServices = [
  { title: 'Service 1', description: 'Description for Service 1' },
  { title: 'Service 2', description: 'Description for Service 2' },
  { title: 'Service 3', description: 'Description for Service 3' },
]

const Projects = () => {
  return (
    <div className='services relative overflow-hidden min-h-screen'>
      <div className='flex p-5 md:p-14 lg:p-16 gap-10 w-full bg-white min-h-screen'>
        <div className=' w-2/4'>
          <h1 className='text-7xl pl-20 text-blue-500 font-extrabold '>
            ON-PO𝕀NT DYNAMICS SYNERGY.
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              damping: 9,
            }}
            className='services-text text-slate-800 pl-20 pt-14 font-medium text-base tracking-wide md:text-base'>
            At ON-PO𝕀NT DYNAMICS SYNERGY, we ensure that customers’ construction
            needs and demands are met through the most accessible and affordable
            way that creates, captures and sustains value of all stakeholders.
          </motion.p>
        </div>
        <div>
          <div className='card w-2/4' id='cards'>
            {dummyServices.map((service, index) => (
              <motion.div key={index} className='card__content '>
                <h2 className='text-2xl font-bold'>{service.title}</h2>
                <p className='text-gray-600'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
