import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectsContext } from '../context/ProjectsContext'

const IntroPost = ({post}) => {
  const navigate=useNavigate()
  const { darkmode } = useContext(ProjectsContext);
  return (
    <div onClick={()=>navigate('blog-detail/'+post.id)} className={` grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-14 lg:px-32 gap-8 cursor-pointer`}>
      <img src={post.image} className='rounded-2xl object-cover w-full h-full'/>
      <div>
        <h4 className='text-pink-600'>{post.tag}</h4>
        <h2 className={`${darkmode? 'text-[#033aee]': 'text-[#030eee] '} text-[23px] font-bold mt`}>{post.title}</h2>
        <h4 className={`${darkmode? 'text-white': 'text-black'} line-clamp-6`}>{post.description}</h4>
      </div>
    </div>
  )
}

export default IntroPost