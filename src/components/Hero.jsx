import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FiDownload, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import ProjectsCard from "./ProjectsCard";

export default function Hero() {
  return (
    <div className="text-slate-200 px-[1rem] md:px-[4rem] pt-10">
      <div className="flex items-start justify-between flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full">
          <p className="font-normal text-lg text-slate-400">Hi, I'm</p>

          <h2 className="text-3xl lg:text-4xl font-medium mt-3 tracking-tighter">
            Sonia Uduma.
          </h2>

          <div className="mt-3">
            <p className="font-extralight text-xs lg:text-sm max-w-xs lg:max-w-md">
              I am a frontend engineer focused on creating amazing and
              interactive products for the web. Capable of identifying
              opportunities to improve front-end design and the user experience.
            </p>
          </div>

          <div className="mt-10 flex">
            <a
              href="https://github.com/uduma-sonia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size="1.2rem" />
            </a>
            <a
              className="mx-8"
              href="https://www.linkedin.com/in/sonia-uduma-3529501ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size="1.2rem" />
            </a>
            <a
              href="https://twitter.com/Sonia_Uduma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size="1.2rem" />
            </a>
          </div>

          <div className="mt-10 hidden lg:flex items-center">
            <div className="w-16 h-16">
              <img src="/memoji.png" className="w-full h-full object-cover" />
            </div>

            <div className="lg:ml-7 flex items-center">
              <a
                className="mr-10 flex border px-3 py-2 rounded-md border-gray-700 text-slate-200 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="mailto:sohnyauduma@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineAlternateEmail size="0.8rem" />
                Email
              </a>
              <a
                className="flex text-slate-200 border px-3 py-2 rounded-md border-gray-700 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
                href="https://drive.google.com/file/d/1bkVrce8RQFXXITi70Vjg3t5g3yeTE_gV/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload size="0.8rem" />
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] w-full mt-20 lg:mt-0">
          <p className="lg:hidden my-4 text-sm flex items-center">
            Projects <IoMdArrowDropright />
          </p>

          {allProjects?.map((item) => {
            return (
              <div key={item.name}>
                <ProjectsCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const allProjects = [
  {
    name: "Anonry",
    description:
      "A web app for taking personal notes that can be shared anonymously with others.",
    tools: ["NEXTJS", "TYPESCRIPT", "CHAKRA UI", "SWR", "PWA"],
    github_link: "https://github.com/uduma-sonia/anonry",
    live_link: "https://anonry.netlify.app/signup",
  },
  {
    name: "Triangle.",
    description: "Personalized career guide for everyone!",
    tools: [
      "NEXTJS",
      "TYPESCRIPT",
      "CHAKRA UI",
      "REACT QUERY",
      "CONTEXT API",
      "PWA",
    ],
    live_link: "https://triangle.africa/",
  },
  {
    name: "PayPal Clone",
    description: (
      <>
        A clone of{" "}
        <a href="https://www.paypal.com/ng/home" className="underline">
          PayPal
        </a>{" "}
        home, signup and login page.
      </>
    ),
    tools: ["NEXTJS", "TAILWIND CSS"],
    github_link: "https://github.com/uduma-sonia/paypal-clone",
    live_link: "https://paypal-clone.vercel.app/",
  },
  {
    name: "Pickup",
    description: "Landing page for a ride hailing platform.",
    tools: ["NEXTJS", "GSAP", "TAILWIND CSS"],
    github_link: "https://github.com/uduma-sonia/Pickup",
    live_link: "https://sonia-pickup.netlify.app/",
  },
];
