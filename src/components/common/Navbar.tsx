import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@components/common/Sidebar";
import { navLinks } from "@data/links";
import { useRouter } from "next/router";

function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter()

  const setScroll = () => {
    if (window.scrollY >= 150) setScrolled(true);
    else setScrolled(false);
  };

  const getElementAndScroll = (id: string) => {
    const element = document.getElementById(id);
  
    if (!element && router.pathname === "/") {
      console.error(`Element with id ${id} not found`);
      return;
    }
  
    const offsetElement = element?.offsetTop || 0;

    window.scrollTo({
      left: 0,
      top: offsetElement - 100,
      behavior: "smooth",
    });
  }

  const handleScroll = (id: string) => {
    if (router.pathname === "/") {
      getElementAndScroll(id);
    } else {
      router.push('/').then(() => {
        setTimeout(() => {
          getElementAndScroll(id)
        }, 1000);
      })
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => setScroll());
    return () => document.removeEventListener("scroll", () => setScroll());
  }, [scrolled]);

  const SetOpeningSidebar = () => setShowMenu(true);
  const SetClosingSidebar = () => setShowMenu(false);

  return (
    <>
      <nav
        className={`w-full bg-dark-100 z-30 fixed top-0  ${
          scrolled && "shadow-lg"
        }`}
      >
        <div className="container">
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
            <ul className="hidden md:flex items-center gap-4">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`transition-all cursor-pointer text-gray-200 font-bold py-3 mx-2 relative after:contents-["*"] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-orange hover:text-orange hover:after:w-4`}
                  onClick={() => handleScroll(item.link)}
                >
                  {item.title}
                </li>
              ))}
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
        </div>
      </nav>
      <Sidebar show={showMenu} setClose={SetClosingSidebar} />
      <div className="py-10"></div>
    </>
  );
}

export default Navbar;
