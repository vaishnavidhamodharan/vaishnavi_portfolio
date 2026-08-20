import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Mail, Code, Award, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center mt-6 mb-20 pt-8"
    >
      {/* Profile Photo Container */}
      <div className="relative group mb-8">
        <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden soft-shadow border-4 border-[#faf8ff] transition-transform duration-300 group-hover:scale-[1.02]">
          <img
            src={PERSONAL_INFO.profileImage}
            alt="Vaishnavi D - MCA Student and Java Developer"
            className="w-full h-full object-cover object-center"
            loading="eager"
            onError={(e) => {
              // Fallback placeholder in case image URL encounters network restrictions
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        {/* Floating Badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-[#dae2fd] flex items-center gap-1.5 text-xs font-semibold text-[#00236f] whitespace-nowrap">
          <CheckCircle className="w-4 h-4 text-[#4648d4]" />
          <span>Open to Software Roles</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00236f] tracking-tight mb-3">
        Hi, I’m Vaishnavi D
      </h1>

      {/* Subtitle Role */}
      <p className="text-lg sm:text-xl text-[#4648d4] font-semibold mb-6 tracking-wide">
        {PERSONAL_INFO.title}
      </p>

      {/* Bio Paragraph */}
      <p className="text-base text-[#444651] max-w-2xl mx-auto mb-8 leading-relaxed px-4">
        {PERSONAL_INFO.bio}
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[#00236f] text-white font-medium text-sm px-7 py-3.5 rounded-lg hover:bg-[#00236f]/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          id="hero-view-projects-btn"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-2 border-[#00236f] text-[#00236f] bg-transparent font-medium text-sm px-7 py-3.5 rounded-lg hover:bg-[#00236f]/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
          id="hero-contact-btn"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Me</span>
        </a>
      </div>

      {/* Quick Academic & Skill Highlights Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl w-full px-2">
        <div className="bg-[#f2f3ff] p-3.5 rounded-xl border border-[#dae2fd] text-center soft-shadow">
          <div className="text-xs font-semibold text-[#757682] uppercase tracking-wider mb-1">
            MCA Academic Score
          </div>
          <div className="text-lg font-bold text-[#00236f]">8.30 CGPA</div>
        </div>

        <div className="bg-[#f2f3ff] p-3.5 rounded-xl border border-[#dae2fd] text-center soft-shadow">
          <div className="text-xs font-semibold text-[#757682] uppercase tracking-wider mb-1">
            Core Expertise
          </div>
          <div className="text-lg font-bold text-[#4648d4]">Advanced Java</div>
        </div>

        <div className="col-span-2 sm:col-span-1 bg-[#f2f3ff] p-3.5 rounded-xl border border-[#dae2fd] text-center soft-shadow">
          <div className="text-xs font-semibold text-[#757682] uppercase tracking-wider mb-1">
            Background
          </div>
          <div className="text-lg font-bold text-[#00236f]">Math & CS</div>
        </div>
      </div>
    </section>
  );
};
