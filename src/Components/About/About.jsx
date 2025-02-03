import React from 'react'

const About = () => {
  return (
    <>
    
    <section id='about' className=' about container   justify-center max-w-[800px] lg:max-w-[1100px] md:pt-24  '>
   <div className='mx-5 bg-[#fcbb38] border-amber-100 border rounded-lg'>   <div className='mx-3 my-4' >

     <h1 className='text-[#f4f4f4] text-[48px] leading-13 md:text-[60px] lg:text-[60px] font-extrabold md:leading- '>About <span className='text-[#d41010]'>Me</span> </h1>
        <p className='text-[#000000f7] mt-3'>I am a dedicated Full-Stack Web Developer specializing in the MERN stack
     (MongoDB, Express.js, React.js, Node.js) to build scalable, efficient, and user-friendly web applications</p>
   <div className='flex lg:gap-[240px] justify-between lg:justify-center'>
          <p className='text-[#021407d5] font-[700] text-xl lg:text-2xl'>Name  </p> <p className='text-[#063137f7] font-[700] text-xl lg:text-xl'>Prashant Pal </p>
                     
        </div> 
        <div className='flex lg:gap-[240px] justify-between lg:justify-center'>
          <p className='text-[#021407d5] font-[700] text-xl lg:text-2xl lg:ml-1'> DOB  </p> <p className='text-[#063137f7] font-[700] text-xl lg:text-xl'>15/01/2005 </p>
                     
        </div> 

        <div className='flex lg:gap-[95px] justify-between lg:justify-center'>
          <p className='text-[#021407d5] font-[700] text-xl lg:ml-5 lg:text-2xl '> City </p> <p className='text-[#063137f7] font-[700] lg:ml-24 text-xl lg:text-xl'>Jaspur ,Uttarakhand </p>
                     
        </div> 
        <div className='flex lg:gap-[150px] justify-between lg:justify-center'>
          <p className='text-[#021407d5] font-[700] text-lg lg:ml-12 lg:text-2xl'> Email</p> <p className='text-[#063137f7] font-[700]  md:text-xl'>prashantpal2026@gmail.com </p>
                     
        </div> 
       

          
      
     </div>

     </div>
<div className='w-full flex justify-center mt-3'>
     <button className='bg-blue-500 hover:bg-blue-600 hover:text-[15px] font-[700] px-4 py-2 border border-amber-50   rounded-3xl cursor-pointer'>
                            Download <span className='text-[#f4f4f4] '>CV</span>
                        </button>
                        </div>

     

    </section>
    </>
  )
}

export default About
