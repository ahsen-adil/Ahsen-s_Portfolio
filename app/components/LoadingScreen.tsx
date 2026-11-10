'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Hide loader after minimum time
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#08090B] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle background grid */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,120,229,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(124,120,229,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          </div>

          {/* Ambient orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7C78E5]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#7C78E5]/4 rounded-full blur-3xl"
          />

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Animated logo/name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-12 h-12 rounded-xl bg-[#7C78E5]/15 border border-[#7C78E5]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
              </div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl font-bold font-display tracking-tight"
              >
                <span className="bg-gradient-to-r from-white via-[#C4C2F7] to-[#9591F2] bg-clip-text text-transparent">
                  Ahsen's
                </span>
                <span className="text-white ml-2">Portfolio</span>
              </motion.h1>
            </motion.div>

            {/* Loading text with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-zinc-400 text-sm font-mono">
                <span className="text-[#9591F2]">{'>'}</span>{' '}
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-[#9591F2] pr-1 animate-[typing_2s_steps(20)_infinite,blink_0.75s_step-end_infinite]">
                  Initializing creative environment...
                </span>
              </p>
            </motion.div>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-64 mx-auto"
            >
              {/* Circular progress */}
              <div className="relative w-16 h-16 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background circle */}
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(124, 120, 229, 0.15)"
                    strokeWidth="2"
                  />
                  {/* Progress circle */}
                  <motion.path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C78E5" />
                      <stop offset="100%" stopColor="#9591F2" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Percentage in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {Math.min(Math.round(progress), 100)}%
                  </span>
                </div>
              </div>

              {/* Linear progress bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7C78E5] to-[#9591F2] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          {/* CSS for typing animation */}
          <style jsx>{`
            @keyframes typing {
              0% { width: 0; }
              50% { width: 100%; }
              100% { width: 0; }
            }
            @keyframes blink {
              50% { border-color: transparent; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
