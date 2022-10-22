import React from "react";
import Image from 'next/image'

import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import tsIcon from "../../assets/icons/ts.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import gitIcon from "../../assets/icons/git.svg";
import reactIcon from "../../assets/icons/react.svg";
import sassIcon from "../../assets/icons/sass.svg";
import npmIcon from "../../assets/icons/npm.svg";


function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-poppins" dir="ltr">
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={htmlIcon} alt="html icon" />
        </div>
        <span className="ml-3">HTML</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={cssIcon} alt="css icon" />
        </div>
        <span className="ml-3">CSS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={jsIcon} alt="js icon" />
        </div>
        <span className="ml-3">JavaScript</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={cssIcon} alt="css icon" />
        </div>
        <span className="ml-3">TailwindCSS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={cssIcon} alt="css icon" />
        </div>
        <span className="ml-3">Bootstrap</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={sassIcon} alt="sass icon" />
        </div>
        <span className="ml-3">SASS/LESS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={reactIcon} alt="react js icon" />
        </div>
        <span className="ml-3">ReactJS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={reactIcon} alt="react js icon" />
        </div>
        <span className="ml-3">Redux(toolkit)</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={tsIcon} alt="typescript icon" />
        </div>
        <span className="ml-3">TypeScript</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={npmIcon} alt="npm icon" />
        </div>
        <span className="ml-3">NPM/Yarn</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={gitIcon} alt="git icon" />
        </div>
        <span className="ml-3">Git</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={reactIcon} alt="react js icon" />
        </div>
        <span className="ml-3">NextJS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center">
          <Image src={figmaIcon} alt="figma icon" />
        </div>
        <span className="ml-3">AdobeXD/Figma</span>
      </div>
    </div>
  );
}

export default Skills;
