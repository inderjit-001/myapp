import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

function Services() {
  return (
    <div className="container mx-auto py-16 px-5">
      <div className="mt-16">
        <h2 className="text-4xl font-bold lg:tracking-tight">
          Everything you need to start a website
        </h2>
        <p className="text-gray-500 text-lg mt-4">
          Astro comes batteries included. It takes the best parts of
          state-of-the-art tools and adds its own innovations.
        </p>
      </div>

      {/* column grid start */}

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 mt-16">
        <div className="flex gap-4 items-start">
          <div className="bg-black text-white p-2 rounded-full w-8 h-8 shrink-0">
            <FaBriefcase size={16} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Bring Your Own Framework</h3>
            <p className="text-slate-500 mt-2">
              Build your site using React, Svelte, Vue, Preact, web components,
              or just plain ol' HTML + JavaScript.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-black text-white p-2 rounded-full w-8 h-8 shrink-0">
            <FaRegWindowMaximize size={16} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">100% Static HTML, No JS</h3>
            <p className="text-slate-500 mt-2">
              Astro renders your entire page to static HTML, removing all
              JavaScript from your final build by default.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-black text-white p-2 rounded-full w-8 h-8 shrink-0">
            <FaDatabase size={16} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">On-Demand Components</h3>
            <p className="text-slate-500 mt-2">
              Need some JS? Astro can automatically hydrate interactive
              components when they become visible on the page.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-black text-white p-2 rounded-full w-8 h-8 shrink-0">
            <FaBriefcase size={16} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Bring Your Own Framework</h3>
            <p className="text-slate-500 mt-2">
              Build your site using React, Svelte, Vue, Preact, web components,
              or just plain ol' HTML + JavaScript.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-black text-white p-2 rounded-full w-8 h-8 shrink-0">
            <FaRegWindowMaximize size={16} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">100% Static HTML, No JS</h3>
            <p className="text-slate-500 mt-2">
              Astro renders your entire page to static HTML, removing all
              JavaScript from your final build by default.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-black text-white p-2 rounded-full w-8 h-8 shrink-0">
            <FaDatabase size={16} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">On-Demand Components</h3>
            <p className="text-slate-500 mt-2">
              Need some JS? Astro can automatically hydrate interactive
              components when they become visible on the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
