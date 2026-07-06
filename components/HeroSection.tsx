export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Headline & Description */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
                  Premium Art Course
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-gold-shimmer">Hobbies of Shubha</span>
                <br />
                <span className="text-amber-100/90 text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 block" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                  ಕಲಾತ್ಮಕ ಸೀರೆ ವಿನ್ಯಾಸ ಕಲಿಯಿರಿ
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-amber-100/70 leading-relaxed max-w-xl">
              Discover the timeless craft of traditional miniature saree draping and
              majestic doll creation. Guided by Shubha&apos;s decade of artistic mastery,
              each lesson unveils the secrets of silk pleating, temple border
              arrangements, and festival-grade ornamentation.
            </p>

            <p className="text-base text-amber-200/50 leading-relaxed max-w-xl" style={{ fontFamily: 'var(--font-family-kannada)' }}>
              ಸಾಂಪ್ರದಾಯಿಕ ಸಣ್ಣ ಸೀರೆ ಕಟ್ಟುವಿಕೆ ಮತ್ತು ಭವ್ಯ ಬೊಂಬೆ ರಚನೆಯ ಕಲೆಯನ್ನು
              ಅನ್ವೇಷಿಸಿ. ರೇಷ್ಮೆ ಮಡಿಕೆಗಳು, ದೇವಸ್ಥಾನದ ಅಂಚುಗಳು ಮತ್ತು ಹಬ್ಬದ ಅಲಂಕಾರಗಳನ್ನು
              ಕಲಿಯಿರಿ.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 text-purple-950 font-bold text-base hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:scale-105 transform-gpu"
              >
                Explore Courses
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@shubhachannel9181"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-amber-500/30 text-amber-200 font-semibold text-base hover:border-amber-500/60 hover:bg-amber-500/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up-delay">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/20 via-transparent to-amber-600/20 blur-xl" />
              <div className="relative">
                <div className="border-4 border-amber-500/80 rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
                  <img
                    src="/WhatsApp Image 2026-07-06 at 3.21.49 PM.jpeg"
                    alt="Shubha — Traditional Saree Art Master | ಶುಭ — ಸಾಂಪ್ರದಾಯಿಕ ಸೀರೆ ಕಲಾವಿದೆ"
                    className="w-full max-w-md h-auto object-cover aspect-[3/4]"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-purple-950 font-bold text-sm shadow-xl shadow-amber-500/20">
                  10+ ವರ್ಷಗಳ ಅನುಭವ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
