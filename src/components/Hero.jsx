import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";

export default function Hero() {
  return (
    <div className="text-slate-200 px-[1rem] md:px-[4rem] pt-10">
      <div className="flex items-center justify-between">
        <div className="md:w-[50%] w-full">
          <p className="font-normal text-xl">Hi, I'm</p>

          <h2 className="text-4xl md:text-5xl font-medium mt-3 tracking-tighter">
            Sonia Uduma.
          </h2>

          <div className="mt-9">
            <p className="font-light text-sm max-w-md">
              I am a frontend engineer focused on creating amazing and
              interactive products for the web. Capable of identifying
              opportunities to improve front-end design and the user experience.
            </p>
          </div>

          <div className="mt-10 flex items-center">
            <div className="w-16 h-16">
              <img src="/memoji.png" className="w-full h-full object-cover" />
            </div>

            <div className="ml-7 flex items-center">
              <a
                className="mr-10 flex text-slate-200 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="mailto:sohnyauduma@gmail.com"
              >
                <MdOutlineAlternateEmail size="0.8rem" />
                Email
              </a>
              <a
                className="flex text-slate-200 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="https://drive.google.com/file/d/1bkVrce8RQFXXITi70Vjg3t5g3yeTE_gV/view"
              >
                <FiDownload size="0.8rem" />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* <div className="md:w-[50%] w-full flex">
          <div className="md:w-[50%] w-full">
            <p className="flex items-center text-sm text-slate-200">
              <IoMdArrowDropright size="1.2rem" />
              <span className="pl-2">JavaScript</span>
            </p>
            <p className="flex items-center text-sm text-slate-200 mt-7">
              <IoMdArrowDropright size="1.2rem" />
              <span className="pl-2">React</span>
            </p>
          </div>

          <div className="md:w-[50%] w-full">
            <p className="flex items-center text-sm text-slate-200">
              <IoMdArrowDropright size="1.2rem" />
              <span className="pl-2">TypeScript</span>
            </p>
            <p className="flex items-center text-sm text-slate-200 mt-9">
              <IoMdArrowDropright size="1.2rem" />
              <span className="pl-2">Next.js</span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
