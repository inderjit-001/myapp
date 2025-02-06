import React from "react";
import { FiCheckCircle } from "react-icons/fi";

function About() {
  return (
    <>
      <div className="container mx-auto p-5 pt-16">
        <h1 className="text-5xl font-bold text-center">Pricing</h1>
        <p className="text-gray-600 text-lg  text-center mt-4">
          Simple & Predictable pricing. No Surprises.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 mx-auto max-w-screen-lg">
          <div className="border border-gray-200 rounded-lg p-5 text-center flex flex-col w-full">
            <h4 className="text-lg font-medium text-gray-400">Personal</h4>
            <h3 className="font-bold text-4xl text-black mt-2">Free</h3>
            <ul className="ul mt-5 grid grid-cols-1 gap-2">
              <li className="flex items-center mt-3  gap-2">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Lifetime free</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Up to 3 users</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Unlimited Pages</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Astro Sub domain</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Basic Integrations</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Community Support</span>
              </li>
            </ul>
            <button className="bg-white rounded text-black  inline-block mt-10 mb-4 py-2 px-4 border-2 border-black hover:text-white hover:bg-black transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg p-5 text-center flex flex-col w-full">
            <h4 className="text-lg font-medium text-gray-400">Startup</h4>
            <h3 className="font-bold text-4xl text-black mt-2">$19</h3>
            <ul className="ul mt-5 grid grid-cols-1 gap-2">
              <li className="flex items-center mt-3  gap-2">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>All Free Features</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Up to 20 users</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>20 Custom domains</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Unlimited Collaborators</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Advanced Integrations</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Priority Support</span>
              </li>
            </ul>
            <button className="bg-white rounded text-black  inline-block mt-10 mb-4 py-2 px-4 border-2 border-black hover:text-white hover:bg-black transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg p-5 text-center flex flex-col w-full">
            <h4 className="text-lg font-medium text-gray-400">Enterprise</h4>
            <h3 className="font-bold text-4xl text-black mt-2">Custom</h3>
            <ul className="ul mt-5 grid grid-cols-1 gap-2">
              <li className="flex items-center mt-3  gap-2">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>All Pro Features</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Unlimited Custom domains</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>99.99% Uptime SLA</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>SAML & SSO Integration</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>Dedicated Account Manager</span>
              </li>
              <li className="flex items-center mt-3  gap-4">
                <FiCheckCircle
                  className="w-6 h-6"
                  fillOpacity={0.16}
                  fill="#222C3A"
                />
                <span>24/7 Phone Support</span>
              </li>
            </ul>
            <button className="bg-white rounded text-black  inline-block mt-10 mb-4 py-2 px-4 border-2 border-black hover:text-white hover:bg-black transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
