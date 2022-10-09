import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiDownload, FiGithub } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";

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
              <div
                key={item.name}
                className="bg-[#121617] mb-5 rounded-xl p-5 hover:translate-x-2 ease-in-out duration-500 hover:shadow-md"
              >
                <h4 className="text-2xl font-medium mb-4 underline">
                  {item.name}
                </h4>

                <p className="text-sm font-extralight tracking-wide">
                  {item.description}
                </p>

                <div className="mt-5">
                  <ul className="text-xs text-slate-400 flex gap-3">
                    {item.tools?.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex gap-5 justify-end">
                  <a
                    href={item.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition ease-in-out duration-500"
                  >
                    <FiGithub />
                  </a>

                  <a
                    href={item.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition ease-in-out duration-500"
                  >
                    <VscLinkExternal />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// border border-[#444545]

const allProjects = [
  {
    name: "Anonry",
    description:
      "A web app for taking personal notes that can be shared anonymously with others.",
    tools: ["Nextjs", "Typescript", "Chakra ui", "swr", "pwa"],
    github_link: "https://github.com/uduma-sonia/anonry",
    live_link: "https://anonry.netlify.app/signup",
  },
  {
    name: "Pickup",
    description: "Landing page for a ride hailing platform",
    tools: ["Nextjs", "GSAP", "Tailwind"],
    github_link: "https://github.com/uduma-sonia/Pickup",
    live_link: "https://sonia-pickup.netlify.app/",
  },
];
