import React from "react";
import DarkSection from "../layout/DarkSection";
import Image from 'next/image'
import SocialSection from "../ui/SocialSection";

function Footer() {
  return (
    <footer>
      <DarkSection>
        <div className="flex flex-col items-center">
          <h2 className="text-gray-300 pb-10 font-bold">با من در شبکه های اجتماعی درارتباط باش...</h2>
          <div className="w-16 h-[100px] mx-auto">
            <div className="w-full h-full relative">
              <Image src="/assets/images/arrow-dashed.svg" layout="fill" alt="" />
            </div>
          </div>
          <SocialSection />
        </div>
      </DarkSection>
    </footer>
  );
}

export default Footer;
