import React from "react";
import Link from 'next/link'

type PropType = {
  show: boolean;
  setClose: () => void;
};

function Sidebar({ show, setClose }: PropType) {
  return (
    <div
      className={`fixed -z-20 -top-40 left-0 right-0 -translate-y-10 rounded-full bg-black flex flex-col items-center justify-center w-0 h-0 ${
        show && "z-10 translate-y-0 w-[calc(100vw * 2)] h-[calc(100vh * 2)]"
      }`}
    >
      <div
        className={`fixed -z-10 inset-0 bg-transparent w-screen h-screen flex flex-col items-center justify-center text-light`}
      >
        <div className="flex items-center justify-start">
          <button
            className={`fixed -z-10 top-0 left-0 p-3 m-1 flex items-center justify-center`}
            onClick={setClose}
          >
            <svg
              className="w-6 h-6"
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
          <li>
            <li className="mx-2">
              <Link
                href="#header"
                className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
              >
                صفحه اصلی
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href="#about"
                className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
              >
                درباره من
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href="#projects"
                className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
              >
                پروژه ها
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href="#skills"
                className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
              >
                مهارت ها
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href="#blog"
                className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
              >
                بلاگ
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
