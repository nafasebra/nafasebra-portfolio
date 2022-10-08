import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 px-2">
      <h1 className="text-3xl font-bold text-orange">ne.dev</h1>
      <ul className="flex items-center">
        <li className="mx-2">
          <a
            href="#header"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            صفحه اصلی
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#about"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            درباره من
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#projects"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            پروژه ها
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#skills"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            مهارت ها
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#blog"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            بلاگ
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <button className="p-2 text-light">
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
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
