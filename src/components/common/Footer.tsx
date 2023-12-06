import React from "react";
import Image from "next/image";
import SocialSection from "@components/ui/SocialSection";

function Footer() {
  return (
    <footer className="py-16 container">
      <div className="flex flex-col items-center">
        <h2 className="text-gray-300 pb-10 font-bold">
          با من درصورت تمایل در ارتباط باش...
        </h2>
        <div className="w-16 h-[100px] mx-auto">
          <div className="w-full h-full relative">
            <Image
              src="/assets/images/arrow-dashed.svg"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <SocialSection />
      </div>
    </footer>
  );
}

export default Footer;
