import {Route, Routes } from 'react-router-dom'
import './App.css'
import Portfolio from './pages/Portfolio'
import BlogDetail from './pages/BlogDetail'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MenuSidebar from './components/MenuSidebar'
import SocialSidebar from './components/SocialSidebar'
import VideoPresentation from './pages/VideoPresentation'
import {ProjectsContext} from './context/ProjectsContext'
import { useContext } from 'react'
import PresentationSidebar from './components/PresentationSidebar'

function App() {
 const {menuOpen, setMenuOpen, darkmode} = useContext(ProjectsContext)

  return (
    <div className={`${darkmode? 'bg-[#1a1c24fd]': 'bg-white'} `}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/blog-detail/:id' element={<BlogDetail />} />
        <Route path='/presentation/:id' element={<VideoPresentation/>}/>
      </Routes>
      {menuOpen&& <div onClick={()=>setMenuOpen(!menuOpen)} className='w-full h-full top-0 fixed bg-pink-500/50'></div>}
      <MenuSidebar/>
      
      <SocialSidebar/>
      <PresentationSidebar/>
      
    </div>
  )
}

export default App
