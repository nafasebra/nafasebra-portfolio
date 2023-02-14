import React from "react";
import Image from "next/image";

import DarkSection from "@components/layout/DarkSection";
import SocialSection from "@components/ui/SocialSection";

function Footer() {
  return (
    <footer>
      <DarkSection>
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
      </DarkSection>
    </footer>
  );
}

export default Footer;
