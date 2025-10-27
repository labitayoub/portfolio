import React from 'react'

const footer = () => {
  return (
    <div className='w-[95%] mx-auto flex justify-center items-center flex flex-col border-l-2 border-r-2 border-accent || lg:mt-[20px] lg:px-[100px]'>
      <h1 className='text-accent text-[20px] font-bold'>Code is art</h1>
      <h1 className='text-[13px]'>©2024 LabitAyoub</h1>
      <h1 className='w-[80%] text-[15px] text-center text-gray-500'>
        Loosely designed in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 hover:text-gray-300 ">Figma </a>
        and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 hover:text-gray-300 ">Visual Studio Code </a>
        by yours truly. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 hover:text-gray-300 ">Next.js </a>
        and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 hover:text-gray-300 ">Tailwind CSS </a>,
        deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 hover:text-gray-300 ">Vercel </a>.
        All text is set in the <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-700 hover:text-gray-300 ">Inter </a> typeface.
      </h1>
      
    </div>

  )
}

export default footer
