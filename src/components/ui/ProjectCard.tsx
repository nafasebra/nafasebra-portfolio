import React from "react";
import Image from "next/image";

type PropType = {
  name: string;
  description?: string;
  skills: string[];
  imageUrl: string;
  target: string;
};

function ProjectCard(props: PropType) {
  const { name, description, imageUrl, skills, target } = props;

  return (
    <div className="bg-dark-100 overflow-hidden rounded-lg transition-all">
      <div className="relative overflow-hidden w-full h-[170px]">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={`اسکرین شات ${name}`}
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <a href={target} target="_blank" className="text-orange text-lg font-bold">{name}</a>
        <div className="flex flex-col items-start justify-center overflow-hidden gap-5">
          <p className="text-light text-sm">
            {description || ""}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-light text-sm"> 
              زبان یا تکنولوژی های بکاررفته:
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {
                skills.map((item, index) => (
                  <div key={index} className="px-4 py-1 rounded-lg text-sm text-orange border border-orange">{item}</div>
                ))
              }
            </div>
          </div>
          <a
            href={target}
            className="flex items-center text-light hover:text-orange hover:underline hover:underline-offset-8"
          >
            <span className="ml-2 transition-none">مشاهده سایت</span>
            <svg
              className="w-5 h-5 transition-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
