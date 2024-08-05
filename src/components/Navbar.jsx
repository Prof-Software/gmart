import React from 'react'
import { SiRoundcube } from "react-icons/si";
const Navbar = () => {
  return (
    <div className='p-4 absolute text-white'>
      <div className='flex items-center gap-4 text-4xl pixelify pl-[90px]'>
        <SiRoundcube/>
        Games Mart
      </div>
    </div>
  )
}

export default Navbar