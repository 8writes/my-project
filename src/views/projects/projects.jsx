/** @format */

'use client'
import ProjectCard from '@/components/projects-content'
import image1 from '../../../public/images/dam-constuction.jpg'
import image2 from '../../../public/images/reconstroction.jpg'
import image3 from '../../../public/images/renovation.jpg'
import PagesHeader from '@/components/pages-header'

const Projects = () => {
  return (
    <div className='min-h-screen projects-page bg-white pt-16 lg:pt-20'>
      <PagesHeader title='Projects' />
      <div className='flex px-5 lg:px-24 flex-wrap pt-10 pb-56 lg:pt-20 lg:pb-32 w-full'>
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

export default Projects
