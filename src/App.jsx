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

function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/blog-detail/:id' element={<BlogDetail />} />
        <Route path='/presentation' element={<VideoPresentation/>}/>
      </Routes>
      <MenuSidebar/>
      <SocialSidebar/>
    </div>
  )
}

export default App
