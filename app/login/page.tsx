'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import GoldTraceBorder from '@/components/ui/GoldTraceBorder';

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const passwordsMatch = password === confirmPassword;
  const showMismatch = isSignUp && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (isSignUp && !passwordsMatch) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Account created! Please check your email for verification, then log in.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        window.location.href = '/dashboard';
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl text-sm transition-all duration-200
    focus:outline-none`;
  const inputStyle = {
    background: '#2D0B1E',
    border: '1px solid rgba(212,175,55,0.15)',
    color: '#F9F6EE',
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="h-8 w-48 rounded animate-pulse mx-auto" style={{ background: 'rgba(212,175,55,0.1)' }} />
          <div className="h-12 rounded-xl animate-pulse" style={{ background: 'rgba(212,175,55,0.05)' }} />
          <div className="h-12 rounded-xl animate-pulse" style={{ background: 'rgba(212,175,55,0.05)' }} />
          <div className="h-12 rounded-xl animate-pulse" style={{ background: 'rgba(212,175,55,0.1)' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{ background: '#2D0B1E' }} />
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(212,175,55,0.04)' }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(45,11,30,0.5)' }}
        />
      </div>

      <div className="w-full max-w-5xl">
        {/* Back to home */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors mb-8"
          style={{ color: 'rgba(212,175,55,0.5)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4AF37'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(212,175,55,0.5)'; }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* ===== Left Column: Hero Preview ===== */}
          <div className="space-y-6">
            {/* Personal Photo */}
            <GoldTraceBorder className="max-w-xs mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(1rem-1px)]">
                <img
                  src="/my_photo.jpg"
                  alt="Hobbies of Shubha — Master Teacher"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(28,7,19,0.7) 0%, transparent 40%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold" style={{ color: '#F9F6EE' }}>
                    Hobbies of Shubha
                  </p>
                  <p className="text-xs" style={{ color: '#C8B195' }}>
                    Heritage Masterclass Series
                  </p>
                </div>
              </div>
            </GoldTraceBorder>

            {/* Free Preview Video */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(212,175,55,0.12)' }}
            >
              <div className="relative aspect-video" style={{ background: '#0D0008' }}>
                <img
                  src="/WhatsApp Image 2026-07-06 at 2.57.13 PM.jpeg"
                  alt="Free preview — Course Introduction"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.45 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, #1C0713 0%, rgba(28,7,19,0.3) 50%, transparent 100%)',
                  }}
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                    style={{
                      width: '56px',
                      height: '56px',
                      background: '#D4AF37',
                      boxShadow: '0 0 30px rgba(212,175,55,0.4)',
                    }}
                  >
                    <svg
                      className="translate-x-0.5"
                      style={{ width: '22px', height: '22px', color: '#2D0B1E' }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-4">
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#D4AF37' }}>
                    Free Preview
                  </p>
                  <p className="text-xs font-medium" style={{ color: '#F9F6EE' }}>
                    Course Introduction & Overview
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right Column: Auth Card ===== */}
          <div>
            <div
              className="rounded-3xl p-8 sm:p-10 space-y-8"
              style={{
                background: 'linear-gradient(145deg, rgba(45,11,30,0.75) 0%, rgba(28,7,19,0.95) 50%, rgba(45,11,30,0.65) 100%)',
                border: '1px solid rgba(212,175,55,0.15)',
              }}
            >
              {/* Header */}
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-black text-gold-shimmer">
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h1>
                <p
                  className="text-sm"
                  style={{ color: 'rgba(200,177,149,0.5)', fontFamily: 'var(--font-family-kannada)' }}
                >
                  {isSignUp ? 'ಖಾತೆ ರಚಿಸಿ' : 'ಮತ್ತೆ ಸ್ವಾಗತ'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C8B195' }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className={inputClasses}
                    style={inputStyle}
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

                {/* Password */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C8B195' }}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    minLength={6}
                    className={inputClasses}
                    style={inputStyle}
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

                {/* Confirm Password — only in signup mode */}
                {isSignUp && (
                  <div className="space-y-1.5">
                    <label
                      htmlFor="confirm-password"
                      className="block text-xs font-semibold uppercase tracking-widest"
                      style={{ color: '#C8B195' }}
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        minLength={6}
                        className={`${inputClasses} ${showMismatch ? (passwordsMatch ? 'match-valid' : 'match-invalid') : ''}`}
                        style={inputStyle}
                        onFocus={(e) => {
                          if (!showMismatch) {
                            e.currentTarget.style.boxShadow = '0 0 0 2px #D4AF37';
                            e.currentTarget.style.borderColor = 'transparent';
                          }
                        }}
                        onBlur={(e) => {
                          if (!showMismatch) {
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                          }
                        }}
                      />
                      {/* Real-time match indicator */}
                      {showMismatch && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          {passwordsMatch ? (
                            <svg className="w-5 h-5" style={{ color: '#4ade80' }} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" style={{ color: '#f87171' }} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                    {showMismatch && !passwordsMatch && (
                      <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
                    )}
                  </div>
                )}

                {/* Error / Message */}
                {error && (
                  <div
                    className="p-3 rounded-xl text-sm"
                    style={{
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      color: '#fca5a5',
                    }}
                  >
                    {error}
                  </div>
                )}
                {message && (
                  <div
                    className="p-3 rounded-xl text-sm"
                    style={{
                      background: 'rgba(74,222,128,0.08)',
                      border: '1px solid rgba(74,222,128,0.2)',
                      color: '#86efac',
                    }}
                  >
                    {message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || (isSignUp && showMismatch && !passwordsMatch)}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-wide text-sm
                    transition-all duration-300 transform-gpu
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:scale-[1.02]"
                  style={{
                    background: '#D4AF37',
                    color: '#2D0B1E',
                    boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading)
                      (e.currentTarget as HTMLElement).style.background = '#E6CA65';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#D4AF37';
                  }}
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Processing…
                    </span>
                  ) : isSignUp ? (
                    'Create Account / ಖಾತೆ ರಚಿಸಿ'
                  ) : (
                    'Login / ಲಾಗಿನ್'
                  )}
                </button>
              </form>

              {/* Toggle */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError(null);
                    setMessage(null);
                    setConfirmPassword('');
                  }}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(212,175,55,0.5)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4AF37'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(212,175,55,0.5)'; }}
                >
                  {isSignUp
                    ? 'Already have an account? Log in'
                    : "Don't have an account? Sign up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
