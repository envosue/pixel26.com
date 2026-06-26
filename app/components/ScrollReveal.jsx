'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Reveals [data-reveal] elements as they scroll into view. Runs site-wide.
// usePathname in the dep array re-triggers on every App Router navigation
// (layout never remounts, so [] would only fire once — leaving new-page
// elements permanently invisible).
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = (el) => el.classList.add('revealed');
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(reveal);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    const scan = () => document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((n) => io.observe(n));
    scan();
    // catch anything already in the initial viewport, plus late-mounted nodes
    const t = setTimeout(scan, 300);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]); // re-run on every route change

  return null;
}
