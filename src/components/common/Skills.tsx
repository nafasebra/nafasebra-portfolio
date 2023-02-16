import React from "react";
import Image from "next/image";

import { SkillData } from "@data/skills";

function Skills() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-poppins"
      dir="ltr"
    >
      {SkillData.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-start py-3 px-4 text-light rounded-lg bg-dark-200"
        >
          <div className="w-6 h-6 flex justify-center relative">
            <Image layout="fill" src={item.icon} alt={`${item.title} icon`} />
          </div>
          <span className="ml-3">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
