import Script from 'next/script';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ObfuscatedContact from '../components/ObfuscatedContact';

export const metadata = {
  title: 'Book a Free Call | Pixel26',
  description:
    'Book a free 30-minute strategy call with Pixel26. We\'ll review your site, search visibility, and ads — then give you a clear, no-pressure plan.',
};

const contactLink = 'text-[19px] text-navy no-underline font-semibold';

export default function Contact() {
  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section
        className="relative pt-[clamp(140px,15vw,196px)] pb-[clamp(56px,7vw,90px)] px-[clamp(20px,5vw,40px)] overflow-hidden"
        style={{
          background:
            'radial-gradient(900px 540px at 50% 0%, rgba(23,168,190,.22), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.06]" />
        <div className="relative max-w-[1240px] mx-auto">
          <div className="font-mono text-[13px] tracking-[.24em] uppercase text-teal-light mb-6">
            Free strategy call
          </div>
          <h1 className="font-display font-bold text-[clamp(40px,6.4vw,82px)] leading-[1.02] tracking-[-.03em] text-white m-0 mb-[22px]">
            Let&apos;s talk about{' '}
            <span className="text-teal inline-block leading-none whitespace-nowrap border-b-[.09em] border-orange pb-[.05em]">
              growth
            </span>
            .
          </h1>
          <p className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-white/[.72] max-w-[600px] m-0">
            Pick a time that works for you. 30 minutes — we&apos;ll review your site,
            search visibility, and ads, then hand you a clear action plan.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white pt-[clamp(56px,7vw,96px)] pb-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)]">
        <div className="max-w-[1240px] mx-auto">

          {/* Contact strip */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mb-[clamp(40px,5vw,60px)]">
            <div>
              <div className="font-mono text-[12px] tracking-[.14em] uppercase text-teal-dark mb-1.5">
                Email
              </div>
              <ObfuscatedContact kind="email" className={contactLink} />
            </div>
            <div>
              <div className="font-mono text-[12px] tracking-[.14em] uppercase text-teal-dark mb-1.5">
                Phone
              </div>
              <ObfuscatedContact kind="phone" className={contactLink} />
            </div>
            <div>
              <div className="font-mono text-[12px] tracking-[.14em] uppercase text-teal-dark mb-1.5">
                Hours
              </div>
              <div className="text-[19px] text-navy font-semibold">Mon–Fri · 9am–6pm</div>
            </div>
          </div>

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget w-full rounded-[22px] overflow-hidden border-[1.5px] border-line shadow-[0_24px_60px_rgba(8,51,68,.08)]"
            data-url="https://calendly.com/tech-dhaval/30min?hide_gdpr_banner=1&text_color=083344&primary_color=f07810"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>

      <Footer />

      {/* Calendly widget script — loaded after page is interactive */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
