import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Wrench, Globe2, Search, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const getCategoryIcon = (title: string) => {
    if (title.includes('Programming')) return <Code2 className="w-5 h-5 text-[#4648d4]" />;
    if (title.includes('Tools')) return <Wrench className="w-5 h-5 text-[#4648d4]" />;
    return <Globe2 className="w-5 h-5 text-[#4648d4]" />;
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((cat) => cat.title)];

  return (
    <section id="skills" className="mb-20 scroll-mt-24">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00236f] tracking-tight">
          Technical Skills
        </h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#dae2fd] to-transparent"></div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategoryFilter === cat
                  ? 'bg-[#00236f] text-white shadow-sm'
                  : 'bg-[#eaedff] text-[#444651] hover:bg-[#dae2fd]'
              }`}
            >
              {cat === 'All' ? 'All Skills' : cat.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#757682] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill (e.g. Java, SQL)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-[#c5c5d3] pl-9 pr-3 py-1.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00236f] text-[#131b2e]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#757682] hover:text-[#131b2e]"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Skills Grid matching exact styling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.filter(
          (cat) => activeCategoryFilter === 'All' || cat.title === activeCategoryFilter
        ).map((category, idx) => {
          const filteredSkills = category.skills.filter((s) =>
            s.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredSkills.length === 0 && searchTerm) return null;

          return (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl soft-shadow border border-[#dae2fd] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#dae2fd]">
                  <div className="p-2 rounded-lg bg-[#4648d4]/10">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-base text-[#4648d4]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {filteredSkills.map((skill, sIdx) => {
                    if (skill.highlight) {
                      return (
                        <span
                          key={sIdx}
                          className="px-4 py-2 bg-[#00236f]/10 text-[#00236f] font-semibold text-xs rounded-full border border-[#00236f]/30 flex items-center gap-1.5 shadow-sm"
                        >
                          <Check className="w-3.5 h-3.5 text-[#00236f]" />
                          <span>{skill.name}</span>
                        </span>
                      );
                    }
                    return (
                      <span
                        key={sIdx}
                        className="px-4 py-2 bg-[#eaedff] text-[#444651] font-medium text-xs rounded-full border border-[#c5c5d3]/60 hover:bg-[#dae2fd] transition-colors"
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Progress bar indication if available */}
              <div className="mt-6 pt-4 border-t border-[#f2f3ff] space-y-2">
                {filteredSkills.slice(0, 2).map((sk, skI) => (
                  <div key={skI} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-[#757682]">
                      <span>{sk.name} Proficiency</span>
                      <span>{sk.level || 85}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#eaedff] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00236f] to-[#4648d4] rounded-full"
                        style={{ width: `${sk.level || 85}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
