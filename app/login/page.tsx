'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setMessage('Account created! Please check your email for verification, then log in.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        window.location.href = '/course';
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <div className="h-8 w-48 bg-purple-900/40 rounded animate-pulse mx-auto" />
          <div className="h-12 bg-purple-900/40 rounded-xl animate-pulse" />
          <div className="h-12 bg-purple-900/40 rounded-xl animate-pulse" />
          <div className="h-12 bg-amber-500/20 rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md">
        {/* Back to home */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-amber-400/60 hover:text-amber-400 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </a>

        {/* Login Card */}
        <div className="rounded-3xl border border-amber-500/20 bg-silk-surface p-8 sm:p-10 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-gold-shimmer">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-amber-200/50 text-sm" style={{ fontFamily: 'var(--font-family-kannada)' }}>
              {isSignUp ? 'ಖಾತೆ ರಚಿಸಿ' : 'ಮತ್ತೆ ಸ್ವಾಗತ'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-amber-200/70">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-amber-500/20
                  text-amber-50 placeholder-amber-200/20
                  focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30
                  transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-amber-200/70">
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
                className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-amber-500/20
                  text-amber-50 placeholder-amber-200/20
                  focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30
                  transition-all duration-200"
              />
            </div>

            {/* Error / Message */}
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                {error}
              </div>
            )}
            {message && (
              <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 text-sm">
                {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600
                text-purple-950 font-bold text-base
                hover:from-amber-400 hover:to-yellow-500
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]
                hover:scale-[1.02] transform-gpu"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Processing...
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
              }}
              className="text-sm text-amber-400/60 hover:text-amber-400 transition-colors"
            >
              {isSignUp
                ? 'Already have an account? Log in'
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
