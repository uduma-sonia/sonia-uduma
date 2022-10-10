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
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>GraphQL</li>
        <li>Redux</li>
        <li>Firebase</li>
      </ul>

      <p className="mb-4 mt-5 text-sm flex items-center">
        Familiar With <IoMdArrowDropright />
      </p>

      <ul className="text-xs text-slate-400 flex gap-5 max-w-sm flex-wrap">
        <li>PWAs</li>
        <li>Wordpress</li>
        <li>SEO</li>
        <li>Version Control</li>
      </ul>
    </div>
  );
}
