import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="flex items-center flex-wrap mb-20 mt-8 ">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight ">
          <Link href="/">
            <a className="hover:underline">Blog</a>
          </Link>
          .
        </h2>
        <button
          className=" inline-flex p-3 rounded lg:hidden  ml-auto  focus:outline-none"
          onClick={handleClick}
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:flex-row lg:ml-auto lg:w-auto w-full  flex flex-col text-xl md:text-2xl tracking-tight md:tracking-tighter ">
            <Link href="/">
              <a className="px-3 py-2 ml-auto hover:underline">Ana Sayfa</a>
            </Link>

            <Link href="/">
              <a className="px-3 py-2 ml-auto hover:underline">Hakkımızda</a>
            </Link>
            <Link href="/">
              <a className="px-3 py-2 ml-auto hover:underline">İletişim</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
