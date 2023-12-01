import React from 'react'
import ReactPlayer from 'react-player'
import {language} from '../data/Data'
import { useParams } from 'react-router-dom'

const VideoPresentation = () => {
    const{id} = useParams();
    return (
        <div className='flex flex-col mt-6 h-screen gap-5 w-full items-center justify-center '>
            <div className='rounded-md md:w-[600px] w-[400px] overflow-hidden  bg-cover'>
                <ReactPlayer url={language[id - 1].url} controls width='100%' />
            </div>
            <h1 className='underline text-[#030eee]'>{language[id - 1].greeting}</h1>
        </div>
    )
}

export default VideoPresentation