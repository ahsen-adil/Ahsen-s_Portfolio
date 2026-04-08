'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhyHireMePage() {
  const sections = [
    {
      title: "I Don't Just Code, I Solve",
      content: "Most developers focus on writing code. I focus on solving problems. I think beyond features and ask: What is the real problem? How can this be smarter? How can this save time or create value? Whether it is an AI chatbot, a web app, or an automation workflow, I build solutions that are practical, efficient, and purpose-driven.",
      icon: '⚡',
      color: 'violet',
    },
    {
      title: 'AI + Development = Real Power',
      content: 'I bring a powerful combination: Full Stack Development + Generative AI + Agentic AI + Automation. This means I don\'t just build static applications. I create intelligent systems that can think, respond, and evolve. From smart chatbots to automated workflows, I can turn a simple idea into a smart product.',
      icon: '🤖',
      color: 'teal',
    },
    {
      title: 'Fast Learner, Faster Builder',
      content: 'I started in 2024 and quickly transformed into an AI Engineer. That speed shows one thing clearly: I learn fast, I adapt fast, and I deliver fast. Give me a new challenge and I will not just understand it. I will build it.',
      icon: '🚀',
      color: 'violet',
    },
    {
      title: 'Focused on Results, Not Excuses',
      content: 'I believe in clean work, clear communication, and real results. I don\'t disappear in the middle of projects. I don\'t overpromise and underdeliver. I stay committed until the work is done properly, because for me, every project is a reflection of my identity.',
      icon: '🎯',
      color: 'teal',
    },
    {
      title: 'Built for the Future',
      content: 'Technology is changing fast, and I am building myself for what comes next: AI-driven systems, Cloud Native applications, Automation-first solutions. When you hire me, you are not hiring for today only. You are investing in someone who is aligned with the future.',
      icon: '🌍',
      color: 'violet',
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
              My Value
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
              Why Hire Me?
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hiring me is not just adding a developer to your team. It is bringing in someone who is obsessed with building things that actually work, scale, and make an impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{section.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Word */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-teal-500/10 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">🔥 Final Word</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            If you want someone who just writes code, there are many options. But if you want someone who thinks, builds, improves, and genuinely cares about creating something powerful, then I am the right choice 🚀
          </p>
        </motion.div>

        {/* Navigation - Logical Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/future-me"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Future Me
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200 font-medium text-sm hover:bg-violet-500/30 transition-all text-center flex items-center justify-center gap-2"
          >
            Home
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
