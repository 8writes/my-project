/** @format */

'use client'

import PagesHeader from '@/components/pages-header'
import Image from 'next/image'
import ceo from '../../../public/images/ceo.jpg'
import chairman from '../../../public/images/chairman.jpg'
import edbd from '../../../public/images/female-staff.jpg'
import BoardCard from '@/components/board-card'

const BoardOfDirectors = () => {
  return (
    <div className='bg-white py-16 lg:pt-20'>
      <PagesHeader title='Board Of Directors' />
      <div className='pb-40'>
        <div className='p-5 flex justify-center  lg:px-20 pb-24 '>
          <BoardCard
            imageSrc={ceo}
            name='MR IBEGBUNEM ANIEMEKE LAWSON'
            title='Chief Executive Officer'
          />
        </div>
        <div className='flex flex-wrap gap-14 justify-center'>
          <BoardCard
            imageSrc={edbd}
            name='DR. MRS ROSEMARY AKUDO LAWSON '
            title='Executive Director Business Development'
          />
          <BoardCard
            imageSrc={chairman}
            name='Alh Khalifa A Jikantoro.  Galadiman Borgu kingdom.'
            title='Chairman'
          />
        </div>
      </div>
    </div>
  )
}

export default BoardOfDirectors
