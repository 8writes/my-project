/** @format */

import Image from 'next/image' // assuming you're using Next.js for images
import { motion, AnimatePresence } from 'framer-motion'
import Dialog from '@mui/material/Dialog'
import { useState } from 'react'

const ProjectCard = ({ imageSrc, projectDescription, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        key={`project-card-${Math.random()}`} // Use a random key to ensure proper animation re-renders
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
        }}
        className='w-full lg:hover:border-l-8 lg:hover:border-blue-500 transition-all ease-in-out lg:flex-1 relative group'>
        <Image
          src={imageSrc}
          loading='lazy'
          alt=''
          className='filter brightness-50 lg:group-hover:brightness-50 lg:brightness-75 transition-all'
        />
        <div className='absolute top-36 lg:top-60 px-2 md:px-4'>
          <h1 className='lg:group-hover:-translate-y-10 lg:translate-y-10 pb-10 lg:pb-0 delay-100 ease-in-out lg:group-hover:text-white transition-all lg:text-transparent text-white font-bold text-base md:text-xl uppercase'>
            {projectDescription}
          </h1>
          <div className='w-32 h-1 bg-blue-400 lg:bg-transparent transition-all'></div>
          <button className='text-white mt-16 uppercase my-5 w-full text-base lg:opacity-0 lg:group-hover:-translate-y-2 lg:translate-y-10 lg:group-hover:opacity-100 border-2 border-white p-1 transition-all'>
            {buttonText}
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectCard
