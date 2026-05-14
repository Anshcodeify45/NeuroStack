import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Project from './component/Project'
import ScrollProgress from './component/ScrollProgress'
import Skiills from './component/Skills'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Project />
    <Skiills />
    <Contact />
    </>
  )
}

export default App
