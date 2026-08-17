import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'AI/ML',
    icon: '🤖',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50 dark:bg-pink-500/10',
    border: 'border-pink-200 dark:border-pink-500/20',
    text: 'text-pink-700 dark:text-pink-400',
    iconBg: 'bg-pink-50 dark:bg-pink-500/10 border-pink-200 dark:border-pink-500/20',
    skills: ['Machine Learning', 'LangChain', 'CrewAI', 'HuggingFace', 'SentenceTransformers', 'PyTorch', 'TensorFlow', 'Keras', 'Prompt Engineering', 'LLMs', 'RAG', 'AI Agents'],
  },
  {
    category: 'Languages & Frameworks',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200 dark:border-blue-500/20',
    text: 'text-blue-700 dark:text-blue-400',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20',
    skills: ['Python', 'Flask', 'FastAPI', 'SQLAlchemy', 'Express.js', 'Node.js', 'React.js', 'TypeScript', 'Redux', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-200 dark:border-emerald-500/20',
    text: 'text-emerald-700 dark:text-emerald-400',
    iconBg: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
    skills: ['MySQL', 'MongoDB', 'SQLite', 'Supabase'],
  },
  {
    category: 'Developer Tools',
    icon: '🛠️',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50 dark:bg-violet-500/10',
    border: 'border-violet-200 dark:border-violet-500/20',
    text: 'text-violet-700 dark:text-violet-400',
    iconBg: 'bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20',
    skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Jira', 'Claude Code', 'Cursor AI'],
  },
  {
    category: 'Build Tools',
    icon: '⚙️',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50 dark:bg-orange-500/10',
    border: 'border-orange-200 dark:border-orange-500/20',
    text: 'text-orange-700 dark:text-orange-400',
    iconBg: 'bg-orange-50 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20',
    skills: ['NPM', 'Vite', 'Pip', 'Webpack', 'Babel'],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-24 px-4 bg-slate-50 dark:bg-[#0d1422]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="section-animate">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Expertise</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto" />
          </div>

          {/* Skill grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.category} className="glass-card rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-400/25 transition-all duration-300">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${group.iconBg} border flex items-center justify-center text-lg`}>
                    {group.icon}
                  </div>
                  <h3 className={`text-lg font-bold ${group.text}`}>{group.category}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium ${group.bg} ${group.text} border ${group.border} hover:scale-105 transition-transform duration-150 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
