import React from "react";
import Image from "next/image";

import { SkillData } from "@data/skills";
import SkillCard from "@components/ui/card/SkillCard";

function Skills() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-poppins"
      dir="ltr"
    >
      {SkillData.map((item) => (
        <SkillCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Skills;
