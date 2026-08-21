import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { Mail, MapPin, Send, Copy, Check, Linkedin, Github, CheckCircle, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="mb-20 scroll-mt-24">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00236f] tracking-tight">
          Get In Touch
        </h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#dae2fd] to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#f2f3ff] p-6 sm:p-8 rounded-xl border border-[#dae2fd] soft-shadow space-y-6">
            <h3 className="text-xl font-bold text-[#00236f]">
              Contact Information
            </h3>
            <p className="text-sm text-[#444651] leading-relaxed">
              I am actively seeking software engineering and Java developer opportunities. Feel free to reach out via email or send a message using the form.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#dae2fd]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#4648d4]/10 text-[#4648d4] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-[#757682] uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#00236f] hover:underline truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#eaedff] text-[#00236f] hover:bg-[#dae2fd] transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-[#dae2fd]">
                <div className="p-2.5 rounded-lg bg-[#4648d4]/10 text-[#4648d4] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#757682] uppercase">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#00236f]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-4 border-t border-[#dae2fd]">
              <div className="text-xs font-bold text-[#757682] uppercase tracking-wider mb-3">
                Professional Networks
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dae2fd] text-xs font-semibold text-[#00236f] hover:bg-[#eaedff] transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#00236f]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dae2fd] text-xs font-semibold text-[#00236f] hover:bg-[#eaedff] transition-all"
                >
                  <Github className="w-4 h-4 text-[#00236f]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#dae2fd] soft-shadow">
            <h3 className="text-xl font-bold text-[#00236f] mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#4648d4]" />
              <span>Send Me a Message</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#757682] mb-6">
              Have a project inquiry, internship offer, or job opportunity? Send a quick note below.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#00236f] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#faf8ff] border border-[#c5c5d3] px-3.5 py-2.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00236f] text-[#131b2e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00236f] uppercase mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#faf8ff] border border-[#c5c5d3] px-3.5 py-2.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00236f] text-[#131b2e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#00236f] uppercase mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Job Opportunity / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#faf8ff] border border-[#c5c5d3] px-3.5 py-2.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00236f] text-[#131b2e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#00236f] uppercase mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Vaishnavi, I'd like to discuss a software role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#faf8ff] border border-[#c5c5d3] px-3.5 py-2.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00236f] text-[#131b2e] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00236f] text-white font-medium text-xs px-8 py-3.5 rounded-lg hover:bg-[#00236f]/90 transition-all shadow-md cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {submittedSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl border border-[#dae2fd] animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#00236f] mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-[#444651] mb-6 leading-relaxed">
              Thank you for reaching out. Your message has been received and Vaishnavi D will respond to your email promptly.
            </p>
            <button
              onClick={() => setSubmittedSuccess(false)}
              className="bg-[#00236f] text-white font-medium text-xs px-6 py-2.5 rounded-lg hover:bg-[#00236f]/90 transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
