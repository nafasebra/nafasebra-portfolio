import React from "react";
import Image from 'next/image'


function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-poppins" dir="ltr">
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/html.svg" alt="html icon" />
        </div>
        <span className="ml-3">HTML</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/css.svg" alt="css icon" />
        </div>
        <span className="ml-3">CSS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/js.svg" alt="js icon" />
        </div>
        <span className="ml-3">JavaScript</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/css.svg" alt="css icon" />
        </div>
        <span className="ml-3">TailwindCSS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/css.svg" alt="css icon" />
        </div>
        <span className="ml-3">Bootstrap</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
        <Image layout="fill" src="/assets/icons/sass.svg" alt="sass icon" />
        </div>
        <span className="ml-3">SASS/LESS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/react.svg" alt="react js icon" />
        </div>
        <span className="ml-3">ReactJS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/react.svg" alt="react js icon" />
        </div>
        <span className="ml-3">Redux(toolkit)</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/ts.svg" alt="typescript icon" />
        </div>
        <span className="ml-3">TypeScript</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/npm.svg" alt="npm icon" />
        </div>
        <span className="ml-3">NPM/Yarn</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/figma.svg" alt="git icon" />
        </div>
        <span className="ml-3">Git</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/react.svg" alt="react js icon" />
        </div>
        <span className="ml-3">NextJS</span>
      </div>
      <div className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src="/assets/icons/figma.svg" alt="figma icon" />
        </div>
        <span className="ml-3">AdobeXD/Figma</span>
      </div>
    </div>
  );
}

export default Skills;
