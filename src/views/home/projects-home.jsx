/** @format */

'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import image1 from '../../../public/images/dam-constuction.jpg'
import image2 from '../../../public/images/reconstroction.jpg'
import image3 from '../../../public/images/renovation.jpg'

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
        <motion.div
          key={`first-div-${1}`}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
          }}
          className='w-full lg:hover:border-l-8 lg:hover:border-blue-500 transition-all ease-in-out lg:flex-1 relative group '>
          <Image
            src={image1}
            loading='lazy'
            alt=''
            className='filter brightness-50  lg:group-hover:brightness-50  lg:brightness-75 transition-all'
          />
          <div className='absolute top-36 lg:top-60 px-2 md:px-4'>
            <h1 className='lg:group-hover:-translate-y-10 lg:translate-y-10 pb-10 lg:pb-0 delay-100 ease-in-out lg:group-hover:text-white transition-all  lg:text-transparent text-white font-bold text-base md:text-xl uppercase'>
              retaining work project for Niger Delta Power Holding Company at
              omotosho Power plant Ondo State.
            </h1>
            <div className=' w-32 h-1 bg-blue-400 lg:bg-transparent transition-all'></div>
            <button className='text-white  mt-16 uppercase my-5 w-full text-base lg:opacity-0 lg:group-hover:-translate-y-2 lg:translate-y-10 lg:group-hover:opacity-100 border-2 border-white p-1  transition-all'>
              View Project
            </button>
          </div>
        </motion.div>
        <motion.div
          key={`first-div-${2}`}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className='w-full lg:hover:border-l-8 lg:hover:border-blue-500 transition-all ease-in-out lg:flex-1 relative group '>
          <Image
            src={image2}
            loading='eager'
            alt=''
            className='filter brightness-50  lg:group-hover:brightness-50  lg:brightness-75 transition-all'
          />
          <div className='absolute top-36 lg:top-60 px-2 md:px-4'>
            <h1 className='lg:group-hover:-translate-y-10 delay-100  pb-10 lg:pb-0 ease-in-out lg:group-hover:text-white transition-all lg:translate-y-10 lg:text-transparent text-white font-bold text-base md:text-xl uppercase'>
              steam turbine roofing for Niger Delta Power Holding Company at
              olorunshogo Power plant Ogun State.
            </h1>
            <div className=' w-32 h-1 bg-blue-400 lg:bg-transparent transition-all'></div>
            <button className='text-white  mt-16 uppercase w-full my-5 text-base lg:opacity-0 lg:group-hover:-translate-y-2 lg:translate-y-10 lg:group-hover:opacity-100 border-2 border-white p-1  transition-all'>
              View Project
            </button>
          </div>
        </motion.div>
        <motion.div
          key={`first-div-${3}`}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
          className='w-full lg:hover:border-l-8 lg:hover:border-blue-500 transition-all ease-in-out lg:flex-1  relative group '>
          <Image
            src={image3}
            alt=''
            loading='lazy'
            className='filter brightness-50  lg:group-hover:brightness-50  lg:brightness-75 transition-all'
          />
          <div className='absolute top-36 lg:top-60 px-2 md:px-4'>
            <h1 className='lg:group-hover:-translate-y-10 delay-100  pb-10 lg:pb-0 ease-in-out lg:group-hover:text-white transition-all lg:translate-y-10 lg:text-transparent text-white font-bold text-base md:text-xl uppercase'>
              renovation project for Niger Delta Power Holding Company at
              Gbarain Bayelsa state.
            </h1>
            <div className=' w-32 h-1 bg-blue-400 lg:bg-transparent transition-all'></div>
            <button className='text-white mt-16 uppercase w-full my-5 text-base lg:opacity-0 lg:group-hover:-translate-y-2 lg:translate-y-10 lg:group-hover:opacity-100 border-2 border-white p-1 transition-all'>
              View Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsHome
