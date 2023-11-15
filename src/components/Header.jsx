import React, { useContext } from 'react'
import logo from '../assets/image/logo.png'
import { BiSolidVideos } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {ProjectsContext} from '../context/ProjectsContext'
import { MdOutlineMenuOpen } from "react-icons/md";
import {navList} from '../data/Data'

const Header = () => {
  const {activeHeader, setActiveHeader, menuOpen, setMenuOpen, setSearchBar} = useContext(ProjectsContext)

  
  return (
    <div className='flex fixed w-full top-0 justify-between items-center bg-white p-3'>
      <div className='flex items-center justify-between w-[600px] gap-11'>
        <Link to='/'><img src={logo} onClick={() => setActiveHeader(0)} className='w-[50px] md:w-[180px]' /></Link>
        <ul className='hidden md:flex gap-4 md:gap-14'>
          {navList.map((item, index) => (
            <Link key={index} to={item.to} onClick={() => {setActiveHeader(index); setSearchBar(false)}} className={`${activeHeader === index && 'bg-[#030eee] p-1 rounded-lg text-white'}`}>{item.name}</Link>
          ))}
        </ul>
      </div>
      <MdOutlineMenuOpen size={30} onClick={()=>setMenuOpen(!menuOpen)} className='text-pink-600 md:hidden'/>
      <Link to={'/presentation'} className='text-white'>
      <button onClick={()=>setActiveHeader(3)} className='hidden bg-pink-500 rounded-full md:flex items-center gap-1'>Video Presentation <BiSolidVideos size={20} /> </button>
      </Link>
    </div>
  )
}

export default Header