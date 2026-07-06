'use client';

export default function HeroSection() {
  const socialProof = [
    { value: '5,000+', label: 'Lifelong Learners', emoji: '🎓' },
    { value: '4.9 / 5', label: 'Average Rating',   emoji: '⭐' },
    { value: '12',      label: 'Craft Modules',     emoji: '🎨' },
    { value: '∞',  label: 'Lifetime Access',   emoji: '🔓' },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Watermark background glyph */}
      <div
        className="absolute inset-0 flex items-center justify-center
          pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="kannadati-glyph font-black leading-none"
          style={{
            fontFamily: 'var(--font-family-kannada)',
            fontSize: 'clamp(8rem, 25vw, 22rem)',
            opacity: 0.04,
          }}
        >
          ಕನ್ನಡತಿ
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ===== Left Column ===== */}
          <div className="space-y-8">
            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.18)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#D4AF37' }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: '#D4AF37' }}
              >
                Heritage Masterclass Series
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08]"
              style={{ color: '#F9F6EE' }}
            >
              Master the Timeless Arts
              <br />
              of the{' '}
              <span className="text-gold-shimmer">Heritage Landscape.</span>
            </h1>

            {/* Kannadati brand accent */}
            <div className="space-y-1 border-l-2 pl-5"
              style={{ borderColor: 'rgba(212,175,55,0.3)' }}>
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#C8B195' }}
              >
                Presented by
              </p>
              <span
                className="kannadati-glyph block text-5xl sm:text-6xl font-black leading-tight
                  cursor-default"
                style={{ fontFamily: 'var(--font-family-kannada)' }}
              >
                ಕನ್ನಡತಿ
              </span>
              <span
                className="block text-[10px] font-semibold uppercase tracking-[0.28em] mt-1"
                style={{ color: '#C8B195' }}
              >
                KANNADATI • HERITAGE ACADEMY
              </span>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed max-w-lg"
              style={{ color: '#C8B195' }}>
              An immersive curriculum in traditional miniature saree draping, doll artistry,
              and Karnataka folk craft — taught by master artisan Shubha with over a
              decade of hands-on heritage practice.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#bento"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                  font-bold text-base uppercase tracking-wide
                  transition-all duration-300 transform-gpu hover:scale-[1.03]"
                style={{
                  background: '#D4AF37',
                  color: '#2D0B1E',
                  boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#E6CA65';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#D4AF37';
                }}
              >
                Explore the Curriculum
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@shubhachannel9181"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                  font-semibold text-base transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(212,175,55,0.25)',
                  color: '#E6CA65',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.55)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.05)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.25)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch Free Preview
              </a>
            </div>
          </div>

          {/* ===== Right Column — Arched Framed Portrait ===== */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative mt-8 lg:mt-0">
              {/* Outer ambient glow */}
              <div
                className="absolute rounded-t-full blur-2xl pointer-events-none"
                style={{
                  inset: '-1.5rem',
                  background: 'linear-gradient(to bottom, rgba(212,175,55,0.12), rgba(212,175,55,0.04), transparent)',
                }}
              />

              {/* SVG corner bracket — Top Left */}
              <svg
                className="absolute"
                style={{ top: '-14px', left: '-14px', width: '36px', height: '36px', color: 'rgba(212,175,55,0.55)' }}
                viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M32 4H4v32" />
              </svg>
              {/* SVG corner bracket — Top Right */}
              <svg
                className="absolute"
                style={{ top: '-14px', right: '-14px', width: '36px', height: '36px', color: 'rgba(212,175,55,0.55)' }}
                viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M4 4h32v32" />
              </svg>
              {/* SVG corner bracket — Bottom Left */}
              <svg
                className="absolute"
                style={{ bottom: '-14px', left: '-14px', width: '36px', height: '36px', color: 'rgba(212,175,55,0.55)' }}
                viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M32 32H4V4" />
              </svg>
              {/* SVG corner bracket — Bottom Right */}
              <svg
                className="absolute"
                style={{ bottom: '-14px', right: '-14px', width: '36px', height: '36px', color: 'rgba(212,175,55,0.55)' }}
                viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M4 32h32V4" />
              </svg>

              {/* Outer frame — 4px sandalwood gold padding */}
              <div
                className="rounded-t-full"
                style={{ padding: '4px', border: '1px solid rgba(230,202,101,0.35)' }}
              >
                {/* Inner frame — 1px solid polished temple gold */}
                <div
                  className="rounded-t-full"
                  style={{ padding: '2px', border: '1px solid rgba(212,175,55,0.75)' }}
                >
                  {/* Arched portrait */}
                  <div
                    className="rounded-t-full overflow-hidden"
                    style={{
                      width: '320px',
                      height: '400px',
                      boxShadow: '15px 25px 50px -15px rgba(0,0,0,0.75)',
                    }}
                  >
                    <img
                      src="/WhatsApp Image 2026-07-06 at 3.21.49 PM.jpeg"
                      alt="Shubha — Master Artisan, Kannadati Heritage Academy"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Floating experience badge */}
              <div
                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap
                  px-5 py-2.5 rounded-xl font-bold text-sm shadow-xl"
                style={{
                  bottom: '-18px',
                  background: '#D4AF37',
                  color: '#2D0B1E',
                  boxShadow: '0 8px 24px rgba(212,175,55,0.35)',
                }}
              >
                10+ ವರ್ಷಗಳ ಅನುಭವ
              </div>
            </div>
          </div>
        </div>

        {/* ===== Social Proof Strip ===== */}
        <div
          className="mt-24 pt-10"
          style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '5,000+', label: 'Lifelong Learners' },
              { value: '4.9 / 5', label: 'Average Rating' },
              { value: '12',      label: 'Craft Modules' },
              { value: '∞',  label: 'Lifetime Access' },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div
                  className="text-3xl sm:text-4xl font-black"
                  style={{ color: '#D4AF37' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: '#C8B195' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
