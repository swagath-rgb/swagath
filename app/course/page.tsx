'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  email: string;
  has_paid: boolean;
}

export default function CoursePage() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const initialize = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          window.location.href = '/login';
          return;
        }

        setUser(user);

        const { data: profileData } = await supabase
          .from('profiles')
          .select('id, email, has_paid')
          .eq('id', user.id)
          .single();

        setProfile(profileData as Profile | null);
      } catch (err) {
        console.error('Failed to load profile:', err);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  // Server-render skeleton guard
  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto" />
          <p className="text-amber-200/50 text-sm">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const hasPaid = profile?.has_paid === true;

  const lessons = [
    { id: 1, title: 'Fabric Preparation & Material Selection', titleKn: 'ಬಟ್ಟೆ ತಯಾರಿಕೆ ಮತ್ತು ವಸ್ತು ಆಯ್ಕೆ' },
    { id: 2, title: 'Pleating Calculations & Techniques', titleKn: 'ಮಡಿಕೆ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ತಂತ್ರಗಳು' },
    { id: 3, title: 'Scale Modeling & Doll Framework', titleKn: 'ಮಾಪಕ ಮಾಡೆಲಿಂಗ್ ಮತ್ತು ಬೊಂಬೆ ಚೌಕಟ್ಟು' },
    { id: 4, title: 'Temple Border & Zari Arrangements', titleKn: 'ದೇವಸ್ಥಾನದ ಅಂಚು ಮತ್ತು ಜರಿ ವ್ಯವಸ್ಥೆ' },
    { id: 5, title: 'Accessory Framing & Final Assembly', titleKn: 'ಅಲಂಕಾರಿಕ ಚೌಕಟ್ಟು ಮತ್ತು ಅಂತಿಮ ಜೋಡಣೆ' },
  ];

  return (
    <div className="min-h-screen">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-50 glass-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-lg font-bold text-gold-shimmer">
              Hobbies of Shubha
            </a>
            <div className="flex items-center gap-4">
              <span className="text-sm text-amber-200/50 hidden sm:inline">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm text-amber-200/60 border border-amber-500/20
                  hover:border-amber-500/40 hover:text-amber-200 transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Title */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-gold-shimmer">
            Your Course Dashboard
          </h1>
          <p className="mt-2 text-amber-200/50" style={{ fontFamily: 'var(--font-family-kannada)' }}>
            ನಿಮ್ಮ ಕೋರ್ಸ್ ಡ್ಯಾಶ್ಬೋರ್ಡ್
          </p>

          {!hasPaid && (
            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <p className="text-sm text-amber-300">
                You have not enrolled yet. Enroll to unlock all video lessons.
              </p>
            </div>
          )}
        </div>

        {/* Lessons Grid */}
        <div className="space-y-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="rounded-2xl border border-amber-500/10 bg-silk-surface overflow-hidden"
            >
              {/* Lesson Header */}
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center
                    text-amber-400 font-bold text-sm">
                    {String(lesson.id).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-50">{lesson.title}</h3>
                    <p className="text-sm text-amber-400/60" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                      {lesson.titleKn}
                    </p>
                  </div>
                </div>
                {hasPaid ? (
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                    Unlocked
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                    Locked
                  </span>
                )}
              </div>

              {/* Video Player Area */}
              <div className="relative">
                {hasPaid ? (
                  /* Unlocked: Clean embedded video player */
                  <div className="aspect-video bg-purple-950/60">
                    <iframe
                      src="about:blank"
                      title={`Lesson ${lesson.id}: ${lesson.title}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <p className="text-center text-amber-200/30 text-xs py-3">
                      Video placeholder — replace iframe src with your Vimeo/Bunny.net embed URL
                    </p>
                  </div>
                ) : (
                  /* Locked: Blur overlay with padlock */
                  <div className="relative aspect-video">
                    {/* Blurred background placeholder */}
                    <div className="absolute inset-0 bg-purple-950/60 backdrop-blur-xl" />
                    <div className="absolute inset-0 bg-purple-950/80" />

                    {/* Lock Overlay Card */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8 max-w-sm">
                        {/* Padlock Icon */}
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30
                          flex items-center justify-center">
                          <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </div>

                        <div>
                          <p className="text-amber-100 font-bold text-lg">
                            This Lesson is Locked
                          </p>
                          <p className="text-amber-200/50 text-sm mt-1" style={{ fontFamily: 'var(--font-family-kannada)' }}>
                            ಈ ವಿಡಿಯೋ ಲಾಕ್ ಆಗಿದೆ. ವೀಕ್ಷಿಸಲು ಕೋರ್ಸ್ಗೆ ಸೇರಿ.
                          </p>
                        </div>

                        <p className="text-amber-100/40 text-sm">
                          Please enroll to instantly view this material.
                        </p>

                        <a
                          href="/#courses"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                            bg-gradient-to-r from-amber-500 to-yellow-600
                            text-purple-950 font-bold text-sm
                            hover:from-amber-400 hover:to-yellow-500
                            transition-all duration-300
                            hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]
                            hover:scale-105 transform-gpu"
                        >
                          Enroll Now / ಈಗ ಸೇರಿ
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
