'use client';

import { useEffect } from 'react';

interface SecureVideoPlayerProps {
  bunnyGuid: string;
  title: string;
  onClose: () => void;
}

export default function SecureVideoPlayer({ bunnyGuid, title, onClose }: SecureVideoPlayerProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const libraryId = process.env.NEXT_PUBLIC_BUNNY_LIBRARY_ID;
  const embedUrl = `https://iframe.mediadelivery.net/embed/${libraryId}/${bunnyGuid}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center"
      style={{ background: 'rgba(28, 7, 19, 0.96)' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center
          transition-all duration-200 hover:scale-110"
        style={{
          background: 'rgba(212,175,55,0.1)',
          border: '1px solid rgba(212,175,55,0.3)',
          color: '#D4AF37',
        }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Video title */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-lg font-bold text-gold-shimmer">{title}</h3>
      </div>

      {/* Video container */}
      <div
        className="relative w-full max-w-5xl mx-4 rounded-2xl overflow-hidden aspect-video"
        style={{ border: '1px solid rgba(212,175,55,0.2)' }}
      >
        <iframe
          src={embedUrl}
          loading="lazy"
          style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%', left: 0 }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        />
      </div>

      {/* Security notice */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.12)' }}
        >
          <svg
            className="w-3.5 h-3.5"
            style={{ color: '#D4AF37' }}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span className="text-xs font-medium" style={{ color: 'rgba(212,175,55,0.6)' }}>
            Secure stream • Download disabled
          </span>
        </div>
      </div>
    </div>
  );
}
