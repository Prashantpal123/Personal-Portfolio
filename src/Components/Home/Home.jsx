import React from 'react'
import my_img from "../../assets/images/prashant_img-removebg.png"
const Home = () => {
    return (
        <>
        <section id='home' className='container'> 
        <div className='  flex mx-4 md:mx-8 gap-4 md:gap-20 md:justify-center md:mt-20' id='home'>
                <div className='hidden md:block'> <figure className='max-w-[400px] w-[100px] md:w-[500px] shadow rounded-3xl shadow-amber-400'> <img src={my_img} alt="" /></figure></div>

                <div className='md:mt-16'>
                    <p className=' text-[#fcbb38] font-[700] md:text-[20px]'>Hello <span className='text-[#f4f4f4] font-[700]'>!</span></p>
                    <h1 className='text-[#f4f4f4] text-[30px] leading- md:text-[60px] lg:text-[60px] font-extrabold md:leading- '> I am <span className='text-[#fcbb38]'>Prashant Pal</span> </h1>
                    <div className='block md:hidden'> <figure className='max-w-[300px] fw-[300px]  shadow rounded-3xl shadow-amber-400'> <img src={my_img} alt="" /></figure></div>
                    <h1 className='text-slate-300 md:text-[25px] mt-2 md:mt-0 leading- md:leading-24'>Mern Stack Web-Devloper</h1>
                    <div className='flex gap-8 mt-3'>
                    <a href='#contact' className='bg-[#fcbb38] font-[700] px-2 md:px-4 py-2 border border-amber-50   rounded-3xl cursor-pointer'>
                            Hire <span className='text-[#f4f4f4] '>Me</span>
                        </a >
                        <a href='#projects' className='text-[#f4f4f4] border border-amber-50 font-[700] px-3 py-2 rounded-3xl cursor-pointer'>
                            Projects
                        </a>

                    </div>


                </div>
             
              


            </div>
            </section>
        </>
    )
}

export default Home
