import { useEffect, useRef } from 'react';

const coursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Computer Networks',
  'Database Management Systems',
];

export default function Education() {
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
    <section id="education" className="py-24 px-4 bg-white dark:bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="section-animate">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Background</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
          </div>

          {/* Education card */}
          <div className="glass-card rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-400/30 transition-all duration-300">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500" />

            <div className="p-6 sm:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* University icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-3xl shrink-0">
                  🎓
                </div>

                <div className="flex-1">
                  {/* University and degree */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        Sitare University
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                        Bachelor of Technology — Computer Science
                      </p>
                      <p className="text-slate-400 dark:text-slate-500 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        Lucknow, India
                      </p>
                    </div>
                    <div className="shrink-0 text-sm sm:text-right">
                      <p className="text-slate-700 dark:text-slate-300 font-medium">October 2022 – May 2026</p>
                      <div className="mt-2 flex items-center gap-2 sm:justify-end">
                        <span className="text-slate-400 dark:text-slate-500 text-xs">CGPA</span>
                        <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-400 font-bold text-sm border border-green-200 dark:border-green-500/20">
                          7.47 / 10
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-100 dark:border-white/5 mb-5" />

                  {/* Coursework */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/15 transition-colors cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
