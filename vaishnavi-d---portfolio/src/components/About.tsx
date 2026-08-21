import React, { useState } from 'react';
import { PERSONAL_INFO, HIGHLIGHT_CARDS } from '../data/portfolioData';
import { Terminal, Brain, BarChart2, Rocket, Award, Target, BookOpen, User } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'strengths' | 'objective'>('overview');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-8 h-8 text-[#4648d4]" />;
      case 'psychology':
        return <Brain className="w-8 h-8 text-[#4648d4]" />;
      case 'analytics':
        return <BarChart2 className="w-8 h-8 text-[#4648d4]" />;
      case 'rocket_launch':
        return <Rocket className="w-8 h-8 text-[#4648d4]" />;
      default:
        return <Terminal className="w-8 h-8 text-[#4648d4]" />;
    }
  };

  return (
    <section id="about" className="mb-20 scroll-mt-24">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00236f] tracking-tight">
          About Me
        </h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#dae2fd] to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative Overview & Interactive Tabbed Card */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-base text-[#444651] leading-relaxed">
            {PERSONAL_INFO.about}
          </p>

          {/* Tab Selector */}
          <div className="flex border-b border-[#c5c5d3]/40 gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-b-2 border-[#4648d4] text-[#4648d4]'
                  : 'text-[#757682] hover:text-[#00236f]'
              }`}
            >
              Background
            </button>
            <button
              onClick={() => setActiveTab('strengths')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'strengths'
                  ? 'border-b-2 border-[#4648d4] text-[#4648d4]'
                  : 'text-[#757682] hover:text-[#00236f]'
              }`}
            >
              Key Strengths
            </button>
            <button
              onClick={() => setActiveTab('objective')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'objective'
                  ? 'border-b-2 border-[#4648d4] text-[#4648d4]'
                  : 'text-[#757682] hover:text-[#00236f]'
              }`}
            >
              Career Objective
            </button>
          </div>

          {/* Dynamic Tab Content */}
          <div className="bg-[#f2f3ff] p-6 rounded-xl border border-[#dae2fd] soft-shadow min-h-[160px]">
            {activeTab === 'overview' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 font-bold text-[#00236f] text-sm">
                  <BookOpen className="w-4 h-4 text-[#4648d4]" />
                  <span>Academic Dual Foundation</span>
                </div>
                <p className="text-sm text-[#444651] leading-relaxed">
                  Holding a B.Sc in Mathematics followed by an ongoing MCA degree provides me with a rare balance: strong mathematical logic for algorithm design alongside modern computer science software development capabilities.
                </p>
              </div>
            )}

            {activeTab === 'strengths' && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 font-bold text-[#00236f] text-sm">
                  <Award className="w-4 h-4 text-[#4648d4]" />
                  <span>Core Competencies</span>
                </div>
                <ul className="text-sm text-[#444651] space-y-1.5 list-disc list-inside">
                  <li>Strong Object-Oriented Programming (OOP) in Java</li>
                  <li>Mathematical optimization & decision modeling under uncertainty</li>
                  <li>Database structuring, SQL queries, and JDBC integration</li>
                  <li>Analytical problem solving and continuous technology adoption</li>
                </ul>
              </div>
            )}

            {activeTab === 'objective' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 font-bold text-[#00236f] text-sm">
                  <Target className="w-4 h-4 text-[#4648d4]" />
                  <span>Professional Goal</span>
                </div>
                <p className="text-sm text-[#444651] leading-relaxed">
                  To secure an entry-level or associate Software Engineer / Java Developer role where I can build scalable systems, refine my technical acumen, and contribute meaningfully to complex projects.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: 2x2 Grid of Highlight Cards matching design */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HIGHLIGHT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#f2f3ff] p-6 rounded-xl text-center soft-shadow hover-lift border border-[#dae2fd] flex flex-col items-center justify-center min-h-[160px]"
            >
              <div className="mb-3 p-3 rounded-full bg-[#4648d4]/10 flex items-center justify-center">
                {getIcon(card.icon)}
              </div>
              <h3 className="font-bold text-[#00236f] text-sm uppercase tracking-wider mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-[#444651] leading-snug">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
