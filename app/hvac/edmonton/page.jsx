import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

/* ── SEO metadata ───────────────────────────────────────────────────────── */
export const metadata = {
  title: 'HVAC Marketing Agency Edmonton | Web Design, SEO & Google Ads',
  description:
    'Pixel26 helps Edmonton HVAC companies rank on Google and win more jobs. Premium websites built for conversion, local SEO targeting Edmonton furnace and AC searches, and Google Ads that pay for themselves. 5-week delivery guarantee.',
  keywords:
    'HVAC marketing Edmonton, HVAC SEO Edmonton, HVAC website design Edmonton, Google Ads HVAC Edmonton, digital marketing HVAC Edmonton, furnace repair SEO Edmonton, AC installation Edmonton, HVAC contractor marketing Edmonton',
  openGraph: {
    title: 'HVAC Marketing Agency Edmonton | Pixel26',
    description:
      'Premium websites, local SEO, and Google Ads built specifically for Edmonton HVAC companies. Book a free discovery call.',
    url: 'https://pixel26.ca/hvac/edmonton',
    type: 'website',
  },
  alternates: { canonical: 'https://pixel26.ca/hvac/edmonton' },
};

/* ── JSON-LD schema ─────────────────────────────────────────────────────── */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HVAC Digital Marketing — Edmonton',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Pixel26',
    url: 'https://pixel26.ca',
    address: { '@type': 'PostalAddress', addressRegion: 'AB', addressCountry: 'CA' },
  },
  areaServed: { '@type': 'City', name: 'Edmonton', containedInPlace: { '@type': 'Province', name: 'Alberta' } },
  description:
    'Web design, local SEO, and Google Ads management for HVAC companies in Edmonton, Alberta.',
  serviceType: ['Web Design', 'Search Engine Optimisation', 'Google Ads Management'],
};

/* ── Design tokens ──────────────────────────────────────────────────────── */
const SEC  = 'py-[clamp(70px,9vw,128px)] px-[clamp(20px,5vw,40px)]';
const WRAP = 'max-w-[1240px] mx-auto';
const LABEL = 'font-mono text-[13px] tracking-[.2em] uppercase text-teal-dark mb-[18px]';
const H2   = 'font-display font-bold text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-.025em] text-navy m-0';
const btnPrimary = 'inline-block font-sans font-bold text-[17px] text-white bg-orange px-[34px] py-4 rounded-[34px] no-underline shadow-[0_8px_26px_rgba(240,120,16,.4)] transition-transform hover:-translate-y-0.5';
const btnGhost   = 'inline-block font-sans font-semibold text-[16px] text-white bg-transparent px-8 py-4 rounded-[34px] no-underline border-[1.5px] border-white/30 hover:bg-white/[.08] transition-colors';

/* ── Data ───────────────────────────────────────────────────────────────── */
const STATS = [
  { num: '–30°C',  label: 'Average Edmonton winter low — meaning furnace failures happen fast, and homeowners search for HVAC help immediately' },
  { num: '7 mo',   label: 'Effective heating season in Edmonton — longer than almost any other major Canadian city' },
  { num: '1,100+', label: 'HVAC companies serving Edmonton metro, with the majority still running outdated or non-existent websites' },
  { num: '90 days',label: 'Our guarantee window for measurable SEO ranking improvements on the Grow package' },
];

const PAINS = [
  {
    icon: '🌡️',
    title: 'You\'re missing the emergency call surge',
    desc: 'When Edmonton temperatures drop to –25°C and a furnace fails, homeowners pull out their phone and Google "emergency furnace repair Edmonton" in a panic. If you\'re not on page one, those jobs go to whoever is — regardless of who\'s actually better.',
  },
  {
    icon: '📊',
    title: 'Your Google Ads ROI is eroding every year',
    desc: 'Edmonton HVAC is one of the most competitive Google Ads markets in Alberta. CPC costs are rising year over year. Without a website that converts the clicks you\'re buying — fast load, clear quote form, mobile-first — you\'re funding your competitors\' growth.',
  },
  {
    icon: '🔍',
    title: 'You\'re invisible during the slow months',
    desc: 'April–June and September–October are Edmonton\'s shoulder HVAC months. Companies with strong organic rankings keep the phone ringing with maintenance calls and system upgrades. Companies without SEO wait for the next cold snap.',
  },
];

const SERVICES = [
  {
    num: '01',
    title: 'A website built for Edmonton homeowners — not a template',
    desc: 'Custom HVAC websites with conversion copy written for Edmonton\'s climate and demographics, mobile-first design, online quote requests, Google Business Profile integration, and schema markup that tells Google exactly which neighbourhoods you serve.',
    tag: 'Web Design',
  },
  {
    num: '02',
    title: 'Local SEO that wins Edmonton\'s highest-intent searches',
    desc: 'We build ranking strategies around the searches that mean money: "furnace repair Edmonton NW", "emergency HVAC Edmonton", "boiler installation St. Albert", "heat pump install Sherwood Park". Technical foundations, content, and citation building — all targeting Edmonton.',
    tag: 'Local SEO',
  },
  {
    num: '03',
    title: 'Google Ads engineered for Edmonton\'s competitive market',
    desc: 'Tight campaign structures, HVAC-specific negative keywords (no "HVAC jobs" or "HVAC school"), ad copy that leads with urgency and response time, and conversion tracking wired to your booking system — so you know your exact cost per job booked.',
    tag: 'Google Ads',
  },
];

const PROCESS = [
  { num: '01', title: 'Discovery call', desc: 'We map your service area (Edmonton, St. Albert, Sherwood Park, Spruce Grove), peak seasons, ticket size, and where your current leads actually come from.' },
  { num: '02', title: 'Build & launch', desc: 'Your new website is live in 5 weeks. SEO groundwork and Google Ads campaigns running by the end of Month 1 — before the next heating season peak.' },
  { num: '03', title: 'Rank & convert', desc: 'Monthly content targeting Edmonton HVAC keywords. Google Business Profile posts. Citation building across the Edmonton metro. Steady ranking movement every month.' },
  { num: '04', title: 'Report in plain English', desc: 'A monthly dashboard showing exactly where you rank, how much traffic you\'re getting, and how many leads came from Pixel26\'s work — not vanity metrics, real booked jobs.' },
];

const FAQ = [
  {
    q: 'Do you understand Edmonton\'s HVAC market specifically?',
    a: 'Yes. Edmonton\'s HVAC market is materially different from Calgary\'s — longer heating season, harsher winters, a larger industrial and commercial HVAC segment tied to the oil patch, and different suburban growth corridors (Windermere vs. Heritage Valley vs. Glenridding). Our keyword strategy, content, and ad copy all reflect this.',
  },
  {
    q: 'Do you serve Edmonton\'s surrounding areas?',
    a: 'Absolutely. We build location-specific content for St. Albert, Sherwood Park, Spruce Grove, Leduc, and Fort Saskatchewan — so you rank in the searches from homeowners in those communities, not just Edmonton proper.',
  },
  {
    q: 'How quickly can I rank for "furnace repair Edmonton"?',
    a: '"Furnace repair Edmonton" is competitive and will take 4–8 months of consistent SEO to reach page one. Neighbourhood-specific searches like "furnace repair Edmonton south" or "HVAC Windermere" move faster — often 60–90 days. We build your keyword strategy to win quick wins first while the competitive terms compound.',
  },
  {
    q: 'What about commercial and industrial HVAC in Edmonton?',
    a: 'Edmonton\'s oil and gas sector drives significant commercial HVAC demand — facility managers, industrial sites, and large commercial properties all search differently than residential homeowners. If you serve commercial, we build a separate service page and keyword strategy for that segment.',
  },
  {
    q: 'What are your guarantees?',
    a: 'Launch: live in 5 weeks or we keep working at no charge. Grow: measurable ranking improvements in 90 days or Month 4 is on us. Scale: beat your current cost-per-lead in 60 days or Month 2 is fully refunded. Every guarantee is in writing.',
  },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function HVACEdmonton() {
  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
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
            'radial-gradient(1100px 700px at 28% 18%, rgba(23,168,190,.18), transparent 60%), linear-gradient(180deg,#062430 0%,#083344 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:220px] opacity-[.04] pointer-events-none" />
        <div className={`relative z-[2] w-full pt-[clamp(130px,13vw,200px)] pb-[clamp(72px,9vw,140px)] ${WRAP}`}>
          <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] uppercase text-teal-light bg-teal-light/10 border border-teal-light/20 px-4 py-2 rounded-full mb-8">
            <span>📍</span> Edmonton, Alberta
          </div>

          <h1 className="font-display font-bold text-[clamp(38px,5.5vw,74px)] leading-[1.03] tracking-[-.03em] text-white m-0 mb-6 max-w-[820px]">
            When Edmonton homeowners search for HVAC help,{' '}
            <span className="text-teal-light">your company needs to be there.</span>
          </h1>

          <p className="text-[clamp(17px,1.8vw,21px)] leading-[1.6] text-white/70 m-0 mb-10 max-w-[620px]">
            Pixel26 builds premium websites, local SEO strategies, and Google Ads campaigns specifically for Edmonton HVAC companies. More jobs booked. Lower cost-per-lead. Year-round pipeline.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/contact" className={btnPrimary}>Book a free discovery call</Link>
            <Link href="#packages" className={btnGhost}>See packages →</Link>
          </div>

          <div className="mt-12 pt-8 border-t border-teal-light/[.14] flex flex-wrap gap-6 items-center">
            {['5-week delivery guarantee', 'Edmonton suburb targeting', '90-day ranking guarantee', 'Cost-per-lead guarantee'].map((t) => (
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
            <div className={LABEL}>What we hear from Edmonton HVAC owners</div>
            <h2 className={H2}>The three digital gaps that cost you jobs every month.</h2>
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
        style={{ background: 'linear-gradient(135deg,#062430 0%,#083344 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.05]" />
        <div className={`relative ${WRAP}`}>
          <div className="text-center max-w-[700px] mx-auto mb-[clamp(44px,5vw,68px)]">
            <div className="font-mono text-[13px] tracking-[.2em] uppercase text-teal-light mb-4">Edmonton's HVAC reality</div>
            <h2 className="font-display font-bold text-[clamp(30px,4vw,48px)] tracking-[-.02em] text-white leading-[1.1] m-0">
              Edmonton runs one of the longest heating seasons in Canada.{' '}
              <span className="text-orange">Your online presence has to match.</span>
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
            <div className={LABEL}>What we do for Edmonton HVAC companies</div>
            <h2 className={H2}>Three services. <span className="text-teal">One team</span> accountable for results.</h2>
            <p className="text-[18px] leading-[1.65] text-ink-soft mt-5 mb-0">
              We don't repurpose generic digital marketing for HVAC. Every keyword, every ad, every service page is written with Edmonton homeowners — and Edmonton winters — in mind.
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

      {/* ── EDMONTON-SPECIFIC ANGLE ── */}
      <section className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-center">
            <div>
              <div className={LABEL}>Built for Edmonton's unique market</div>
              <h2 className={H2 + ' mb-6'}>
                Edmonton's HVAC market is larger — and more complex —{' '}
                <span className="text-teal">than most agencies understand.</span>
              </h2>
              <p className="text-[17px] leading-[1.7] text-ink-soft mb-6">
                Edmonton is Canada's northernmost major city. With winters that start in October and can run into April, the heating season is 6–7 months long. That's not a peak — that's the baseline. And when –30°C hits, homeowners aren't browsing: they're calling the first HVAC company they can find on Google.
              </p>
              <p className="text-[17px] leading-[1.7] text-ink-soft mb-8">
                Edmonton also has a significant industrial HVAC segment tied to the oil and gas sector — commercial facilities, processing plants, and large office buildings all require specialised services that residential-only agencies don't understand. We do.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Suburb targeting: Windermere, Glenridding, Heritage Valley, Laurel',
                  'Satellite city pages: St. Albert, Sherwood Park, Spruce Grove, Leduc',
                  'Commercial HVAC service pages for oil patch and industrial clients',
                  'Emergency furnace content timed to Edmonton\'s cold weather alerts',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-teal font-bold text-[18px] mt-0.5 shrink-0">✓</span>
                    <span className="text-[16px] text-ink-soft leading-[1.5]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-[28px] p-[clamp(28px,4vw,48px)]">
              <div className="font-mono text-[12px] tracking-[.2em] uppercase text-teal-light mb-6">Edmonton by the numbers</div>
              {[
                { label: 'Edmonton CMA population (2026)', val: '1.5M+' },
                { label: 'Average heating season length', val: '7 months' },
                { label: 'Avg residential furnace replace cost', val: '$6K–$14K' },
                { label: 'Monthly Edmonton HVAC searches', val: '9,500+' },
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
            <h2 className={H2}>From first call to ranking for Edmonton HVAC searches.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
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
            <h2 className={H2}>Three ways in. Every one includes a <span className="text-teal">written guarantee.</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {[
              {
                name: 'Launch',
                service: 'Website Build',
                price: '$12,000',
                billing: 'one-time',
                featured: false,
                desc: 'A premium Edmonton HVAC website live in 5 weeks. Conversion copy written for Alberta homeowners, tracking set up, and a delivery guarantee.',
                features: [
                  'Custom 6–8 page HVAC website',
                  'Conversion copy for Edmonton homeowners',
                  'Core Web Vitals 90+ score guarantee',
                  'Call tracking + GA4 setup',
                  'On-page SEO, schema & 60-day support',
                  'Figma file — you own the design',
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
                desc: 'Website in Month 1, Edmonton SEO that compounds every month after — one team owning both.',
                features: [
                  'Website built in Month 1 (value: $12,000)',
                  'Local SEO targeting Edmonton HVAC keywords',
                  '3 long-form service/location pages per month',
                  'Google Business Profile optimisation',
                  'Monthly ranking dashboard + strategy call',
                  'Suburb & satellite city content',
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
                desc: 'The full growth engine — premium website, Edmonton SEO, and Google Ads running from day one.',
                features: [
                  'Everything in Grow (website + SEO)',
                  'Google Ads targeting Edmonton HVAC searches',
                  'Emergency + seasonal campaign structure',
                  'Conversion tracking to booked jobs',
                  'A/B ad testing across 3 variants/month',
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
              <h2 className={H2}>What Edmonton HVAC owners ask us.</h2>
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
          <div className="font-mono text-[13px] tracking-[.2em] uppercase text-white/60 mb-5">Ready to grow in Edmonton?</div>
          <h2 className="font-display font-bold text-[clamp(32px,4.5vw,58px)] leading-[1.06] tracking-[-.025em] text-white m-0 mb-6 max-w-[760px] mx-auto">
            Let's get your Edmonton HVAC company on page one —{' '}
            <span className="text-navy">before the next cold snap.</span>
          </h2>
          <p className="text-[18px] leading-[1.65] text-white/85 m-0 mb-10 max-w-[520px] mx-auto">
            Free 30-minute discovery call. We'll review your current online presence and show you exactly where Edmonton homeowners aren't finding you.
          </p>
          <Link href="/contact" className={btnPrimary + ' text-[18px] px-[44px] py-[18px]'}>
            Book your free audit →
          </Link>
          <div className="mt-8">
            <Link href="/hvac/calgary" className="font-mono text-[13px] tracking-[.06em] text-white/50 hover:text-white/80 no-underline transition-colors">
              Looking for Calgary? →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
