import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="text-slate-200 px-[1rem] md:px-[4rem] h-[80px]">
      <div className="flex items-center justify-end h-full font-light text-sm">
        <a
          className="flex items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
          href="https://github.com/uduma-sonia"
          target="_blank"
        >
          <DiGithubBadge size="0.8rem" />
          Github
        </a>
        <a
          className="mx-10 flex items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
          // href="mailto:sohnyauduma@gmail.com"
          href="https://www.linkedin.com/in/sonia-uduma-3529501ba/"
        >
          <AiFillLinkedin size="0.8rem" />
          LinkedIn
        </a>

        <a
          className="flex items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
          href="https://twitter.com/Sonia_Uduma"
          target="_blank"
        >
          <TiSocialTwitter size="0.8rem" />
          Twitter
        </a>
      </div>
    </nav>
  );
}
