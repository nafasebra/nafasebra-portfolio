import React from "react";

interface PropType {
  id: number;
  title: string;
  description: string;
  wide?: boolean;
}

function ServiceCard(props: PropType) {
  const { id, title, description, wide } = props;

  return (
    <div className={`${wide ? "col-span-1 md:col-span-2" : ""} overflow-hidden relative rounded-lg bg-dark-100 shadow-dark-100 p-6 flex flex-col gap-4`}>
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 flex items-center justify-center text-sm shadow-md shadow-orange/30 rounded-full bg-orange text-white">
          {id}
        </div>
        <p className="font-bold text-white">{title}</p>
      </div>
      <p className="text-sm text-gray-300 text-justify leading-[1.7rem]">
        {description}
      </p>
      <div className="absolute -left-1 -bottom-1 w-8 h-8 scale-[300%] flex items-center justify-center text-sm rounded-full bg-white/5 text-dark-100 font-bold">
        {id}
      </div>
    </div>
  );
}

export default ServiceCard;
