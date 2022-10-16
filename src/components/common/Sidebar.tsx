import React from "react";

type PropType = {
  show: boolean;
  setClose: () => void;
};

function Sidebar({ show, setClose }: PropType) {
  return (
    <div
      className={`fixed -z-20 inset-0 rounded-full bg-black flex flex-col items-center justify-center w-0 h-0`}
    >
      <button
        className={`fixed -z-10 top-0 left-0 p-3 m-1 flex items-center justify-center`}
        onClick={setClose}
      ></button>
      <ul
        className={`fixed -z-10 inset-0 bg-transparent w-screen h-screen flex flex-col items-center justify-center text-light`}
      >
        <li>
          <li className="mx-2">
            <a
              href="#header"
              className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
            >
              صفحه اصلی
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#about"
              className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
            >
              درباره من
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#projects"
              className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
            >
              پروژه ها
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#skills"
              className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
            >
              مهارت ها
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#blog"
              className='text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
            >
              بلاگ
            </a>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
