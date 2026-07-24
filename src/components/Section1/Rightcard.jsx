import React from 'react'
import {ArrowRight} from 'lucide-react'
const Rightcard = () => {
  return (
    <div className='h-full w-1/3 bg-amber-200 rounded-3xl  overflow-hidden relative'>
        <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1706727289010-4bf8e72c9143?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className='absolute top-0 left-0 w-full h-full bg-amber-200 p-7 flex flex-col items-start'>
            <h1 className='bg-white px-5 py-3 rounded-full font-bold'>1</h1>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis doloremque sed repellat architecto?</div>
            <div>
                <button><ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Rightcard