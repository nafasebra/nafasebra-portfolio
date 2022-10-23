import React from "react";
import Image from "next/image";

type PropType = {
  name: string;
  description?: string;
  imageUrl: string;
  target: string;
};

function ProjectCard(props: PropType) {
  const { name, description, imageUrl, target } = props;

  return (
    <div className="relative overflow-hidden h-[300px] group rounded-lg">
      <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={`اسکرین شات ${name}`}
        />
      <div className="flex flex-col justify-end p-5 bg-gradient-to-t from-dark-100 via-dark-100/75 to-dark-100/30 absolute inset-0">
        <div>
          <p className="text-orange text-lg font-bold py-3">{name}</p>
          <div className="flex flex-col items-start justify-center h-[0] group-hover:h-[100px] overflow-hidden">
            <p className="text-light text-sm pb-5">{description || name}</p>
            <a
              href={target}
              className="flex items-center text-light hover:text-orange hover:underline hover:underline-offset-8"
            >
              <span className="ml-2">مشاهده سایت</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
