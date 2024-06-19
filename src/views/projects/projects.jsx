/** @format */

'use client'

import { motion } from 'framer-motion'

import ProjectCard from '@/components/projects-content'
import image1 from '../../../public/images/dam-constuction.jpg'
import image2 from '../../../public/images/reconstroction.jpg'
import image3 from '../../../public/images/renovation.jpg'
import PagesHeader from '@/components/pages-header'

import images3_1 from '../../../public/projects/IMG-20240418-WA0071.jpg'
import images3_2 from '../../../public/projects/IMG-20240418-WA0072.jpg'
import images3_3 from '../../../public/projects/IMG-20240418-WA0073.jpg'
import images3_4 from '../../../public/projects/IMG-20240418-WA0074.jpg'
import images3_5 from '../../../public/projects/IMG-20240418-WA0075.jpg'
import images3_6 from '../../../public/projects/IMG-20240418-WA0076.jpg'
import images3_7 from '../../../public/projects/IMG-20240418-WA0087.jpg'
import images3_8 from '../../../public/projects/IMG-20240418-WA0077.jpg'

import images2_1 from '../../../public/projects/IMG-20240418-WA0079.jpg'
import images2_2 from '../../../public/projects/IMG-20240418-WA0080.jpg'
import images2_3 from '../../../public/projects/IMG-20240418-WA0081.jpg'
import images2_4 from '../../../public/projects/IMG-20240418-WA0082.jpg'
import images2_5 from '../../../public/projects/IMG-20240418-WA0083.jpg'
import images2_7 from '../../../public/projects/IMG-20240418-WA0085.jpg'

import images1_1 from '../../../public/projects/IMG-20240418-WA0089.jpg'
import images1_2 from '../../../public/projects/IMG-20240418-WA0090.jpg'
import images1_3 from '../../../public/projects/IMG-20240418-WA0091.jpg'
import images1_4 from '../../../public/projects/IMG-20240418-WA0092.jpg'
import images1_5 from '../../../public/projects/IMG-20240418-WA0093.jpg'
import images1_6 from '../../../public/projects/IMG-20240418-WA0094.jpg'
import images1_7 from '../../../public/projects/IMG-20240418-WA0095.jpg'

const Projects = () => {
 const images1 = [
   images1_1,
   images1_2,
   images1_3,
   images1_4,
   images1_5,
   images1_6,
   images1_7,
 ]
 const images2 = [
   images2_1,
   images2_2,
   images2_3,
   images2_4,
   images2_5,
   images2_7,
 ]
 const images3 = [
   images3_1,
   images3_2,
   images3_3,
   images3_4,
   images3_5,
   images3_6,
   images3_7,
   images3_8,
 ]
  return (
    <div className='min-h-screen projects-page bg-white pt-16 lg:pt-20'>
      <PagesHeader title='Projects' />
      <div className='flex px-5 lg:px-24 flex-wrap pt-10 pb-56 lg:pt-20 lg:pb-32 w-full'>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='w-full lg:hover:border-l-8 lg:hover:border-blue-500 transition-all ease-in-out lg:flex-1 relative group'>
          <ProjectCard
            imageSrc={image1}
            projectDescription='Retaining work project for Niger Delta Power Holding Company at Omotosho Power plant, Ondo State.'
            buttonText='View Project'
            images={images1}
          />
        </motion.div>
        <motion.div
          initial={{ y: 55 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='w-full lg:hover:border-l-8 lg:hover:border-blue-500 transition-all ease-in-out lg:flex-1 relative group'>
          <ProjectCard
            imageSrc={image2}
            projectDescription='Steam turbine roofing for Niger Delta Power Holding Company at
              olorunshogo Power plant Ogun State.'
            buttonText='View Project'
            images={images2}
          />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='w-full lg:hover:border-l-8 lg:hover:border-blue-500 transition-all ease-in-out lg:flex-1 relative group'>
          <ProjectCard
            imageSrc={image3}
            projectDescription='renovation project for Niger Delta Power Holding Company at
              Gbarain Bayelsa state.'
            buttonText='View Project'
            images={images3}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
