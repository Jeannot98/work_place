import React, { useContext } from 'react'
import logo from '../assets/image/logo.png'
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdClose } from 'react-icons/io'
import { BiSolidVideos } from 'react-icons/bi'
import { ProjectsContext } from '../context/ProjectsContext'
import { navList } from '../data/Data'
import { Link } from 'react-router-dom'

const MenuSidebar = () => {
    const { activeHeader, setActiveHeader, menuOpen, setMenuOpen } = useContext(ProjectsContext)

    return (
        <div className={`${menuOpen ? 'right-0' : '-right-[500px]'} md:hidden flex flex-col fixed h-full w-[400px] top-0 justify-between items-center bg-white p-3`}>
            <div className='flex items-center w-full justify-between transition-all duration-500 scroll-smooth ease-in-out'>
                <Link to='/'><img src={logo} onClick={() => setActiveHeader(0)} className='w-[50px] md:w-[180px]' /></Link>

                {menuOpen && <IoMdClose size={30} onClick={() => setMenuOpen(!menuOpen)} className='text-pink-600' />}
            </div>
            <div className='flex flex-col w-full flex-1 gap-11 items-center justify-center'>
                <div className='flex flex-col items-center justify-between w-full gap-11'>

                    <ul className='md:hidden flex flex-col gap-4 md:gap-10'>
                        {navList.map((item, index) => (
                            <Link key={index} to={item.to} onClick={() => { setActiveHeader(index); setMenuOpen(!menuOpen) }} className={`${activeHeader === index && 'bg-[#030eee] p-1 rounded-lg text-white'}`}>{item.name}</Link>
                        ))}
                    </ul>
                    <Link to={'/presentation'} className='text-white'>
                    <button onClick={()=>setMenuOpen(!menuOpen)} className=' bg-pink-500 rounded-full flex items-center gap-1'>Video Presentation <BiSolidVideos size={20} /> </button>
                </Link>
                </div>

                
            </div>
        </div>
    )
}

export default MenuSidebar