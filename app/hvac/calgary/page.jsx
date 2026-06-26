import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

/* ── SEO metadata ───────────────────────────────────────────────────────── */
export const metadata = {
  title: 'HVAC Marketing Agency Calgary | Web Design, SEO & Google Ads',
  description:
    'Pixel26 helps Calgary HVAC companies fill their schedule year-round. Premium websites built to convert, local SEO that ranks for "furnace repair Calgary", and Google Ads that pay for themselves. 5-week delivery guarantee.',
  keywords:
    'HVAC marketing Calgary, HVAC SEO Calgary, HVAC website design Calgary, Google Ads HVAC Calgary, digital marketing HVAC Calgary, HVAC contractor marketing Calgary, furnace repair SEO Calgary, AC installation Calgary',
  openGraph: {
    title: 'HVAC Marketing Agency Calgary | Pixel26',
    description:
      'Premium websites, local SEO, and Google Ads built specifically for Calgary HVAC companies. Book a free discovery call.',
    url: 'https://pixel26.ca/hvac/calgary',
    type: 'website',
  },
  alternates: { canonical: 'https://pixel26.ca/hvac/calgary' },
};

/* ── JSON-LD schema ─────────────────────────────────────────────────────── */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HVAC Digital Marketing — Calgary',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Pixel26',
    url: 'https://pixel26.ca',
    address: { '@type': 'PostalAddress', addressRegion: 'AB', addressCountry: 'CA' },
  },
  areaServed: { '@type': 'City', name: 'Calgary', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
  description:
    'Web design, local SEO, and Google Ads management for HVAC companies in Calgary, Alberta.',
  serviceType: ['Web Design', 'Search Engine Optimisation', 'Google Ads Management'],
};

/* ── Design tokens (match site-wide system) ─────────────────────────────── */
const SEC  = 'py-[clamp(70px,9vw,128px)] px-[clamp(20px,5vw,40px)]';
const WRAP = 'max-w-[1240px] mx-auto';
const LABEL = 'font-mono text-[13px] tracking-[.2em] uppercase text-teal-dark mb-[18px]';
const H2   = 'font-display font-bold text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-.025em] text-navy m-0';
const btnPrimary = 'inline-block font-sans font-bold text-[17px] text-white bg-orange px-[34px] py-4 rounded-[34px] no-underline shadow-[0_8px_26px_rgba(240,120,16,.4)] transition-transform hover:-translate-y-0.5';
const btnGhost   = 'inline-block font-sans font-semibold text-[16px] text-navy bg-transparent px-8 py-4 rounded-[34px] no-underline border-[1.5px] border-navy/25 hover:border-navy/50 transition-colors';

/* ── Data ───────────────────────────────────────────────────────────────── */
const STATS = [
  { num: '$9.68', label: 'Average cost-per-click for HVAC ads in Canada — your competitors are already spending' },
  { num: '60%+',  label: 'Of HVAC companies earn over $500K/yr — yet most have websites built on GoDaddy in 2015' },
  { num: '2×',    label: 'Peak seasons per year (furnace installs + AC season) that your website needs to be ready for' },
  { num: '5 wks', label: 'Our guaranteed delivery time for a premium, conversion-ready HVAC website' },
];

const PAINS = [
  {
    icon: '📉',
    title: 'Your ad spend keeps rising — but your leads don\'t',
    desc: 'Calgary HVAC is one of the most competitive Google Ads markets in Western Canada. If your website doesn\'t convert the clicks you\'re buying, you\'re paying twice: once for the click, once for the missed job.',
  },
  {
    icon: '📵',
    title: 'You go quiet between peak seasons',
    desc: 'Calgary\'s shoulder months — spring and fall — are when HVAC companies either build pipeline or scramble. SEO that ranks for "furnace tune-up Calgary" and "AC maintenance Calgary" fills the gaps paid ads can\'t.',
  },
  {
    icon: '🏠',
    title: 'Your competitors look more credible online',
    desc: 'When a homeowner in Mahogany or Evanston searches for an HVAC company, they\'re comparing three websites before they call anyone. If yours looks like it was built in 2010, you\'re losing jobs before the phone rings.',
  },
];

const SERVICES = [
  {
    num: '01',
    title: 'A website that wins jobs — not just looks good',
    desc: 'We build custom 6–8 page HVAC websites with conversion copywriting written for Calgary homeowners, fast load times (Core Web Vitals 90+), online quote requests, and schema markup that tells Google exactly what you do and where you do it.',
    tag: 'Web Design',
  },
  {
    num: '02',
    title: 'Local SEO built around Calgary search intent',
    desc: 'We target the searches that matter: "furnace repair Calgary NW", "emergency HVAC Calgary", "AC installation Calgary SE". Technical SEO, Google Business Profile optimisation, and content that ranks — then keeps ranking.',
    tag: 'Local SEO',
  },
  {
    num: '03',
    title: 'Google Ads that survive Calgary\'s competitive CPC',
    desc: 'With HVAC clicks averaging $9.68 in Canada — and more in Calgary — every wasted click hurts. We build tightly structured campaigns with ad copy that speaks to urgency, negative keywords that kill waste, and conversion tracking tied to actual jobs booked.',
    tag: 'Google Ads',
  },
];

const PROCESS = [
  { num: '01', title: 'Discovery call', desc: 'We learn your service area, peak seasons, average job value, and what\'s actually broken with your current online presence.' },
  { num: '02', title: 'Build & launch', desc: 'Website live in 5 weeks. Local SEO and Google Ads campaigns configured and running by the end of Month 1.' },
  { num: '03', title: 'Rank & convert', desc: 'SEO compounds every month. We target new keywords, build citations, and optimise your Google Business Profile — showing up where Calgary homeowners are searching.' },
  { num: '04', title: 'Report in plain English', desc: 'Monthly dashboard showing rankings, traffic, leads, and booked calls. No vanity metrics — just the numbers tied to jobs in your schedule.' },
];

const FAQ = [
  {
    q: 'Do you work exclusively with HVAC companies?',
    a: 'We\'ve niched our marketing system specifically for HVAC and mechanical contractors. Every piece of copy, every SEO keyword cluster, and every ad structure we build is informed by the HVAC industry — not adapted from a generic template.',
  },
  {
    q: 'How long before I see results from SEO?',
    a: 'Local SEO in Calgary typically shows measurable ranking movement within 60–90 days, with significant traffic gains by Month 4–6. Competitive keywords like "furnace repair Calgary" take longer than neighbourhood-specific terms like "HVAC NW Calgary" — we sequence your content strategy to win the fast ones first.',
  },
  {
    q: 'What if I already have a website?',
    a: 'On our Grow and Scale retainers, Month 1 converts to a full conversion audit and CRO rebuild of your existing site instead of a new build — same effort, same value. If your current site is salvageable, we\'ll save you the rebuild cost.',
  },
  {
    q: 'Can you handle both residential and commercial HVAC?',
    a: 'Yes. We build separate service pages and keyword strategies for residential (homeowners searching for emergency repair) and commercial (property managers, strata, building owners). The search intent, copy, and landing pages are completely different — and we build both.',
  },
  {
    q: 'What\'s your guarantee for Calgary?',
    a: 'Launch package: live in 5 weeks or we work free until we ship. Grow package: measurable ranking improvements in 90 days or Month 4 is free. Scale package: beat your current cost-per-lead in 60 days or Month 2 is fully refunded.',
  },
];

/* ── Page component ─────────────────────────────────────────────────────── */
export default function HVACCalgary() {
  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative flex items-start overflow-hidden px-[clamp(20px,5vw,40px)]"
        style={{
          background:
            'radial-gradient(1100px 700px at 72% 18%, rgba(23,168,190,.20), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)',
        }}
      >
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:220px] opacity-[.04] pointer-events-none" />

        <div className={`relative z-[2] w-full pt-[clamp(130px,13vw,200px)] pb-[clamp(72px,9vw,140px)] ${WRAP}`}>
          {/* Breadcrumb / location pill */}
          <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] uppercase text-teal-light bg-teal-light/10 border border-teal-light/20 px-4 py-2 rounded-full mb-8">
            <span>📍</span> Calgary, Alberta
          </div>

          <h1 className="font-display font-bold text-[clamp(38px,5.5vw,74px)] leading-[1.03] tracking-[-.03em] text-white m-0 mb-6 max-w-[820px]">
            The HVAC marketing agency{' '}
            <span className="text-teal-light">Calgary contractors</span>{' '}
            actually trust.
          </h1>

          <p className="text-[clamp(17px,1.8vw,21px)] leading-[1.6] text-white/70 m-0 mb-10 max-w-[620px]">
            Premium websites, local SEO, and Google Ads built specifically for Calgary HVAC companies. Fill your schedule in shoulder months. Dominate the two peak seasons. Own your leads instead of renting them.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact" className={btnPrimary}>Book a free discovery call</Link>
            <Link href="#packages" className={btnGhost + ' !text-white !border-white/30 hover:!bg-white/[.08]'}>See packages →</Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12 pt-8 border-t border-teal-light/[.14] flex flex-wrap gap-6 items-center">
            {['5-week delivery guarantee', 'Core Web Vitals 90+ score', '90-day ranking guarantee', 'Calgary-based clients'].map((t) => (
              <span key={t} className="flex items-center gap-2 font-mono text-[12px] tracking-[.06em] text-teal-light/80">
                <span className="text-teal-light">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[640px] mb-[clamp(40px,5vw,64px)]">
            <div className={LABEL}>Sound familiar?</div>
            <h2 className={H2}>Three things holding Calgary HVAC companies back online.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PAINS.map((p) => (
              <div key={p.title} className="bg-white border-[1.5px] border-line rounded-[22px] p-8">
                <div className="text-[32px] mb-5">{p.icon}</div>
                <h3 className="font-display font-bold text-[21px] text-navy mb-3 leading-[1.2]">{p.title}</h3>
                <p className="text-[16px] leading-[1.65] text-ink-soft m-0">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className={'relative overflow-hidden ' + SEC}
        style={{ background: 'linear-gradient(135deg,#083344 0%,#0a4a5e 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.05]" />
        <div className={`relative ${WRAP}`}>
          <div className="text-center max-w-[700px] mx-auto mb-[clamp(44px,5vw,68px)]">
            <div className="font-mono text-[13px] tracking-[.2em] uppercase text-teal-light mb-4">The HVAC market reality</div>
            <h2 className="font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-.02em] text-white leading-[1.1] m-0">
              Calgary HVAC is competitive. Your online presence{' '}
              <span className="text-orange">has to be better</span> than the company next door.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(20px,3vw,40px)]">
            {STATS.map((st) => (
              <div key={st.num} className="text-center">
                <div className="font-display font-bold text-[clamp(40px,5.5vw,66px)] leading-none text-white tracking-[-.02em]">{st.num}</div>
                <div className="w-8 h-[3px] bg-teal rounded-[2px] my-4 mx-auto" />
                <div className="text-[14px] leading-[1.5] text-white/60 max-w-[200px] mx-auto">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={'bg-white ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[680px] mb-[clamp(40px,5vw,64px)]">
            <div className={LABEL}>What we do for HVAC companies</div>
            <h2 className={H2}>
              Three services. Each built to <span className="text-teal">pay for itself</span> — fast.
            </h2>
            <p className="text-[18px] leading-[1.65] text-ink-soft mt-5 mb-0">
              We don't adapt a generic agency model to HVAC. Every page, keyword, and ad we write is grounded in how Calgary homeowners actually search for heating and cooling help.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.num} className="flex flex-col bg-cloud border-[1.5px] border-line rounded-[22px] p-8">
                <div className="font-mono font-semibold text-[15px] text-white w-[46px] h-[46px] rounded-[12px] flex items-center justify-center bg-teal mb-6">{svc.num}</div>
                <div className="font-mono text-[11px] tracking-[.18em] uppercase text-teal-dark mb-3">{svc.tag}</div>
                <h3 className="font-display font-bold text-[22px] text-navy mb-3 leading-[1.2]">{svc.title}</h3>
                <p className="text-[16px] leading-[1.65] text-ink-soft m-0 flex-1">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALGARY-SPECIFIC ANGLE ── */}
      <section className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-center">
            {/* Text */}
            <div>
              <div className={LABEL}>Built for Calgary's HVAC market</div>
              <h2 className={H2 + ' mb-6'}>
                Calgary's climate is your <span className="text-teal">built-in marketing advantage</span> — if you're showing up.
              </h2>
              <p className="text-[17px] leading-[1.7] text-ink-soft mb-6">
                Calgary averages <strong>333 days of sunshine</strong> — but also sits at 1,045 metres elevation with winters that hit –30°C and Chinook cycles that swing 20°C in 24 hours. That thermal stress on HVAC equipment creates year-round urgency. Every temperature extreme is a search event.
              </p>
              <p className="text-[17px] leading-[1.7] text-ink-soft mb-8">
                Add Calgary's fastest-growing suburbs — Seton, Cornerstone, Belmont, Livingston — and you have a steady stream of new builds needing first-time installs, all searching for HVAC contractors online before they call anyone.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Furnace tune-up campaigns timed to Calgary\'s first cold snap',
                  'AC service content ready before May long weekend',
                  'New community targeting for NE/SE Calgary growth corridors',
                  'Emergency HVAC keywords for Chinook repair spikes',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-teal font-bold text-[18px] mt-0.5 shrink-0">✓</span>
                    <span className="text-[16px] text-ink-soft leading-[1.5]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats callout card */}
            <div className="bg-navy rounded-[28px] p-[clamp(28px,4vw,48px)]">
              <div className="font-mono text-[12px] tracking-[.2em] uppercase text-teal-light mb-6">The opportunity</div>
              {[
                { label: 'HVAC companies in Calgary metro', val: '900+' },
                { label: 'With no website or a broken one', val: '~35%' },
                { label: 'Average HVAC job value (install)', val: '$8K–$18K' },
                { label: 'Monthly searches for HVAC Calgary', val: '12,000+' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                  <span className="text-[15px] text-white/60 max-w-[60%] leading-[1.4]">{row.label}</span>
                  <span className="font-display font-bold text-[22px] text-orange">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={'bg-white ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[680px] mb-[clamp(40px,5vw,64px)]">
            <div className={LABEL}>How it works</div>
            <h2 className={H2}>From discovery call to ranking on Google — a clear four-step path.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <div key={step.num} className="pt-[34px] pr-6 pb-[34px] border-t-2 border-line">
                <div className="font-mono text-[14px] font-semibold text-teal mb-[28px]">{step.num}</div>
                <h3 className="font-display font-bold text-[21px] text-navy m-0 mb-2.5">{step.title}</h3>
                <p className="text-[15px] leading-[1.6] text-ink-soft m-0">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="text-center max-w-[640px] mx-auto mb-[clamp(40px,5vw,60px)]">
            <div className={LABEL}>Packages</div>
            <h2 className={H2}>Three ways to grow. <span className="text-teal">One team</span> accountable for all of them.</h2>
            <p className="text-[17px] leading-[1.6] text-ink-soft m-0 mt-4">Every package includes a written performance guarantee. If we miss it, you don't pay.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: 'Launch',
                service: 'Website Build',
                price: '$12,000',
                billing: 'one-time',
                featured: false,
                desc: 'A premium HVAC website live in 5 weeks — conversion copy, tracking, SEO foundation, and a delivery guarantee.',
                features: [
                  'Custom 6–8 page HVAC website',
                  'Conversion copy written for Calgary homeowners',
                  'Core Web Vitals 90+ score guarantee',
                  'Google Analytics 4 + call tracking setup',
                  'On-page SEO, schema & 60-day support',
                  'Figma design file — you own it',
                ],
                guarantee: 'Live in 5 weeks or we work free until we ship.',
                cta: 'Start your site',
              },
              {
                name: 'Grow',
                service: 'Website + SEO',
                price: '$5,000',
                billing: '/mo · 3-month min',
                featured: true,
                desc: 'Website built in Month 1, then SEO that compounds every month — one team accountable for both.',
                features: [
                  'Website built in Month 1 (value: $12,000)',
                  'Local SEO targeting Calgary HVAC keywords',
                  '3 long-form service pages per month',
                  'Google Business Profile optimisation',
                  'Monthly ranking dashboard + strategy call',
                  'Competitor gap monitoring',
                ],
                guarantee: 'Measurable ranking improvements in 90 days or Month 4 is free.',
                cta: 'Book a call',
              },
              {
                name: 'Scale',
                service: 'Website + SEO + Google Ads',
                price: '$7,500',
                billing: '/mo · 3-month min',
                featured: false,
                desc: 'The full growth engine — website, organic rankings, and paid leads running simultaneously from day one.',
                features: [
                  'Everything in Grow (website + SEO)',
                  'Google Ads: Search + Remarketing campaigns',
                  'HVAC-specific ad copy and negative keywords',
                  'Conversion tracking tied to booked jobs',
                  'A/B testing across 3 ad variations/month',
                  'Bi-weekly strategy calls + full-funnel dashboard',
                ],
                guarantee: 'Beat your current cost-per-lead in 60 days or Month 2 is refunded.',
                cta: 'Talk to us',
              },
            ].map((plan) => {
              const f = plan.featured;
              return (
                <div
                  key={plan.name}
                  className={'flex flex-col h-full rounded-[24px] ' + (f ? 'bg-navy border-[1.5px] border-teal-dark shadow-[0_30px_70px_rgba(8,51,68,.28)] -translate-y-2' : 'bg-white border-[1.5px] border-line')}
                >
                  <div className={'rounded-t-[22px] px-[30px] py-5 border-b ' + (f ? 'bg-white/[.06] border-white/10' : 'bg-cloud border-line')}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={'font-mono text-[11px] tracking-[.18em] uppercase font-semibold ' + (f ? 'text-teal-light' : 'text-teal-dark')}>{plan.service}</span>
                      {f && <span className="font-mono text-[10px] tracking-[.14em] uppercase text-white bg-orange px-2.5 py-1 rounded-[20px]">Most popular</span>}
                    </div>
                    <div className={'font-display font-bold text-[26px] tracking-[-.02em] ' + (f ? 'text-white' : 'text-navy')}>{plan.name}</div>
                  </div>
                  <div className="flex flex-col flex-1 px-[30px] pt-6 pb-[30px]">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className={'font-display font-bold text-[42px] tracking-[-.03em] leading-none ' + (f ? 'text-white' : 'text-navy')}>{plan.price}</span>
                      <span className={'font-mono text-[14px] ' + (f ? 'text-white/55' : 'text-[#7A98A4]')}>{plan.billing}</span>
                    </div>
                    <p className={'text-[14px] leading-[1.55] mb-5 mt-2 ' + (f ? 'text-white/60' : 'text-ink-soft')}>{plan.desc}</p>
                    <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                      {plan.features.map((feat) => (
                        <li key={feat} className={'flex items-start gap-2.5 text-[14px] leading-[1.5] ' + (f ? 'text-white/80' : 'text-ink-soft')}>
                          <span className={'shrink-0 font-bold ' + (f ? 'text-teal-light' : 'text-teal')}>✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <div className={'text-[12px] leading-[1.5] mb-5 px-3 py-2.5 rounded-[10px] ' + (f ? 'bg-white/[.07] text-white/60' : 'bg-cloud text-ink-soft')}>
                      <span className="font-semibold">Guarantee:</span> {plan.guarantee}
                    </div>
                    <Link
                      href="/contact"
                      className={'block text-center font-bold text-[16px] py-3.5 rounded-[34px] no-underline transition-all ' + (f ? 'bg-orange text-white hover:bg-[#e86a0a] shadow-[0_6px_20px_rgba(240,120,16,.4)]' : 'bg-navy text-white hover:bg-[#0d4a62]')}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={'bg-white ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[680px] mx-auto">
            <div className="text-center mb-[clamp(40px,5vw,60px)]">
              <div className={LABEL}>Common questions</div>
              <h2 className={H2}>Questions Calgary HVAC owners ask us.</h2>
            </div>
            <div className="flex flex-col divide-y divide-line">
              {FAQ.map(({ q, a }) => (
                <div key={q} className="py-7">
                  <h3 className="font-display font-bold text-[19px] text-navy mb-3 leading-[1.3]">{q}</h3>
                  <p className="text-[16px] leading-[1.7] text-ink-soft m-0">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className={'relative overflow-hidden ' + SEC}
        style={{ background: 'linear-gradient(135deg,#0F6F7E 0%,#17A8BE 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.08]" />
        <div className={`relative ${WRAP} text-center`}>
          <div className="font-mono text-[13px] tracking-[.2em] uppercase text-teal-light mb-5">Ready to grow?</div>
          <h2 className="font-display font-bold text-[clamp(32px,4.5vw,58px)] leading-[1.06] tracking-[-.025em] text-white m-0 mb-6 max-w-[760px] mx-auto">
            Let's talk about filling your Calgary HVAC schedule — <span className="text-orange">year-round.</span>
          </h2>
          <p className="text-[18px] leading-[1.65] text-white/65 m-0 mb-10 max-w-[520px] mx-auto">
            Free 30-minute discovery call. We'll audit your current online presence and show you exactly where the opportunities are.
          </p>
          <Link href="/contact" className={btnPrimary + ' text-[18px] px-[44px] py-[18px]'}>
            Book your free audit →
          </Link>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/hvac/edmonton" className="font-mono text-[13px] tracking-[.06em] text-teal-light/70 hover:text-teal-light no-underline transition-colors">
              Looking for Edmonton? →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
