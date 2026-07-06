export default function CourseSection() {
  const modules = [
    {
      number: '01',
      title: 'Fabric Preparation & Material Selection',
      titleKn: 'ಬಟ್ಟೆ ತಯಾರಿಕೆ ಮತ್ತು ವಸ್ತು ಆಯ್ಕೆ',
      description: 'Learn to choose the right silk fabrics, understand weave patterns, and prepare materials for miniature work.',
    },
    {
      number: '02',
      title: 'Pleating Calculations & Techniques',
      titleKn: 'ಮಡಿಕೆ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ತಂತ್ರಗಳು',
      description: 'Master precision pleating with mathematical calculations for perfect draping proportions at miniature scale.',
    },
    {
      number: '03',
      title: 'Scale Modeling & Doll Framework',
      titleKn: 'ಮಾಪಕ ಮಾಡೆಲಿಂಗ್ ಮತ್ತು ಬೊಂಬೆ ಚೌಕಟ್ಟು',
      description: 'Build structural foundations for your dolls with proper proportions, armature techniques, and body shaping.',
    },
    {
      number: '04',
      title: 'Temple Border & Zari Arrangements',
      titleKn: 'ದೇವಸ್ಥಾನದ ಅಂಚು ಮತ್ತು ಜರಿ ವ್ಯವಸ್ಥೆ',
      description: 'Apply authentic temple borders and golden zari work to create rich, festival-grade ornamentation.',
    },
    {
      number: '05',
      title: 'Accessory Framing & Final Assembly',
      titleKn: 'ಅಲಂಕಾರಿಕ ಚೌಕಟ್ಟು ಮತ್ತು ಅಂತಿಮ ಜೋಡಣೆ',
      description: 'Complete your masterpiece with jewelry details, decorative accessories, and professional presentation framing.',
    },
  ];

  return (
    <section id="courses" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="text-amber-400/80 text-sm font-semibold uppercase tracking-[0.2em]">
              Curriculum
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            <span className="text-gold-shimmer">Complete Learning Path</span>
          </h2>
          <p className="mt-3 text-xl sm:text-2xl text-amber-200/60 font-medium" style={{ fontFamily: 'var(--font-family-kannada)' }}>
            ಸಂಪೂರ್ಣ ಕಲಿಕೆಯ ಮಾರ್ಗ
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="group relative rounded-2xl border border-amber-500/10 bg-silk-surface p-6 sm:p-8
                hover:border-amber-500/30 transition-all duration-500
                hover:shadow-[0_10px_40px_rgba(245,158,11,0.08)]"
            >
              {/* Module Number */}
              <div className="text-5xl font-black text-amber-500/10 absolute top-4 right-6
                group-hover:text-amber-500/20 transition-colors duration-500">
                {mod.number}
              </div>

              <div className="relative space-y-3">
                <h3 className="text-lg font-bold text-amber-50 pr-12">
                  {mod.title}
                </h3>
                <p className="text-sm text-amber-400/70 font-semibold" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                  {mod.titleKn}
                </p>
                <p className="text-sm text-amber-100/40 leading-relaxed">
                  {mod.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="mt-6 h-0.5 bg-gradient-to-r from-amber-500/30 to-transparent
                group-hover:from-amber-500/60 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto animate-fade-in-up-delay-2">
          <div className="relative rounded-3xl border-2 border-amber-500/30 bg-silk-surface p-8 sm:p-12 text-center
            hover:border-amber-500/50 transition-all duration-500">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/40 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-500/40 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-500/40 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/40 rounded-br-3xl" />

            <div className="space-y-6">
              <div>
                <p className="text-amber-400/70 text-sm font-semibold uppercase tracking-widest mb-2">
                  Full Course Access
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-gold-shimmer">
                    ₹1,200
                  </span>
                  <span className="text-amber-200/40 text-lg">/ one-time</span>
                </div>
                <p className="mt-2 text-amber-100/50 text-sm">
                  Lifetime access to all 5 modules with video lessons
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto">
                {[
                  '5 detailed video modules',
                  'Lifetime access',
                  'Material sourcing guide',
                  'Community support',
                  'Certificate of completion',
                  'Direct mentor Q&A',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-amber-100/60">
                    <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="/login"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto
                  px-12 py-5 rounded-2xl
                  bg-gradient-to-r from-amber-500 to-yellow-600
                  text-purple-950 font-black text-lg
                  hover:from-amber-400 hover:to-yellow-500
                  transition-all duration-300
                  animate-gold-pulse
                  hover:scale-105 transform-gpu"
              >
                Enroll in Full Course / ಸಂಪೂರ್ಣ ಕೋರ್ಸ್ಗೆ ಸೇರಿ
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <p className="text-xs text-amber-200/30" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                Secure payment · Instant access after enrollment · ನೋಂದಣಿ ನಂತರ ತಕ್ಷಣ ಪ್ರವೇಶ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
