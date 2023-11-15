import React, { useContext } from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { ProjectsContext } from '../context/ProjectsContext'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const { setSearchBar, searchBar, search, setSearch, posts } = useContext(ProjectsContext)
    const navigate = useNavigate()

    return (
        <div className={`${searchBar ? 'right-0' : '-right-full'} w-full h-full fixed top-0 sm:max-w-[500px] transition-all
    duration-500 scroll-smooth ease-in-out bg-white overflow-scroll shadow-md shadow-pink-600 `}>
            <div className='flex w-[500px] items-center justify-between py-4 px-7 border-b-[1px] border-[#030eee] fixed top-0 bg-white'>
                <h4 className='font-semibold text-[#030eee]  hidden md:block'>Search Reslut</h4>
                <IoMdArrowForward size={20} onClick={() => setSearchBar(false)} className=' hidden md:block cursor-pointer text-pink-600' />
                <IoMdClose size={20} onClick={() => setSearchBar(false)} className=' md:hidden cursor-pointer text-pink-600'/>
            </div>

            <div className='fixed top-12 w-[490px] ml-1 bg-white lg:hidden shadow-lg shadow-[#030eee] p-4 rounded-lg mt-[10px] flex items-center gap-1'>
                <AiOutlineSearch size={20} className='text-[20px] text-[#030eee]' />
                <input onClick={() => setSearchBar(true)} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className='text-[#030eee] outline-none w-[90%] ' />
            </div>

            <div className='flex flex-col p-2 gap-5 lg:mt-16 mt-32'>
                {posts.filter((item) => {
                    return search.toLocaleLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(search)
                }).map((item) => (
                    <div key={item.id} onClick={() => navigate('blog-detail/' + item.id)} className='cursor-pointer
                flex h-[200px] gap-2 shadow-sm shadow-[#030eee] rounded-2xl'>
                        <img src={item.image} className='w-[150px] rounded-2xl object-cover h-[200px]' />
                        <div className='flex flex-col h-full justify-center p-2'>
                            <h4 className='text-pink-600'>{item.tag}</h4>
                            <h2 className='text-[23px] text-[#030eee] font-bold mt-3'>{item.title}</h2>
                            <h4 className='w-full  line-clamp-4'>{item.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar