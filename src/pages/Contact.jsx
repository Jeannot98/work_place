import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='flex flex-col  fixed top-16 w-full h-screen bg-white'>
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto w-full h-full'>


        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/9c86e1fb-0499-491e-ba43-2c5f93876aa2" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input type="text" name="name" placeholder='Enter your name' className='p-2 shadow-md shadow-[#030eee] bg-transparent border-2 rounded-md text-[#030eee]
            focus:outline-none'/>

            <input type="text" name="email" placeholder='Enter your email' className='my-4 p-2 shadow-md shadow-[#030eee] bg-transparent border-2 rounded-md text-[#030eee]
            focus:outline-none'/>

            <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent shadow-md shadow-[#030eee] border-2 rounded-md text-[#030eee] focus:outline-none'></textarea>

            <button className='text-white bg-gradient-to-b from-[#030eee] to-pink-600 px-6 py-3 my-8 mx-auto flex items-center
                rounded-md hover:scale-110 duration-300'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact