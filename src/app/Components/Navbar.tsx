'use client';
import React from 'react'
import { useState } from "react";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={`fixed top-0  flex flex-col navbar w-full bg-black z-50 py-[4px]`}>

        <div className='logo flex items-center justify-center h-[24px] w-[48px]' onClick={() => setVisible(!visible)}>
            {visible ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-x-icon lucide-circle-x text-white"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify-icon lucide-align-justify text-white"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>}
        </div>

        <div className={`menu flex flex-col gap-[16px] ml-[24px] text-[12px] text-white overflow-hidden transition-all duration-1000 ease-in-out ${visible ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
            <h1>Projects</h1>
            <h1>About</h1>
            <h1>Contact Me</h1>
        </div>

    </div>
 </>
  )
}

export default Navbar
