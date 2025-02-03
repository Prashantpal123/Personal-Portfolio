import React from 'react'
import my_img from "../../assets/images/prashant_img-removebg.png"
const Home = () => {
    return (
        <>
        <section id='home' className='container'> 
        <div className='  flex mx-8 gap-4 md:gap-32 md:justify-center md:mt-20' id='home'>
                <div className='hidden md:block'> <figure className='max-w-[400px] w-[100px] md:w-[500px] shadow rounded-3xl shadow-amber-400'> <img src={my_img} alt="" /></figure></div>

                <div className='md:mt-16'>
                    <p className=' text-[#fcbb38] font-[700] md:text-[20px]'>Hello <span className='text-[#f4f4f4] font-[700]'>!</span></p>
                    <h1 className='text-[#f4f4f4] text-[48px] leading-13 md:text-[60px] lg:text-[60px] font-extrabold md:leading- '> I am <span className='text-[#fcbb38]'>Prashant Pal</span> </h1>
                    <h1 className='text-slate-300 md:text-[25px] leading-12 md:leading-24'>Mern Stack Web-Devloper</h1>
                    <div className='flex gap-8 mt-3'>
                    <button className='bg-[#fcbb38] font-[700] px-4 py-2 border border-amber-50   rounded-3xl cursor-pointer'>
                            Hire <span className='text-[#f4f4f4] '>Me</span>
                        </button>
                        <button className='text-[#f4f4f4] border border-amber-50 font-[700] px-4 py-2 rounded-3xl cursor-pointer'>
                            Projects
                        </button>

                    </div>


                </div>
             
              


            </div>
            </section>
        </>
    )
}

export default Home
