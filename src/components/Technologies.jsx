import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function Technologies() {
  return (
    <div>
      <p className="my-4 text-sm flex items-center">
        Technologies <IoMdArrowDropright />
      </p>

      <ul className="text-xs text-slate-400 flex gap-5 max-w-sm flex-wrap">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Next.jS</li>
        <li>Svelte</li>
        <li>Grails</li>
        <li>GraphQL</li>
        <li>Redux</li>
        <li>Cypress</li>
      </ul>

      <p className="mb-4 mt-6 text-sm flex items-center">
        Familiar With <IoMdArrowDropright />
      </p>

      <ul className="text-xs text-slate-400 flex gap-5 max-w-sm flex-wrap">
        <li>SWR</li>
        <li>React Query</li>
        <li>Vite</li>
        <li>Git</li>
        <li>Wordpress</li>
        <li>Firebase</li>
        <li>SEO</li>
        <li>PWAs</li>
        <li>Version Control</li>
      </ul>
    </div>
  );
}
