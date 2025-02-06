import React from "react";

function Hero() {
  return (
    <div className="container mx-auto px-5">
      <div className="grid lg:grid-cols-2 pt-16 pb-8 place-items-center">
        <div>
          <h1 className="text-6xl font-bold lg:tracking-tight xl:tracking-tighter">
            Marketing website done with Astro
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mt-4">
            Astroship is a starter template for startups, marketing websites &
            landing pages. Built with Astro.build and TailwindCSS. You can
            quickly create any website with this starter.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-5 justify-start">
            <a href="#">
              <span className="bg-black rounded text-white py-2 px-4 inline-block font-medium border-2 border-transparent">
                Download for Free
              </span>
            </a>
            <a href="#">
              <span className="bg-white rounded text-black py-2 px-4 inline-block font-medium border-2 border-black md:ml-5">
                GitHub Repo
              </span>
            </a>
          </div>
        </div>
        <div>
          <img src="/assets/hero.webp" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
