import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-full gap-5 bg-[#FFD60A]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[72px] font-bold tracking-tighter text-center leading-15 '>THIS IS BEST YOU WILL EVER SEE</h1>
        <h1 className='flex justify-center items-center font-medium tracking-tighter text-[24px]'>Anuj Katre Portfolio</h1>
      </div>
      
      <div className='flex'>
        <button className='bg-black text-white px-[24px] py-[4px] text-[12px] rounded'>More</button>
      </div>
    </div>
  )
}

export default Hero
