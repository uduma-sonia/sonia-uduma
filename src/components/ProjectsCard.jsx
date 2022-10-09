import React from "react";
import { FiGithub } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";

export default function ProjectsCard({ data }) {
  return (
    <div className="bg-[#121617] border border-gray-800 mb-5 rounded-xl p-5 hover:translate-x-2 ease-in-out duration-500 hover:shadow-md">
      <h4 className="text-xl font-medium mb-4 underline">{data.name}</h4>

      <p className="text-[13px] font-extralight tracking-wide">
        {data.description}
      </p>

      <div className="mt-5">
        <ul className="text-xs text-slate-400 flex gap-3 flex-wrap">
          {data.tools?.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex gap-5 justify-end">
        {data?.github_link && (
          <a
            href={data.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition ease-in-out duration-500"
          >
            <FiGithub />
          </a>
        )}

        <a
          href={data.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition ease-in-out duration-500"
        >
          <VscLinkExternal />
        </a>
      </div>
    </div>
  );
}
