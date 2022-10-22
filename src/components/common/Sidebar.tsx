import React from "react";
import Link from "next/link";

type PropType = {
  show: boolean;
  setClose: () => void;
};

function Sidebar({ show, setClose }: PropType) {
  return (
    <div
      className={`fixed -z-20 hidden -top-40 left-0 right-0 -translate-y-10 rounded-full bg-black flex-col items-center justify-center w-0 h-0 ${
        show &&
        "z-10 opacity-10 flex translate-y-0 w-[calc(100vw * 2)] h-[calc(100vh * 2)]"
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
              <p
                className="text-gray-200 text-sm py-3 mx-2 relative"
                cath
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
              <Link href="#header" passHref>
                <p className="text-gray-200 text-sm py-3 mx-2 relative">
                  صفحه اصلی
                </p>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="#about" passHref>
                <p className="text-gray-200 text-sm py-3 mx-2 relative">
                  درباره من
                </p>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="#projects" passHref>
                <p className="text-gray-200 text-sm py-3 mx-2 relative">
                  نمونه کارها
                </p>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="#skills" passHref>
                <p className="text-gray-200 text-sm py-3 mx-2 relative">
                  مهارت ها
                </p>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="#blog" passHref>
                <p className="text-gray-200 text-sm py-3 mx-2 relative">بلاگ</p>
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
