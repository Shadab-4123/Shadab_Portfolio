import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'LetsChat',
    subtitle: 'Social Media Messaging App',
    description:
      'A full-stack real-time messaging application with instant delivery, typing indicators, and room-based communication. Features secure authentication, group chats, validated image uploads, optimistic UI updates, and geolocation-based user mapping.',
    tech: ['Next.js', 'TypeScript', 'WebSocket', 'NextAuth', 'Tailwind CSS', 'ShadCN', 'Prisma', 'MongoDB'],
    sourceUrl: 'https://github.com/Shadab-4123/LetsChat-nextjs',
    liveUrl: 'https://letschat-0k97.onrender.com/',
    highlights: [
      'Real-time chat with Socket.io — message broadcasting & efficient fetching',
      'Secure RESTful APIs with NextAuth.js (JWT) authentication',
      'Group chats, validated image uploads, optimistic UI updates',
      'Geolocation-based user mapping',
    ],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: '💬',
    featured: true,
  },
  {
    title: 'Search Algorithm Analysis',
    subtitle: 'on Random Graph',
    description:
      'A comparative study of DFS, BFS, GBFS, and A* pathfinding algorithms on a randomly connected graph with 45 nodes. Analyzed execution time, RAM usage, and path length to evaluate performance and optimality trade-offs.',
    tech: ['Python', 'Graph Algorithms', 'DFS', 'BFS', 'GBFS', 'A*', 'Data Analysis'],
    sourceUrl: 'https://github.com/Shadab-4123/Artificial_Intelligence/tree/main/City%20Graph%20Analysis',
    liveUrl: 'https://drive.google.com/file/d/13kdGAcdzaNyYWnW-yuW3U23CTIo-NXXI/view?usp=sharing',
    hasReport: true,
    highlights: [
      'Compared 4 search algorithms on a 45-node random graph',
      'Analyzed execution time, RAM usage, and path length',
      'Tabular comparative reporting with heuristic analysis',
      'Highlighted shortest path accuracy & computational efficiency',
    ],
    gradient: 'from-violet-500 via-purple-500 to-pink-500',
    icon: '🔍',
    featured: false,
  },
];

export default function Projects() {
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
    <section id="projects" className="py-24 px-4 bg-white dark:bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="section-animate">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Personal <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
          </div>

          {/* Project cards */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-400/30 transition-all duration-300 group"
              >
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shrink-0`}>
                          {project.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                            {project.featured && (
                              <span className="px-2 py-0.5 rounded-full bg-yellow-50 dark:bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 text-xs font-medium border border-yellow-200 dark:border-yellow-500/20">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white text-sm font-medium transition-all duration-200"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          Source Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-sm font-medium transition-all duration-200 hover:opacity-90`}
                          >
                            {project.hasReport ? (
                              <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Report
                              </>
                            ) : (
                              <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                              </>
                            )}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: highlights */}
                    <div className="lg:w-72 shrink-0">
                      <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Key Highlights</h4>
                      <ul className="space-y-2.5">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br ${project.gradient}`} />
                            <span className="text-slate-600 dark:text-slate-400 text-sm">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
