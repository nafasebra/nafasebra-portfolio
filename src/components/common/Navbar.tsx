import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-4xl font-bold'>ne.dev</h1>
      <div className='flex items-center'>
        <a href="#" className='block text-light mx-2 my-3 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 w-0 h-[1px] bg-orange hover:text-orange hover:after:w-4'>Intro</a>
        <a href="#" className='block text-light mx-2 my-3 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 w-0 h-[1px] bg-orange hover:text-orange hover:after:w-4'>About me</a>
        <a href="#" className='block text-light mx-2 my-3 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 w-0 h-[1px] bg-orange hover:text-orange hover:after:w-4'>Project</a>
        <a href="#" className='block text-light mx-2 my-3 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 w-0 h-[1px] bg-orange hover:text-orange hover:after:w-4'>Skills</a>
        <a href="#" className='block text-light mx-2 my-3 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 w-0 h-[1px] bg-orange hover:text-orange hover:after:w-4'>Post</a>
      </div>
      <div className='flex items-center'>
        
      </div>
    </div>
  )
}

export default Navbar