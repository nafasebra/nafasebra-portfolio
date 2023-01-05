import Image from 'next/image'
import React from 'react'
import SocialSection from '../ui/SocialSection'

import mainImage from '../../assets/images/Homepage.png'

function Header() {
  return (
    <header id='header'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between py-10'>
        <div className='w-[90%] lg:w-[48%]'>
          <p className='text-sm text-gray-300'>سلام به همگی. <span className='text-orange font-bold'>من</span></p>
          <h1 className='text-5xl text-orange font-bold py-5'>نفس ابراهیمی</h1>
          <p className='text-gray-200 text-xl'> برنامه نویس <span className='text-light font-bold'>فرانت اند وب</span></p>
          <p className='pt-5 text-sm leading-6 text-gray-400'>
            و همچنین کسی که یادگیری, یاددادن و خلق چیز ها براش تفریحه و سعی میکنه کمکی باشه برای جامعه امروز. کارتیمی براش جذابه و دوست داره از بقیه چه کوچیکتر یا چه بزرگتر تجربه کسب کنه...
          </p>
          <SocialSection />
        </div>
        <div className='w-[90%] h-full lg:w-[48%] mb-5 md:mb-0'>
          <div className='w-[90%] h-[650px] relative object-contain mx-auto'>
            <Image layout="fill" alt="nafasebra homepage" src="/assets/images/homepage.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-28 pb-36">
        <div className="w-full md:w-[45%]">{/* image content */}</div>
        <div className="w-full md:w-[45%]">
          <p className="text-gray-400 leading-7">
            حدودا دو سه سالی هست برنامه نویسی فرانت اند کار میکنم. علاقه مند
            به خلق کردن, یاددادن و یادگیری. علاقه مند به کارهای تیمی و
            اینچیزا :) برای همینه که شغل برنامه نویسی رو انتخاب کردم <br />
            رسالتم اینه که برای جامعه اونطوری که از دستم برمیاد کاری انجام
            بدم و دنیا رو یک جای راحتی برای انسان های دوست داشتنی تبدیل کنم
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header