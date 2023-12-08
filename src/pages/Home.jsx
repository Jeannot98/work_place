import React, { useContext } from 'react'
import profile from '../assets/image/profil.jpg'
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../context/ProjectsContext'

const Home = () => {
    const { setActiveHeader, darkmode } = useContext(ProjectsContext)
    
    return (
        <div className={`${darkmode? 'bg-[#1a1c24fd]': 'bg-white'} flex w-full h-[100vh] justify-center items-center md:p-[70px] p-[10px] mt-10`}>
            <div className='flex-col-reverse flex md:flex md:flex-row md:w-[80%] w-[100%]  justify-center md:rounded-br-[100px] md:rounded-tr-[100px] items-center p-5 bg-gradient-to-br from-pink-300 to-[#030eee]'>
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-[#030eee] w-full text-left'>Hi! I Am</h1>
                    <h1 className='text-pink-600 w-full text-left font-extrabold'>Jeannot MOGORE</h1>
                    <p className='text-white text-xl'>I am a skilled and passionate React Js Frontend developer with experience in creating beautiful, responsive and functional app</p>
                    <Link to='/portfolio' className='w-[50%]' >
                        <button onClick={() => setActiveHeader(1)} className='mt-4 w-full bg-gradient-to-br from-white to-pink-600 border-none text-center text-[#030eee] hover:scale-105
                    transition-all duration-500 ease-in-out cursor-pointer'>Portfolio</button>
                    </Link>
                </div>

                <div className='rounded-full overflow-hidden bg-cover'>
                    <img src={profile} className='h-28 md:h-full' />
                </div>
            </div>
        </div>
    )
}

export default Home