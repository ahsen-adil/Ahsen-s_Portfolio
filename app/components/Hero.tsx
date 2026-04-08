'use client';

import { useRef, useState, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MorphingText } from '../registry/magicui/morphing-text';
import { SparklesText } from '../registry/magicui/sparkles-text';
import front from "../../public/bottom.png"
import back from "../../public/top.png"
import robo from "../../public/robo.jpg"
import start from "../../public/start.png"
import end from "../../public/end.png"
import rob from "../../public/rob-removebg-preview.png"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskPosition, setMaskPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMaskPosition({ x, y });
    setCursorPos({ x, y });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-transparent px-4 sm:px-6 lg:px-8 pt-4 pb-12 overflow-hidden">
      {/* Subtle violet/teal gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 lg:-top-40 lg:-left-40 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-violet-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 lg:-bottom-40 lg:-right-40 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-teal-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] sm:min-h-[80vh] lg:min-h-[80vh]">
          {/* Left side - Minimal & Bold */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/30 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-violet-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-violet-200">Available for work</span>
            </motion.div>

            {/* Single bold description line with Sparkles Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl mx-auto lg:mx-0"
            >
              <SparklesText 
                colors={{ first: '#8B5CF6', second: '#14B8A6' }}
                sparklesCount={8}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                AI Engineer
              </SparklesText>{' '}
              <span className="hidden sm:inline">Building</span>
              <span className="sm:hidden">Build</span>{' '}
              <MorphingText 
                texts={['Code', 'Concepts', 'Designs', 'Ideas']} 
                className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent"
              />{' '}
              <span className="hidden sm:inline">Scalable <br /> Solutions that Drive Real Impact</span>
              <span className="sm:hidden">Smart Solutions</span>
            </motion.div>

            {/* Minimal tech pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {['AI/ML', 'Generative AI', 'Agentic AI', 'Automations'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-200/80"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Clean buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 text-white font-medium text-sm hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 cursor-pointer"
              >
                View My Work
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-full border border-violet-500/30 text-violet-200 font-medium text-sm hover:bg-violet-500/10 transition-all hover:scale-105 cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right side - Interactive image (Desktop: UNCHANGED) */}
          <div
            ref={containerRef}
            className="group relative w-full aspect-square max-w-sm sm:max-w-lg mx-auto lg:max-w-none cursor-none"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {/* Back image (bottom layer - revealed through front image mask) */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={start}
                  alt="Profile revealed"
                  width={600}
                  height={600}
                  className="w-[300px] sm:w-[350px] lg:w-[400px] h-full lg:object-cover mt-2 ml-2 lg:mt-0 lg:ml-0" // mt-2 ml-2
                  style={{ objectPosition: 'center' }}
                />
              </div>

              {/* Front image (top layer - with hole cut out on hover) */}
              <div
                className="absolute inset-0 w-full h-full z-10"
                style={{
                  WebkitMaskImage: isHovering
                    ? `radial-gradient(circle 200px at ${maskPosition.x}% ${maskPosition.y}%, transparent 0%, transparent 85%, black 100%)`
                    : 'none',
                  maskImage: isHovering
                    ? `radial-gradient(circle 130px at ${maskPosition.x}% ${maskPosition.y}%, transparent 0%, transparent 85%, black 100%)`
                    : 'none',
                }}
              >
                <Image
                  src={rob}
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-[320px] sm:w-[350px] lg:w-[400px] mt-6 h-full lg:object-cover rounded-[130px]"
                  style={{ objectPosition: 'center' }}
                />
              </div>

              {/* Cursor indicator ring */}
              <div
                className={`absolute w-16 h-16 rounded-full border-2 border-white/60 pointer-events-none transition-all duration-200 ease-out ${
                  isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
                }`}
                style={{
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)',
                }}
              />

              {/* Inner cursor dot */}
              <div
                className={`absolute w-3 h-3 rounded-full bg-white pointer-events-none transition-all duration-100 ease-out ${
                  isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 12px rgba(255, 255, 255, 0.9)',
                }}
              />
            </div>

            {/* Hover instruction tooltip */}
            <div
              className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm whitespace-nowrap transition-all duration-500 ${
                isHovering ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Hover to reveal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
