import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const Pagecontentsection1 = () => {
  return (
    <div className='h-full w-1/4  flex flex-col justify-between'>
        <div className='flex flex-col gap-6 pl-6'>
            <h1 className='mt-11 text-5xl font-bold leading-13'>Prospective customer segmentation</h1>
            <p className='text-xl mb-28'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi quidem dolor maiores nisi molestias, doloribus architecto dicta?</p>
        </div>
        <div>
            <ArrowUpRight className='w-30 h-30' />
        </div>
    </div>
  )
}

export default Pagecontentsection1