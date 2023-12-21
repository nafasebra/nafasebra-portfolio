import React, { useEffect } from "react";
import { navLinks } from "@data/links";
import { useRouter } from "next/router";

type PropType = {
  show: boolean;
  setClose: () => void;
};

function Sidebar(props: PropType) {
  const { show, setClose } = props;
  const router = useRouter();

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
    if (show) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "visible";
  }, [show]);

  return (
    <aside
      className={`${
        show
          ? "opacity-100 z-30 translate-y-0"
          : "opacity-0 -z-20 -translate-y-10"
      } flex flex-col z-30 fixed inset-0 bg-dark-100 min-h-screen overflow-y-auto`}
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
        className={`flex flex-col gap-4 flex-grow items-center justify-center text-light`}
      >
        {navLinks.map((item) => (
          <li
            key={item.id}
            onClick={() => handleScroll(item.link)}
            className="text-gray-200 text-lg py-3 cursor-pointer relative"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
