'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CourseSection from '@/components/CourseSection';
import Footer from '@/components/Footer';
import RevealSection from '@/components/ui/RevealSection';

/** Chittara-inspired geometric SVG tile pattern — traditional Karnataka motif */
function ChittaraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Canvas base */}
      <div className="absolute inset-0" style={{ background: '#2D0B1E' }} />

      {/* Chittara diamond-grid mandala pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ opacity: 0.025, color: '#D4AF37' }}
      >
        <defs>
          <pattern
            id="chittara-tile"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Outer diamond */}
            <path
              d="M40 2 L78 40 L40 78 L2 40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            {/* Inner diamond */}
            <path
              d="M40 18 L62 40 L40 62 L18 40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
            />
            {/* Cross axis */}
            <line x1="40" y1="2" x2="40" y2="78" stroke="currentColor" strokeWidth="0.25" />
            <line x1="2" y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="0.25" />
            {/* Diagonal axis */}
            <line x1="2" y1="2" x2="78" y2="78" stroke="currentColor" strokeWidth="0.18" />
            <line x1="78" y1="2" x2="2" y2="78" stroke="currentColor" strokeWidth="0.18" />
            {/* Center dot */}
            <circle cx="40" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
            {/* Corner dots */}
            <circle cx="0"  cy="0"  r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="80" cy="0"  r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="0"  cy="80" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="80" cy="80" r="1.5" fill="currentColor" opacity="0.4" />
            {/* Mid-edge dots */}
            <circle cx="40" cy="0"  r="1" fill="currentColor" opacity="0.3" />
            <circle cx="40" cy="80" r="1" fill="currentColor" opacity="0.3" />
            <circle cx="0"  cy="40" r="1" fill="currentColor" opacity="0.3" />
            <circle cx="80" cy="40" r="1" fill="currentColor" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chittara-tile)" />
      </svg>

      {/* Ambient gold orb — top-left */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          top: '8%',
          left: '-10%',
          width: '550px',
          height: '550px',
          background: 'rgba(212,175,55,0.045)',
        }}
      />
      {/* Ambient orb — bottom-right */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          bottom: '10%',
          right: '-10%',
          width: '480px',
          height: '480px',
          background: 'rgba(45,11,30,0.5)',
        }}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <ChittaraBackground />
      <Navbar />

      {/* Hero — immediate visibility, no delay */}
      <HeroSection />

      {/* Bento curriculum grid */}
      <RevealSection delay={0}>
        <ShowcaseSection />
      </RevealSection>

      {/* Checkout card */}
      <RevealSection delay={100}>
        <CourseSection />
      </RevealSection>

      {/* Footer */}
      <RevealSection delay={50}>
        <Footer />
      </RevealSection>
    </main>
  );
}
