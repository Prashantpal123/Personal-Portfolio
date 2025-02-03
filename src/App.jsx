import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
   <Home/>
   <About />
   <Education />
   <Skills/>
    </>
  )
}

export default App
