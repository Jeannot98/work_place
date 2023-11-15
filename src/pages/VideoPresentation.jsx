import React from 'react'
import ReactPlayer from 'react-player'

const VideoPresentation = () => {
    return (
        <div className='flex flex-col h-screen gap-5 w-full items-center justify-center '>
            <div className='rounded-md md:w-[600px] w-[400px] overflow-hidden  bg-cover'>
                <ReactPlayer url='https://www.youtube.com/watch?v=vOIZfH_2Y38' controls width='100%' />
            </div>
            <h1 className='underline text-[#030eee]'>Thank You!</h1>
        </div>
    )
}

export default VideoPresentation