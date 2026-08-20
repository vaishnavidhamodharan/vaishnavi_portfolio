import React, { useState } from 'react';
import { INTERNSHIP_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const Internship: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="internship" className="mb-20 scroll-mt-24">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00236f] tracking-tight">
          Internship & Practical Experience
        </h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#dae2fd] to-transparent"></div>
      </div>

      {/* Internship Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INTERNSHIP_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl soft-shadow border border-[#dae2fd] hover-lift flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-3 bg-[#4648d4]/10 rounded-xl text-[#4648d4]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#00236f] bg-[#f2f3ff] px-3 py-1 rounded-full border border-[#dae2fd]">
                  {item.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#00236f] mb-1">
                {item.role}
              </h3>

              <div className="text-sm font-semibold text-[#4648d4] mb-3">
                {item.company}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#757682] mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              <p className="text-sm text-[#444651] mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Key Contributions */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-[#00236f] uppercase tracking-wider">
                  Key Achievements & Responsibilities:
                </div>
                {item.keyContributions.map((contrib, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-xs text-[#444651]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#4648d4] shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer Tech Badges */}
            <div className="pt-4 border-t border-[#dae2fd] flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-[#eaedff] text-[#00236f] font-semibold text-[11px] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {item.certificateAvailable && (
                <button
                  onClick={() => setSelectedCert(item.role)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4648d4] hover:text-[#00236f] transition-colors cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Completion</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#dae2fd] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#dae2fd]">
              <div className="flex items-center gap-2 text-[#00236f] font-bold text-lg">
                <ShieldCheck className="w-6 h-6 text-[#4648d4]" />
                <span>Internship Completion Attestation</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-[#757682] hover:text-black font-bold text-xl px-2"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#444651]">
              <p>
                This certifies that <strong>Vaishnavi D</strong> successfully completed the practical training for <strong>{selectedCert}</strong> as part of her MCA curriculum requirements.
              </p>

              <div className="p-4 bg-[#f2f3ff] rounded-xl border border-[#dae2fd] space-y-1.5 text-xs">
                <div><strong>Candidate:</strong> Vaishnavi D (MCA Student)</div>
                <div><strong>Domain:</strong> Java Software Engineering & Data Analytics</div>
                <div><strong>Performance Rating:</strong> Excellent / High Proficiency</div>
                <div><strong>Verification Code:</strong> VSH-2024-MCA-CERT</div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="bg-[#00236f] text-white font-medium text-xs px-5 py-2.5 rounded-lg hover:bg-[#00236f]/90 transition-all"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
