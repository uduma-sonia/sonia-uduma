import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import ProjectsCard from "./ProjectsCard";

export default function Hero() {
  return (
    <div className="text-slate-200 px-[1rem] md:px-[4rem] pt-10">
      <div className="flex items-start justify-between">
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineAlternateEmail size="0.8rem" />
                Email
              </a>
              <a
                className="flex text-slate-200 font-light text-sm items-center gap-1 hover:scale-110 transition ease-in-out duration-500"
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

        <div className="md:w-[50%] w-full">
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
