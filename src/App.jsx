import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
   <Home/>
   <About />
   <Education />

   <Projects />
   <Skills/>
   <Contact />
 
    </>
  )
}

export default App
