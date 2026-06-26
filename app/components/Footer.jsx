import Link from 'next/link';
import ObfuscatedContact from './ObfuscatedContact';

const colLink = 'text-white/[.72] no-underline text-[16px] hover:text-white transition-colors';
const heading = 'font-mono text-[12px] tracking-[.18em] uppercase text-teal-light mb-5';

export default function Footer() {
  return (
    <footer className="relative bg-navy-foot text-white font-sans overflow-hidden px-[clamp(20px,5vw,40px)]">
      <div
        className="absolute inset-0 opacity-[.05] pointer-events-none bg-[length:220px]"
        style={{ backgroundImage: "url('/web-assets/pixel26-pattern-tile.svg')" }}
      />
      <div className="relative max-w-[1240px] mx-auto pt-[clamp(56px,7vw,88px)]">
        <div className="p26-fcols">
          <div className="min-w-[240px]">
            <img src="/web-assets/pixel26-logo-reversed.svg" alt="Pixel26" className="h-9 block mb-[22px]" />
            <p className="text-[17px] leading-[1.6] text-white/60 m-0 mb-[26px] max-w-[330px]">A digital studio for ambitious businesses. Premium websites, then growth through SEO and Google Ads.</p>
            <div className="flex gap-3">
              {['in', 'X', 'ig'].map((t) => (
                <a key={t} href="#" aria-label={t} className="w-10 h-10 rounded-[10px] bg-teal-light/10 border border-teal-light/[.18] flex items-center justify-center text-teal-light no-underline font-mono text-[14px] font-semibold hover:bg-teal/[.28] transition-colors">{t}</a>
              ))}
            </div>
          </div>
          <div>
            <div className={heading}>Services</div>
            <div className="flex flex-col gap-3.5">
              <Link href="/services" className={colLink}>Web Design</Link>
              <Link href="/services" className={colLink}>SEO</Link>
              <Link href="/services" className={colLink}>Google Ads</Link>
            </div>
          </div>
          <div>
            <div className={heading}>Company</div>
            <div className="flex flex-col gap-3.5">
              <Link href="/about" className={colLink}>About</Link>
              <Link href="/contact" className={colLink}>Contact</Link>
            </div>
          </div>
          <div>
            <div className={heading}>Get in touch</div>
            <div className="flex flex-col gap-3.5">
              <ObfuscatedContact kind="email" className={colLink} />
              <ObfuscatedContact kind="phone" className={colLink} />
              <span className="text-white/50 text-[16px]">Mon–Fri, 9–6</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3.5 justify-between items-center mt-[clamp(44px,5vw,64px)] py-[26px] border-t border-teal-light/[.14] font-mono text-[13px] tracking-[.04em] text-white/45">
          <span>© 2026 Pixel26. All rights reserved.</span>
          <span className="flex gap-6">
            <Link href="/privacy" className="text-white/45 no-underline hover:text-white">Privacy</Link>
            <Link href="/terms" className="text-white/45 no-underline hover:text-white">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
