'use client';

import { useEffect, useRef, useCallback } from 'react';

interface CelebrationOverlayProps {
  onDismiss: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'circle' | 'star' | 'diamond';
}

export default function CelebrationOverlay({ onDismiss }: CelebrationOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const createParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const colors = ['#D4AF37', '#E6CA65', '#F3E5AB', '#AA7C11', '#FFD700', '#FFF8DC'];
    const shapes: ('circle' | 'star' | 'diamond')[] = ['circle', 'star', 'diamond'];

    for (let i = 0; i < 150; i++) {
      const angle = (Math.PI * 2 * i) / 150 + (i * 0.037);
      const speed = 2 + (i % 7) + ((i * 3) % 5);
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (i % 4),
        size: 3 + (i % 6),
        color: colors[i % colors.length],
        alpha: 1,
        decay: 0.008 + (i % 10) * 0.0015,
        rotation: i * 0.41,
        rotationSpeed: ((i % 7) - 3) * 0.025,
        shape: shapes[i % shapes.length],
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particlesRef.current = createParticles(canvas);

    const drawStar = (cx: number, cy: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const method = i === 0 ? 'moveTo' : 'lineTo';
        ctx[method](cx + Math.cos(a) * size, cy + Math.sin(a) * size);
      }
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      for (const p of particlesRef.current) {
        if (p.alpha <= 0) continue;
        alive = true;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'star') {
          drawStar(0, 0, p.size);
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.6, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size * 0.6, 0);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      if (alive) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    const timer = setTimeout(onDismiss, 4000);

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(timer);
    };
  }, [createParticles, onDismiss]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
      onClick={onDismiss}
      style={{ background: 'rgba(45, 11, 30, 0.92)' }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Shimmer sweep overlay */}
      <div className="absolute inset-0 pointer-events-none celebration-shimmer" />

      {/* Celebration text */}
      <div className="relative z-10 text-center space-y-6 animate-fade-in-up">
        <div className="text-6xl sm:text-7xl">🎉</div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gold-shimmer">
          Congratulations!
        </h2>
        <p className="text-lg sm:text-xl font-medium" style={{ color: '#C8B195' }}>
          Your course video is now unlocked!
        </p>
        <p className="text-sm" style={{ color: 'rgba(200,177,149,0.4)' }}>
          Tap anywhere to continue
        </p>
      </div>
    </div>
  );
}
