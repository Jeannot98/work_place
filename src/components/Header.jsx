import React, { useContext, useState } from 'react'
import logo from '../assets/image/logo.png'
import { BiSolidVideos } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../context/ProjectsContext'
import { MdOutlineMenuOpen } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { navList } from '../data/Data'

const Header = () => {
  const { activeHeader, setActiveHeader, menuOpen, setMenuOpen, setSearchBar, presentationMenu, setPresentationMenu,
    darkmode, setDarkMode } = useContext(ProjectsContext)



  return (
    <div className={`${darkmode? 'bg-black shadow-lg shadow-[#030eee]': 'bg-white shadow-lg shadow-pink-500'} flex fixed w-full top-0 justify-between items-center p-3`}>
      <div className='flex items-center justify-between w-[600px] gap-11'>
        <Link to='/'><img src={logo} onClick={() => setActiveHeader(0)} className='w-[50px] md:w-[180px]' /></Link>
        <ul className='hidden md:flex gap-4 md:gap-14'>
          {navList.map((item, index) => (
            <Link key={index} to={ item.to } onClick={() => { setActiveHeader(index); setSearchBar(false) }} className={`${activeHeader === index && 'bg-[#030eee] p-1 rounded-lg text-white'}`}>{item.name}</Link>
          ))}
        </ul>
      </div>

      <div onClick={()=>setDarkMode(!darkmode)} className='flex gap-1 items-center cursor-pointer'>
        <VscColorMode color='#030eee' size={30} />
        {darkmode? <h5 className='text-white mr-7 text-[5px] md:text-2xl'>Light Mode</h5>:<h5 className='text-[#030eee] mr-20 text-[5px] md:text-2xl'>Dark Mode</h5>}
      </div>
      <MdOutlineMenuOpen size={35} onClick={() => setMenuOpen(!menuOpen)} className='text-pink-600 md:hidden' />

      

      <button onClick={() => (setPresentationMenu(!presentationMenu), setActiveHeader(3))} className='hidden bg-pink-500 text-white rounded-full md:flex items-center gap-1'>Video Presentation <BiSolidVideos size={20} /> </button>

    </div>
  )
}

export default Header