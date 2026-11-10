'use client';

import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectsSection from "./components/ProjectsSection";
import GatewaySection from "./components/GatewaySection";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090B]">
      {/* Particles - Rendered INSIDE the charcoal background container */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero/>
        <ExperienceSection/>
        <div id="projects">
          <ProjectsSection/>
        </div>
        <TestimonialsSection/>
        <GatewaySection/>
        <div id="contact">
          <BentoGrid/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
