import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shadabraza281@gmail.com?subject=${encodeURIComponent(
      form.subject || `Message from ${form.name}`
    )}&body=${encodeURIComponent(
      `Hi Shadab,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'shadabraza281@gmail.com',
      href: 'mailto:shadabraza281@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 63981-84799',
      href: 'tel:+916398184799',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-[#0d1422]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="section-animate">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's Talk</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mb-6" />
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Availability badge */}
              <div className="glass-card rounded-2xl p-5 border-green-200 dark:border-green-500/20 bg-green-50 dark:bg-green-500/5">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <p className="text-green-700 dark:text-green-400 font-semibold text-sm">Available for Work</p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs mt-0.5">Open to full-time opportunities</p>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              {contactInfo.map((info) => (
                <div key={info.label} className="glass-card rounded-2xl p-5 hover:border-blue-300 dark:hover:border-blue-400/25 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-slate-700 dark:text-slate-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-700 dark:text-slate-300 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Response time */}
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">Typical Response Time</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Within 24 hours</p>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 focus:bg-white dark:focus:bg-blue-500/5 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 focus:bg-white dark:focus:bg-blue-500/5 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job opportunity / Project collaboration"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 focus:bg-white dark:focus:bg-blue-500/5 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 focus:bg-white dark:focus:bg-blue-500/5 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Email client opened!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
