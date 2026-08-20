import React, { useState } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS_DATA, INTERNSHIP_DATA } from '../data/portfolioData';
import { X, Printer, Copy, Download, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resumeText = `
VAISHNAVI D
MCA Student | Java Developer
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}

OBJECTIVE:
${PERSONAL_INFO.bio}

EDUCATION:
- MCA (Master of Computer Applications): 8.30 CGPA
- B.Sc Mathematics: 7.50 CGPA
- HSC: 80.33%

TECHNICAL SKILLS:
- Programming: Advanced Java, C / C++, HTML / CSS, PHP, SQL
- Tools & IDEs: NetBeans, Dev C++, Ubuntu, VS Code, Git
- Core Domains: Software Development, Data Analytics, IoT, Mathematical Optimization

FEATURED RESEARCH & PROJECTS:
- ${PROJECTS_DATA[0].title}
  Category: ${PROJECTS_DATA[0].category}
  Details: ${PROJECTS_DATA[0].description}

- ${PROJECTS_DATA[1].title}
  Category: ${PROJECTS_DATA[1].category}
  Details: ${PROJECTS_DATA[1].description}

INTERNSHIP EXPERIENCE:
${INTERNSHIP_DATA.map(
  (exp) => `- ${exp.role} at ${exp.company} (${exp.period})\n  ${exp.description}`
).join('\n')}
  `.trim();

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Vaishnavi_D_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#dae2fd] my-8 animate-in fade-in zoom-in-95 duration-200 print:shadow-none print:border-none print:m-0 print:p-0">
        
        {/* Modal Top Actions (Hidden when printing) */}
        <div className="flex items-center justify-between pb-4 border-b border-[#dae2fd] mb-6 print:hidden">
          <div className="flex items-center gap-2 text-[#00236f] font-bold text-lg">
            <FileText className="w-5 h-5 text-[#4648d4]" />
            <span>Curriculum Vitae - Vaishnavi D</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#eaedff] text-[#00236f] hover:bg-[#dae2fd] transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="p-2 rounded-lg bg-[#eaedff] text-[#00236f] hover:bg-[#dae2fd] transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
              title="Copy Plain Text Resume"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="p-2 rounded-lg bg-[#00236f] text-white hover:bg-[#00236f]/90 transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
              title="Download TXT File"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#757682] hover:bg-[#eaedff] hover:text-black transition-colors cursor-pointer ml-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable Formatted Resume Document Body */}
        <div className="space-y-6 text-[#131b2e] font-sans">
          {/* Resume Header */}
          <div className="border-b-2 border-[#00236f] pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00236f] uppercase tracking-wide">
              Vaishnavi D
            </h1>
            <p className="text-sm font-bold text-[#4648d4] mt-1">
              MCA Student | Java Developer
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-[#444651] mt-2">
              <span>Email: {PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>Location: {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-extrabold text-[#00236f] uppercase tracking-wider mb-1">
              Career Objective
            </h2>
            <p className="text-xs text-[#444651] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold text-[#00236f] uppercase tracking-wider mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs bg-[#f2f3ff] p-2.5 rounded border border-[#dae2fd]">
                  <div>
                    <strong className="text-[#00236f] text-sm">{edu.degree}</strong> - {edu.field}
                  </div>
                  <div className="font-bold text-[#4648d4]">{edu.scoreLabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold text-[#00236f] uppercase tracking-wider mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-2.5 bg-[#f2f3ff] rounded border border-[#dae2fd]">
                  <strong className="text-[#00236f] block mb-1">{cat.title}:</strong>
                  <span className="text-[#444651]">{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-extrabold text-[#00236f] uppercase tracking-wider mb-2">
              Featured Research & Software Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="font-bold text-[#00236f] text-sm">{proj.title}</div>
                  <div className="text-[#444651] leading-relaxed">{proj.description}</div>
                  <div className="text-[11px] text-[#4648d4] font-semibold">
                    Technologies: {proj.tags.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h2 className="text-xs font-extrabold text-[#00236f] uppercase tracking-wider mb-2">
              Internship Experience
            </h2>
            <div className="space-y-3">
              {INTERNSHIP_DATA.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-[#00236f]">
                    <span>{exp.role} - {exp.company}</span>
                    <span className="text-[#757682] font-normal">{exp.period}</span>
                  </div>
                  <p className="text-[#444651]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="mt-8 pt-4 border-t border-[#dae2fd] flex justify-end gap-3 print:hidden">
          <button
            onClick={onClose}
            className="bg-[#00236f] text-white font-medium text-xs px-6 py-2.5 rounded-lg hover:bg-[#00236f]/90 transition-all cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
