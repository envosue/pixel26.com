'use client';
/**
 * CookieBanner — PIPEDA / Alberta PIPA compliant cookie notice.
 *
 * Shows on first visit. Stores preference in localStorage under 'p26_cookie_consent'.
 * Values: 'accepted' | 'declined'
 *
 * On decline: only strictly necessary cookies run (no analytics, no Calendly tracking).
 * On accept: all cookies permitted (Calendly session, future analytics).
 */
import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'p26_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage blocked — skip banner
    }
  }, []);

  const respond = (choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // fail silently
    }
    if (typeof window.gtag === 'function') {
      const state = choice === 'accepted' ? 'granted' : 'denied';
      window.gtag('consent', 'update', {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] px-[clamp(16px,4vw,32px)] pb-[clamp(16px,3vw,28px)]"
    >
      <div className="max-w-[900px] mx-auto bg-navy border border-white/[.12] rounded-[18px] shadow-[0_-8px_40px_rgba(0,0,0,.35)] px-[clamp(20px,3vw,36px)] py-[clamp(18px,2.5vw,28px)] flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Text */}
        <div className="flex-1 text-[14px] leading-[1.65] text-white/80">
          <span className="font-semibold text-white">We use cookies</span> to enable booking
          (Calendly) and analyse site performance. By clicking{' '}
          <span className="text-teal-light font-semibold">Accept</span>, you consent to our use
          of cookies as described in our{' '}
          <Link
            href="/privacy"
            className="text-teal-light underline underline-offset-2 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </div>

        {/* Actions */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => respond('declined')}
            className="font-sans font-semibold text-[14px] text-white/70 bg-white/[.08] border border-white/[.15] rounded-[30px] px-5 py-2.5 cursor-pointer hover:bg-white/[.14] transition-colors whitespace-nowrap"
          >
            Decline
          </button>
          <button
            onClick={() => respond('accepted')}
            className="font-sans font-semibold text-[14px] text-white bg-orange border-0 rounded-[30px] px-6 py-2.5 cursor-pointer shadow-[0_4px_14px_rgba(240,120,16,.4)] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
