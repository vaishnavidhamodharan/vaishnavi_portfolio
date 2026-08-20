import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eaedff] border-t border-[#c5c5d3]/40 w-full py-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1200px] mx-auto space-y-4 md:space-y-0">
        <div className="font-extrabold text-lg text-[#00236f] tracking-tight">
          VAISHNAVI D
        </div>

        <nav className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#444651]">
          <a href="#home" className="hover:text-[#00236f] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#00236f] transition-colors">
            About
          </a>
          <a href="#education" className="hover:text-[#00236f] transition-colors">
            Education
          </a>
          <a href="#skills" className="hover:text-[#00236f] transition-colors">
            Skills
          </a>
          <a href="#internship" className="hover:text-[#00236f] transition-colors">
            Internship
          </a>
          <a href="#projects" className="hover:text-[#00236f] transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#00236f] transition-colors">
            Contact
          </a>
        </nav>

        <div className="text-xs text-[#757682] font-medium">
          © {new Date().getFullYear()} VAISHNAVI D. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
