import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/* ── SEO metadata ───────────────────────────────────────────────────────── */
export const metadata = {
  title: 'HVAC Marketing Agency Alberta | Pixel26 — Web Design, SEO & Google Ads',
  description:
    'Pixel26 is a digital marketing agency specialising in HVAC companies across Alberta. Premium websites, local SEO, and Google Ads built to fill your schedule year-round. Serving Calgary and Edmonton.',
  keywords:
    'HVAC marketing Alberta, HVAC SEO Alberta, HVAC website design Alberta, HVAC digital marketing agency Alberta, Google Ads HVAC Alberta, furnace repair marketing Alberta',
  openGraph: {
    title: 'HVAC Marketing Agency Alberta | Pixel26',
    description:
      'Web design, local SEO, and Google Ads built specifically for Alberta HVAC companies. Calgary and Edmonton specialists.',
    url: 'https://pixel26.ca/hvac',
    type: 'website',
  },
  alternates: { canonical: 'https://pixel26.ca/hvac' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HVAC Digital Marketing — Alberta',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Pixel26',
    url: 'https://pixel26.ca',
    address: { '@type': 'PostalAddress', addressRegion: 'AB', addressCountry: 'CA' },
  },
  areaServed: { '@type': 'Province', name: 'Alberta' },
  description: 'Web design, local SEO, and Google Ads for HVAC companies across Alberta.',
};

const SEC  = 'py-[clamp(70px,9vw,128px)] px-[clamp(20px,5vw,40px)]';
const WRAP = 'max-w-[1240px] mx-auto';
const LABEL = 'font-mono text-[13px] tracking-[.2em] uppercase text-teal-dark mb-[18px]';
const H2   = 'font-display font-bold text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-[-.025em] text-navy m-0';
const btnPrimary = 'inline-block font-sans font-bold text-[17px] text-white bg-orange px-[34px] py-4 rounded-[34px] no-underline shadow-[0_8px_26px_rgba(240,120,16,.4)] transition-transform hover:-translate-y-0.5';

const WHY = [
  { title: 'HVAC-specific copy', desc: 'Every headline, service description, and ad we write is grounded in how Alberta homeowners search for heating and cooling help — not adapted from a generic template.' },
  { title: 'Seasonal strategy built in', desc: 'We map your content calendar to Alberta\'s climate — furnace content before first cold snap, AC content before May long weekend, maintenance content to fill shoulder months.' },
  { title: 'Results tied to real jobs', desc: 'Your dashboard shows rankings, traffic, and booked calls — not vanity metrics. Every package includes a written guarantee. If we miss it, you don\'t pay.' },
];

export default function HVACHub() {
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
            'radial-gradient(1100px 700px at 60% 18%, rgba(23,168,190,.18), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:220px] opacity-[.04] pointer-events-none" />
        <div className={`relative z-[2] w-full pt-[clamp(130px,13vw,200px)] pb-[clamp(72px,9vw,140px)] ${WRAP}`}>
          <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] uppercase text-teal-light bg-teal-light/10 border border-teal-light/20 px-4 py-2 rounded-full mb-8">
            📍 Alberta — Calgary &amp; Edmonton
          </div>
          <h1 className="font-display font-bold text-[clamp(38px,5.5vw,72px)] leading-[1.03] tracking-[-.03em] text-white m-0 mb-6 max-w-[800px]">
            Digital marketing built{' '}
            <span className="text-teal-light">exclusively for Alberta HVAC companies.</span>
          </h1>
          <p className="text-[clamp(17px,1.8vw,20px)] leading-[1.6] text-white/70 m-0 mb-10 max-w-[580px]">
            Premium websites, local SEO, and Google Ads that fill your schedule in the slow months and help you dominate the two peak seasons that define your year.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/hvac/calgary" className={btnPrimary}>I'm in Calgary</Link>
            <Link
              href="/hvac/edmonton"
              className="inline-block font-sans font-bold text-[17px] text-white bg-white/[.12] border border-white/25 px-[34px] py-4 rounded-[34px] no-underline hover:bg-white/[.18] transition-colors"
            >
              I'm in Edmonton
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITY CARDS ── */}
      <section className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[600px] mx-auto text-center mb-[clamp(40px,5vw,64px)]">
            <div className={LABEL}>Pick your market</div>
            <h2 className={H2}>Two cities. Two tailored strategies. <span className="text-teal">One agency.</span></h2>
            <p className="text-[17px] leading-[1.65] text-ink-soft mt-5 mb-0">
              Calgary and Edmonton are different HVAC markets with different seasonal patterns, different competitive landscapes, and different homeowner search habits. We build each strategy from scratch for each city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calgary card */}
            <Link
              href="/hvac/calgary"
              className="group flex flex-col bg-white border-[1.5px] border-line rounded-[24px] overflow-hidden no-underline transition-[transform,box-shadow,border-color] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(8,51,68,.12)] hover:border-teal-light"
            >
              <div className="px-8 py-5 border-b border-line bg-cloud flex items-center justify-between">
                <span className="font-mono text-[12px] tracking-[.2em] uppercase text-teal-dark">Calgary, AB</span>
                <span className="font-mono text-[12px] text-ink-soft/50">→</span>
              </div>
              <div className="p-8 flex-1">
                <h3 className="font-display font-bold text-[28px] text-navy mb-3 leading-[1.2] group-hover:text-teal-dark transition-colors">
                  HVAC Marketing<br />Calgary
                </h3>
                <p className="text-[16px] leading-[1.65] text-ink-soft mb-6">
                  Chinook cycles, new suburban growth corridors, and one of the most competitive HVAC Google Ads markets in Western Canada. We know Calgary's heating and cooling season inside out.
                </p>
                <div className="flex flex-col gap-2.5">
                  {['Furnace & AC seasonal content calendar', 'NW/NE/SE Calgary neighbourhood targeting', 'Hail-season HVAC content strategy'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[14px] text-ink-soft">
                      <span className="text-teal font-bold shrink-0">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 pb-8">
                <span className="inline-block font-sans font-bold text-[15px] text-teal-dark bg-teal/[.08] border border-teal/20 px-5 py-2.5 rounded-[20px]">
                  See Calgary packages →
                </span>
              </div>
            </Link>

            {/* Edmonton card */}
            <Link
              href="/hvac/edmonton"
              className="group flex flex-col bg-white border-[1.5px] border-line rounded-[24px] overflow-hidden no-underline transition-[transform,box-shadow,border-color] hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(8,51,68,.12)] hover:border-teal-light"
            >
              <div className="px-8 py-5 border-b border-line bg-cloud flex items-center justify-between">
                <span className="font-mono text-[12px] tracking-[.2em] uppercase text-teal-dark">Edmonton, AB</span>
                <span className="font-mono text-[12px] text-ink-soft/50">→</span>
              </div>
              <div className="p-8 flex-1">
                <h3 className="font-display font-bold text-[28px] text-navy mb-3 leading-[1.2] group-hover:text-teal-dark transition-colors">
                  HVAC Marketing<br />Edmonton
                </h3>
                <p className="text-[16px] leading-[1.65] text-ink-soft mb-6">
                  Canada's northernmost major city with a 7-month heating season, industrial HVAC demand tied to the oil patch, and growing suburbs from Windermere to Heritage Valley. This market requires a specific strategy.
                </p>
                <div className="flex flex-col gap-2.5">
                  {['Suburb coverage: St. Albert, Sherwood Park, Spruce Grove', 'Commercial & industrial HVAC content tracks', 'Emergency furnace campaign for deep-freeze events'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[14px] text-ink-soft">
                      <span className="text-teal font-bold shrink-0">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 pb-8">
                <span className="inline-block font-sans font-bold text-[15px] text-teal-dark bg-teal/[.08] border border-teal/20 px-5 py-2.5 rounded-[20px]">
                  See Edmonton packages →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY PIXEL26 ── */}
      <section className={'bg-white ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[640px] mb-[clamp(40px,5vw,64px)]">
            <div className={LABEL}>Why HVAC companies choose Pixel26</div>
            <h2 className={H2}>We don't adapt a generic agency model to HVAC. <span className="text-teal">We built for it.</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {WHY.map((w) => (
              <div key={w.title} className="bg-cloud border-[1.5px] border-line rounded-[22px] p-8">
                <h3 className="font-display font-bold text-[22px] text-navy mb-3 leading-[1.2]">{w.title}</h3>
                <p className="text-[16px] leading-[1.65] text-ink-soft m-0">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className={'relative overflow-hidden ' + SEC}
        style={{ background: 'linear-gradient(135deg,#0F6F7E 0%,#17A8BE 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.08]" />
        <div className={`relative ${WRAP} text-center`}>
          <div className="font-mono text-[13px] tracking-[.2em] uppercase text-teal-light mb-5">Not sure where to start?</div>
          <h2 className="font-display font-bold text-[clamp(30px,4vw,52px)] leading-[1.1] tracking-[-.02em] text-white m-0 mb-6 max-w-[680px] mx-auto">
            Book a free 30-minute audit. We'll show you exactly where you're losing jobs online.
          </h2>
          <Link href="/contact" className={btnPrimary + ' text-[18px] px-[44px] py-[18px]'}>
            Book your free audit →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
