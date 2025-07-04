import React from 'react'

const About = () => {
  return (
    <>
    
   
    <section
      id="about"
      className="container mx-auto px-4 md:py-15 flex flex-col items-center justify-center  "
    >
      <div className="bg-white border-4 border-white rounded-3xl  w-full max-w-5xl px-1 py-1 lg:p-12 transition   cursor-pointer shadow-white ">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 md:mb-6 mb-3">
          About <span className="text-amber-500">Me</span>
        </h1>

        {/* Intro paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed text-center md:mb-10 mb-2 max-w-2xl mx-auto">
        
        I’m a passionate Full-Stack Developer with {" "}
        <strong className="text-amber-600">hands-on experience</strong>{" "} in the {" "} 
       <strong>MERN stack</strong>{" "} (MongoDB, Express.js, React.js, Node.js). I’ve worked on 
        responsive UIs, built core features from scratch, developed admin panels, 
        and implemented real-time notifications — all while solving real business 
        problems through clean, scalable code.
        </p>
        
        {/* Profile Details Grid */}

        <div className="grid md:grid-cols-2 gap-3 md:gap-6  mx-2  text-gray-800 font-medium text-lg md:mb-10  md:pl-0    mb-3">
          <div className="flex justify-between">
            <span>Name:</span>
            <span className="text-gray-600 font-semibold">Prashant Pal</span>
          </div>
          <div className="flex   justify-between">
            <span>Date of Birth:</span>
            <span className="text-gray-600 font-semibold">15/01/2005</span>
          </div>
          <div className="flex justify-between">
            <span>City:</span>
            <span className="text-gray-600 font-semibold">
             Jaspur (Uttarakhand) 
            </span>
          </div>
          <div className="flex  justify-between">
            <span>Email:</span>
            <span className="text-gray-600  font-semibold break-all  ">
              prashantpal2026@gmail.com
            </span>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="w-full flex justify-center">
          <a
            href="https://drive.google.com/file/d/1iGjhpLmJN_PYjrK3bo4YE1HPXgHKR19c/view?usp=sharing" // Replace with actual file path
            download
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition transform hover:scale-95"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
