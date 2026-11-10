'use client';

import { JSX, useState } from 'react';
import { IconCloud } from '../registry/magicui/icon-cloud';
import { motion, AnimatePresence } from 'framer-motion';

// Tech icons for the Icon Cloud
const techSlugs = [
  'nextdotjs',
  'typescript',
  'javascript',
  'html5',
  'css3',
  'express',
  'react',
  'nodedotjs',
  'python',
  'docker',
  'git',
  'firebase',
  'vercel',
  'amazonaws',
  'postgresql',
  'amazonaws',
  'github',
  'visualstudiocode',
  'graphql',
  'tailwindcss',
  'mongodb',
  'figma',
  'kubernetes',
];

// Category data - unified under single muted accent
const experiences = [
  {
    id: 'agents',
    heading: 'AI Agents',
    description:
      'I build autonomous AI agents powered by LLMs and modern APIs that can reason, communicate, and execute complex tasks. These intelligent systems adapt to real-world scenarios, provide smart responses, and act as virtual assistants capable of handling everything from customer support to data analysis.',
    iconColor: '#9591F2',
  },
  {
    id: 'automation',
    heading: 'AI & Automation',
    description:
      'I design intelligent workflows that eliminate repetitive tasks and boost productivity. By integrating AI tools, automation platforms like n8n, and custom scripts, I help streamline operations, reduce manual effort, and enable teams to focus on what truly matters—innovation and growth.',
    iconColor: '#9591F2',
  },
  {
    id: 'fullstack',
    heading: 'Full Stack Development',
    description:
      'I craft end-to-end web applications using cutting-edge technologies like Next.js, TypeScript, and modern databases. From responsive frontends to robust APIs and scalable backends, I deliver seamless digital experiences that are performant, maintainable, and user-focused.',
    iconColor: '#9591F2',
  },
];

// Simple SVG icons for each category
const NextJSIcon = () => (
  <svg width="48" height="48" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="#000000" />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.305 90.305 0 009.509-7.325z" fill="url(#paint0_linear)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="148.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const AutomationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m8.66-15.66l-4.24 4.24m-4.24 4.24l-4.24 4.24m15.66-8.66h-6m-6 0H1" />
  </svg>
);

const AIAgentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
    <circle cx="7.5" cy="14.5" r="1.5" />
    <circle cx="16.5" cy="14.5" r="1.5" />
  </svg>
);

const iconComponents: Record<string, () => JSX.Element> = {
  fullstack: NextJSIcon,
  automation: AutomationIcon,
  agents: AIAgentIcon,
};

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const images = techSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const currentExperience = experiences[currentIndex];
  const CurrentIcon = iconComponents[currentExperience.id];

  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -50 : 50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative flex items-center justify-center bg-transparent px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#7C78E5]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#7C78E5]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Icon Cloud */}
          <div className="col-span-1 flex items-center justify-center order-1 w-full mb-10">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Main glassmorphism container */}
              <div className="relative bg-[#0D0F13]/85 backdrop-blur-xl rounded-3xl border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_36px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Content wrapper with padding */}
                <div className="relative p-4 sm:p-6">
                  {/* Top badge with stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white/[0.08] border-2 border-[#0D0F13] flex items-center justify-center text-xs font-semibold text-white shadow-sm">
                          15+
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#7C78E5]/20 border-2 border-[#0D0F13] flex items-center justify-center text-xs font-semibold text-[#C4C2F7] shadow-sm">
                          AI
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/[0.05] border-2 border-[#0D0F13] flex items-center justify-center text-xs font-semibold text-zinc-300 shadow-sm">
                          Web
                        </div>
                      </div>
                      <span className="text-xs text-zinc-400 font-medium">Technologies</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-zinc-300 font-medium">Active</span>
                    </div>
                  </div>
                </div>

                {/* Icon Cloud container - Centered */}
                <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 h-64">
                  <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square mx-auto mr-22 lg:mr-16">
                    <IconCloud images={images} />
                  </div>
                </div>

                {/* Bottom info bar with padding */}
                <div className="relative z-10 p-4 sm:p-6 pt-3 sm:pt-4 border-t border-white/[0.06] mt-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div className="group">
                      <div className="text-sm sm:text-lg font-bold font-display text-white group-hover:text-[#9591F2] transition-colors">Full</div>
                      <div className="text-[8px] sm:text-xs text-zinc-500 uppercase tracking-wider">Stack</div>
                    </div>
                    <div className="group">
                      <div className="text-sm sm:text-lg font-bold font-display text-white group-hover:text-[#9591F2] transition-colors">AI</div>
                      <div className="text-[8px] sm:text-xs text-zinc-500 uppercase tracking-wider">Powered</div>
                    </div>
                    <div className="group">
                      <div className="text-sm sm:text-lg font-bold font-display text-white group-hover:text-[#9591F2] transition-colors">24/7</div>
                      <div className="text-[8px] sm:text-xs text-zinc-500 uppercase tracking-wider">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle outer border accents */}
              <div className="absolute -inset-4 sm:-inset-8 border border-white/[0.03] rounded-2xl sm:rounded-[40px] pointer-events-none" />
              
              {/* Background ambient depth */}
              <div className="absolute -inset-4 bg-[#7C78E5]/5 rounded-3xl blur-2xl -z-10 opacity-40" />
              
              {/* Floating tech badge */}
              <motion.div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#12141A]/95 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_4px_12px_rgba(0,0,0,0.5)]"
                initial={{ y: 0 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[10px] sm:text-xs font-semibold text-white tracking-wide">Tech Stack</span>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Dynamic Content Card */}
          <div className="col-span-1 order-2">
            <div className="relative">
              {/* Main content card with glassmorphism */}
              <div className="relative bg-[#0D0F13]/85 backdrop-blur-xl rounded-3xl border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_36px_-12px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C78E5]/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Content container */}
                <div className="relative z-10">
                  {/* Icon at top */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      key={`icon-${currentExperience.id}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-2xl bg-[#7C78E5]/12 backdrop-blur-sm flex items-center justify-center border border-[#7C78E5]/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-[#9591F2]"
                    >
                      <CurrentIcon />
                    </motion.div>
                  </div>

                  {/* Heading */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-center text-white mb-5 tracking-tight">
                    {currentExperience.heading}
                  </h2>

                  {/* Description */}
                  <p className="text-zinc-400 text-center text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto">
                    {currentExperience.description}
                  </p>

                  {/* Navigation arrows */}
                  <div className="flex items-center justify-center gap-4">
                    {/* Back button */}
                    <motion.button
                      onClick={handlePrev}
                      whileHover={{ scale: 1.1, x: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group w-12 h-12 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] cursor-pointer"
                      aria-label="Previous experience"
                    >
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </motion.button>

                    {/* Dots indicator */}
                    <div className="flex items-center gap-2">
                      {experiences.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 'right' : 'left');
                            setCurrentIndex(index);
                          }}
                          className="relative w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                          style={{
                            backgroundColor: index === currentIndex ? '#7C78E5' : 'rgba(255,255,255,0.15)',
                            width: index === currentIndex ? '24px' : '8px',
                          }}
                          whileHover={{ scale: 1.2 }}
                          aria-label={`Go to experience ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Next button */}
                    <motion.button
                      onClick={handleNext}
                      whileHover={{ scale: 1.1, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group w-12 h-12 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] cursor-pointer"
                      aria-label="Next experience"
                    >
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Animated content transitions */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentExperience.id}
                    custom={direction || 'right'}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 pointer-events-none"
                  />
                </AnimatePresence>
              </div>

              {/* Decorative subtle border line */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#7C78E5]/30 to-transparent" />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                    index === currentIndex
                      ? 'bg-[#7C78E5]/15 border-[#7C78E5]/40 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_8px_rgba(124,120,229,0.2)]'
                      : 'bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:bg-white/[0.06] hover:border-white/20 hover:text-white'
                  }`}
                >
                  {exp.heading}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
