'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '../../public/profile_pic.jpeg';

type NavItem = {
  name: string;
  href: string;
  icon: string;
  color: string;
};

const navItems: NavItem[] = [
  { name: 'Story Mode', href: '/story-mode', icon: '📖', color: 'from-violet-500 to-violet-600' },
  { name: 'Future Me', href: '/future-me', icon: '⚡', color: 'from-teal-500 to-teal-600' },
  { name: 'Why Hire Me?', href: '/why-hire-me', icon: '🏆', color: 'from-violet-500 to-violet-600' },
];

const sectionLinks = [
  { name: 'Hero', href: '#', icon: '🏠' },
  { name: 'Experience', href: '#experience', icon: '💼' },
  { name: 'Projects', href: '#projects', icon: '🚀' },
  { name: 'Testimonials', href: '#testimonials', icon: '💬' },
  { name: 'Gateway', href: '/gateway', icon: '🌐' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ahsen-adil', icon: 'GitHub' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahsen-adil-aa842a367/', icon: 'LinkedIn' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating unique navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Unique glass container */}
          <div className="relative">
            {/* Animated glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
            
            {/* Main navbar container */}
            <div className="relative flex items-center justify-between gap-4 px-6 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
              
              {/* Logo - Left side */}
              <Link href="/" className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  {/* Animated icon */}
                  <div className="relative w-10 h-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg opacity-70"
                    />
                    <div className="absolute inset-1 bg-black rounded-md flex items-center justify-center">
                      <span className="text-xl">⚡</span>
                    </div>
                  </div>
                  
                  {/* Logo text with gradient */}
                  <div className="hidden sm:block">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      Ahsen's
                    </span>
                    <span className="text-xl font-bold text-white ml-1">Portfolio</span>
                  </div>
                </motion.div>
              </Link>

              {/* Navigation Links - Center */}
              <div className="flex items-center gap-2">
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                      className="relative group cursor-pointer"
                    >
                      {/* Hover background */}
                      <motion.div
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          scale: activeIndex === index ? 1 : 0.8,
                        }}
                        className={`absolute inset-0 bg-white/10 border-white/30 rounded-xl opacity-20`}
                      />
                      
                      {/* Link content */}
                      <div className="relative px-4 py-2.5 flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors hidden sm:block">
                          {item.name}
                        </span>
                      </div>

                      {/* Bottom accent line on hover */}
                      <motion.div
                        animate={{
                          width: activeIndex === index ? '100%' : '0%',
                        }}
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Profile Icon - Right side */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSidebarOpen(true)}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                
                {/* Profile image container */}
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all">
                  <Image
                    src={profilePic}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.button>

              {/* Mobile menu button */}
              {/* Removed - not needed */}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-gradient-to-b from-gray-900 to-black border-l border-white/10 z-50 overflow-y-auto"
            >
              {/* Sidebar Content */}
              <div className="p-6">
                {/* Header with close button */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Menu</h2>
                    <p className="text-sm text-gray-400">Navigate the portfolio</p>
                  </div>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Profile Section */}
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 mb-4 mx-auto">
                    <Image
                      src={profilePic}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">Ahsen</h3>
                  <p className="text-sm text-gray-400 text-center mt-1">AI Engineer</p>
                </div>

                {/* Special Routes */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Special Routes</h4>
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsSidebarOpen(false)}>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-sm font-medium text-white">{item.name}</span>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Page Sections */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Page Sections</h4>
                  <div className="space-y-2">
                    {sectionLinks.map((item, index) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsSidebarOpen(false)}>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="group p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          {item.icon === 'GitHub' ? (
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          ) : (
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          )}
                        </svg>
                        <span className="text-sm font-medium text-gray-300">{item.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-12" />
    </>
  );
}

// Mobile Menu Component (simplified - just hamburger for small screens)
function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden relative w-10 h-10 flex items-center justify-center"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : {}}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : {}}
            className="w-6 h-0.5 bg-white rounded-full"
          />
        </div>
      </button>

      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 sm:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-l border-white/10 z-50 p-6 sm:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-8 mt-8">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ahsen's
              </span>
              <span className="text-2xl font-bold text-white ml-1">Portfolio</span>
            </div>

            <div className="space-y-4">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group p-4 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all cursor-pointer`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-lg font-medium text-white">{item.name}</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
