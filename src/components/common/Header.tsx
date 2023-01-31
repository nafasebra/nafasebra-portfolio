import Image from "next/image";
import React from "react";

import SocialSection from "@components/ui/SocialSection";

function Header() {
  return (
    <header id="header">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-10">
        <div className="w-[90%] lg:w-[48%]">
          <p className="text-sm text-gray-300">
            سلام به همگی. <span className="text-orange font-bold">من</span>
          </p>
          <h1 className="text-5xl text-orange font-bold py-5">نفس ابراهیمی</h1>
          <p className="text-gray-200 text-xl">
            {" "}
            برنامه نویس{" "}
            <span className="text-light font-bold">فرانت اند وب</span>
          </p>
          <p className="pt-5 text-sm leading-6 text-gray-400">
            و همچنین کسی که یادگیری, یاددادن و خلق چیز ها براش تفریحه و سعی
            میکنه کمکی باشه برای جامعه امروز. کارتیمی براش جذابه و دوست داره از
            بقیه چه کوچیکتر یا چه بزرگتر تجربه کسب کنه...
          </p>
          <SocialSection />
        </div>
        <div className="w-[90%] h-full lg:w-[48%] mb-5 md:mb-0">
          <div className="w-[90%] h-[650px] relative object-contain mx-auto">
            <Image
              layout="fill"
              alt="nafasebra homepage"
              src="/assets/images/homepage.png"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
