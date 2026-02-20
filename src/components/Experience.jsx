import { useEffect, useRef } from 'react';

const experiences = [
  {
    company: 'FirstHive',
    role: 'Software Engineer',
    type: 'Full-time',
    period: 'June 2025 – Present',
    location: 'Bengaluru, Karnataka',
    current: true,
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀',
    highlights: [
      { title: 'Enterprise Analytics Dashboard', desc: 'Developed high-performance analytics dashboards (React + Flask) handling 10,000+ records with optimized filtering, aggregation, pagination, and sorting for real-time data insights.' },
      { title: 'Real-Time Systems & WebRTC Integration', desc: 'Implemented WebSocket-based real-time communication and integrated WebRTC-driven data retrieval for customer care and live interaction modules.' },
      { title: 'Production Feature Delivery', desc: 'Delivered 7+ production features used by enterprise users, ensuring reliable API handling and smooth system performance.' },
      { title: 'Frontend Optimization', desc: 'Improved frontend performance by reducing unnecessary re-renders using custom hooks and reusable component patterns.' },
      { title: 'RBAC Authentication System', desc: 'Developed a secure role-based authentication and access control system for multi-tenant applications.' },
      { title: 'Automated Journey Drop-off Intelligence', desc: 'Configured event tracking across 20+ drop-off stages, integrating with marketing automation platform for behavioral intelligence.' },
      { title: 'Event Tracking & Analytics System', desc: 'Built a real-time event tracking system to capture and process 1,000+ user events daily for better journey and behavior analysis.' },
      { title: 'Technical Documentation', desc: 'Authored clear technical documentation for event configuration and tracking workflows, enabling smooth adoption across multiple product teams.' },
    ],
  },
  {
    company: 'Zeni.ai',
    role: 'Quality Assurance Intern',
    type: 'Internship',
    period: 'May 2024 – August 2024',
    location: 'Pune, Maharashtra',
    current: false,
    color: 'from-violet-500 to-purple-500',
    icon: '🧪',
    highlights: [
      { title: 'Quality Assurance', desc: 'Maintained and optimized test scripts to ensure smooth and reliable software releases.' },
      { title: 'Test Automation', desc: 'Automated software testing workflows using Python, reducing manual effort and boosting efficiency.' },
    ],
  },
  {
    company: 'Skyroot Aerospace',
    role: 'SDE Intern',
    type: 'Internship',
    period: 'May 2024 – August 2024',
    location: 'Hyderabad, Telangana',
    current: false,
    color: 'from-orange-500 to-amber-500',
    icon: '🛸',
    highlights: [
      { title: 'Web Development', desc: 'Built and deployed a static website for SPACEFED, enhancing visibility and collaboration.' },
      { title: 'Engine Optimization', desc: 'Developed and implemented a Python script to enhance rocket motor engine performance.' },
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="py-24 px-4 bg-white dark:bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="section-animate">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Career</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <div className={`hidden md:flex absolute left-5 top-6 w-7 h-7 rounded-full items-center justify-center text-sm bg-gradient-to-br ${exp.color} shadow-lg`}>
                    {exp.icon}
                  </div>

                  <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-blue-300 dark:hover:border-blue-400/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <span className="md:hidden text-xl">{exp.icon}</span>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-400 text-xs font-medium border border-green-200 dark:border-green-500/20">
                              Current
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-medium border border-blue-200 dark:border-blue-500/20">
                            {exp.type}
                          </span>
                        </div>
                        <p className={`text-base font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">{exp.period}</p>
                        <p className="text-slate-400 dark:text-slate-500 text-xs mt-1 flex items-center gap-1 sm:justify-end">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br ${exp.color}`} />
                          <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            <span className="text-slate-900 dark:text-slate-200 font-semibold">{h.title}: </span>
                            {h.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
