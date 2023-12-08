import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { tags } from '../data/Data'
import IntroPost from './IntroPost'
import { AiOutlineSearch } from 'react-icons/ai'
import Sidebar from './Sidebar'
import { ProjectsContext } from '../context/ProjectsContext'

const BlogList = () => {

  const { setSearchBar, setSearch, chose, activeIndex, posts, filteredPosts, darkmode} = useContext(ProjectsContext)
  const navigate = useNavigate()


  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className={`bg-white shadow-md ${darkmode ? 'shadow-[#033aee]': 'shadow-pink-600'} p-4 rounded-lg mt-[10px] mx-[25%] flex items-center gap-1`}>
          <AiOutlineSearch size={20} className={`text-[20px] ${darkmode ? 'text-[#033aee]': 'text-pink-600'} text-[#030eee]'`} />
          <input onClick={() => setSearchBar(true)} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className='text-[#030eee] outline-none w-[90%] ' />
        </div>
        <ul className='hidden gap-10 justify-center w-full mt-5'>
          {tags.map((item, index) => (
            <li key={item.id} onClick={() => chose(index, item.name)} className={`${index === activeIndex?'bg-pink-600 text-white': 'text-[#6c86d4]'} p-1 
          px-4 rounded-full cursor-pointer hover:scale-110 border-[1px] border-[#030eee] transition-all duration-300 ease-in-out `}>
              {item.name}
            </li>
          ))}
        </ul>

        <IntroPost post={posts[posts.length - 1]} />

        <div className='grid grid-cols-1 md:grid-cols-3  mt-10 px-10 md:px-14 lg:px-32 '>
          {filteredPosts.map((item) => (
            <div key={item.id} onClick={() => navigate('blog-detail/' + item.id)} className={`m-4 p-2 cursor-pointer rounded-2xl shadow-md ${darkmode ? 'shadow-[#033aee]': 'shadow-pink-600'}`}>
              <img src={item.image} className='w-full rounded-2xl object-cover h-[200px]' />
              <h4 className='text-pink-600'>{item.tag}</h4>
              <h2 className={`${darkmode ? 'text-[#033aee]' : 'text-[#030eee] '} text-[23px] font-bold mt`}>{item.title}</h2>
              <h4 className={`${darkmode ? 'text-white' : 'text-black'} line-clamp-1`}>{item.description}</h4>
            </div>
          ))}
        </div>
      </div>



      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default BlogList