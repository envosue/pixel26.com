'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const linkClass = (href) =>
    'font-sans text-[15px] tracking-[.01em] no-underline py-1.5 border-b-2 transition-colors ' +
    (isActive(href) ? 'font-bold text-white border-teal' : 'font-medium text-white/[.68] border-transparent hover:text-white');

  const bar = (transform, opacity) => ({
    display: 'block', width: '26px', height: '2px', background: '#fff', borderRadius: '2px',
    transition: 'transform .25s ease, opacity .2s ease',
    transform: transform || 'none', opacity: opacity == null ? 1 : opacity,
  });

  return (
    <nav
      className={
        'fixed top-0 left-0 right-0 z-[1000] px-[clamp(20px,5vw,40px)] transition-[background,box-shadow,backdrop-filter] duration-300 ' +
        (scrolled
          ? 'bg-[rgba(8,51,68,.86)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(135,196,216,.14),0_8px_30px_rgba(4,26,35,.4)]'
          : 'bg-transparent')
      }
    >
      <div className="max-w-[1240px] mx-auto h-[74px] flex items-center justify-between">
        <Link href="/" className="flex items-center no-underline shrink-0">
          <img src="/web-assets/pixel26-logo-reversed.svg" alt="Pixel26" className="h-[34px] block" />
        </Link>

        <div className="p26-desk items-center gap-[clamp(20px,3vw,40px)]">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>{l.label}</Link>
          ))}
          <Link
            href="/contact"
            className="font-sans font-bold text-[15px] text-white bg-orange px-[22px] py-3 rounded-[30px] no-underline shadow-[0_6px_20px_rgba(240,120,16,.32)] transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </Link>
        </div>

        <button
          className="p26-burger flex-col items-center justify-center gap-[6px] w-10 h-10 p-0 bg-transparent border-0 cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span style={bar(open ? 'translateY(8px) rotate(45deg)' : null)} />
          <span style={bar(null, open ? 0 : 1)} />
          <span style={bar(open ? 'translateY(-8px) rotate(-45deg)' : null)} />
        </button>
      </div>

      <div
        className={
          'fixed left-0 right-0 top-[74px] bg-[rgba(8,51,68,.97)] backdrop-blur-[14px] flex flex-col gap-[22px] overflow-hidden transition-[max-height,padding] duration-[350ms] px-[clamp(20px,5vw,40px)] ' +
          (open ? 'max-h-[480px] pt-10 pb-12 border-t border-[rgba(135,196,216,.16)]' : 'max-h-0')
        }
      >
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="font-display font-semibold text-[30px] text-white no-underline">{l.label}</Link>
        ))}
        <Link href="/contact" className="mt-3.5 self-start font-sans font-bold text-[18px] text-white bg-orange px-[34px] py-4 rounded-[34px] no-underline">Book a call</Link>
      </div>
    </nav>
  );
}
