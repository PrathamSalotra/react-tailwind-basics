import React from 'react'
import {ArrowRight} from 'lucide-react'
const Rightcard = () => {
  return (
    <div className='h-full w-1/3 bg-amber-200 rounded-3xl  overflow-hidden relative shrink-0'>
        <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className='absolute top-0 left-0 w-full h-full p-7 flex flex-col items-start justify-between'>
            <h1 className='bg-white px-5 py-3 rounded-full font-bold'>1</h1>
            <div className='text-xl flex flex-col gap-15 text-white'>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis doloremque sed repellat architecto?</p>
                <button className='flex items-center gap-3 bg-blue-500 rounded-full py-2 px-21'>Satisfied<ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Rightcard