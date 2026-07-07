'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';
import GoldTraceBorder from '@/components/ui/GoldTraceBorder';
import SecureVideoPlayer from '@/components/ui/SecureVideoPlayer';
import CheckoutOverlay from '@/components/ui/CheckoutOverlay';
import CelebrationOverlay from '@/components/ui/CelebrationOverlay';

interface VideoItem {
  id: string;
  bunnyGuid: string;
  title: string;
  titleKn: string;
  price: number;
  originalPrice: number;
  thumbnail: string;
}

const videos: VideoItem[] = [
  {
    id: 'v1',
    bunnyGuid: 'bunny-guid-v1-placeholder',
    title: 'Fabric Preparation & Material Selection',
    titleKn: 'ಬಟ್ಟೆ ತಯಾರಿಕೆ ಮತ್ತು ವಸ್ತು ಆಯ್ಕೆ',
    price: 999,
    originalPrice: 1999,
    thumbnail: '/WhatsApp Image 2026-07-06 at 2.57.13 PM.jpeg',
  },
  {
    id: 'v2',
    bunnyGuid: 'bunny-guid-v2-placeholder',
    title: 'Pleating Calculations & Techniques',
    titleKn: 'ಮಡಿಕೆ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ತಂತ್ರಗಳು',
    price: 999,
    originalPrice: 1999,
    thumbnail: '/WhatsApp Image 2026-07-06 at 3.21.49 PM.jpeg',
  },
  {
    id: 'v3',
    bunnyGuid: 'bunny-guid-v3-placeholder',
    title: 'Scale Modeling & Doll Framework',
    titleKn: 'ಮಾಪಕ ಮಾಡೆಲಿಂಗ್ ಮತ್ತು ಬೊಂಬೆ ಚೌಕಟ್ಟು',
    price: 999,
    originalPrice: 1999,
    thumbnail: '/WhatsApp Image 2026-07-06 at 2.57.12 PM.jpeg',
  },
  {
    id: 'v4',
    bunnyGuid: 'bunny-guid-v4-placeholder',
    title: 'Temple Border & Zari Arrangements',
    titleKn: 'ದೇವಸ್ಥಾನದ ಅಂಚು ಮತ್ತು ಜರಿ ವ್ಯವಸ್ಥೆ',
    price: 999,
    originalPrice: 1999,
    thumbnail: '/WhatsApp Image 2026-07-06 at 2.57.13 PM.jpeg',
  },
  {
    id: 'v5',
    bunnyGuid: 'bunny-guid-v5-placeholder',
    title: 'Accessory Framing & Final Assembly',
    titleKn: 'ಅಲಂಕಾರಿಕ ಚೌಕಟ್ಟು ಮತ್ತು ಅಂತಿಮ ಜೋಡಣೆ',
    price: 999,
    originalPrice: 1999,
    thumbnail: '/WhatsApp Image 2026-07-06 at 3.21.49 PM.jpeg',
  },
  {
    id: 'v6',
    bunnyGuid: 'cb2f8623-83eb-468a-bf97-ca52e90f2095',
    title: 'Varamahalakshmi Saree Draping Masterclass',
    titleKn: 'ವರಮಹಾಲಕ್ಷ್ಮಿ ಸೀರೆ ಉಡಿಸುವ ಮಾಸ್ಟರ್‌ಕ್ಲಾಸ್',
    price: 249,
    originalPrice: 499,
    thumbnail: '/WhatsApp Image 2026-07-06 at 2.57.12 PM.jpeg',
  }
];

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [purchasedGuids, setPurchasedGuids] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Overlay states
  const [checkoutVideo, setCheckoutVideo] = useState<VideoItem | null>(null);
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  const fetchPurchases = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from('purchases')
      .select('bunny_guid')
      .eq('user_id', userId);

    if (data) {
      setPurchasedGuids(new Set(data.map((p: { bunny_guid: string }) => p.bunny_guid)));
    }
  }, []);

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
        await fetchPurchases(user.id);
      } catch (err) {
        console.error('Failed to initialize dashboard:', err);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [fetchPurchases]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const handlePurchaseSuccess = useCallback(() => {
    setCheckoutVideo(null);
    setShowCelebration(true);

    // Refresh purchases after celebration
    if (user) {
      setTimeout(() => {
        fetchPurchases(user.id);
      }, 500);
    }
  }, [user, fetchPurchases]);

  const handleCelebrationDismiss = useCallback(() => {
    setShowCelebration(false);
  }, []);

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto"
            style={{ borderColor: 'rgba(212,175,55,0.2)', borderTopColor: '#D4AF37' }} />
          <p className="text-sm" style={{ color: 'rgba(200,177,149,0.5)' }}>Loading your dashboard…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#2D0B1E' }}>
      {/* ===== Dashboard Header ===== */}
      <header className="sticky top-0 z-50 glass-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-lg font-bold text-gold-shimmer">
              Hobbies of Shubha
            </a>
            <div className="flex items-center gap-4">
              <span className="text-sm hidden sm:inline" style={{ color: 'rgba(200,177,149,0.5)' }}>
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-200"
                style={{
                  color: 'rgba(212,175,55,0.5)',
                  border: '1px solid rgba(212,175,55,0.15)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.4)';
                  (e.currentTarget as HTMLElement).style.color = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.15)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(212,175,55,0.5)';
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Dashboard Content ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-gold-shimmer">
            Your Course Dashboard
          </h1>
          <p
            className="mt-2 text-sm"
            style={{ color: 'rgba(200,177,149,0.5)', fontFamily: 'var(--font-family-kannada)' }}
          >
            ನಿಮ್ಮ ಕೋರ್ಸ್ ಡ್ಯಾಶ್ಬೋರ್ಡ್
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => {
            const isPurchased = purchasedGuids.has(video.bunnyGuid);

            return (
              <GoldTraceBorder key={video.id} className="h-full">
                <div className="flex flex-col h-full">
                  {/* Thumbnail */}
                  <div
                    className="relative aspect-video overflow-hidden"
                    style={{ borderRadius: 'calc(1rem - 1px) calc(1rem - 1px) 0 0' }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      style={{ opacity: isPurchased ? 0.85 : 0.5 }}
                    />
                    {/* Dark gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, #1C0713 0%, rgba(28,7,19,0.3) 50%, transparent 100%)',
                      }}
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                        style={{
                          width: '52px',
                          height: '52px',
                          background: isPurchased ? '#D4AF37' : 'rgba(212,175,55,0.25)',
                          boxShadow: isPurchased
                            ? '0 0 30px rgba(212,175,55,0.5)'
                            : 'none',
                        }}
                      >
                        {isPurchased ? (
                          <svg
                            className="translate-x-0.5"
                            style={{ width: '20px', height: '20px', color: '#2D0B1E' }}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        ) : (
                          <svg
                            style={{ width: '20px', height: '20px', color: '#D4AF37' }}
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
                        )}
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      {isPurchased ? (
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            background: 'rgba(74,222,128,0.1)',
                            border: '1px solid rgba(74,222,128,0.25)',
                            color: '#4ade80',
                          }}
                        >
                          Unlocked
                        </span>
                      ) : (
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            background: 'rgba(212,175,55,0.1)',
                            border: '1px solid rgba(212,175,55,0.2)',
                            color: '#D4AF37',
                          }}
                        >
                          Premium
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 p-5 flex flex-col justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold leading-snug" style={{ color: '#F9F6EE' }}>
                        {video.title}
                      </h3>
                      <p
                        className="text-xs mt-1 leading-snug"
                        style={{ color: 'rgba(200,177,149,0.5)', fontFamily: 'var(--font-family-kannada)' }}
                      >
                        {video.titleKn}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Price row */}
                      {!isPurchased && (
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-xs line-through"
                            style={{ color: 'rgba(200,177,149,0.3)' }}
                          >
                            ₹{video.originalPrice.toLocaleString('en-IN')}
                          </span>
                          <span className="text-lg font-black text-gold-shimmer">
                            ₹{video.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      )}

                      {/* Action button */}
                      {isPurchased ? (
                        <button
                          onClick={() => setPlayingVideo(video)}
                          className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wide
                            transition-all duration-300 hover:scale-[1.02]"
                          style={{
                            background: 'rgba(74,222,128,0.1)',
                            border: '1px solid rgba(74,222,128,0.3)',
                            color: '#4ade80',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(74,222,128,0.15)';
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,222,128,0.5)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(74,222,128,0.1)';
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,222,128,0.3)';
                          }}
                        >
                          ▶ Play Video
                        </button>
                      ) : (
                        <button
                          onClick={() => setCheckoutVideo(video)}
                          className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wide
                            transition-all duration-300 transform-gpu hover:scale-[1.02]"
                          style={{
                            background: '#D4AF37',
                            color: '#2D0B1E',
                            boxShadow: '0 4px 16px rgba(212,175,55,0.3)',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = '#E6CA65';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = '#D4AF37';
                          }}
                        >
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </GoldTraceBorder>
            );
          })}
        </div>
      </div>

      {/* ===== Overlays ===== */}

      {/* Checkout Overlay */}
      {checkoutVideo && (
        <CheckoutOverlay
          bunnyGuid={checkoutVideo.bunnyGuid}
          title={checkoutVideo.title}
          price={checkoutVideo.price}
          originalPrice={checkoutVideo.originalPrice}
          onSuccess={handlePurchaseSuccess}
          onClose={() => setCheckoutVideo(null)}
        />
      )}

      {/* Secure Video Player */}
      {playingVideo && (
        <SecureVideoPlayer
          bunnyGuid={playingVideo.bunnyGuid}
          title={playingVideo.title}
          onClose={() => setPlayingVideo(null)}
        />
      )}

      {/* Celebration Overlay */}
      {showCelebration && (
        <CelebrationOverlay onDismiss={handleCelebrationDismiss} />
      )}
    </div>
  );
}