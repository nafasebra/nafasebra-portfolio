import React from "react";

type PropType = {
  title: string;
  subTitle: string;
};

function TopSection(props: PropType) {
  const { title, subTitle } = props;

  return (
    <div className="pb-16 space-y-3">
      <p className="flex items-center text-orange font-bold">
        <span className="block ml-2 w-7 h-[3px] bg-orange"></span>
        {title}
      </p>
      <h3 className="text-light font-bold text-3xl leading-[3rem]">
        {subTitle}
      </h3>
    </div>
  );
}

export default TopSection;
