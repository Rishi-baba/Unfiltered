import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font2]  mt-72 lg:mt-0 pt-5 text-center text-white'>
            <div className='lg:text-[8.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Unfiltered
            </div>
            <div className='lg:text-[8.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                Un
                <div className='h-[7vw] w-[14vw] rounded-full -mb-7 overflow-hidden ' style={{borderRadius: '30%'}}>
                    <Video />
                </div>
                biased
            </div>
            <div className='lg:text-[8.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Unstoppable...
            </div>
        </div>
  )
}

export default HomeHeroText