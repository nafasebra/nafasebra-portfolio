import React from 'react'

type PropType = {
    children: JSX.Element[] | JSX.Element;
}

function Container({children} : PropType) {
  return (
    <div className='w-full xl:w-[1100px] px-2 mx-auto'>{children}</div>
  )
}

export default Container