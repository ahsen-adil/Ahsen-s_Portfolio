'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FutureMePage() {
  const sections = [
    {
      title: 'The Vision',
      content: 'The future I see for myself is clear, focused, and built around growth. I am committed to moving forward as an AI Engineer, going deeper into the world of intelligent systems, automation, and real-world problem solving. What I have learned so far is just the foundation.',
      icon: '🚀',
    },
    {
      title: 'Building Stronger Foundations',
      content: 'I already have a strong understanding of cloud concepts, but my goal is to make them rock solid. I want to work with modern cloud ecosystems, design distributed systems, and deploy AI-powered applications that are fast, reliable, and globally accessible. In the coming time, I will focus on strengthening my expertise in Cloud Native Architecture, Microservices and scalable backend systems, Containerization and orchestration, and Real-world deployment and DevOps practices.',
      icon: '☁️',
    },
    {
      title: 'Deep Dive Into AI',
      content: 'My vision is to go beyond basic AI implementation and move towards advanced systems. I want to create smarter AI agents that can think, plan, and act, more powerful Generative AI applications, automation systems that reduce human effort and increase efficiency, and AI solutions that solve real-world business problems. I aim to combine creativity with intelligence and build systems that actually make a difference.',
      icon: '🤖',
    },
    {
      title: 'Long Term Vision',
      content: "I don't just want to follow trends, I want to be part of the people who create them. In the future, I see myself working on impactful projects, collaborating with global teams, and building products that reach thousands or even millions of users. I want to become someone who is known for creating smart, scalable, and innovative AI solutions.",
      icon: '🌍',
    },
    {
      title: 'The Goal',
      content: 'To become a highly skilled AI Engineer who can design, build, and deploy intelligent systems at scale. To master Cloud Native development and create powerful, production-ready applications. To turn ideas into reality using AI, automation, and modern technologies. And most importantly, to build something that truly matters 🚀',
      icon: '✨',
    },
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">
              My Vision
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              Future Me
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable AI solutions and shaping the future of technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-violet-500/50 to-transparent" />

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
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-violet-500 border-4 border-black z-10" />

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
            href="/story-mode"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Story Mode
          </Link>
          <Link
            href="/why-hire-me"
            className="px-6 py-3 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200 font-medium text-sm hover:bg-violet-500/30 transition-all text-center flex items-center justify-center gap-2"
          >
            Why Hire Me
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
