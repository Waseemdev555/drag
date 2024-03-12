import React from 'react'
import Card from './Card'



const Fourground = () => {
  const data =[
    {
      desc:"hello we are pakistani.",
      fliesize:'.9mb',
      close:'true',
      tag:{ isopen:true, tagtitle:"download", tagcolor:'green'}
    },
    {
      desc:"hello we are pakistani.",
      fliesize:'.9mb',
      close:'true',
      tag:{ isopen:true, tagtitle:"download", tagcolor:'green'}
    },
    {
      desc:"hello we are pakistani.",
      fliesize:'.9mb',
      close:'true',
      tag:{ isopen:true, tagtitle:"download", tagcolor:'green'}
    }
  
  ]
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10'>
      {data.map((item,index)=>(
        <Card data={item}/> 
      ))}


    </div>
  )
}

export default Fourground