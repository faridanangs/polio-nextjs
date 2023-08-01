"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import Switcher from "./Switch";
import { Roboto } from "next/font/google";

const links = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/about",
    title: "About",
  },
  {
    id: 3,
    url: "/portfolio",
    title: "Project",
  },
];

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  
})


export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Hamburder & Text Menu */}
      <div
        className="relative bg-port_bg backdrop-blur-sm z-[100] shadow-md h-12 px-4 items-center flex justify-between
        md:h-20
      "
      >
        {/* Hamburder */}
        <div
          className="flex flex-col w-8 md:w-10 gap-1 items-center text-center justify-center p-4 hover:cursor-pointer
          
          "
          onClick={() => setOpen(!open)}
        >
          <div
            className={`w-6 h-1 md:w-10 bg-black rounded-t-md  ${
              open
                ? "rotate-45 w-8 md:w-12 absolute rounded-t-none duration-300 transition-all  bg-red-600 rounded-b-none"
                : ""
            }`}
          />
          <div
            className={`w-6 h-1 md:w-10 bg-black rounded-full ${
              open ? "opacity-0 " : " opacity-100"
            }`}
          />
          <div
            className={`w-6 h-1 md:w-10 bg-black rounded-b-md ${
              open
                ? "-rotate-45 w-8 md:w-12 absolute rounded-b-none duration-300 transition-all bg-red-600 rounded-t-none"
                : ""
            }`}
          />
        </div>
        {/* Text */}
        <h1 className={`${roboto.className} text-3xl font-bold`}>Anangs</h1>
      </div>
      {/* Menu Links */}
      {open && (
        <div
          className="min-w-[70vw] sm:min-w-[90vw] md:min-w-[80vw] flex justify-between items-center gap-2
            flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32 text-white bg-black/70 
            rounded-lg z-50 backdrop-blur-sm dark:bg-white/70 dark:text-black font-bold"
        >
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={() => setOpen(false)}
              className="text-lg md:text-3xl"
            >
              {link.title}
            </Link>
          ))}

          {/* Social Icon */}
          <div className="flex gap-2 text-xl md:text-4xl mt-2 items-center justify-center">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 209"
                class="w-full h-auto undefined"
              >
                <path fill="none" d="M0 0h256v209H0z"></path>
                <path
                  fill="#55acee"
                  d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
                ></path>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                class="w-full h-auto undefined"
              >
                <path fill="none" d="M0 0h512v512H0z"></path>
                <path
                  fill="currentColor"
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
                ></path>
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
                class="w-full h-auto undefined"
              >
                <path fill="none" d="M0 0h256v256H0z"></path>
                <g fill="none">
                  <rect width="256" height="256" fill="#fff" rx="60"></rect>
                  <rect width="256" height="256" fill="#0A66C2" rx="60"></rect>
                  <path
                    fill="#fff"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                  ></path>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <FaSquareFacebook className="text-[blue]" />
            </Link>
            <Switcher />
          </div>
        </div>
      )}
    </div>
  );
}
