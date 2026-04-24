import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; z: number }[] = [];
    const numParticlesX = 50;
    const numParticlesY = 30;
    const particleGap = 40;

    // Initialize particles in a grid
    for (let x = 0; x < numParticlesX; x++) {
      for (let y = 0; y < numParticlesY; y++) {
        particles.push({
          x: x * particleGap - (numParticlesX * particleGap) / 2,
          y: y * particleGap - (numParticlesY * particleGap) / 2,
          z: 0,
        });
      }
    }

    let count = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      count += 0.05;

      const centerX = width / 2;
      const centerY = height / 2 + 100;
      const perspective = 600;

      particles.forEach((p) => {
        // Wave math
        const xOffset = p.x / 100;
        const yOffset = p.y / 100;
        p.z = Math.sin(xOffset + count) * 40 + Math.cos(yOffset + count * 0.5) * 40;

        // Project 3D to 2D
        const scale = perspective / (perspective + (p.y + 200));
        const projectedX = p.x * scale + centerX;
        const projectedY = p.z * scale + centerY + p.y * scale * 0.5;

        // Particle style
        const opacity = Math.max(0, Math.min(1, scale * 1.5 - 0.5));
        ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
        
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, scale * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    render();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="animated-bg">
      <canvas ref={canvasRef} className="particle-wave-canvas" />
      <div className="bg-overlay"></div>
    </div>
  );
};
