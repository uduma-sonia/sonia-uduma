import React from "react";
import { FiGithub } from "react-icons/fi";
import { VscLinkExternal, VscPackage } from "react-icons/vsc";

export default function ProjectsCard({ data }) {
  return (
    <div className="bg-[#121617] h-[220px] lg:h-[200px] flex flex-col justify-between border border-gray-800 mb-5 rounded-xl p-5 hover:translate-x-2 ease-in-out duration-500 hover:shadow-md">
      <div>
        <h4 className="text-lg lg:text-xl font-medium mb-4 underline">
          <a href={data.live_link} target="_blank" rel="noopener noreferrer">
            {data.name}
          </a>
        </h4>

        <p className="text-xs lg:text-[13px] font-extralight tracking-wide">
          {data.description}
        </p>

        <div className="mt-5">
          <ul className="text-xs text-slate-400 flex gap-3 flex-wrap">
            {data.tools?.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex gap-5 justify-end">
        {data?.npm && (
          <a
            href={data.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition ease-in-out duration-500"
          >
            <VscPackage size="1.5rem" />
          </a>
        )}
        {!data?.npm && (
          <>
            {data?.github_link && (
              <a
                href={data.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition ease-in-out duration-500"
              >
                <FiGithub size="1.2rem" />
              </a>
            )}

            <a
              href={data.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition ease-in-out duration-500"
            >
              <VscLinkExternal size="1.2rem" />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
