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

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 glass-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a href="/" className="flex flex-col gap-0.5 group">
            <span className="text-xl sm:text-2xl font-bold text-gold-shimmer tracking-tight">
              Hobbies of Shubha
            </span>
            <span className="text-xs sm:text-sm text-amber-400/70 font-medium" style={{ fontFamily: 'var(--font-family-kannada)' }}>
              ಹೊಬ್ಬೀಸ್ ಆಫ್ ಶುಭ
            </span>
          </a>

          {/* Auth Action */}
          <div className="flex items-center gap-4">
            {!mounted ? (
              <div className="w-32 h-10 rounded-xl bg-purple-900/40 animate-pulse" />
            ) : user ? (
              <a
                href="/course"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600/20 to-amber-500/10 border border-amber-500/40 text-amber-100 font-semibold text-sm hover:from-amber-600/30 hover:to-amber-500/20 hover:border-amber-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                Dashboard / ಡ್ಯಾಶ್ಬೋರ್ಡ್
              </a>
            ) : (
              <a
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-purple-950 font-bold text-sm hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:scale-105 transform-gpu"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
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
