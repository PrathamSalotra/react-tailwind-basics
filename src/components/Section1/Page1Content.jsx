import React from 'react'
import Pagecontentsection1 from './Pagecontentsection1'
import Pagecontentsection2 from './Pagecontentsection2'

const Page1Content = (props) => {
  return (
    <div className='w-full h-[90vh] px-10 py-10 flex gap-3'>
        <Pagecontentsection1 />
        <Pagecontentsection2 users={props.users}/>
    </div>
  )
}

export default Page1Content