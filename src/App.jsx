import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { FaWhatsapp } from "react-icons/fa";
import Experience from './Components/Experience/Experience';


function App() {
   const phone = "918630116843";
  const message = "Hello! I want to Discuss something.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


  const position = "bottom-7 right-5";

  return (
    <>
      <Header />
      <Home/>
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills/>
      <Contact />
      <SpeedInsights />
      <Analytics />
      
      {/* WhatsApp Floating Button */}
      <a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className={`fixed ${position} w-12 h-12 rounded-full flex items-center justify-center`}
>
  {/* Outer Ping Circle */}
  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

  {/* Main Button */}
  <span className="relative w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
    <FaWhatsapp className="w-8 h-8 text-white" />
  </span>
</a>

    </>
  )
}

export default App
