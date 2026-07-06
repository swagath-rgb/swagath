export default function Footer() {
  const youtubeUrl = 'https://www.youtube.com/@shubhachannel9181';
  const instagramUrl = '';
  const emailAddress = '';

  return (
    <footer className="relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gold-shimmer">Hobbies of Shubha</h3>
              <p className="text-amber-400/60 text-sm mt-1" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                ಹೊಬ್ಬೀಸ್ ಆಫ್ ಶುಭ
              </p>
            </div>
            <p className="text-sm text-amber-100/40 leading-relaxed max-w-xs">
              Preserving and teaching the timeless art of traditional Indian saree draping
              and miniature doll creation from Karnataka.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-amber-400/80 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-amber-100/50 hover:text-amber-200 transition-colors duration-200">
                  Home / ಮುಖಪುಟ
                </a>
              </li>
              <li>
                <a href="#courses" className="text-sm text-amber-100/50 hover:text-amber-200 transition-colors duration-200">
                  Courses / ಕೋರ್ಸ್ಗಳು
                </a>
              </li>
              <li>
                <a href="/login" className="text-sm text-amber-100/50 hover:text-amber-200 transition-colors duration-200">
                  Login / ಲಾಗಿನ್
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-amber-400/80 uppercase tracking-widest">
              Connect With Us
            </h4>
            <ul className="space-y-3">
              {/* YouTube — Active Link */}
              <li>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-amber-100/50 hover:text-red-400 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube Channel
                </a>
              </li>

              {/* Instagram — Coming Soon */}
              <li className="inline-flex items-center gap-2 text-sm text-amber-100/30">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
                {instagramUrl ? (
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                    Instagram
                  </a>
                ) : (
                  <span>Instagram Link Coming Soon</span>
                )}
              </li>

              {/* Email — Coming Soon */}
              <li className="inline-flex items-center gap-2 text-sm text-amber-100/30">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {emailAddress ? (
                  <a href={`mailto:${emailAddress}`} className="hover:text-amber-300 transition-colors">
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
        <div className="mt-12 pt-8 border-t border-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-amber-100/30">
            &copy; {new Date().getFullYear()} Hobbies of Shubha. All rights reserved.
          </p>
          <p className="text-xs text-amber-100/20" style={{ fontFamily: 'var(--font-family-kannada)' }}>
            ಕರ್ನಾಟಕದಿಂದ ♥ ನೊಂದಿಗೆ ತಯಾರಿಸಲಾಗಿದೆ
          </p>
        </div>
      </div>
    </footer>
  );
}
