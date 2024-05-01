/** @format */

'use client'

import { motion } from 'framer-motion'
import image1 from '../../../public/images/dam-constuction.jpg'
import image2 from '../../../public/images/reconstroction.jpg'
import image3 from '../../../public/images/renovation.jpg'
import ProjectCard from '@/components/projects-content'

const ProjectsHome = () => {
  return (
    <div className='projects relative justify-center flex bg-white lg:px-16 px-5'>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
        }}
        className='absolute -top-10 z-10 shadow-2xl py-5 px-16 bg-blue-500'>
        <h1 className='text-2xl md:text-4xl uppercase text-white font-semibold'>
          Projects
        </h1>
      </motion.div>
      <div className='flex flex-wrap w-full'>
        <ProjectCard
          imageSrc={image1}
          projectDescription='Retaining work project for Niger Delta Power Holding Company at Omotosho Power plant, Ondo State.'
          buttonText='View Project'
        />
        <ProjectCard
          imageSrc={image2}
          projectDescription='Steam turbine roofing for Niger Delta Power Holding Company at
              olorunshogo Power plant Ogun State.'
          buttonText='View Project'
        />
        <ProjectCard
          imageSrc={image3}
          projectDescription='renovation project for Niger Delta Power Holding Company at
              Gbarain Bayelsa state.'
          buttonText='View Project'
        />
      </div>
    </div>
  )
}

export default ProjectsHome
