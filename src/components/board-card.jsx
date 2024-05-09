/** @format */

import Image from "next/image"

const BoardCard = ({ imageSrc, name, title }) => {
  return (
    <div className='flex justify-center relative pt-2 h-80'>
      <Image src={imageSrc} alt='CEO Image' className=" shadow-xl" width={300} height={250} />
      <div className='absolute -bottom-14 w-72 bg-white p-4 border-blue-500'>
        <h1 className='text-slate-800 font-bold text-xl uppercase'>{name}</h1>
        <p className='text-slate-700 py-2 font-medium'>{title}</p>
      </div>
    </div>
  )
}

export default BoardCard
