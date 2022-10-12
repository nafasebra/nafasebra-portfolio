import React from 'react'

type PropType = {
  show: boolean;
  setClose: () => void;
}

function Sidebar({show, setClose}: PropType) {
  return (
    <div className='fixed inset-0 rounded-full bg-black flex flex-col items-center justify-center'>
      
    </div>
  )
}

export default Sidebar