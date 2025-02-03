import React from 'react'
import htmlImg from '../../assets/images/html-icon.png'
import bootstrapImg from '../../assets/images/bootstrap-4-icon.png'
import cimg from '../../assets/images/c-icon.png'
import webimg from '../../assets/images/devlloper.png';
import compImg from '../../assets/images/computer.png';
import cssImg from '../../assets/images/css.png';
import jsImg from '../../assets/images/javascript.png';
import reactImg from '../../assets/images/react.png';
import tailcssImg from '../../assets/images/tailwind.png';
import backImg from '../../assets/images/database.png';
import expresImg from '../../assets/images/express.png';
import nodeImg from '../../assets/images/node.png';
import gitImg from '../../assets/images/git.png';
import GitHubImg from '../../assets/images/github.png';
import mongoImg from '../../assets/images/mongodb.png';
import cppImg from '../../assets/images/cpp.png';



const Skills = () => {
  return (
    <> <div className='mt-15'>
  <h1 className='text-white text-center font-black text-[30px]'> My Skills</h1>

      <div className='  md:flex justify-center md:mx- mx-4  gap-4 md:gap-18  md:mt-4' id='home'>

      

        <div className='mb-5 '>

          <div className='flex gap-3'>
            <img className='text-white md:mt-0 mt-2 h-[20px] md:h-[30px] red 
invert ' src={compImg} alt="" />
            <h1 className='text-white text-[20px] font-black md:text-[25px] '>Frontend Technologies:</h1>

          </div>

          <div className='flex flex-col  text-white mx-12 mt-1'>
            <div className='flex gap-2'>

              <img className=' h-[28px]' src={htmlImg} alt="" />
              <p className='font-semibold'>HTML</p>
            </div>
          </div>
          <div className='flex flex-col  text-white mx-12 mt-3'>
            <div className='flex gap-2'>

              <img className=' h-[28px]' src={cssImg} alt="" />
              <p className='font-semibold'>CSS (Cascading Style Sheets)</p>
            </div>
          </div>
          <div className='flex flex-col  text-white mx-12 mt-3'>
            <div className='flex gap-2'>

              <img className=' h-[28px] rounded' src={jsImg} alt="" />
              <p className='font-semibold'>Javascript</p>
            </div>

          </div>
          <div className='flex flex-col  text-white mx-12 mt-3'>
            <div className='flex gap-2'>

              <img className=' h-[28px] rounded' src={reactImg} alt="" />
              <p className='font-semibold'>React.js</p>
            </div>

          </div>
          <div className='flex flex-col  text-white mx-12 mt-3'>
            <div className='flex gap-2'>

              <img className=' h-[28px] rounded' src={tailcssImg} alt="" />
              <p className='font-semibold'>Tailwind CSS</p>
            </div>

          </div>
          <div className='flex flex-col  text-white mx-12 mt-3'>
            <div className='flex gap-2'>

              <img className=' h-[28px] rounded' src={bootstrapImg} alt="" />
              <p className='font-semibold'>Bootstrap</p>
            </div>

          </div>

        </div>


        <div className='mb-5'>

          <div className='flex gap-3'>
            <img className='text-white md:mt-0 mt-2 h-[20px] md:h-[30px] red 
invert ' src={backImg} alt="" />
            <h1 className='text-white font-black text-[20px]  md:text-[25px] '>Backend Technologies:</h1>

          </div>

          <div className='flex flex-col  text-white mx-12 mt-1'>
            <div className='flex gap-2'>

              <img className=' h-[28px]' src={nodeImg} alt="" />
              <p className='font-semibold'>Node.js</p>
            </div>
          </div>
          <div className='flex flex-col  text-white mx-12 mt-3'>
            <div className='flex gap-2'>

              <img className=' h-[28px] invert' src={expresImg} alt="" />
              <p className='font-semibold'>Express.js</p>
            </div>
          </div>



        </div>


        <div className='mb-5'>

<div className='flex gap-3'>
  <img className='text-white h-[20px] md:mt-0 mt-2 md:h-[30px] red 
invert ' src={backImg} alt="" />
  <h1 className='text-white font-black  text-[20px]  md:text-[25px] '>Database Technologies:</h1>

</div>

<div className='flex flex-col  text-white mx-12  mt-1 md:mt-3'>
  <div className='flex gap-2'>

    <img className=' h-[28px]' src={mongoImg} alt="" />
    <p className='font-semibold'>Mongo DB</p>
  </div>
</div>


</div>



      </div>
     

      <div className='  md:flex justify-center mx-4  gap-4 md:gap-18  md:mt-10' id='home'>






<div className='mb-5'>

  <div className='flex gap-3'>
    <img className='text-white h-[20px] md:mt-0 mt-2 md:h-[30px]  red 
invert ' src={backImg} alt="" />
    <h1 className='text-amber-300 font-black  text-[20px]  md:text-[25px]  '>Programming Languages:</h1>

  </div>

  <div className='flex flex-col  text-white mx-12 mt-1 md:mt-3'>
    <div className='flex gap-2'>

      <img className=' h-[28px]' src={cimg} alt="" />
      <p className='font-semibold'>C Language</p>
    </div>
  </div>
  <div className='flex flex-col  text-white mx-12 mt-3'>
    <div className='flex gap-2'>

      <img className=' h-[28px] invert' src={cppImg} alt="" />
      <p className='font-semibold'>C++ Language</p>
    </div>
  </div>



</div>
<div className='mb-5'>

  <div className='flex gap-3'>
    <img className='text-white  h-[20px] md:mt-0 mt-2 md:h-[30px]  red 
invert ' src={backImg} alt="" />
    <h1 className='text-amber-300 font-black  text-[20px]  md:text-[25px] '>Version Control:</h1>

  </div>

  <div className='flex flex-col  text-white mx-12  mt-1 md:mt-3'>
    <div className='flex gap-2'>

      <img className=' h-[28px]' src={gitImg} alt="" />
      <p className='font-semibold'>Git</p>
    </div>
  </div>
  <div className='flex flex-col  text-white mx-12  mt-1 md:mt-3'>
    <div className='flex gap-2'>

      <img className=' h-[28px] invert' src={GitHubImg} alt="" />
      <p className='font-semibold'>Github</p>
    </div>
  </div>



</div>


<div className='mb-5'>

<div className='flex gap-3'>
  <img className='text-amber-300  h-[20px] md:mt-0 mt-2 md:h-[30px]  red 
invert ' src={webimg} alt="" />
  <h1 className='text-amber-300 font-black  text-[20px]  md:text-[25px] '> Web Development</h1>

</div>
<div className='flex flex-col text-white mx-8  mt-1 md:mt-3'>
  <p className='font-semibold'> - Full-Stack Web Development
  </p >
  <p className='font-semibold'> - Mern-Stack Web Development
  </p>
  <p className='font-semibold'>- Responsive Web Design</p>
  <p className='font-semibold'> - UI/UX Development</p>
</div>

</div>







</div>

      </div>

    </>
  )
}

export default Skills
