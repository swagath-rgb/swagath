'use client';

import { useState, useEffect } from 'react';

interface CheckoutOverlayProps {
  bunnyGuid: string;
  title: string;
  price: number;
  originalPrice: number;
  onSuccess: () => void;
  onClose: () => void;
}

export default function CheckoutOverlay({
  bunnyGuid,
  title,
  price,
  originalPrice,
  onSuccess, // Added back so TypeScript is happy!
  onClose,
}: CheckoutOverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4"
      style={{ background: 'rgba(28, 7, 19, 0.94)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden animate-fade-in-up"
        style={{ background: '#1C0713', border: '1px solid rgba(212,175,55,0.25)' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center
            transition-colors duration-200"
          style={{ background: 'rgba(212,175,55,0.08)', color: '#D4AF37' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.18)' }}
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
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#D4AF37' }}
              >
                Secure Checkout
              </span>
            </div>
            <h3 className="text-xl font-bold" style={{ color: '#F9F6EE' }}>
              {title}
            </h3>
          </div>

          {/* Price */}
          <div className="text-center space-y-2">
            <div className="flex items-baseline justify-center gap-3">
              <span
                className="text-lg line-through"
                style={{ color: 'rgba(200,177,149,0.35)' }}
              >
                ₹{originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-4xl font-black text-gold-shimmer">
                ₹{price.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-xs" style={{ color: '#C8B195' }}>
              One-time payment · Lifetime access
            </p>
          </div>

          {/* Direct Pay Button Linked to Your Exact Smart Page */}
          <a
            href="https://hobbies-of-shubha.mojo.page/varamahalakshmi-saree-draping-masterclas"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 rounded-xl font-bold uppercase tracking-wide text-sm text-center
              transition-all duration-300 transform-gpu
              hover:scale-[1.02]"
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
            Pay Securely via Instamojo
          </a>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 pt-1">
            {[
              { icon: '🔒', label: 'Secure' },
              { icon: '♾', label: 'Lifetime' },
              { icon: '🏆', label: 'Certificate' },
            ].map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-1 text-xs"
                style={{ color: 'rgba(200,177,149,0.4)' }}
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}