import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
const header = () => {



    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    
     // Show/Hide overlay
}
  return (
    <section className='sticky top-0 p-1 z-50 bg-black w-full px-2 md:mx-0'>
      <div className='header flex container  justify-between md:gap-[150px]  lg:justify-center lg:gap-72  w-full '>
        <div>

          <h1 className='text-[#f4f4f4] font-extrabold text-2xl '>Prashant Pal</h1>

        </div>

          {/* Sidebar */}
          <div className={`fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white p-5 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
                <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white text-2xl">✖</button>
                <ul className="mt-10">
                    <li className="mb-4"><a href="#home" className="block p-2 hover:bg-gray-700">Home</a></li>
                    <li className="mb-4"><a href="#about" className="block p-2 hover:bg-gray-700">About</a></li>
                    <li className="mb-4"><a href="#education" className="block p-2 hover:bg-gray-700">Education</a></li>
                    <li className="mb-4"><a href="#projects" className="block p-2 hover:bg-gray-700">Projects</a></li>
                    <li className="mb-4"><a href="#skill" className="block p-2 hover:bg-gray-700">Skills</a></li>
                    <li className="mb-4"><a href="#contact" className="block p-2 hover:bg-gray-700">Contact Us</a></li>
                </ul>
            </div>
                {/* Dark Overlay */}
                {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}

        <div className=' justify-center hidden md:block' >
          <ul className=' flex gap-[20px] lg:gap-[50px] h-full mt-3'>

            <li className="text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 underline-offset-8 active:text-[#fcbb38]">
              <a href="/">Home</a>
            </li>

            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38]  underline-offset-8'><a className='active:text-[#fcbb38]' href="#about">About</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8'><a href="#education">Education</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8 '><a href="#projects">Projects</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8'><a href="#skill">Skills</a></li>
            <li className='text-[#f4f4f4] font-[700] hover:text-[#fcbb38] hover:underline leading-2 active:text-[#fcbb38] underline-offset-8'><a href="#contact">Contact us</a></li>
          </ul>
        </div>

        <div className='md:hidden mt-1 '><IoMdMenu onClick={toggleSidebar} className='text-white text-3xl' /></div>
      </div>
    </section>
  )
}

export default header

