import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="summary"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16 bg-slate-50 dark:bg-[#0a0f1e]"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="section-animate max-w-4xl w-full mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="text-slate-900 dark:text-white">Shadab </span>
          <span className="gradient-text">Raza</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
          Software Engineer · Full-Stack Developer
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-8">
          <svg className="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Bengaluru, Karnataka, India
        </div>

        {/* Summary text */}
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Passionate Software Engineer with expertise in building high-performance, scalable web applications
          and AI/ML solutions. Experienced with React, TypeScript, Python, FastAPI, and modern ML frameworks —
          delivering enterprise-grade features with cutting-edge AI capabilities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#experience"
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-slate-300 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white font-semibold transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-500/10"
          >
            Get In Touch
          </a>
          <a
            href="/Shadab Raza.pdf"
            download="Shadab_Raza_Resume.pdf"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white font-semibold transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-500/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { value: '3', label: 'Major Projects' },
            { value: '3+', label: 'Years Coding' },
            { value: '3', label: 'Internships' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
