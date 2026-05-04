import React from 'react'
import { TbError404 } from "react-icons/tb";
import { FaFaceSadCry } from "react-icons/fa6";

const PageNotFound = () => {
  return (
    <div>
     <h1 className='text-3xl flex items-center justify-center gap-2'>sorry <FaFaceSadCry/></h1> 
      <h1 className='text-3xl flex items-center justify-center gap-2 mt-5'>PAGE NOT FOUND <TbError404/></h1>
    </div>
  )
}

export default PageNotFound
