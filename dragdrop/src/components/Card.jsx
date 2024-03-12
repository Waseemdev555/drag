import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import {motion} from "framer-motion"
const Card = ( {data}) => {
  return (
    <motion.div drag className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-zinc-100 p-8 overflow-hidden' >
      <FaFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc} </p>
      <div className='absolute bottom-0 w-full h-10  px-8 left-0 '>

<div className='flex items-center justify-between  mb-3'> 
  <h4>.4mb</h4>
  <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
  <FaDownload size='.8em' color='#000'/>
  </span>
 
</div>

      </div>
  
    </motion.div>
  )
}

export default Card