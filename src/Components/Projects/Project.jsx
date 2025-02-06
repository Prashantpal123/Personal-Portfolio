import React from 'react'
import my_img from "../../assets/images/prashant_img-removebg.png"
import doctorimg1 from "../../assets/images/doctor1.png"
import doctorimg2 from "../../assets/images/doctor2.png"
import doctorimg3 from "../../assets/images/doctor3.png"
import doctorimg4 from "../../assets/images/doctor4.png"
import doctorimg5 from "../../assets/images/doctor5.png"
import quizeimg1 from "../../assets/images/quize1.png"
import quizeimg2 from "../../assets/images/quize2.png"
import quizeimg3 from "../../assets/images/quize3.png"
import quizeimg4 from "../../assets/images/quize4.png"
import quizeimg5 from "../../assets/images/quize5.png"
import { useEffect } from 'react'
import { useState } from 'react'
const Projects = () => {


    const [expand, setexpand] = useState(false)
    const view = () => {
        setexpand(!expand);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const docimg = [


        doctorimg1,
        doctorimg2,
        doctorimg3,
        doctorimg4,
        doctorimg5
    ]


    const quizeimg = [


        quizeimg1,
        quizeimg2,
        quizeimg3,
        quizeimg4,
        quizeimg5,

    ]

    useEffect(() => {
        if (isPaused) return; // Stop auto-slide when paused

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % docimg.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);



    return (
        <>
            <section id='projects' className='container'>
                <h1 className='text-[#f4f4f4] md:mt-24 w-full text-center text-[28px] 
                leading-13 md:text-[40px] lg:text-[50px]  font-extrabold md:leading- '> Projects</h1>
                <div className='  lg:flex mx-4 md:mx-0 lg:mx-8 gap-4 md:gap-10 md:justify-center md:mt-15' id='home'>


                    <div className=" ">
                        <p className=' text-[#fcbb38]  font-[700] leading-7 text-[25px] md:text-[30px]'>Doctor Appointment  <span className=' text-[#d41010] font-[700]'>Booking</span> website</p>


                        <div>

                            <div><h1 className='text-white text-[20px] font-[700]'>Overview</h1>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>The application bridges the gap between doctors and patients by offering a digital solution for
                                    scheduling medical consultations. With an intuitive UI and a secure backend, it eliminates the need for long waiting times and complex booking processes. Whether
                                    users need general check-ups or specialized treatments, the platform enables them to find and connect with the right healthcare providers effortlessly.</p>
                            </div>

                            <div className='flex justify-center'>

                                <div className={` md:block max-w-[1100px] rounded-2xl md:mt-5 overflow-hidden mt-`}> <figure
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} className='max-w-[900px]  relative   
                          flex transition-transform duration-1000 ease-in-out shadow  rounded-3xl shadow-amber-400'>  {docimg.map((img, index) => (
                                        <img className='  ' src={img} alt="" />
                                    ))}</figure>
                                </div>
                            </div>


                            <div className={`mt-4  `}><h1 className='text-white text-[20px] font-[700]'>Key features</h1>
                                <h2 className='text-[#fcbb38] font-semibold text-[18px]'>For Patients :</h2>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>✅ Easy Registration & Login: Secure authentication using JWT for protected access. <br />
                                    ✅ Doctor Search & Filters: Find doctors based on specialization, location, availability, and experience. <br />
                                    ✅ Appointment Scheduling: Book appointments with real-time slot availability. <br />
                                    ✅ Appointment History: View past and upcoming appointments for better  management. <br />
                                    ✅ Notifications & Reminders: Get automated alerts for upcoming consultations. <br />
                                    ✅ Profile Management: Edit personal details, view medical history, and update preferences. <br />
                                    ✅ Secure Payments (Optional): Integration with payment gateways for online consultation fees.</p>
                            </div>


                            <div className={expand ? "block" : "hidden"}>
                                <h2 className='text-[#fcbb38] font-semibold text-[18px]'>For Doctors :</h2>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>
                                    ✅ Profile Creation: Add specialization, experience, consultation fees, and availability. <br />
                                    ✅ Appointment Management: Accept, decline, or reschedule patient appointments. <br />
                                    ✅ Patient Interaction: Communicate with patients through in-app messaging (if enabled). <br />
                                    ✅ Review & Ratings: Gain credibility through patient feedback and reviews. <br />
                                </p>
                            </div>

                            <div className={` mt-4 ${expand ? "block" : "hidden"}`} ><h1 className='text-white text-[20px] font-[700]'>Technology Stack (MERN)</h1>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>
                                    ✅ MongoDB: Stores user, doctor, and appointment data efficiently. <br />
                                    ✅ Express.js: Handles backend logic, routes, and API endpoints. <br />
                                    ✅ React.js: Provides a dynamic and responsive frontend for a smooth user experience. <br />
                                    ✅ Node.js: Manages server-side logic and handles requests efficiently. <br />
                                </p>
                            </div>

                            <div className={` mt-4 ${expand ? "block" : "hidden"}`} ><h1 className='text-white text-[20px] font-[700]'>Conclusion</h1>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>
                                    Our Doctor Appointment Booking Application is designed to revolutionize the healthcare booking system by making it more convenient for patients and efficient
                                    for doctors. With its user-centric approach and scalable architecture, this platform ensures a seamless medical consultation experience.</p>
                            </div>







                        </div>

                        <div className='flex gap-8 mt-3'>
                            <button onClick={view} className='bg-[#187895] font-[700] px-2 md:px-4 py-2 border border-amber-50   rounded-3xl cursor-pointer'>
                                View <span className='text-[#f4f4f4] '>More</span>
                            </button>
                            <button className='text-[#f4f4f4] border border-amber-50 font-[700] px-5 py-2 rounded-3xl cursor-pointer'>
                                Code
                            </button>

                        </div>


                    </div>




                </div>





                <div className='   mx-4 md:mx-0 lg:mx-8 gap-4 md:gap-10 md:justify-center mt-7 md:mt-15' id='home'>


                    <div className=" ">
                        <p className=' text-[#fcbb38]  font-[700] text-[25px] md:text-[30px]'>Quize <span className=' text-[#d41010] font-[700]'>Website</span></p>




                        <div>

                            <div><h1 className='text-white text-[20px] font-[700]'>Overview</h1>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>The application enables users to participate in quizzes across various subjects, track their
                                    performance, and improve their knowledge. With a dynamic and responsive interface, it ensures a smooth and engaging experience for users of all ages. The summary
                                    page at the end of each quiz displays the user's answers along with the correct ones, helping them learn from their mistakes.</p>
                            </div>
                            <div className='flex justify-center'>

                                <div className={` md:block max-w-[1100px] rounded-2xl md:mt-5 overflow-hidden mt-`}> <figure
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} className='max-w-[900px]  relative   
                                       flex transition-transform duration-1000 ease-in-out shadow  rounded-3xl shadow-amber-400'>  {quizeimg.map((img, index) => (
                                        <img className='  ' src={img} alt="" />
                                    ))}</figure>
                                </div>
                            </div>

                            <div className={`mt-4  `}><h1 className='text-white text-[20px] font-[700]'>Key features</h1>

                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>
                                    ✅ Qize Setting : Set UserName , Set time ,Set number of Questions <br />
                                    ✅ Timed & Untimed Quizzes: Take quizzes with or without time limits for a challenge. <br />
                                    ✅ Answer Review & Summary Page: View given answers along with correct ones for better learning. <br />
                                    ✅ Performance : check acuuracy , scores, tacken time , attempted question.</p>
                            </div>




                            <div className={` mt-4 ${expand ? "block" : "hidden"}`} ><h1 className='text-white text-[20px] font-[700]'>Technology Stack (MERN)</h1>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>
                                    ✅ React.js: Provides a dynamic and responsive frontend for a smooth user experience. <br />
                                    ✅ Tailwind css: Designing ,color ,background ,icon etc. <br />
                                    ✅ Javascript: Handles  logic, routes, and API endpoints. <br />


                                </p>
                            </div>

                            <div className={` mt-4 ${expand ? "block" : "hidden"}`} ><h1 className='text-white text-[20px] font-[700]'>Conclusion</h1>
                                <p className='text-gray-400 md:text-[15px]  md:mt-0 leading- '>
                                    Our Quiz Application is designed to make learning fun and interactive by combining education with technology. Whether users are testing
                                    their knowledge, preparing for exams, or just having fun, this platform ensures an engaging and insightful experience.
                                    Would you like to add any branding, project name, or additional features before finalizing?.</p>
                            </div>







                        </div>

                        <div className='flex gap-8 mt-3'>
                            <button onClick={view} className='bg-[#187895] font-[700] px-2 md:px-4 py-2 border border-amber-50   rounded-3xl cursor-pointer'>
                                View <span className='text-[#f4f4f4] '>More</span>
                            </button>
                            <button className='text-[#f4f4f4] border border-amber-50 font-[700] px-5 py-2 rounded-3xl cursor-pointer'>
                                Code
                            </button>

                        </div>


                    </div>




                </div>
            </section>
        </>
    )
}

export default Projects;

