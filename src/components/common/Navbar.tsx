import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 px-2">
      <h1 className="text-3xl font-bold text-orange">ne.dev</h1>
      <ul className="flex items-center">
        <li className="mx-2">
          <a
            href="#"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            Intro
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            About me
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            Project
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            Skills
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className='text-light py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'
          >
            Post
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <button className="p-2 mx-3 text-light">
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
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        </button>
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
