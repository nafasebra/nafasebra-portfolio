import React from "react";

type PropType = {
  children: React.ReactNode | React.ReactNode[];
};

function Button(props: PropType) {
  const { children } = props;

  return (
    <button
      className={`flex items-center justify-between gap-3 px-5 py-3 text-white rounded-lg bg-dark-100 shadow-md shadow-dark-200/50 hover:bg-orange hover:shadow-orange/50 transition-colors`}
    >
      {children}
    </button>
  );
}

export default Button;
