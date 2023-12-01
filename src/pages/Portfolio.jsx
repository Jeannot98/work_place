import React, { useContext } from 'react'
import Search from '../components/Search'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import { list } from '../data/Data'
import { ProjectsContext } from '../context/ProjectsContext'

const Portfolio = () => {
  const {darkmode} = useContext(ProjectsContext);
  return (
    <div className={`${darkmode? 'bg-black': 'bg-white'} md:pt-16`}>
        

        <Search/>

        {list.length>0? <BlogList/>: null}


        <Footer/>
    </div>
  )
}

export default Portfolio