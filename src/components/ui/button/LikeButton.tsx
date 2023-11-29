import React, { useState } from "react";

interface IProps {
  handleToggle?: () => void;
}

function LikeButton(props: IProps) {
  const [liked, setLiked] = useState(false);
  const { handleToggle } = props;

  const handleClick = () => {
    // handleToggle();
    setLiked((prev) => {
      return !prev;
    });
  };

  return (
    <button
      className={`${
        liked ? "text-red-500 animate-like" : "text-white"
      } flex justify-center items-center w-10 h-10 bg-transparent hover:bg-dark-100 rounded-lg`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "#ef4444" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}

export default LikeButton;
