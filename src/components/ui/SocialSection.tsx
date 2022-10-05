import React from "react";

function SocialSection() {
  return (
    <ul className="flex items-center pt-7">
      {/* the linkedin link */}
      <li className="ml-5">
        <a
          href="https://www.linkedin.com/in/nafas-ebrahimi-325653189/"
          className="block text-light p-1 hover:text-orange cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 transition-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
      </li>
      {/* the github link */}
      <li className="ml-5">
        <a
          href="https://github.com/nafasebra"
          className="block text-light p-1 hover:text-orange cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 transition-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
      </li>
      {/* the youtube link */}
      {/* <li className='ml-5'>
            <a href="#" className='block text-light p-1 hover:text-orange cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 transition-none' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="4" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </a>
          </li> */}
      {/* the gmail address link */}
      <li className="">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ebranafas@gmail.com&su=SUBJECT&body=BODY"
          className="block text-light p-1 hover:text-orange cursor-pointer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 transition-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="3 9 12 15 21 9 12 3 3 9" />
            <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
            <line x1="3" y1="19" x2="9" y2="13" />
            <line x1="15" y1="13" x2="21" y2="19" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default SocialSection;