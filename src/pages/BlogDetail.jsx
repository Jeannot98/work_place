import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsContext } from '../context/ProjectsContext'
import { list } from '../data/Data'
import ReactPlayer from 'react-player'

const BlogDetail = () => {
    const { reactNativeDemo, setReactNativeDemo, darkmode } = useContext(ProjectsContext);
    const { id } = useParams()
    return (
        <div className=' flex py-20 px-5 w-full'>
            <div className='flex flex-col h-full md:justify-center md:py-8 items-center w-full py-8'>
                {
                    reactNativeDemo ? (<div className='rounded-md md:w-[600px] w-[400px] h-[400px] overflow-hidden  bg-cover'>
                        <ReactPlayer url={list[id - 1].demo} controls width='100%' />
                    </div>) : (<img src={list[id - 1].image} className='h-[400px] bg-cover  rounded-3xl' />)
                }

                <div className='flex flex-col justify-center gap-3 xl:p-5 items-center  mt-3 w-full'>
                    <h4 className='text-pink-600'>{list[id - 1].tag}</h4>
                    <h2 className='md:text-[50px] text-[#030eee] font-bold mt-3'>{list[id - 1].title}</h2>

                    <h4 className={`${darkmode&& 'text-white'}`}>{list[id - 1].description}</h4>
                    <div className='flex items-center justify-center gap-11 w-full'>
                        {
                            list[id - 1].video ? (<button onClick={()=>setReactNativeDemo(!reactNativeDemo)} className='bg-[#030eee] flex-1 border-none text-center w-full text-white rounded-full hover:scale-110 hover:bg-pink-600/75 transition-all
                            duration-300 ease-in-out hover:border-[2px] border-[#030eee]'>{reactNativeDemo? 'End Demo': 'Demo'}</button>) : (<a href={list[id - 1].demo} target='_blank' className='flex-1 w-full text-center'> <button className='w-full bg-[#030eee] border-none text-center  text-white rounded-full hover:scale-110 hover:bg-pink-600/75 transition-all
                            duration-300 ease-in-out hover:border-[2px] border-[#030eee]'>Demo</button></a>)
                        }


                        <a href={list[id - 1].code} target='_blank' className=' flex-1 w-full text-center'> <button className='w-full bg-pink-600 border-none text-center text-white rounded-full hover:scale-110 hover:bg-[#030fee4f] transition-all
            duration-300 ease-in-out hover:border-[2px] border-[#030eee]'>Code</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail