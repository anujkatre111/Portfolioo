import React from 'react'
import Image from 'next/image'

const Pcards = () => {
  return (
    <>
    <div className='Project-Card flex flex-col border border-black p-[8px] w-[300px] rounded'>
            <div className='flex justify-center items-center w-full h-[180px] bg-red-600'><Image src="/your-image.jpg" alt="nothing" width={300} height={180} /></div>
            <h1 className='text-[24px] font-medium tracking-tighter'>AI for Finance</h1>
            <h1 className='text-[16px] text-gray-600 tracking-tighter'>This is an AI assistant for finance</h1>
     </div>
      
    </>
  )
}

export default Pcards
