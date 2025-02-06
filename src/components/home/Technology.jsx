import React from "react";
import { FaReact } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
import { SiAstro } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAlpinedotjs } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function Technology() {
  return (
    <div className="container mx-auto px-5 text-center py-16">
      <h2 className="text-slate-600 text-lg">Works with your technologies</h2>
      <div className="flex flex-wrap md:gap-20 justify-center gap-5 mt-10">
        <FaReact size={50} />
        <SiSvelte size={50} />
        <SiAstro size={50} />
        <RiTailwindCssFill size={50} />
        <SiAlpinedotjs size={50} />
        <IoLogoVercel size={50} />
      </div>
    </div>
  );
}

export default Technology;
