import React from 'react'
import Rightcard from './Rightcard'

const Pagecontentsection2 = (props) => {
    let count = 0;
  return (
    <div className='h-full w-3/4 px-10 flex gap-5 overflow-x-auto'>
        {props.users.map((elements)=>{
            count++;
            return <Rightcard img={elements.image} desc={elements.description} tag={elements.tag} count={count}/>
        })}
    </div>
  )
}

export default Pagecontentsection2