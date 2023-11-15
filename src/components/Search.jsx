import React from 'react'
import bannerV from '../assets/videos/bannerv.mp4'

const Search = () => {
  

 // const [activeIndex,setActiveIndex]=useState(0)

  return (
    <div className='flex justify-center md:mt-7 mt-24 flex-col px-[70px] md:px-[150px]'>
      <video src={bannerV} autoPlay muted className='rounded-2xl'/>
    </div>
  )
}

export default Search