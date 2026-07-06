'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  mobile: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function CourseSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'checkout.session.completed',
          payload: {
            entity: {
              email: formData.email,
              name: formData.name,
              mobile: formData.mobile,
            },
          },
        }),
      });

      if (res.ok) {
        setStatus('success');
        setStatusMessage(
          'Enrollment initiated! Check your email for next steps and course access.'
        );
      } else {
        setStatus('error');
        setStatusMessage('Something went wrong. Please try again or contact support.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Connection error. Please check your internet and try again.');
    }
  };

  const trustBadges = [
    { emoji: '🔒', label: 'Secure Checkout' },
    { emoji: '📱', label: 'Mobile Friendly' },
    { emoji: '♾️',  label: 'Lifetime Access' },
    { emoji: '🏆', label: 'Certificate Included' },
  ];

  return (
    <section id="enroll" className="relative py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))',
              }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: '#D4AF37' }}
            >
              Secure Enrollment
            </span>
            <span
              className="h-px w-10"
              style={{
                background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))',
              }}
            />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black"
            style={{ color: '#F9F6EE' }}
          >
            The Complete Heritage
            <span className="block text-gold-shimmer">Masterclass Access</span>
          </h2>
        </div>

        {/* Checkout Card */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: '#1C0713',
            border: '1px solid rgba(212,175,55,0.2)',
          }}
        >
          {/* Decorative corner accents */}
          <div
            className="absolute top-0 left-0 w-16 h-16 rounded-tl-3xl"
            style={{
              borderTop: '2px solid rgba(212,175,55,0.4)',
              borderLeft: '2px solid rgba(212,175,55,0.4)',
            }}
          />
          <div
            className="absolute top-0 right-0 w-16 h-16 rounded-tr-3xl"
            style={{
              borderTop: '2px solid rgba(212,175,55,0.4)',
              borderRight: '2px solid rgba(212,175,55,0.4)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-16 h-16 rounded-bl-3xl"
            style={{
              borderBottom: '2px solid rgba(212,175,55,0.4)',
              borderLeft: '2px solid rgba(212,175,55,0.4)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-16 h-16 rounded-br-3xl"
            style={{
              borderBottom: '2px solid rgba(212,175,55,0.4)',
              borderRight: '2px solid rgba(212,175,55,0.4)',
            }}
          />

          <div className="relative p-8 sm:p-12 space-y-8">

            {/* Price Display */}
            <div className="text-center space-y-3">
              <div className="flex items-baseline justify-center gap-3">
                <span
                  className="text-xl line-through"
                  style={{ color: 'rgba(200,177,149,0.4)' }}
                >
                  ₹7,999
                </span>
                <span className="text-5xl sm:text-6xl font-black text-gold-shimmer">
                  ₹4,999
                </span>
              </div>
              <p className="text-sm" style={{ color: '#C8B195' }}>
                One-time payment &middot; Lifetime access to all modules
              </p>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                style={{
                  background: 'rgba(212,175,55,0.08)',
                  border: '1px solid rgba(212,175,55,0.2)',
                }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: '#D4AF37' }}
                >
                  Save ₹3,000 &mdash; Limited Offer
                </span>
              </div>
            </div>

            {/* Form or Success State */}
            {status === 'success' ? (
              <div className="text-center space-y-5 py-8">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: '#D4AF37' }}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="font-semibold" style={{ color: '#F9F6EE' }}>
                  {statusMessage}
                </p>
                <a
                  href="/course"
                  className="inline-block text-sm transition-colors duration-200"
                  style={{ color: '#D4AF37' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#E6CA65';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#D4AF37';
                  }}
                >
                  Go to your Dashboard &rarr;
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="enroll-name"
                    className="block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C8B195' }}
                  >
                    Full Name
                  </label>
                  <input
                    id="enroll-name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200
                      focus:outline-none"
                    style={{
                      background: '#2D0B1E',
                      border: '1px solid rgba(212,175,55,0.15)',
                      color: '#F9F6EE',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 2px #D4AF37';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                    }}
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="enroll-email"
                    className="block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C8B195' }}
                  >
                    Email Address
                  </label>
                  <input
                    id="enroll-email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200
                      focus:outline-none"
                    style={{
                      background: '#2D0B1E',
                      border: '1px solid rgba(212,175,55,0.15)',
                      color: '#F9F6EE',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 2px #D4AF37';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                    }}
                  />
                </div>

                {/* Mobile field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="enroll-mobile"
                    className="block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C8B195' }}
                  >
                    Mobile Number
                  </label>
                  <input
                    id="enroll-mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange('mobile')}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200
                      focus:outline-none"
                    style={{
                      background: '#2D0B1E',
                      border: '1px solid rgba(212,175,55,0.15)',
                      color: '#F9F6EE',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 2px #D4AF37';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                    }}
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div
                    className="p-3 rounded-xl text-sm"
                    style={{
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      color: '#fca5a5',
                    }}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* CTA Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl font-bold tracking-wide uppercase text-base
                    transition-all duration-300 transform-gpu
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:scale-[1.02]"
                  style={{
                    background: '#D4AF37',
                    color: '#2D0B1E',
                    boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'loading')
                      (e.currentTarget as HTMLElement).style.background = '#E6CA65';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#D4AF37';
                  }}
                >
                  {status === 'loading' ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Processing…
                    </span>
                  ) : (
                    'Enroll in Full Course / ಸಂಪೂರ್ಣ ಕೋರ್ಸ್ಗೆ ಸೇರಿ'
                  )}
                </button>
              </form>
            )}

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2"
              style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}
            >
              {[
                { emoji: '🔒', label: 'Secure Checkout' },
                { emoji: '📱', label: 'Mobile Friendly' },
                { emoji: '♾',    label: 'Lifetime Access' },
                { emoji: '🏆', label: 'Certificate Included' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 text-xs"
                  style={{ color: '#C8B195' }}
                >
                  <span>{badge.emoji}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
