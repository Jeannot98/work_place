import React, { useContext } from 'react'
import { ProjectsContext } from '../context/ProjectsContext'
import { Link } from 'react-router-dom';
import {language} from '../data/Data'

const PresentationSidebar = () => {
    const { presentationMenu, setPresentationMenu, setMenuOpen } = useContext(ProjectsContext);
    
    return (
        <div >
            {
                presentationMenu && (
                    <div onClick={() => setPresentationMenu(!presentationMenu)} className='fixed top-0 z-20 h-screen cursor-pointer w-full bg-pink-500/60'></div>
                )
            }
            <div className={`${presentationMenu ? 'top-16 right-5 ' : '-right-full'} fixed z-20  py-5 px-3  w-[200px] bg-pink-100  rounded-sm
    transition-all duration-500 flex flex-col space-y-3 items-center`}>
                {
                    language.map((item) => (
                        <Link key={item.id} to={`/presentation/${item.id}`}>
                            <h5 onClick={()=>(setPresentationMenu(!presentationMenu), setMenuOpen(false) )} className='text-[#030eee] font-bold cursor-pointer'>{item.name}</h5>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default PresentationSidebar