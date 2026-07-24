import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-10 uppercase'>
        <div className='bg-black text-white px-4 py-2 rounded-full'>Target Audience</div>
        <button className='bg-gray-200 rounded-full px-3 py-1 uppercase cursor-pointer'> Digital Banking Platform</button>
    </div>
  )
}

export default Navbar