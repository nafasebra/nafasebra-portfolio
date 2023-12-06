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
          className="overflow-hidden relative flex items-center py-3 px-4 text-light rounded-lg bg-dark-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex justify-center relative">
              <Image layout="fill" src={item.icon} alt={`${item.title} icon`} />
            </div>
            <span className="font-bold">{item.title}</span>
          </div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 filter grayscale opacity-10">
            <div className="w-20 h-20 flex justify-center relative">
              <Image layout="fill" src={item.icon} alt={`${item.title} icon`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
