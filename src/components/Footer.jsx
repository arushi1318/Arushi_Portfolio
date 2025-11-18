import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white">
      <div className="flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/arushi1318"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaGithub size={24} className="relative text-white group-hover:text-gray-200 transition-colors duration-300" />
            </div>
          </a>
          <a href="https://leetcode.com/u/arushi_1318/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaCode size={24} className="relative text-white group-hover:text-amber-200 transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/arushi-gupta-50683529a"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaLinkedin size={24} className="relative text-white group-hover:text-blue-500 transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;