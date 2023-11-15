import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { tags } from '../data/Data'
import IntroPost from './IntroPost'
import { AiOutlineSearch } from 'react-icons/ai'
import Sidebar from './Sidebar'
import {ProjectsContext} from '../context/ProjectsContext'

const BlogList = () => {

  const {setSearchBar, setSearch, chose, activeIndex, posts,filteredPosts}=useContext(ProjectsContext)
  const navigate = useNavigate()
  

  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='bg-white shadow-lg shadow-[#030eee] p-4 rounded-lg mt-[10px] mx-[25%] flex items-center gap-1'>
          <AiOutlineSearch size={20} className='text-[20px] text-[#030eee]' />
          <input onClick={()=>setSearchBar(true)}  onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className='text-[#030eee] outline-none w-[90%] ' />
        </div>
        <ul className='flex gap-10 justify-center w-full mt-5'>
          {tags.map((item, index) => (
            <li key={item.id} onClick={() => chose(index, item.name)} className={`${index === activeIndex && 'bg-pink-600 text-white'} p-1 
          px-4 rounded-full cursor-pointer hover:scale-110 hover:border-[1px] border-[#030eee] transition-all duration-300 ease-in-out text-[#030eee]`}>
              {item.name}
            </li>
          ))}
        </ul>

        <IntroPost post={posts[posts.length-1]} />

        <div className='grid grid-cols-1 md:grid-cols-2  mt-10 px-10 md:px-14 lg:px-32 '>
          {filteredPosts.map((item) => (
            <div key={item.id} onClick={() => navigate('blog-detail/' + item.id)} className='m-4 cursor-pointer'>
              <img src={item.image} className='w-full rounded-2xl object-cover h-[400px]' />
              <h4 className='text-pink-600'>{item.tag}</h4>
              <h2 className='text-[23px] text-[#030eee] font-bold mt-3'>{item.title}</h2>
              <h4 className='line-clamp-6'>{item.description}</h4>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Sidebar/>
      </div>
    </div>
  )
}

export default BlogList