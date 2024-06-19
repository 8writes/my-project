/** @format */

import Image from 'next/image' // assuming you're using Next.js for images
import { motion } from 'framer-motion'
import Dialog from '@mui/material/Dialog'
import { useEffect, useState } from 'react'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import closeMenu from '../../public/images/close.svg'

const ProjectCard = ({ imageSrc, projectDescription, buttonText, images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    setHasAnimated(true)
  }, [])

  return (
    <>
      <div
        key={`project-card-${Math.random()}`} // Use a random key to ensure proper animation re-renders
      >
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
          <button
            onClick={openDialog}
            className='text-white mt-16 uppercase my-5 w-full text-base lg:opacity-0 lg:group-hover:-translate-y-2 lg:translate-y-10 lg:group-hover:opacity-100 border-2 border-white p-1 transition-all'>
            {buttonText}
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onClose={closeDialog} maxWidth='lg' fullWidth>
        <div className='relative'>
          <button className='absolute bg-slate-300 z-10 top-4 right-4 '>
            <Image
              onClick={closeDialog}
              src={closeMenu}
              alt='Close Icon'
              width={40}
              loading='eager'
            />
          </button>

          <div className='flex relative items-center justify-center '>
            <ArrowBackIos
              className='cursor-pointer absolute text-white left-0 mx-2'
              onClick={prevImage}
              fontSize='large'
            />
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className=' h-96 md:h-screen w-screen'
              />
            </motion.div>
            <ArrowForwardIos
              className='cursor-pointer absolute text-white right-0'
              onClick={nextImage}
              fontSize='large'
            />
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProjectCard
