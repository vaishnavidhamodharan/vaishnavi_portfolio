import React, { useState, useEffect } from 'react';
import { Menu, X, Code, FileText } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenResume }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Internship', href: '#internship', id: 'internship' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf8ff]/90 backdrop-blur-md shadow-sm border-b border-[#c5c5d3]/30'
          : 'bg-[#faf8ff]/80 backdrop-blur-md border-b border-[#c5c5d3]/20'
      }`}
    >
      <div className="flex justify-between items-center px-6 max-w-[1200px] mx-auto h-20">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#00236f]/10 text-[#00236f] flex items-center justify-center transition-transform group-hover:scale-105">
            <Code className="w-5 h-5 text-[#00236f]" />
          </div>
          <span className="font-bold text-xl tracking-tight text-[#00236f]">
            VAISHNAVI D
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-all px-2 py-1.5 rounded-lg ${
                  isActive
                    ? 'text-[#4648d4] border-b-2 border-[#4648d4] bg-[#4648d4]/5'
                    : 'text-[#444651] hover:text-[#00236f] hover:bg-[#1e3a8a]/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Download Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 bg-[#00236f] text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-[#00236f]/90 transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            id="download-resume-btn-desktop"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#131b2e] rounded-lg hover:bg-[#eaedff] transition-colors"
          aria-label="Toggle Navigation Menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#faf8ff] border-b border-[#c5c5d3] px-6 py-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    isActive
                      ? 'bg-[#4648d4] text-white'
                      : 'text-[#131b2e] hover:bg-[#f2f3ff]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-[#c5c5d3]/40">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#00236f] text-white font-medium text-sm px-5 py-3 rounded-lg hover:bg-[#00236f]/90 transition-all shadow-md"
                id="download-resume-btn-mobile"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
