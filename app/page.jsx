'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

const SEC = 'py-[clamp(70px,9vw,128px)] px-[clamp(20px,5vw,40px)]';
const WRAP = 'max-w-[1240px] mx-auto';
const LABEL = 'font-mono text-[13px] tracking-[.2em] uppercase text-teal-dark mb-[18px]';
const H2 = 'font-display font-bold text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-.025em] text-navy m-0';
const btnPrimary = 'inline-block font-sans font-bold text-[17px] text-white bg-orange px-[34px] py-4 rounded-[34px] no-underline shadow-[0_8px_26px_rgba(240,120,16,.4)] transition-transform hover:-translate-y-0.5';
const btnGhost = 'inline-block font-sans font-semibold text-[17px] text-white bg-transparent px-8 py-4 rounded-[34px] no-underline border-[1.5px] border-teal-light/40 hover:bg-white/[.08] hover:border-teal-light/60 transition-colors';

function buildPixels() {
  const out = [];
  const rnd = (x) => { const v = Math.sin(x * 127.1) * 43758.5453; return v - Math.floor(v); };
  for (let i = 0; i < 34; i++) {
    const left = rnd(i + 1) * 100, top = rnd(i + 7) * 100, size = 6 + rnd(i + 13) * 16;
    const orange = rnd(i + 3) > 0.86, teal = rnd(i + 5) > 0.5;
    const color = orange ? 'rgba(240,120,16,.55)' : (teal ? 'rgba(23,168,190,.40)' : 'rgba(135,196,216,.28)');
    const dur = 5 + rnd(i + 21) * 7, delay = rnd(i + 31) * 6;
    out.push({ left, top, size, color, dur, delay });
  }
  return out;
}

const SERVICES = [
  { num: '01', title: 'Web Design & Build', desc: 'Conversion-focused websites designed and built to feel premium and load fast. Delivered in 5 weeks with a written guarantee.', tag: 'Learn more' },
  { num: '02', title: 'SEO', desc: 'Technical and content SEO that compounds — rankings that keep paying off long after the work is done.', tag: 'Learn more' },
];

const PROCESS = [
  { num: '01', title: 'Discover', desc: 'We dig into your goals, audience and the numbers that matter to your business.' },
  { num: '02', title: 'Design & build', desc: 'A premium, conversion-led website — designed, written and engineered to perform.' },
  { num: '03', title: 'Launch & rank', desc: 'We ship, then layer on SEO to start driving qualified organic traffic from day one.' },
  { num: '04', title: 'Grow & report', desc: 'Monthly optimisation and plain-English reporting tied to real outcomes.' },
];

const PRICING = [
  {
    service: 'Web Design & Build',
    name: 'Launch',
    price: '$12,000',
    billing: 'one-time project',
    billingNote: null,
    stackValue: '$20,000+',
    desc: 'A premium website live in 5 weeks — complete with copy, tracking, and a delivery guarantee.',
    featured: false,
    features: [
      'Custom 6–8 page design & development',
      'Conversion copywriting for every page',
      'Figma design file delivered — you own it',
      'Core Web Vitals 90+ score guarantee',
      'GA4 + conversion event tracking setup',
      'On-page SEO, schema & 60-day support',
    ],
    guarantee: 'Live in 5 weeks or we work free until we ship.',
    cta: 'Start your site',
  },
  {
    service: 'Website + SEO',
    name: 'Grow',
    price: '$5,000',
    billing: '/mo',
    billingNote: '3-month minimum · $15,000 total',
    stackValue: '$27,000+',
    desc: 'Website built in Month 1, then SEO that compounds every month after — one team accountable for both.',
    featured: true,
    features: [
      'Website built in Month 1 (value: $12,000)',
      'Technical SEO audit & full implementation',
      '3 long-form content pieces written per month',
      '3 high-DA backlinks acquired per month',
      'Monthly ranking dashboard + strategy call',
      'Competitor gap monitoring & opportunity reports',
    ],
    guarantee: 'Measurable ranking improvements in 90 days or Month 4 is free.',
    cta: 'Book a call',
  },
];

const FAQ = [
  { q: 'How long does a website take?', a: 'The Launch package goes live in 5 weeks — that\'s our written guarantee. If we miss it, we keep working at no extra charge until we ship. Grow clients get their site built in Month 1 of the retainer.' },
  { q: 'What if I already have a website?', a: 'No problem. On the Grow package, Month 1 converts from a new website build to a full conversion audit and CRO optimisation of your existing site — same effort, same value, no forced rebuild.' },
  { q: 'What does the "stack value" mean on the pricing cards?', a: 'It\'s the combined retail value of every deliverable in the package if you sourced each piece separately — design, copywriting, content writing, and link building. You get all of it for the package price, which is why ROI typically lands within the first new client you win.' },
  { q: 'What if I don\'t hit the guarantee?', a: 'Every package has a specific, written guarantee. Launch: free work until we ship. Grow: Month 4 is free if you don\'t see measurable ranking improvements in 90 days.' },
  { q: 'What does reporting look like?', a: 'A live performance dashboard plus a monthly review in plain English: what we did, what it moved, and what\'s next. No vanity metrics — just the numbers tied to your revenue.' },
];

const HERO_BARS = [38, 30, 52, 46, 64, 58, 80, 72, 100];

function useStatsCounter() {
  const ref = useRef(null);
  const [t, setT] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setT(1); return; }
    let raf;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        io.disconnect();
        const start = performance.now(), dur = 1700;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          setT(1 - Math.pow(1 - p, 3));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return [ref, t];
}

export default function Home() {
  const pixels = useMemo(buildPixels, []);
  const [statsRef, t] = useStatsCounter();
  const fmt = (target, dec, prefix, suffix) => prefix + (target * t).toFixed(dec) + suffix;
  const stats = [
    { display: fmt(287, 0, '+', '%'), label: 'Average organic traffic growth in 12 months' },
    { display: fmt(3.4, 1, '', '×'), label: 'More qualified leads after relaunch' },
    { display: fmt(150, 0, '', '+'), label: 'Websites designed, built and grown' },
    { display: fmt(92, 0, '', '+'), label: 'Average Core Web Vitals score on delivery' },
  ];

  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="font-sans bg-navy-deep text-ink overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Nav />

      {/* ── HERO ── */}
      <section
        id="top"
        className="relative flex items-start overflow-hidden px-[clamp(20px,5vw,40px)]"
        style={{ background: 'radial-gradient(1100px 700px at 72% 18%, rgba(23,168,190,.20), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {pixels.map((p, i) => (
            <div key={i} style={{ position: 'absolute', left: p.left.toFixed(2) + '%', top: p.top.toFixed(2) + '%', width: p.size.toFixed(1) + 'px', height: p.size.toFixed(1) + 'px', borderRadius: (p.size * 0.28).toFixed(1) + 'px', background: p.color, animation: `p26float ${p.dur.toFixed(1)}s ease-in-out ${p.delay.toFixed(1)}s infinite` }} />
          ))}
        </div>
        <div className={'relative z-[2] w-full pt-[clamp(100px,11vw,180px)] pb-[clamp(64px,9vw,140px)] ' + WRAP}>
          <div className="p26-hsplit">
            <div>
              <div data-reveal className="font-mono text-[13px] tracking-[.26em] uppercase text-teal-light mb-[26px]">Digital Studio · Est. 2014</div>
              <h1 data-reveal className="font-display font-bold text-[clamp(42px,5.6vw,82px)] leading-[1.04] tracking-[-.03em] text-white m-0 mb-[26px]">
                We build it.<br />Then we make it <span className="text-teal inline-block leading-none whitespace-nowrap border-b-[.09em] border-orange pb-[.05em]">grow</span>.
              </h1>
              <p data-reveal className="text-[clamp(17px,1.7vw,21px)] leading-[1.6] text-white/[.72] max-w-[520px] m-0 mb-10">Premium web design paired with SEO — one team accountable for both how it looks and how it performs.</p>
              <div data-reveal className="flex flex-wrap gap-4">
                <Link href="/contact" className={btnPrimary}>Book a free call</Link>
                <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className={btnGhost}>Our services</a>
              </div>
            </div>
            <div data-reveal className="relative">
              <div className="bg-white/[.04] border border-teal-light/20 rounded-[22px] p-[30px] backdrop-blur-[8px] shadow-[0_30px_80px_rgba(4,22,30,.5)]">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[12px] tracking-[.14em] uppercase text-teal-light">Organic traffic</span>
                  <span className="font-mono text-[12px] text-white/45">12 mo</span>
                </div>
                <div className="font-display font-bold text-[52px] text-white leading-none mb-1">+287%</div>
                <div className="text-[14px] text-teal font-semibold mb-[26px]">▲ trending up every quarter</div>
                <div className="flex items-end gap-2.5 h-[150px]">
                  {HERO_BARS.map((h, i) => (
                    <div key={i} style={{ flex: 1, height: h + '%', borderRadius: '6px 6px 2px 2px', transformOrigin: 'bottom', background: i >= 7 ? '#F07810' : 'linear-gradient(180deg,#17A8BE,#0F6F7E)', animation: `p26rise .8s cubic-bezier(.22,.61,.36,1) ${(i * 0.08).toFixed(2)}s both` }} />
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <div className="flex-1 bg-teal/[.12] border border-teal/[.25] rounded-[12px] px-4 py-3.5"><div className="font-display font-bold text-[24px] text-white">3.4×</div><div className="text-[12px] text-white/60 mt-0.5">More leads</div></div>
                  <div className="flex-1 bg-orange/[.12] border border-orange/[.28] rounded-[12px] px-4 py-3.5"><div className="font-display font-bold text-[24px] text-white">90+</div><div className="text-[12px] text-white/60 mt-0.5">Core Web Vitals</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-[clamp(40px,5vw,64px)]">
            <div data-reveal className={LABEL}>What we do</div>
            <h2 data-reveal className={H2}>Two disciplines, <span className="text-teal">one team</span> accountable for the result.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px] max-w-[860px]">
            {SERVICES.map((svc) => (
              <div key={svc.num} data-reveal className="flex flex-col bg-white border-[1.5px] border-line rounded-[22px] p-8 transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(8,51,68,.12)] hover:border-teal-light">
                <div className="font-mono font-semibold text-[15px] text-white w-[46px] h-[46px] rounded-[12px] flex items-center justify-center bg-teal">{svc.num}</div>
                <h3 className="font-display font-bold text-[27px] text-navy mt-6 mb-2.5">{svc.title}</h3>
                <p className="text-[17px] leading-[1.6] text-ink-soft m-0 mb-[22px]">{svc.desc}</p>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-mono text-[13px] tracking-[.08em] text-teal font-semibold cursor-pointer">{svc.tag} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="relative bg-navy py-[clamp(64px,8vw,110px)] px-[clamp(20px,5vw,40px)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.05]" />
        <div className={'relative ' + WRAP}>
          <h2 data-reveal className="font-display font-bold text-[clamp(30px,4vw,52px)] tracking-[-.02em] text-white text-center mx-auto mb-[clamp(44px,5vw,68px)] max-w-[780px]">Numbers our clients <span className="text-orange">actually feel</span>.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(20px,3vw,40px)]">
            {stats.map((st, i) => (
              <div key={i} data-reveal className="text-center">
                <div className="font-display font-bold text-[clamp(48px,6vw,76px)] leading-none text-white tracking-[-.02em]">{st.display}</div>
                <div className="w-10 h-1 bg-teal rounded-[2px] my-[18px] mx-auto" />
                <div className="text-[16px] leading-[1.4] text-white/[.66] max-w-[200px] mx-auto">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={'bg-white ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-[clamp(40px,5vw,64px)]">
            <div data-reveal className={LABEL}>How we work</div>
            <h2 data-reveal className={H2}>A clear path from kickoff to growth.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.num} data-reveal className="pt-[34px] pr-7 pb-[34px] border-t-2 border-line">
                <div className="font-mono text-[14px] font-semibold text-teal mb-[30px]">{step.num}</div>
                <h3 className="font-display font-bold text-[23px] text-navy m-0 mb-2.5">{step.title}</h3>
                <p className="text-[16px] leading-[1.6] text-ink-soft m-0">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="text-center max-w-[680px] mx-auto mb-[clamp(40px,5vw,60px)]">
            <div data-reveal className={LABEL}>Packages</div>
            <h2 data-reveal className={H2}>Two services. Each built to <span className="text-teal">pay for itself</span> — fast.</h2>
            <p data-reveal className="text-[18px] leading-[1.6] text-ink-soft m-0 mt-4">Pick the growth lever you need. Stack them when you&apos;re ready to accelerate.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-[860px] mx-auto">
            {PRICING.map((plan) => {
              const f = plan.featured;
              return (
                <div key={plan.name} data-reveal className={'flex flex-col h-full rounded-[24px] ' + (f ? 'bg-navy border-[1.5px] border-teal-dark shadow-[0_30px_70px_rgba(8,51,68,.28)] -translate-y-2' : 'bg-white border-[1.5px] border-line')}>

                  {/* Card header band */}
                  <div className={'rounded-t-[22px] px-[34px] py-5 border-b ' + (f ? 'bg-white/[.06] border-white/10' : 'bg-cloud border-line')}>
                    <div className="flex items-center justify-between">
                      <span className={'font-mono text-[11px] tracking-[.18em] uppercase font-semibold ' + (f ? 'text-teal-light' : 'text-teal-dark')}>{plan.service}</span>
                      {f && <span className="font-mono text-[10px] tracking-[.14em] uppercase text-white bg-orange px-2.5 py-1 rounded-[20px]">Most popular</span>}
                    </div>
                    <div className={'font-display font-bold text-[26px] tracking-[-.02em] mt-1 ' + (f ? 'text-white' : 'text-navy')}>{plan.name}</div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 px-[34px] pt-[26px] pb-[34px]">
                    {/* Price */}
                    <div className="mb-1">
                      <div className="flex items-baseline gap-1">
                        <span className={'font-display font-bold text-[44px] tracking-[-.03em] leading-none ' + (f ? 'text-white' : 'text-navy')}>{plan.price}</span>
                        <span className={'font-mono text-[15px] ' + (f ? 'text-white/55' : 'text-[#7A98A4]')}>{plan.billing}</span>
                      </div>
                      {plan.billingNote && (
                        <div className={'font-mono text-[12px] mt-1 ' + (f ? 'text-white/45' : 'text-muted')}>{plan.billingNote}</div>
                      )}
                    </div>

                    {/* Value stack */}
                    <div className={'inline-flex items-center gap-2 mt-3 mb-4 self-start px-3 py-1.5 rounded-[8px] ' + (f ? 'bg-orange/[.14] border border-orange/25' : 'bg-teal/[.08] border border-teal/20')}>
                      <span className={'font-mono text-[11px] tracking-[.06em] ' + (f ? 'text-orange' : 'text-teal-dark')}>Stack value</span>
                      <span className={'font-mono font-bold text-[12px] ' + (f ? 'text-orange' : 'text-teal-dark')}>{plan.stackValue}</span>
                    </div>

                    {/* Description */}
                    <p className={'text-[15px] leading-[1.55] m-0 mb-[22px] ' + (f ? 'text-white/[.72]' : 'text-ink-soft')}>{plan.desc}</p>

                    {/* Divider */}
                    <div className={'h-px mb-[22px] ' + (f ? 'bg-white/[.1]' : 'bg-line')} />

                    {/* Features */}
                    <div className="flex flex-col gap-[11px] mb-[24px]">
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-[10px]">
                          <span className={'shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-px ' + (f ? 'bg-orange' : 'bg-teal')}>✓</span>
                          <span className={'text-[14px] leading-[1.45] ' + (f ? 'text-white/[.84]' : 'text-navy')}>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Guarantee */}
                    <div className={'flex items-start gap-2 mb-[26px] p-3 rounded-[10px] ' + (f ? 'bg-white/[.06]' : 'bg-cloud')}>
                      <span className="text-[14px] shrink-0">🛡</span>
                      <span className={'font-sans text-[12px] leading-[1.5] italic ' + (f ? 'text-white/55' : 'text-ink-soft')}>{plan.guarantee}</span>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={'mt-auto text-center font-sans font-bold text-[15px] px-6 py-[14px] rounded-[30px] no-underline transition-transform hover:-translate-y-0.5 ' + (f ? 'bg-orange text-white shadow-[0_8px_26px_rgba(240,120,16,.35)]' : 'bg-navy text-white')}
                    >{plan.cta}</Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p data-reveal className="text-center font-mono text-[13px] text-muted mt-[clamp(28px,3vw,40px)]">
            All engagements include a plain-English onboarding call and a clear scope before any work starts.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className={'bg-white ' + SEC}>
        <div className="max-w-[880px] mx-auto">
          <div className="text-center mb-[clamp(40px,5vw,56px)]">
            <div data-reveal className={LABEL}>Questions</div>
            <h2 data-reveal className="font-display font-bold text-[clamp(34px,4.6vw,56px)] leading-[1.05] tracking-[-.025em] text-navy m-0">Good to know.</h2>
          </div>
          <div className="flex flex-col">
            {FAQ.map((item) => (
              <div key={item.q} data-reveal className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3.5 py-[30px] px-1 border-t-[1.5px] border-line">
                <span className="font-mono font-semibold text-[16px] text-teal leading-[1.3]">Q.</span>
                <h3 className="font-display font-semibold text-[21px] text-navy m-0 leading-[1.3]">{item.q}</h3>
                <span className="font-mono font-semibold text-[16px] text-muted leading-[1.6]">A.</span>
                <p className="text-[17px] leading-[1.65] text-ink-soft m-0">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[linear-gradient(135deg,#0F6F7E_0%,#17A8BE_100%)] py-[clamp(64px,8vw,118px)] px-[clamp(20px,5vw,40px)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.08]" />
        <div data-reveal className="relative max-w-[880px] mx-auto text-center">
          <h2 className="font-display font-bold text-[clamp(36px,5.4vw,68px)] leading-[1.04] tracking-[-.025em] text-white m-0 mb-[22px]">Ready to grow?</h2>
          <p className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-white/[.88] max-w-[560px] mx-auto mb-10">Book a free 30-minute call. We&apos;ll review your site, your search presence, and where the quickest wins are.</p>
          <Link href="/contact" className="inline-block font-sans font-bold text-[18px] text-white bg-orange px-10 py-[18px] rounded-[34px] no-underline shadow-[0_12px_38px_rgba(8,32,42,.32)] transition-transform hover:-translate-y-0.5">Book a free call →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
