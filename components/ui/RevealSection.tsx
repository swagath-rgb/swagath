'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealSection({
  children,
  className = '',
  delay = 0,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`section-reveal ${className}`}>
      {children}
    </div>
  );
}
