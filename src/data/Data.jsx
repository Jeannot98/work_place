import image from '../assets/image/shop.png'
import disney from '../assets/image/disney_clone.png'
import data from '../assets/image/data.png'
import ecommerce1 from '../assets/image/ecommerce1.png'

import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


export const list = [
  {
    id: 1,
    title: 'Disney+ clone',
    description: `Disney clone using React, Vite, Tailwind CSS, TMDB, and Vercel. I started by creating a new React application and configuring Vite. Then, I installed Tailwind CSS and configure it for the project. Next, I installed the TMDB API and start fetching data from it. Finally, I created a simple UI to display the data.`,
    image: disney,
    tag: 'React',
    demo: 'https://disney-clone-brown-nine.vercel.app/'
  },
  {
    id: 2,
    title: 'Online Shop UI',
    description: ``,
    image: image,
    tag: 'React',
    demo: 'https://shop-1xk.pages.dev/'
  },
  {
    id: 3,
    title: 'React JS & Tailwind CSS 100% mobile responsive website',
    description: ` React JS & Tailwind CSS 100% mobile responsive website. I installed and used Tailwind CSS in a “Create-React-App” application. UseState hook to toggle the mobile side drawer menu. Import “React-Icons” dependency for social icons.  Incorporate both flexbox and grid layouts.`,
    image: data,
    tag: 'React',
    demo: 'https://datawebsite-bt9.pages.dev/'
  },
  {
    id: 4,
    title: ' Ecommerce Website',
    description: ` Ecommerce Website With React JS And Tailwind CSS | Fake Store API `,
    image: ecommerce1,
    tag: 'React',
    demo: 'https://ecommerce-website-ej9.pages.dev/'
  },
]

export const tags = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'React',
  },
  {
    id: 3,
    name: 'React Native',
  },
]

export const navList = [
  {
    id: 1,
    name: 'Home',
    to: '/'
  },
  {
    id: 2,
    name: 'Portfolio',
    to: '/portfolio'
  },
  {
    id: 3,
    name: 'Contact',
    to: '/contact'
  },
]

export const links = [
  {
      id:1,
      child: (
          <>LinkedIn
          <FaLinkedin size={30}/>
      </>
      ),
      href:'https://www.linkedin.com/in/jeannot-mogore-27a6191b7/',
    
  },
  {
      id:2,
      child: (
          <>GitHub
          <FaGithub size={30}/>
      </>
      ),
      href:'https://github.com/Jeannot98',
  },
  {
      id:3,
      child: (
          <>Mail
          <HiOutlineMail size={30}/>
      </>
      ),
      href:'mailto:mogorejeannot@gmail.com',
  },
  {
      id:4,
      child: (
          <>Resume
          <BsFillPersonLinesFill size={30}/>
      </>
      ),
      href:'/portfolio.pdf',
      style:'rounded-br-md',
      download:true,
  },
]
