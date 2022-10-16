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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-poppins text-left">
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={htmlIcon} alt="html icon" />
        <span className="ml-3">HTML</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={cssIcon} alt="css icon" />
        <span className="ml-3">CSS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={jsIcon} alt="js icon" />
        <span className="ml-3">JavaScript</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={cssIcon} alt="css icon" />
        <span className="ml-3">TailwindCSS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={cssIcon} alt="css icon" />
        <span className="ml-3">Bootstrap</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={sassIcon} alt="sass icon" />
        <span className="ml-3">SASS/LESS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={reactIcon} alt="react js icon" />
        <span className="ml-3">ReactJS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={reactIcon} alt="react js icon" />
        <span className="ml-3">Redux(toolkit)</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={tsIcon} alt="typescript icon" />
        <span className="ml-3">TypeScript</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={npmIcon} alt="npm icon" />
        <span className="ml-3">NPM/Yarn</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={gitIcon} alt="git icon" />
        <span className="ml-3">Git</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={reactIcon} alt="react js icon" />
        <span className="ml-3">NextJS</span>
      </div>
    </div>
  );
}

export default Skills;
