import React, { useCallback, useEffect } from "react";
import Container from "../layout/Container";
import Sidebar from "./Sidebar";
import Link from "next/link"

function Navbar() {
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () =>
      window.scrollY >= 150 ? setScrolled(true) : setScrolled(false)
    );
  }, [scrolled]);

  const SetOpeningSidebar = useCallback(
    () => setShowMenu(true),
    [showMenu, setShowMenu]
  );

  const SetClosingSidebar = useCallback(
    () => setShowMenu(false),
    [showMenu, setShowMenu]
  );

  return (
    <>
      <nav
        className={`w-full bg-dark-100 z-30 ${
          scrolled && "fixed top-0 shadow-lg animate-sticky"
        }`}
      >
        <Container>
          <div className="w-full flex items-center justify-between py-5 px-2">
            <button onClick={SetOpeningSidebar} className="flex md:hidden items-center justify-center text-light">
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <h1 className="text-3xl font-bold text-orange">ne.dev</h1>
            <ul className="hidden md:flex items-center">
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
          </div>
        </Container>
      </nav>
      <Sidebar show={showMenu} setClose={SetClosingSidebar} />
    </>
  );
}

export default Navbar;
