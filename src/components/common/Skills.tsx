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
        <span>HTML</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={cssIcon} alt="css icon" />
        <span>CSS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={jsIcon} alt="js icon" />
        <span>JavaScript</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={cssIcon} alt="css icon" />
        <span>TailwindCSS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={cssIcon} alt="css icon" />
        <span>Bootstrap</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={sassIcon} alt="sass icon" />
        <span>SASS/LESS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={reactIcon} alt="react js icon" />
        <span>ReactJS</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={reactIcon} alt="react js icon" />
        <span>Redux(toolkit)</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={tsIcon} alt="typescript icon" />
        <span>TypeScript</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={npmIcon} alt="npm icon" />
        <span>NPM/Yarn</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={gitIcon} alt="git icon" />
        <span>Git</span>
      </div>
      <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
        <Image src={reactIcon} alt="react js icon" />
        <span>NextJS</span>
      </div>
    </div>
  );
}

export default Skills;
