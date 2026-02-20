import { useEffect, useRef } from 'react';

const socials = [
  {
    name: 'LinkedIn',
    handle: 'shadab-raza',
    url: 'https://linkedin.com/in/shadab-raza',
    description: 'Professional network & career updates',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'from-blue-600 to-blue-400',
    hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-600/10',
    hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-500/40',
  },
  {
    name: 'GitHub',
    handle: 'shadab-raza',
    url: 'https://github.com/Shadab-4123',
    description: 'Open source projects & contributions',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'from-slate-600 to-slate-400',
    hoverBg: 'hover:bg-slate-100 dark:hover:bg-white/5',
    hoverBorder: 'hover:border-slate-300 dark:hover:border-white/20',
  },
  {
    name: 'LeetCode',
    handle: 'shadab-raza',
    url: 'https://leetcode.com/shadab-raza',
    description: 'DSA practice & competitive coding',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    color: 'from-yellow-500 to-orange-400',
    hoverBg: 'hover:bg-yellow-50 dark:hover:bg-yellow-500/10',
    hoverBorder: 'hover:border-yellow-300 dark:hover:border-yellow-500/30',
  },
  {
    name: 'Email',
    handle: 'shadabraza281@gmail.com',
    url: 'mailto:shadabraza281@gmail.com',
    description: 'Best way to reach me directly',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-red-500 to-rose-400',
    hoverBg: 'hover:bg-red-50 dark:hover:bg-red-500/10',
    hoverBorder: 'hover:border-red-300 dark:hover:border-red-500/30',
  },
  {
    name: 'Phone',
    handle: '+91 63981-84799',
    url: 'tel:+916398184799',
    description: 'Available for calls (IST timezone)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-400',
    hoverBg: 'hover:bg-green-50 dark:hover:bg-green-500/10',
    hoverBorder: 'hover:border-green-300 dark:hover:border-green-500/30',
  },
];

export default function SocialLinks() {
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
    <section id="social" className="py-24 px-4 bg-slate-50 dark:bg-[#0d1422]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="section-animate">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Connect</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Social <span className="gradient-text">Links</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mb-6" />
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
              Let's connect! Find me across the web or reach out directly.
            </p>
          </div>

          {/* Social cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`glass-card rounded-2xl p-5 flex items-start gap-4 ${social.hoverBg} ${social.hoverBorder} transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shrink-0`}>
                  {social.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{social.name}</p>
                    <svg className="w-3 h-3 text-slate-400 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5">{social.handle}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
