import React from "react";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="text-slate-200 px-[1rem] md:px-[4rem] h-[80px]">
      <div className="flex items-center justify-end h-full font-light text-sm">
        <a
          className="flex items-center gap-1 hover:scale-110 transition ease-in-out duration-500 hidden lg:block"
          href="https://github.com/uduma-sonia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub size="0.8rem" />
          Github
        </a>
        <a
          className="mx-10 flex items-center gap-1 hover:scale-110 transition ease-in-out duration-500 hidden lg:block"
          href="https://www.linkedin.com/in/sonia-uduma-3529501ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size="0.8rem" />
          LinkedIn
        </a>

        <a
          className="flex items-center gap-1 hover:scale-110 transition ease-in-out duration-500 hidden lg:block"
          href="https://twitter.com/Sonia_Uduma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter size="0.8rem" />
          Twitter
        </a>
        <div className="w-14 h-14 mt-5 lg:hidden">
          <img src="/memoji.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
}
