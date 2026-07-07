'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setMounted(true);

    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="sticky top-0 z-50 glass-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <a href="/" className="flex flex-col gap-0.5 group">
            <span
              className="kannadati-glyph text-2xl sm:text-3xl font-black leading-none"
              style={{ fontFamily: 'var(--font-family-sans)' }}
            >
              Hobbies of Shubha
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest font-semibold uppercase"
              style={{ color: '#C8B195' }}>
              HERITAGE ACADEMY
            </span>
          </a>

          {/* Auth Action */}
          <div className="flex items-center gap-4">
            {!mounted ? (
              <div
                className="w-28 h-9 rounded-lg animate-pulse"
                style={{ background: '#1C0713' }}
              />
            ) : user ? (
              <a
                href="/dashboard"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  font-semibold text-sm transition-all duration-300"
                style={{
                  border: '1px solid rgba(212,175,55,0.3)',
                  color: '#E6CA65',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.6)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.3)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
                Dashboard / ಡ್ಯಾಶ್ಬೋರ್ಡ್
              </a>
            ) : (
              <a
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                  font-bold text-sm transition-all duration-300 transform-gpu
                  hover:scale-105"
                style={{
                  background: '#D4AF37',
                  color: '#2D0B1E',
                  boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#E6CA65';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#D4AF37';
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Login / ಲಾಗಿನ್
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
