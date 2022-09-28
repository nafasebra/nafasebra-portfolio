import React from 'react'

function Header() {
  return (
    <header className='flex flex-col-reverse lg:flex-row items-center justify-between py-10'>
      <div className='w-[90%] lg:w-[48%]'>
        <p className='text-xl text-light'>Hello, I am</p>
        <h1 className='text-5xl text-orange font-bold py-3'>Nafas Ebrahimi</h1>
        <p className='text-light'>Front-end developer</p>
        <p className='pt-5 text-sm leading-6 text-gray-400'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et officiis modi quod consectetur tenetur, ex ipsa delectus? Vitae asperiores harum nostrum velit ad excepturi facere. Odio cumque quia saepe. Dolore.
        </p>
      </div>
      <div className='w-[90%] lg:w-[48%]'></div>
    </header>
  )
}

export default Header