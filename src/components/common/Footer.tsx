import React from "react";
import DarkSection from "../layout/DarkSection";
import arrowDashed from "../../assets/images/arrow-dashed.svg";
import Image from 'next/image'
import SocialSection from "../ui/SocialSection";

function Footer() {
  return (
    <footer>
      <DarkSection>
        <div className="flex flex-col items-center">
          <h2 className="text-gray-300 pb-10 font-bold">با من در شبکه های اجتماعی درارتباط باش...</h2>
          <Image src={arrowDashed} className="py-5 w-10" alt="" />
          <SocialSection />
        </div>
      </DarkSection>
    </footer>
  );
}

export default Footer;
