import React from "react";

function BuildFaster() {
  return (
    <div className="bg-black flex flex-col items-center max-w-5xl mx-auto p-10 rounded-2xl text-center my-16">
      <h2 className="text-white text-5xl">Build faster websites.</h2>
      <p className="text-gray-300 text-lg mt-4">
        Pull content from anywhere and serve it fast with Astro's next-gen
        island architecture.
      </p>
      <a href="#">
        <span className="bg-white rounded-xl text-black py-2 px-4 inline-block font-medium border-2 border-black mt-5">
          Get Started
        </span>
      </a>
    </div>
  );
}

export default BuildFaster;
