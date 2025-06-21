import { Svg } from '@react-three/drei'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative flex flex-col justify-center h-[100vh] items-center p-[100px] w-full gap-5 bg-[#ff4314]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[72px] md:text-[150px] font-bold tracking-tighter text-center md:text-right leading-15 md:leading-30'>THIS IS <span className='text-white'>BEST PORTFOLIO</span>YOU WILL EVER <span className='text-white'>-------SEE</span></h1>
        <div className=' absolute bottom-0 flex pl-[24px]'>
          <svg className='w-[100px] md:w-[350px] h-[100px] md:h-[350px]' viewBox="0 0 197 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.3682 1.16004V7.38806C63.3682 7.94035 63.8159 8.38806 64.3682 8.38806H72.6839C79.0593 8.38806 85.422 8.95786 91.6959 10.0907L98.4115 11.3032C100.418 11.6654 102.376 12.2536 104.25 13.0566L112.749 16.6991C115.132 17.7205 117.391 19.0113 119.481 20.5461L129.378 27.8144L96.1069 60.8232L94.4441 62.3012C91.3252 65.0736 86.5992 64.983 83.5889 62.093L82.2662 60.8232L68.5462 47.7566C66.5271 45.8336 64.2103 44.2497 61.6855 43.0662L61.2568 42.8652C58.4832 41.5651 55.3585 41.2153 52.3661 41.8699C49.7824 42.4351 47.3126 43.4321 45.0607 44.8191L7.63269 67.8714C2.90369 70.7841 0.0234375 75.9407 0.0234375 81.4947V145.324C0.0234375 146.429 0.91887 147.324 2.02344 147.324H58.9727C60.0773 147.324 60.9727 146.429 60.9727 145.324V67.2113L103.712 109.698C105.193 111.17 106.948 112.337 108.878 113.133L109.766 113.5C113.96 115.23 118.681 115.161 122.824 113.31C124.869 112.396 126.728 111.113 128.306 109.524L169.037 68.5421L175.235 76.022C176.246 77.2421 177.115 78.5727 177.827 79.9883L180.172 84.6527C181.937 88.1647 183.224 91.8974 183.998 95.7512L186.338 107.403L187.876 132.017C187.909 132.544 188.346 132.955 188.874 132.955H195.186C195.738 132.955 196.186 132.507 196.186 131.955V1.14465C196.186 0.592318 195.738 0.144584 195.186 0.144649L64.3681 0.160039C63.8159 0.160104 63.3682 0.6078 63.3682 1.16004Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      <div className='flex'>
        <button className='bg-black font-light text-white px-[24px] md:px-[48px]  py-[4px] md:py-[8px] text-[12px] md:text-[24px] rounded'>More</button>
      </div>
    </div>
  )
}

export default Hero
