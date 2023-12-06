import { SkillType } from "@data/skills";
import Image from "next/image";
import React from "react";

function SkillCard(props: SkillType) {
  const { icon, id, title } = props;

  return (
    <div
      key={id}
      className="overflow-hidden relative flex items-center py-3 px-4 text-light rounded-lg bg-dark-100"
    >
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 flex justify-center relative">
          <Image layout="fill" src={icon} alt={`${title} icon`} />
        </div>
        <span className="font-bold">{title}</span>
      </div>
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 filter grayscale opacity-10">
        <div className="w-20 h-20 flex justify-center relative">
          <Image layout="fill" src={icon} alt={`${title} icon`} />
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
