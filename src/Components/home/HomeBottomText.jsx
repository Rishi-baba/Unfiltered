import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5 text-white pb-2'>

      
      <p className='absolute lg:w-[32vw] w-64  right-0 bottom-28   font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight text-white'>
        At Unfiltered, we bring you the news as it is — raw, real, and without bias. No noise, no agenda, just stories that matter to you. Stay informed, stay aware, stay Unfiltered.</p>




      <div className='lg:border-3 border-2 hover:border-[#FF0000] hover:text-[#FF0000] lg:h-25 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[4vw] lg:mt-2' to='/projects'>category</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#FF0000] hover:text-[#FF0000]  lg:h-25 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[4vw] lg:mt-2' to='/agence'>News</Link>
      </div>
    </div>
  )
}

export default HomeBottomText