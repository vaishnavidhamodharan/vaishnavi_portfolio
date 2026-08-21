import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { Badge, ExternalLink, Layers, ArrowUpRight, Check, X, FileCode, Calculator, Radio } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Mathematics & Research', 'Java & Software', 'Web & IoT'];

  const filteredProjects = PROJECTS_DATA.filter(
    (proj) => selectedCategory === 'All' || proj.category === selectedCategory
  );

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'functions':
        return <span className="font-serif font-extrabold text-3xl text-[#00236f]">Σ</span>;
      case 'badge':
        return <Badge className="w-8 h-8 text-[#00236f]" />;
      case 'sensors':
        return <Radio className="w-8 h-8 text-[#00236f]" />;
      default:
        return <Layers className="w-8 h-8 text-[#00236f]" />;
    }
  };

  return (
    <section id="projects" className="mb-20 scroll-mt-24">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00236f] tracking-tight">
          Featured Projects
        </h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#dae2fd] to-transparent"></div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#00236f] text-white shadow-sm'
                : 'bg-[#eaedff] text-[#444651] hover:bg-[#dae2fd]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Primary Featured Cards List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#f2f3ff] p-6 sm:p-8 rounded-xl soft-shadow border border-[#dae2fd] hover-lift transition-all"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon Container matching design */}
              <div className="w-16 h-16 bg-[#00236f]/10 rounded-xl flex items-center justify-center shrink-0 border border-[#00236f]/20 shadow-xs">
                {getProjectIcon(project.icon)}
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#00236f] leading-snug">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#4648d4] bg-[#4648d4]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {project.subtitle && (
                  <p className="text-xs font-semibold text-[#757682] uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-sm sm:text-base text-[#444651] leading-relaxed">
                  {project.description}
                </p>

                {/* Tags & Action Button */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#dae2fd]/60">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold text-[#4648d4] bg-white px-2.5 py-1 rounded border border-[#dae2fd]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00236f] hover:text-[#4648d4] bg-white px-4 py-2 rounded-lg border border-[#00236f]/20 hover:border-[#4648d4] transition-all cursor-pointer shadow-2xs"
                  >
                    <span>View Methodology & Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#dae2fd] my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#dae2fd]">
              <div>
                <span className="text-xs font-bold text-[#4648d4] uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#00236f] mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1 rounded-lg text-[#757682] hover:bg-[#eaedff] hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-[#444651]">
              <p className="leading-relaxed">
                {activeModalProject.fullDescription || activeModalProject.description}
              </p>

              {/* Key Features */}
              {activeModalProject.keyFeatures && (
                <div className="space-y-2">
                  <h4 className="font-bold text-[#00236f] text-sm uppercase tracking-wider flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#4648d4]" />
                    <span>Key Innovations & Capabilities</span>
                  </h4>
                  <ul className="space-y-2 bg-[#f2f3ff] p-4 rounded-xl border border-[#dae2fd]">
                    {activeModalProject.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-[#4648d4] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Methodology */}
              {activeModalProject.methodology && (
                <div className="space-y-2">
                  <h4 className="font-bold text-[#00236f] text-sm uppercase tracking-wider">
                    Algorithmic Step-By-Step Workflow
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.methodology.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 bg-white rounded-lg border border-[#dae2fd] text-xs font-medium"
                      >
                        <strong className="text-[#00236f]">Step {sIdx + 1}:</strong> {step}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="pt-4 border-t border-[#dae2fd] flex flex-wrap gap-2">
                {activeModalProject.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#eaedff] text-[#00236f] font-semibold text-xs rounded-full"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="bg-[#00236f] text-white font-medium text-xs px-6 py-2.5 rounded-lg hover:bg-[#00236f]/90 transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
