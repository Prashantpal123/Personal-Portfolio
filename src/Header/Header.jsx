import React from 'react'
import { IoMdMenu } from "react-icons/io";
const header = () => {
  return (
    <section className='sticky top-0 p-1 z-50 bg-black w-full mx-3 md:mx-0'>
      <div className='header flex container  justify-between md:gap-[150px]  lg:justify-center lg:gap-72  w-full '>
        <div>

          <h1 className='text-[#f4f4f4] font-extrabold text-2xl '>Prashant Pal</h1>
        </div>

        <div className=' justify-center hidden md:block' >
          <ul className=' flex gap-[20px] lg:gap-[50px] h-full mt-3'>

            <li className="text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 underline-offset-8 active:text-[#fcbb38]">
              <a href="#ram">Home</a>
            </li>

            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38]  underline-offset-8'><a className='active:text-[#fcbb38]' href="">About</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8'><a href="">Education</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8 '><a href="">Projects</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8'><a href="">Skills</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8'><a href="">Contact us</a></li>
          </ul>
        </div>

        <div className='md:hidden mt-1 '><IoMdMenu className='text-white text-3xl' /></div>
      </div>
    </section>
  )
}

export default header

