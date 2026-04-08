'use client';

import { Marquee } from '../registry/magicui/marquee';
import { motion } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechStart',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'Absolutely incredible work! The full-stack application delivered exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder at AutoFlow',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'The automation workflows transformed how we operate. We saved 20+ hours per week.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager at InnovateCo',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'The AI agent handles customer support brilliantly. Response quality is impressive.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CEO at DataSync',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    content: 'Professional and delivers quality. The Next.js app is blazing fast and scalable.',
    rating: 5,
  },
  {
    name: 'Jessica Thompson',
    role: 'Director at CloudVentures',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    content: 'Best developer we have worked with. The automation solutions are game-changing.',
    rating: 5,
  },
  {
    name: 'Alex Turner',
    role: 'Tech Lead at ScaleUp',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face',
    content: 'The AI integration was seamless. Our productivity increased by 40%.',
    rating: 5,
  },
];

// Split testimonials for rows
const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 fill-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Testimonial card component
function TestimonialCard({
  name,
  role,
  avatar,
  content,
  rating,
}: {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}) {
  return (
    <motion.figure
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative w-[18rem] sm:w-[24rem] lg:w-[26rem] cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-md p-5 sm:p-7 shadow-2xl hover:shadow-violet-500/20 hover:border-white/30 transition-all duration-300 group"
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
      
      <div className="relative z-10">
        {/* Header with avatar */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-violet-400/50 transition-all duration-300"
              src={avatar}
              alt={name}
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900" />
          </div>
          <div className="flex flex-col">
            <figcaption className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
              {name}
            </figcaption>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>

        {/* Star rating */}
        <div className="mb-5">
          <StarRating rating={rating} />
        </div>

        {/* Testimonial content */}
        <blockquote className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
          "{content}"
        </blockquote>

        {/* Decorative quote icon */}
        <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
    </motion.figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 sm:py-16 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-teal-500/10 border border-violet-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-yellow-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-violet-300 uppercase tracking-wider">
              Testimonials
            </span>
          </motion.div>
          
          {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-violet-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
              Amazing Clients
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from some of our valued clients
          </p> */}
        </motion.div>

        {/* Horizontal Marquee - Premium smooth scrolling */}
        <div className="relative">
          {/* Top gradient fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-950 to-transparent z-10" />
          
          {/* Marquee container */}
          <div className="relative w-full overflow-hidden">
            <Marquee 
              pauseOnHover 
              className="[--duration:60s] [--gap:2rem]"
              repeat={4}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </Marquee>
          </div>

          {/* Bottom gradient fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-950 to-transparent z-10" />
          
          {/* Side gradient fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
