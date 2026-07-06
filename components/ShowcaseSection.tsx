export default function ShowcaseSection() {
  const showcaseItems = [
    {
      image: '/WhatsApp Image 2026-07-06 at 2.57.13 PM.jpeg',
      title: 'Traditional Bridal Draping',
      titleKn: 'ಮದುಮಗಳ ಸೀರೆ ಅಲಂಕಾರ',
      description:
        'Master the art of creating stunning bridal saree arrangements with authentic silk fabric, intricate pleating patterns, and traditional temple border decorations.',
      descriptionKn:
        'ಅಧಿಕೃತ ರೇಷ್ಮೆ ಬಟ್ಟೆ, ಸಂಕೀರ್ಣ ಮಡಿಕೆ ಮಾದರಿಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ದೇವಸ್ಥಾನ ಅಂಚಿನ ಅಲಂಕಾರಗಳೊಂದಿಗೆ ಅದ್ಭುತ ವಧುವಿನ ಸೀರೆ ವ್ಯವಸ್ಥೆಗಳನ್ನು ರಚಿಸುವ ಕಲೆಯನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.',
    },
    {
      image: '/WhatsApp Image 2026-07-06 at 2.57.12 PM.jpeg',
      title: 'Festive Saree Artistry',
      titleKn: 'ಹಬ್ಬದ ಸೀರೆ ವಿನ್ಯಾಸಗಳು',
      description:
        'Learn to create vibrant festival-themed saree compositions featuring rich color palettes, golden zari work accents, and ceremonial presentation techniques.',
      descriptionKn:
        'ಶ್ರೀಮಂತ ಬಣ್ಣದ ಪ್ಯಾಲೆಟ್ಗಳು, ಚಿನ್ನದ ಜರಿ ಕೆಲಸದ ಉಚ್ಚಾರಣೆಗಳು ಮತ್ತು ಔಪಚಾರಿಕ ಪ್ರಸ್ತುತಿ ತಂತ್ರಗಳನ್ನು ಒಳಗೊಂಡ ರೋಮಾಂಚಕ ಹಬ್ಬದ-ವಿಷಯದ ಸೀರೆ ಸಂಯೋಜನೆಗಳನ್ನು ರಚಿಸಲು ಕಲಿಯಿರಿ.',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="text-amber-400/80 text-sm font-semibold uppercase tracking-[0.2em]">
              Gallery
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            <span className="text-gold-shimmer">Our Signature Masterpieces</span>
          </h2>
          <p className="mt-3 text-xl sm:text-2xl text-amber-200/60 font-medium" style={{ fontFamily: 'var(--font-family-kannada)' }}>
            ನಮ್ಮ ವಿಶಿಷ್ಟ ಕಲಾಕೃತಿಗಳು
          </p>
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group"
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative transform-gpu transition-all duration-500 ease-out
                  hover:[transform:rotateX(6deg)_rotateY(12deg)_scale(1.03)]
                  hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Container */}
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-silk-surface">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} | ${item.titleKn}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* 3D Depth Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-amber-50">
                      {item.title}
                    </h3>
                    <p className="text-lg text-amber-400/80 font-semibold" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                      {item.titleKn}
                    </p>
                    <p className="text-sm text-amber-100/50 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-sm text-amber-200/30 leading-relaxed" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                      {item.descriptionKn}
                    </p>
                  </div>

                  {/* Bottom gold accent line */}
                  <div className="h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
                </div>

                {/* 3D Shadow Layer */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/10 to-purple-600/10 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
