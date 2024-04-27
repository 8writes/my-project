/** @format */

'use client'

import Image from 'next/image'

import image1 from '../../../public/images/dam-constuction.jpg'
import image2 from '../../../public/images/reconstroction.jpg'
import image3 from '../../../public/images/estate.jpg'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='projects relative justify-center flex bg-white lg:px-16 px-5'>
      <div className='absolute -top-10 z-10 shadow-2xl py-5 px-16 bg-blue-500'>
        <h1 className='text-4xl uppercase text-white font-semibold'>Projects</h1>
      </div>
      <div className='flex flex-wrap w-full'>
        <div className='w-full lg:flex-1 relative group '>
          <Image
            src={image1}
            alt=''
            className='filter brightness-50  lg:group-hover:brightness-50  lg:brightness-75 transition-all'
          />
          <div className='absolute top-60 px-4'>
            <h1 className='lg:group-hover:-translate-y-10 delay-100 ease-in-out lg:group-hover:text-white transition-all lg:translate-y-10 lg:text-transparent text-white font-bold md:py-10 text-xl md:text-2xl uppercase'>
              Fencing for Niger Delta Power Holding Company designated staff
              estate Gbarain Power Station Bayelsa.
            </h1>
          </div>
        </div>
        <div className='w-full lg:flex-1  relative group '>
          <Image
            src={image2}
            alt=''
            className='filter brightness-50  lg:group-hover:brightness-50  lg:brightness-75 transition-all'
          />
          <div className='absolute top-60 px-4'>
            <h1 className='lg:group-hover:-translate-y-10 delay-100 ease-in-out lg:group-hover:text-white transition-all lg:translate-y-10 lg:text-transparent text-white font-bold md:py-10 text-xl md:text-2xl uppercase'>
              Fencing for Niger Delta Power Holding Company designated staff
              estate Gbarain Power Station Bayelsa.
            </h1>
          </div>
        </div>
        <div className='w-full lg:flex-1  relative group '>
          <Image
            src={image3}
            alt=''
            className='filter brightness-50  lg:group-hover:brightness-50  lg:brightness-75 transition-all'
          />
          <div className='absolute top-60 px-4'>
            <h1 className='group-hover:-translate-y-10 delay-100 ease-in-out group-hover:text-white transition-all lg:translate-y-10 lg:text-transparent text-white font-bold md:py-10 text-xl md:text-2xl uppercase'>
              Fencing for Niger Delta Power Holding Company designated staff
              estate Gbarain Power Station Bayelsa.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
