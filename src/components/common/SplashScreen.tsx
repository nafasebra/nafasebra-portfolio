import React from 'react'
import Loading from '../ui/Loading'

function SplashScreen() {
  return (
    <div className='fixed inset-0 w-screen h-screen flex items-center justify-center z-30 visible opacity-100 bg-dark-100' id='splashScreen'>
      <Loading />
    </div>
  )
}

export default SplashScreen
