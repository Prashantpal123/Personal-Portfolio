import React from 'react'

const header = () => {
  return (
    <div className='header flex container  gap-[220px]'>
        <div>

            <h1 className='text-[#f4f4f4] font-extrabold text-2xl '>Prashant Pal</h1>
        </div>

        <div className=' flex flex-col items-center' >
            <ul className=' flex gap-[50px] h-full mt-3'>
              
            <li className="text-[#f4f4f4] font-[700] hover:text-[#8e691f] hover:underline leading-2 underline-offset-8 active:text-[#8e691f]">
  <a href="">Home</a>
</li>

            <li className='text-[#f4f4f4] font-[700] hover:text-[#8e691f] hover:underline leading-2 active:text-[#8e691f]  underline-offset-8'><a className='active:text-[#8e691f]' href="">About</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#8e691f] hover:underline leading-2 active:text-[#8e691f] underline-offset-8'><a href="">Education</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#8e691f] hover:underline leading-2 active:text-[#8e691f] underline-offset-8 '><a href="">Projects</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#8e691f] hover:underline leading-2 active:text-[#8e691f] underline-offset-8'><a href="">Skills</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#8e691f] hover:underline leading-2 active:text-[#8e691f] underline-offset-8'><a href="">Contact us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default header

