'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StoryModePage() {
  const sections = [
    {
      title: 'Who I Am',
      content: 'My name is Ahsen Adil, and I am an AI Engineer driven by curiosity, creativity, and the ambition to build something meaningful in the world of technology. I started as a student with a simple mindset to learn, but today I am someone who transforms ideas into real digital experiences.',
      icon: '👋',
    },
    {
      title: 'Where It All Started',
      content: 'My journey began after completing my Intermediate education. In 2024, I took my first step into tech by learning HTML, CSS, and JavaScript. At that time, everything felt new, but I stayed consistent. Small experiments turned into real projects, and slowly I realized that coding was not just a skill for me, it was something I truly enjoyed doing every day.',
      icon: '🔥',
    },
    {
      title: 'Stepping Into AI World',
      content: 'To grow further, I joined the Governor House Karachi Agentic AI program, where I explored how intelligent systems work, how automation is built, and how AI can make decisions. At the same time, I learned Generative AI and Chatbot Development from Saylani Mass IT Training, where I gained hands-on experience and also earned a certificate. This phase completely changed my direction and helped me step into the AI field with confidence.',
      icon: '🤖',
    },
    {
      title: 'What I Do Now',
      content: 'Today, I work as an AI Engineer with strong expertise in multiple areas. I build modern web applications using Full Stack Development, create intelligent systems using Generative AI, design smart decision-making solutions with Agentic AI, and develop AI-powered automation workflows that solve real-world problems. I focus on building projects that are not only functional but also smart, user-friendly, and impactful.',
      icon: '⚡',
    },
    {
      title: 'My Vision',
      content: 'I am continuously learning, improving, and pushing my limits. My goal is to create powerful AI-driven solutions that make a difference and help shape the future of technology. This is just the beginning of my journey, and I am excited for what comes next 🚀',
      icon: '🌟',
    },
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <span className="text-xs font-medium text-violet-300 uppercase tracking-wider">
              My Journey
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
              Story Mode
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From a curious student to an AI Engineer building intelligent systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-teal-500/50 to-transparent" />

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-teal-500 border-4 border-black z-10" />

                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0 md:px-12">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{section.icon}</span>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation - Logical Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
          <Link
            href="/future-me"
            className="px-6 py-3 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-200 font-medium text-sm hover:bg-teal-500/30 transition-all text-center flex items-center justify-center gap-2"
          >
            Future Me
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
