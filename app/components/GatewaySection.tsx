'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'story-mode',
    title: 'Story Mode',
    description: 'Journey through my developer story — from first lines of code to building production-ready applications.',
    longDescription: 'Every chapter tells a story of growth, challenges overcome, and lessons learned. Discover the milestones that shaped my journey.',
    href: '/story-mode',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    colors: { primary: '#7C78E5', secondary: '#9591F2', accent: '#C4C2F7' },
    pattern: 'diagonal',
    stats: [
      { value: '2024', label: 'Started' },
      { value: 'AI', label: 'Focus' },
    ],
  },
  {
    id: 'future-me',
    title: 'Future Me',
    description: 'Explore my vision, goals, and the innovative technologies I am working with for tomorrow.',
    longDescription: 'The future is built today. Explore the emerging technologies and ambitious goals shaping what comes next.',
    href: '/future-me',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    colors: { primary: '#7C78E5', secondary: '#9591F2', accent: '#C4C2F7' },
    pattern: 'dots',
    stats: [
      { value: 'AI/ML', label: 'Focus' },
      { value: 'Cloud', label: 'Next' },
    ],
  },
  {
    id: 'why-hire-me',
    title: 'Why Hire Me?',
    description: 'Discover the unique value I bring — skills, dedication, and results that make a difference.',
    longDescription: 'Beyond code lies commitment, communication, and a drive for excellence. See what sets me apart.',
    href: '/why-hire-me',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    colors: { primary: '#7C78E5', secondary: '#9591F2', accent: '#C4C2F7' },
    pattern: 'grid',
    stats: [
      { value: '100%', label: 'Success' },
      { value: 'Fast', label: 'Learner' },
    ],
  },
];

// Pattern backgrounds
function PatternBackground({ pattern, colors }: { pattern: string; colors: { primary: string; secondary: string } }) {
  if (pattern === 'diagonal') {
    return (
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`diagonal-${pattern}`} patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M-10 10 L10 -10 M30 10 L50 -10 M-10 50 L10 30" stroke={colors.primary} strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#diagonal-${pattern})`} />
        </svg>
      </div>
    );
  }

  if (pattern === 'dots') {
    return (
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`dots-${pattern}`} patternUnits="userSpaceOnUse" width="30" height="30">
              <circle cx="3" cy="3" r="1.5" fill={colors.primary} opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${pattern})`} />
        </svg>
      </div>
    );
  }

  // Grid pattern
  return (
    <div className="absolute inset-0 opacity-15">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${pattern}`} patternUnits="userSpaceOnUse" width="40" height="40">
            <path d="M40 0 L0 0 0 40" fill="none" stroke={colors.primary} strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${pattern})`} />
      </svg>
    </div>
  );
}

export default function GatewaySection() {
  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden py-16 sm:py-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C78E5]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C78E5]/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            Explore My{' '}
            <span className="bg-gradient-to-r from-white via-[#C4C2F7] to-[#9591F2] bg-clip-text text-transparent">
              Universe
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto">
            Select a journey below to discover different aspects of my work and vision
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={section.href} className="group block h-full">
                <div className="relative h-full">
                  {/* Card content */}
                  <div className="relative h-full min-h-[380px] bg-[#0D0F13]/85 backdrop-blur-xl rounded-3xl border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_32px_-8px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 group-hover:border-[#7C78E5]/40 group-hover:bg-[#111319] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_36px_-8px_rgba(0,0,0,0.7)] group-hover:-translate-y-1">
                    {/* Pattern background */}
                    <PatternBackground pattern={section.pattern} colors={section.colors} />

                    {/* Subtle gradient highlight */}
                    <div
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                      style={{ background: `linear-gradient(135deg, ${section.colors.primary}, ${section.colors.secondary})` }}
                    />

                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col h-full">
                      {/* Icon container */}
                      <div className="mb-5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-[#7C78E5]/15 border border-[#7C78E5]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-[#C4C2F7]"
                        >
                          <div>
                            {section.icon}
                          </div>
                        </div>
                      </div>

                      {/* Stats row */}
                      <div className="flex gap-2 mb-4">
                        {section.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/[0.06]"
                          >
                            <div className="text-xs font-semibold text-white/90">{stat.value}</div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wide">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl font-bold font-display tracking-tight mb-2.5 transition-colors duration-300 text-white group-hover:text-[#C4C2F7]"
                      >
                        {section.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {section.description}
                      </p>

                      {/* Long description (revealed on hover) */}
                      <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24">
                        <p className="text-zinc-500 text-xs leading-relaxed pt-3 border-t border-white/[0.06]">
                          {section.longDescription}
                        </p>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1" />

                      {/* CTA */}
                      <div className="mt-5 pt-4 border-t border-white/[0.08]">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                            Start Journey
                          </span>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                            <span>Enter</span>
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="h-0.5 bg-white/[0.08] rounded-full overflow-hidden">
                          <div
                            className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full bg-[#7C78E5]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
