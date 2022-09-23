import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";

export default function Navbar() {
  return (
    <nav className="text-slate-200 px-[1rem] md:px-[4rem] h-[80px]">
      <div className="flex items-center justify-end h-full gap-10 font-light text-sm">
        <a
          className="flex items-center gap-1"
          href="https://github.com/uduma-sonia"
          target="_blank"
        >
          <DiGithubBadge size="0.8rem" />
          Github
        </a>
        <a
          href="mailto:sohnyauduma@gmail.com"
          className="flex items-center gap-1"
        >
          <MdOutlineAlternateEmail size="0.8rem" />
          Email
        </a>

        <a
          className="flex items-center gap-1"
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
