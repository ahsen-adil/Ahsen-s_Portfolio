'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: 'CRM AI Digital FTE',
    description: "This was a production-grade, omnichannel AI Customer Success Agent — the kind that replaces a $75,000/year human role at under $1,000/year operational cost.",
    fullDescription: 'Built for scalability and performance, handling 10K+ concurrent users. Features include real-time inventory tracking, Stripe payments, advanced analytics, and a comprehensive admin dashboard.',
    thumbnail: '/crm.jpeg',
    videoUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7437512098710044674?compact=1',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    color: { from: '#6366F1', to: '#8B5CF6' },
  },
  {
    id: 2,
    title: 'Social Media Agent',
    description: 'built my own Social Media AI Employee — a fully autonomous Digital FTE that runs my social presence 24/7. except it never sleeps, never forgets, and costs a fraction of a human.',
    fullDescription: 'Leveraging cutting-edge AI models to automate complex workflows. Integrates with Slack, Notion, Gmail, and 50+ other tools. Saves teams 20+ hours per week.',
    thumbnail: 'social_media_ai_employee.jpeg',
    videoUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7427012988517122049?compact=1',
    tags: ['Python', 'AI/ML', 'n8n', 'OpenAI'],
    color: { from: '#10B981', to: '#34D399' },
  },
  {
    id: 3,
    title: 'The Evolution of Todo',
    description: 'An AI-powered Todo web application supporting full CRUD operations, Integrated an AI Agent that allows users to manage todos using natural language',
    fullDescription: 'Real-time analytics platform with WebSocket connections, custom D3.js visualizations, automated reporting, and intelligent alerting. Built for high-frequency data processing.',
    thumbnail: 'todo_app.jpeg',
    videoUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7412172535057858561?compact=1',
    tags: ['React', 'D3.js', 'WebSocket', 'Redis'],
    color: { from: '#F59E0B', to: '#FBBF24' },
  },
];

// Video Modal Component
function VideoModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Top Right Corner */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all shadow-lg"
            aria-label="Close video"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video Container - Limited Size */}
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={project.videoUrl}
              title={`${project.title} Demo`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Project Info - Compact Layout */}
          <div className="mt-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              {/* <p className="text-gray-400 text-sm line-clamp-2">{project.fullDescription}</p> */}
            </div>
            <div className="flex flex-wrap gap-1.5 flex-shrink-0">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="relative bg-transparent overflow-hidden py-12 sm:py-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-violet-400/80 uppercase tracking-widest mb-2">
                Selected Work
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Featured <span className="text-gray-600">Projects</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              A curated selection of projects that showcase technical excellence and creative problem-solving.
            </p>
          </div>
        </motion.div>

        {/* Project Navigation - Left side labels */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-20">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className="block py-8 pr-8 text-right group"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className={`text-2xl font-bold transition-all duration-500 ${
                activeProject === index ? 'text-white' : 'text-gray-700 group-hover:text-gray-500'
              }`}>
                0{index + 1}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              activeProject === index && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {/* Left: Large Image */}
                  <div className="relative order-2 lg:order-1 lg:pl-20">
                    <div className="relative">
                      {/* Main image */}
                      <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="aspect-[4/3] rounded-2xl overflow-hidden"
                      >
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-20 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${project.color.from}40, ${project.color.to}40)`,
                        }}
                      />

                      {/* Border glow */}
                      <div
                        className="absolute -inset-1 rounded-2xl opacity-30 blur-xl -z-10"
                        style={{
                          background: `linear-gradient(135deg, ${project.color.from}, ${project.color.to})`,
                        }}
                      />

                      {/* Play button */}
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute inset-0 flex items-center justify-center group"
                      >
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover:bg-white/15 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </motion.button>

                      {/* Project number badge */}
                      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-transparent/90 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">0{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="order-1 lg:order-2 lg:pr-8">
                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-400 text-lg leading-relaxed mb-6"
                    >
                      {project.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8"
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <span>Watch Project Demo</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </motion.div>

                    {/* Scroll hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-12 flex items-center gap-4"
                    >
                      <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <span>Navigate</span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)}
                            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => setActiveProject((prev) => (prev + 1) % projects.length)}
                            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Project Selector */}
        <div className="lg:hidden flex justify-center gap-4 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProject === index ? 'bg-white w-8' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
