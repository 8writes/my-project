/** @format */

'use client'

import Link from 'next/link'

const ProjectsBtn = () => {
  return (
    <div className='services-btn flex justify-center py-10'>
      <button className='group bg-transparent rounded-md text-white uppercase border-2 border-blue-500 scale-95 transition-all font-medium shadow-2xl py-2 w-5/6 md:w-1/4 md:text-xl'>
        <Link href='projects' className='flex items-center justify-center'>
          View All Projects
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 group-hover:translate-x-4 ml-1 text-white transition-all'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </Link>
      </button>
    </div>
  )
}

export default ProjectsBtn
