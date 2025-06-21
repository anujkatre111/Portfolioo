import React from 'react'
import Pcards from './Pcards'

const Projects = () => {
  return (
    <>
    <div className='w-full p-8'>
        <h1 className='inline-block text-center text-[48px] font-medium tracking-tighter w-full my-[12px]'>Projects</h1>
        <div className='grid gap-4 justify-items-center grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-full'>
            <Pcards/>
            <Pcards/>
            <Pcards/>
        </div>
    </div>
      
    </>
  )
}

export default Projects
