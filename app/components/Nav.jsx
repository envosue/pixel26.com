'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq',      label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (e, href) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={
        'fixed top-0 left-0 right-0 z-[1000] px-[clamp(20px,5vw,40px)] transition-[background,box-shadow,backdrop-filter] duration-300 ' +
        (scrolled
          ? 'bg-[rgba(8,51,68,.88)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(135,196,216,.14),0_8px_30px_rgba(4,26,35,.4)]'
          : 'bg-transparent')
      }
    >
      <div className="max-w-[1240px] mx-auto h-[74px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline shrink-0">
          <img src="/web-assets/pixel26-logo-reversed.svg" alt="Pixel26" className="h-[34px] block" />
        </Link>

        {/* Desktop links */}
        <div className="p26-desk items-center gap-[clamp(20px,3vw,36px)]">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchor(e, l.href)}
              className="font-sans font-medium text-[15px] tracking-[.01em] no-underline text-white/[.68] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="font-sans font-bold text-[15px] text-white bg-orange px-[22px] py-3 rounded-[30px] no-underline shadow-[0_6px_20px_rgba(240,120,16,.32)] transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </Link>
        </div>

        {/* Mobile CTA only */}
        <Link
          href="/contact"
          className="p26-burger font-sans font-bold text-[14px] text-white bg-orange px-5 py-2.5 rounded-[24px] no-underline"
        >
          Book a call
        </Link>
      </div>
    </nav>
  );
}
