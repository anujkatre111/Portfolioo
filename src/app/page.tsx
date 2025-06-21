
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'


const page = () => {
  
  return (
  <div>
    <Navbar/>
      <div className='flex flex-col'>
      <Hero/>
      <Projects/>
      <About/>
      </div>
  </div>
  )
}

export default page
