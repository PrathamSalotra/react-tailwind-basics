import React from 'react'
import {ArrowRight} from 'lucide-react'
const Rightcard = (props) => {
  return (
    <div className='h-full w-1/3 bg-amber-200 rounded-3xl  overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />

        <div className='absolute top-0 left-0 w-full h-full p-7 flex flex-col items-start justify-between'>
            <h1 className='bg-white h-10 w-10 flex justify-center items-center rounded-full font-bold'>{props.count}</h1>
            <div className='text-xl flex flex-col gap-15 text-white'>
                <p >{props.desc}</p>
                <button className='flex items-center justify-center gap-3 bg-blue-500 rounded-full px-10 h-12 cursor-pointer'>{props.tag}<ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Rightcard