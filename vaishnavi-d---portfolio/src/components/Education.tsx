import React, { useState } from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calculator, BookOpen, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('mca');

  const getEducationIcon = (iconName: string) => {
    switch (iconName) {
      case 'school':
        return <GraduationCap className="w-5 h-5 text-white" />;
      case 'calculate':
        return <Calculator className="w-5 h-5 text-[#00236f]" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-[#00236f]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-white" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="mb-20 scroll-mt-24">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00236f] tracking-tight">
          Education
        </h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#dae2fd] to-transparent"></div>
      </div>

      {/* Timeline Layout matching mockup */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-0.5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#4648d4] before:via-[#dae2fd] before:to-transparent">
        {EDUCATION_DATA.map((item, index) => {
          const isEven = index % 2 === 0;
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className={`relative flex items-start md:items-center justify-between md:justify-normal ${
                isEven ? 'md:flex-row-reverse' : ''
              } group`}
            >
              {/* Timeline Icon Node */}
              <div
                className={`absolute left-0 md:left-1/2 -translate-x-0.5 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#faf8ff] shadow z-10 ${
                  item.isCurrent
                    ? 'bg-[#4648d4] text-white ring-2 ring-[#4648d4]/30'
                    : 'bg-[#dae2fd] text-[#00236f]'
                }`}
              >
                {getEducationIcon(item.icon)}
              </div>

              {/* Timeline Card */}
              <div className="ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)]">
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`p-6 rounded-xl soft-shadow border transition-all cursor-pointer hover-lift ${
                    item.isCurrent
                      ? 'bg-[#f2f3ff] border-[#dae2fd]'
                      : 'bg-white border-[#dae2fd]/60'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-[#00236f] text-xl">
                        {item.degree}
                      </h3>
                      {item.year && (
                        <span className="text-xs font-medium text-[#757682] bg-[#eaedff] px-2 py-0.5 rounded">
                          {item.year}
                        </span>
                      )}
                    </div>

                    <span className="font-semibold text-xs text-[#4648d4] bg-[#4648d4]/10 px-3 py-1 rounded-full border border-[#4648d4]/20">
                      {item.scoreLabel}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-[#444651] mb-2">
                    {item.field}
                  </p>

                  {/* Toggle Indicator */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#00236f] pt-2 border-t border-[#dae2fd]/50">
                    <span>Key Focus Areas & Highlights</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#4648d4]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4648d4]" />
                    )}
                  </div>

                  {/* Expanded Highlight List */}
                  {isExpanded && item.highlights && (
                    <div className="mt-3 pt-2 border-t border-[#dae2fd]/30 space-y-2 animate-in fade-in duration-200">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#444651]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4648d4] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
