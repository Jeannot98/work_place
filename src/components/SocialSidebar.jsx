import React from 'react'
import {links} from'../data/Data'

const SocialSidebar = () => {
    
    return (
        <div className='flex flex-col top-[35%] right-0 fixed'>
            <ul>

                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`cursor-pointer flex justify-between items-center mb-1 w-40 h-14 px-4 bg-[#030fee9a] mr-[-100px] hover:rounded-md hover:mr-[-10px] duration-300 ${style}`}>
                        <a href={href} className='flex flex-row-reverse justify-between  items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialSidebar