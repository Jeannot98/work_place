import React, { createContext, useState } from 'react'
import { list } from '../data/Data'

export const ProjectsContext = createContext();

const ProjectsProvider = ({children}) => {
  const posts = list;
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeHeader, setActiveHeader] = useState(0)
  const [filteredPosts, setfilteredPosts] = useState(posts)
  const [search, setSearch] = useState('')
  const [searchBar, setSearchBar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function chose(index, tag) {
    if (tag === 'All') {
      const filteredPost = posts
      setfilteredPosts(filteredPost)
    } else {
      const filteredPost = posts.filter((post) => {
        return (post.tag === tag)
      })
      setfilteredPosts(filteredPost)
    }

    setActiveIndex(index)
  };

  return (
    <ProjectsContext.Provider value={{posts, search, setSearch, chose, filteredPosts,setSearchBar,
      searchBar, activeIndex, activeHeader, setActiveHeader, menuOpen, setMenuOpen}}>{children}</ProjectsContext.Provider>
  )
}

export default ProjectsProvider;