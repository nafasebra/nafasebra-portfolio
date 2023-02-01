import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@components/layout/Container";
import Sidebar from "@components/common/Sidebar";

function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const setScroll = () => {
    if(window.scrollY >= 150) 
      setScrolled(true) 
    else setScrolled(false)
  }

  useEffect(() => {
    document.addEventListener("scroll", () => setScroll);
    
    return () => {
      document.removeEventListener("scroll", () => setScroll);
    }
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
            <button
              onClick={SetOpeningSidebar}
              className="flex md:hidden items-center justify-center text-light"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <ul className="hidden md:flex items-center">
              <li className="mx-2">
                <Link href="#header" passHref>
                  <p className='cursor-pointer text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'>
                    صفحه اصلی
                  </p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="#about" passHref>
                  <p className='cursor-pointer text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'>
                    درباره من
                  </p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="#projects" passHref>
                  <p className='cursor-pointer text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'>
                    نمونه کارها
                  </p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="#skills" passHref>
                  <p className='cursor-pointer text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'>
                    مهارت ها
                  </p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="#blog" passHref>
                  <p className='cursor-pointer text-gray-200 text-sm py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-orange hover:text-orange hover:after:w-4'>
                    بلاگ
                  </p>
                </Link>
              </li>
            </ul>
            <div className="w-8 h-8">
              <Link href="/" passHref>
                <div className="block w-full h-full relative cursor-pointer">
                  <Image layout="fill" alt="nafasebra logo" src="/logo.png" />
                </div>
              </Link>
            </div>
            {/* TODO: i will set light theme later... */}
            {/* <div className="flex items-center">
              <ThemeSwitcher />
            </div> */}
          </div>
        </Container>
      </nav>
      <Sidebar show={showMenu} setClose={SetClosingSidebar} />
    </>
  );
}

export default Navbar;
