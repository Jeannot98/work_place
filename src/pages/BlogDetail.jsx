import React from 'react'
import { useParams } from 'react-router-dom'
import { list } from '../data/Data'

const BlogDetail = () => {
    const { id } = useParams()
    return (
        <div className=' flex py-5 px-5 w-full h-screen'>
            <div className='flex flex-col h-full xl:flex-row md:justify-center md:py-8 items-center w-full py-8'>
                <img src={list[id - 1].image} className='h-[400px] xl:h-[400px] bg-cover xl:flex-1 rounded-3xl'/>
                <div className='flex flex-col justify-center gap-3 xl:p-5 items-center xl:flex-1 xl:h-[400px] mt-3 w-full'>
                    <h4 className='text-pink-600'>{list[id - 1].tag}</h4>
                    <h2 className='md:text-[50px] text-[#030eee] font-bold mt-3'>{list[id - 1].title}</h2>

                    <h4 className=''>{list[id - 1].description}</h4>
                    <a href={list[id - 1].demo} target='_blank' className='w-full text-center'> <button className='bg-[#030eee] border-none text-center w-[50%] text-white rounded-full hover:scale-110 hover:bg-pink-600 transition-all
            duration-300 ease-in-out hover:border-[2px] border-[#030eee]'>Demo</button></a>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail