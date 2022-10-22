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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-poppins">
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">HTML</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={htmlIcon} alt="html icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">CSS</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={cssIcon} alt="css icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">JavaScript</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={jsIcon} alt="js icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">TailwindCSS</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={cssIcon} alt="css icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">Bootstrap</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={cssIcon} alt="css icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">SASS/LESS</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={sassIcon} alt="sass icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">ReactJS</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={reactIcon} alt="react js icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">Redux(toolkit)</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={reactIcon} alt="react js icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">TypeScript</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={tsIcon} alt="typescript icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">NPM/Yarn</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={npmIcon} alt="npm icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">Git</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={gitIcon} alt="git icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">NextJS</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={reactIcon} alt="react js icon" />
        </div>
      </div>
      <div className="flex items-center justify-end py-3 px-4 text-light rounded-lg bg-dark-200">
        <span className="ml-3">AdobeXD/Figma</span>
        <div className="w-6 h-6 flex justify-center">
          <Image src={figmaIcon} alt="figma icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
