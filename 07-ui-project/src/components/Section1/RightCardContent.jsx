import React from 'react'
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
         <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold'>{props.id}</h2>
         <div>
            <p className='text-xl leading-7 text-white   '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, impedit perferendis incidunt rem facere distinctio!</p>
         </div>
         <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><ArrowRight size={22}/></button>
            </div>
      </div>
  )
}

export default RightCardContent
