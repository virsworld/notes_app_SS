import React from 'react'
import { notes, nodata } from '../../assets/index'

const EmptyCard = ({ img, message }) => {
  return (
    <div className='flex flex-col items-center jutify-center mt-56'>
      <img src={img === notes ? notes : nodata} alt="No notes" className='w-40' />
      <p
      className='w-1/2 text-sm font-medium text-slate-700 text-center
      leading-7 mt-5'
      >
        {message}
      </p>
    </div>
  )
}

export default EmptyCard
