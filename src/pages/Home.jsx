import React from 'react'
import Video from '../Components/home/Video'
import HomeHeroText from '../Components/home/HomeHeroText'
import HomeBottomText from '../Components/home/HomeBottomText'

const Home = () => {
  return (
    
    <div>
      <div className='h-screen w-screen fixed bg-black z-9 opacity-30 '>

      </div>
      <div className='h-screen w-screen fixed '>
        <Video/>
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between z-10'>
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home