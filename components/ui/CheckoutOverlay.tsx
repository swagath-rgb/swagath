'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

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
  onSuccess,
  onClose,
}: CheckoutOverlayProps) {
  const [processing, setProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSimulatePayment = async () => {
    setProcessing(true);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const res = await fetch('/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.access_token || ''}`,
        },
        body: JSON.stringify({ bunnyGuid }),
      });

      if (res.ok) {
        onSuccess();
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch {
      alert('Connection error. Please check your internet and try again.');
    } finally {
      setProcessing(false);
    }
  };

  if (!mounted) return null;

  const upiString = `upi://pay?pa=hobbiesofshubha@upi&pn=Hobbies+of+Shubha&am=${price}&cu=INR&tn=Course+${bunnyGuid}`;

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

          {/* QR Code area */}
          <div className="text-center space-y-3">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'rgba(212,175,55,0.5)' }}
            >
              Scan to Pay via UPI
            </p>
            <div
              className="inline-flex items-center justify-center rounded-2xl mx-auto"
              style={{
                width: '180px',
                height: '180px',
                background: '#F9F6EE',
                padding: '12px',
              }}
            >
              {/* Deterministic QR pattern */}
              <div className="w-full h-full relative">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ color: '#2D0B1E' }}
                >
                  {/* Corner markers */}
                  <rect x="5" y="5" width="25" height="25" fill="currentColor" />
                  <rect x="70" y="5" width="25" height="25" fill="currentColor" />
                  <rect x="5" y="70" width="25" height="25" fill="currentColor" />
                  <rect x="10" y="10" width="15" height="15" fill="#F9F6EE" />
                  <rect x="75" y="10" width="15" height="15" fill="#F9F6EE" />
                  <rect x="10" y="75" width="15" height="15" fill="#F9F6EE" />
                  <rect x="14" y="14" width="7" height="7" fill="currentColor" />
                  <rect x="79" y="14" width="7" height="7" fill="currentColor" />
                  <rect x="14" y="79" width="7" height="7" fill="currentColor" />
                  {/* Data modules — fixed pattern */}
                  <rect x="35" y="5" width="4" height="4" fill="currentColor" />
                  <rect x="35" y="15" width="4" height="4" fill="currentColor" />
                  <rect x="45" y="5" width="4" height="4" fill="currentColor" />
                  <rect x="55" y="10" width="4" height="4" fill="currentColor" />
                  <rect x="40" y="25" width="4" height="4" fill="currentColor" />
                  <rect x="50" y="20" width="4" height="4" fill="currentColor" />
                  <rect x="60" y="25" width="4" height="4" fill="currentColor" />
                  <rect x="35" y="35" width="4" height="4" fill="currentColor" />
                  <rect x="45" y="40" width="4" height="4" fill="currentColor" />
                  <rect x="55" y="35" width="4" height="4" fill="currentColor" />
                  <rect x="60" y="45" width="4" height="4" fill="currentColor" />
                  <rect x="35" y="55" width="4" height="4" fill="currentColor" />
                  <rect x="45" y="60" width="4" height="4" fill="currentColor" />
                  <rect x="55" y="55" width="4" height="4" fill="currentColor" />
                  <rect x="60" y="65" width="4" height="4" fill="currentColor" />
                  <rect x="70" y="40" width="4" height="4" fill="currentColor" />
                  <rect x="80" y="45" width="4" height="4" fill="currentColor" />
                  <rect x="90" y="40" width="4" height="4" fill="currentColor" />
                  <rect x="70" y="55" width="4" height="4" fill="currentColor" />
                  <rect x="80" y="60" width="4" height="4" fill="currentColor" />
                  <rect x="90" y="55" width="4" height="4" fill="currentColor" />
                  <rect x="70" y="70" width="4" height="4" fill="currentColor" />
                  <rect x="80" y="75" width="4" height="4" fill="currentColor" />
                  <rect x="90" y="80" width="4" height="4" fill="currentColor" />
                  <rect x="5" y="40" width="4" height="4" fill="currentColor" />
                  <rect x="15" y="45" width="4" height="4" fill="currentColor" />
                  <rect x="5" y="55" width="4" height="4" fill="currentColor" />
                  <rect x="15" y="60" width="4" height="4" fill="currentColor" />
                  <rect x="25" y="55" width="4" height="4" fill="currentColor" />
                  <rect x="25" y="40" width="4" height="4" fill="currentColor" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: '#D4AF37' }}
                  >
                    <span
                      className="text-[8px] font-black"
                      style={{ color: '#2D0B1E' }}
                    >
                      UPI
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px]" style={{ color: 'rgba(200,177,149,0.3)' }}>
              {upiString.substring(0, 55)}…
            </p>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-3">
            <span
              className="flex-1 h-px"
              style={{ background: 'rgba(212,175,55,0.1)' }}
            />
            <span className="text-xs" style={{ color: 'rgba(200,177,149,0.3)' }}>
              or
            </span>
            <span
              className="flex-1 h-px"
              style={{ background: 'rgba(212,175,55,0.1)' }}
            />
          </div>

          {/* Simulate Payment button */}
          <button
            onClick={handleSimulatePayment}
            disabled={processing}
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
              if (!processing)
                (e.currentTarget as HTMLElement).style.background = '#E6CA65';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#D4AF37';
            }}
          >
            {processing ? (
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
              'Complete Purchase'
            )}
          </button>

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
