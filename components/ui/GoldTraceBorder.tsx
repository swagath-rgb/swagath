import type { ReactNode } from 'react';

interface GoldTraceBorderProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

/**
 * Wraps children in a card with an animated rotating golden light-beam border.
 * The spinning conic-gradient div is clipped by overflow-hidden on the outer wrapper,
 * leaving only the 1px padding strip visible as the animated gold trace.
 */
export default function GoldTraceBorder({
  children,
  className = '',
  innerClassName = '',
}: GoldTraceBorderProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{ padding: '1px' }}
    >
      {/* Spinning golden light beam layer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background:
            'conic-gradient(from 0deg, transparent 0deg, transparent 155deg, #D4AF37 165deg, #F3E5AB 175deg, #E6CA65 180deg, #F3E5AB 185deg, #D4AF37 195deg, transparent 205deg, transparent 360deg)',
          animation: 'rotateBorder 6s linear infinite',
          transformOrigin: 'center center',
          pointerEvents: 'none',
        }}
      />
      {/* Inner card surface */}
      <div
        className={`relative h-full bg-[#1C0713] ${innerClassName}`}
        style={{ borderRadius: 'calc(1rem - 1px)', overflow: 'hidden' }}
      >
        {children}
      </div>
    </div>
  );
}
