'use client';

export default function Footer() {
  const youtubeUrl = 'https://www.youtube.com/@shubhachannel9181';
  const instagramUrl = '';
  const emailAddress = '';

  return (
    <footer
      className="relative"
      style={{
        background: '#1C0713',
        borderTop: '1px solid rgba(212,175,55,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <span
                className="kannadati-glyph block text-3xl font-black leading-none"
                style={{ fontFamily: 'var(--font-family-sans)' }}
              >
                Hobbies of Shubha
              </span>
              <span
                className="block text-[9px] font-semibold uppercase tracking-[0.25em] mt-1"
                style={{ color: '#C8B195' }}
              >
                HERITAGE ACADEMY
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: 'rgba(200,177,149,0.55)' }}
            >
              Preserving and teaching the timeless art of traditional Karnataka
              saree draping and miniature doll creation. Guided by master
              artisan Shubha.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'rgba(212,175,55,0.65)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/',       label: 'Home / ಮುಖಪುಟ' },
                { href: '#bento',  label: 'Curriculum / ಪಠ್ಯಕ್ರಮ' },
                { href: '#enroll', label: 'Enroll / ನೋಂದಣಿ' },
                { href: '/login',  label: 'Login / ಲಾಗಿನ್' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(200,177,149,0.45)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#C8B195';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(200,177,149,0.45)';
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'rgba(212,175,55,0.65)' }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              {/* YouTube — Active */}
              <li>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: 'rgba(200,177,149,0.45)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#f87171';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(200,177,149,0.45)';
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube Channel
                </a>
              </li>

              {/* Instagram — Coming Soon */}
              <li
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: 'rgba(200,177,149,0.25)' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                {instagramUrl ? (
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors">
                    Instagram
                  </a>
                ) : (
                  <span>Instagram Link Coming Soon</span>
                )}
              </li>

              {/* Email — Coming Soon */}
              <li
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: 'rgba(200,177,149,0.25)' }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {emailAddress ? (
                  <a href={`mailto:${emailAddress}`}
                    className="hover:text-yellow-300 transition-colors">
                    {emailAddress}
                  </a>
                ) : (
                  <span>Email Support Coming Soon</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(200,177,149,0.3)' }}>
            &copy; 2026 Hobbies of Shubha. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(200,177,149,0.2)', fontFamily: 'var(--font-family-kannada)' }}
          >
            ಕರ್ನಾಟಕದಿಂದ ♥ ನೊಂದಿಗೆ ತಯಾರಿಸಲಾಗಿದೆ
          </p>
        </div>
      </div>
    </footer>
  );
}
