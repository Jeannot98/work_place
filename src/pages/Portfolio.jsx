import React from 'react'
import Search from '../components/Search'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'
import { list } from '../data/Data'

const Portfolio = () => {
  return (
    <div className='md:pt-16'>
        

        <Search/>

        {list.length>0? <BlogList/>: null}

        <Footer/>
    </div>
  )
}

export default Portfolio