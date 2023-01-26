import React, { useEffect } from "react";
import Link from "next/link";

type PropType = {
  show: boolean;
  setClose: () => void;
};

function Sidebar({ show, setClose }: PropType) {
  useEffect(() => {
    if (show) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "visible";
  }, [show]);

  return (
    <aside
      className={`${
        show
          ? "opacity-100 z-30 translate-y-0"
          : "opacity-0 -z-20 -translate-y-10"
      } flex flex-col z-30 fixed inset-0 bg-dark-100`}
    >
      <div className="flex items-center jsutify-end">
        <button
          className={`cursor-pointer p-3 m-2 text-light flex items-center justify-center`}
          onClick={setClose}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`flex flex-col flex-grow items-center justify-center text-light`}
      >
        <li className="my-2">
          <Link href="#header" passHref>
            <p
              onClick={setClose}
              className="text-gray-200 text-lg py-3 cursor-pointer relative"
            >
              صفحه اصلی
            </p>
          </Link>
        </li>
        <li className="my-2">
          <Link href="#about" passHref>
            <p
              onClick={setClose}
              className="text-gray-200 text-lg py-3 cursor-pointer relative"
            >
              درباره من
            </p>
          </Link>
        </li>
        <li className="my-2">
          <Link href="#projects" passHref>
            <p
              onClick={setClose}
              className="text-gray-200 text-lg py-3 cursor-pointer relative"
            >
              نمونه کارها
            </p>
          </Link>
        </li>
        <li className="my-2">
          <Link href="#skills" passHref>
            <p
              onClick={setClose}
              className="text-gray-200 text-lg py-3 cursor-pointer relative"
            >
              مهارت ها
            </p>
          </Link>
        </li>
        <li className="my-2">
          <Link href="#blog" passHref>
            <p
              onClick={setClose}
              className="text-gray-200 text-lg py-3 cursor-pointer relative"
            >
              بلاگ
            </p>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
