import image from '../assets/image/shop.png'
import disney from '../assets/image/disney_clone.png'
import data from '../assets/image/data.png'
import ecommerce1 from '../assets/image/ecommerce1.png'
import recipapp1 from '../assets/image/recipeapp1.png'
import netflix1 from '../assets/image/netflix1.png'
import recipefinder1 from '../assets/image/recipefinder1.png'
// import course_app_ui1 from '../assets/image/courseapp1.png'

// import courseapp1V from '../assets/videos/courseapp1.mp4'

import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


export const list = [
  {
    id: 1,
    video: false,
    title: 'Disney+ clone',
    description: `Disney clone using React, Vite, Tailwind CSS, TMDB, and Vercel. I started by creating a new React application and configuring Vite. Then, I installed Tailwind CSS and configure it for the project. Next, I installed the TMDB API and start fetching data from it. Finally, I created a simple UI to display the data.`,
    image: disney,
    tag: 'React',
    code: 'https://github.com/Jeannot98/disney_clone',
    demo: 'https://disney-clone-brown-nine.vercel.app/'
  },
  {
    id: 2,
    video: false,
    title: 'Online Shop UI',
    description: ``,
    image: image,
    tag: 'React',
    code: 'https://github.com/Jeannot98/shop',
    demo: 'https://shop-1xk.pages.dev/'
  },
  {
    id: 3,
    video: false,
    title: 'React JS & Tailwind CSS 100% mobile responsive website',
    description: ` React JS & Tailwind CSS 100% mobile responsive website. I installed and used Tailwind CSS in a “Create-React-App” application. UseState hook to toggle the mobile side drawer menu. Import “React-Icons” dependency for social icons.  Incorporate both flexbox and grid layouts.`,
    image: data,
    tag: 'React',
    code: 'https://github.com/Jeannot98/dataWebsite',
    demo: 'https://datawebsite-bt9.pages.dev/'
  },
  {
    id: 4,
    video: false,
    title: 'Recipe App',
    description: ` React JS & Tailwind CSS 100% mobile responsive website(Recipe app). `,
    image: recipapp1,
    tag: 'React',
    code: 'https://github.com/Jeannot98/recipeapp1',
    demo: 'https://recipeapp1.pages.dev/'
  },
  // {
  //   id: 5,
  //   video: true,
  //   title: 'Course App UI',
  //   description: `Course App UI using React Native `,
  //   image: course_app_ui1,
  //   tag: 'React Native',
  //   code: 'https://github.com/Jeannot98/course_app_ui1',
  //   demo: courseapp1V
  // },
  {
    id: 5,
    video: false,
    title: ' Ecommerce Website',
    description: ` Ecommerce Website With React JS And Tailwind CSS | Fake Store API `,
    image: ecommerce1,
    tag: 'React',
    code: 'https://github.com/Jeannot98/ecommerce1',
    demo: 'https://ecommerce1.pages.dev/'
  },
  {
    id: 6,
    video: false,
    title: ' Recipe Finder App',
    description: ` Recipe Finder App With React JS And Tailwind CSS | Edamam API `,
    image: recipefinder1,
    tag: 'React',
    code: 'https://github.com/Jeannot98/recipe_finder',
    demo: 'https://recipe-finder-smoky.vercel.app/'
  },
  {
    id: 7,
    video: false,
    title: ' Netflix Clone',
    description: `Netflix Clone With React JS And Tailwind CSS | TMDB API `,
    image: netflix1,
    tag: 'React',
    code: 'https://github.com/Jeannot98/netflix-clone1',
    demo: 'https://netflix-clone1-xi.vercel.app/'
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

export const language = [
  {
      id: 1,
      name: 'English',
      url: 'https://youtu.be/SMsBmZC5FiI',
      greeting:  'THANKS!'
  },
  {
      id: 2,
      name: 'French',
      url: 'https://youtu.be/FwlZpKVBSgs',
      greeting:  'MERCI!'
  },
]
