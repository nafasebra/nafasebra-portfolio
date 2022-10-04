import React from 'react'
import SocialSection from '../ui/SocialSection'

function Header() {
  return (
    <header className='flex flex-col-reverse lg:flex-row items-center justify-between py-20'>
      <div className='w-[90%] lg:w-[48%]'>
        <p className='text-xl text-light'>سلام به همگی. بنده</p>
        <h1 className='text-5xl text-orange font-bold py-5'>نفس ابراهیمی</h1>
        <p className='text-light text-xl'>یک برنامه نویس فرانت اند</p>
        <p className='pt-5 text-sm leading-6 text-gray-400'>
          و همچنین کسی که یادگیری, یاددادن و خلق چیز ها براش تفریحه و سعی میکنه کمکی باشه برای جامعه امروز. کارتیمی براش جذابه و دوست داره از بقیه چه کوچیکتر یا چه بزرگتر تجربه کسب کنه...
        </p>
        <SocialSection />
      </div>
      <div className='w-[90%] lg:w-[48%]'>
        {/* image content */}
      </div>
    </header>
  )
}

export default Header