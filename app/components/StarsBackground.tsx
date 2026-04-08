'use client';

import { useEffect, useRef, useState } from 'react';

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('❌ Canvas element not found');
      return;
    }

    console.log('✅ Stars canvas found');
    setIsLoaded(true);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('❌ Canvas context not found');
      return;
    }

    console.log('✅ Canvas context obtained');

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    const starCount = 300;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('📐 Canvas resized:', canvas.width, 'x', canvas.height);
    };

    // Create a star object
    const createStar = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.2 + 0.05,
    });

    // Initialize stars
    const init = () => {
      resizeCanvas();
      stars = Array.from({ length: starCount }, createStar);
      console.log('✨ Created', stars.length, 'stars');
    };

    // Draw all stars
    const drawStars = () => {
      if (!ctx) return;

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    };

    // Update star positions
    const updateStars = () => {
      stars = stars.map((star) => {
        let { x, y, size, opacity, speed } = star;

        y += speed;
        opacity = 0.2 + Math.sin(Date.now() * 0.001 * speed * 10) * 0.5;

        // Wrap around when star goes off screen
        if (y > canvas.height) {
          y = 0;
          x = Math.random() * canvas.width;
        }

        return { ...star, x, y, opacity };
      });
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      updateStars();
      drawStars();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    init();
    animate();
    console.log('🚀 Animation started');

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      console.log('🧹 Cleanup complete');
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'transparent',
          display: 'block',
          zIndex: '-100',
        }}
      />
      {/* Debug indicator - remove after testing */}
      {isLoaded && (
        <div className="fixed top-4 left-4 z-[200] bg-green-500 text-white px-3 py-1.5 rounded text-xs font-bold">
          ✨ Stars Active ({typeof window !== 'undefined' ? 'Client' : 'Server'})
        </div>
      )}
    </>
  );
}
