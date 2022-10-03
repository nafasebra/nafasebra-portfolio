import React from "react";
import Image from 'next/image'


type PropType = {
  name: string;
  imageUrl: string;
  target: string;
};

function ProjectCard(props: PropType) {
  const { name, imageUrl, target } = props;
  return (
    <div className="flex flex-col">
      <div className="relative block w-full h-[170px] rounded-lg overflow-hidden group">
        <div className="z-10 absolute inset-0 flex items-center justify-center bg-orange text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
          <a
            href={target}
            className="flex items-center py-3 px-4 rounded-lg border-2 border-white bg-transparent hover:bg-white hover:text-orange"
          >
            <svg
              className="w-6 h-6 transition-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="mr-5">مشاهده سایت</span>
          </a>
        </div>
        <Image
          src={imageUrl}
          className="w-full h-full object-cover"
          alt="اسکرین شات وبسایت اسرز"
        />
      </div>
      <p className="text-gray-300 text-center py-3 text-sm">{name}</p>
    </div>
  );
}

export default ProjectCard;
