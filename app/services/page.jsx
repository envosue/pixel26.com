import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Services — Web Design, SEO & Google Ads',
  description: 'Premium web design, SEO that compounds, and Google Ads built for ROI — delivered by one accountable team.',
};

const SEC = 'py-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)]';
const WRAP = 'max-w-[1240px] mx-auto';
const KICKER = 'font-mono text-[13px] tracking-[.18em] uppercase text-teal-dark mb-[18px]';
const H2 = 'font-display font-bold text-[clamp(30px,3.6vw,46px)] leading-[1.08] tracking-[-.02em] m-0 mb-5';
const LEAD = 'text-[18px] leading-[1.65] text-ink-soft m-0 mb-7 max-w-[520px]';
const dot = 'w-[11px] h-[11px] rounded-full';

function Bullets({ items }) {
  return (
    <div className="flex flex-col gap-[13px]">
      {items.map((b) => (
        <div key={b} className="flex gap-3 items-start">
          <span className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] font-bold text-white bg-teal mt-px">✓</span>
          <span className="text-[16px] text-navy">{b}</span>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section
        className="relative pt-[clamp(140px,15vw,200px)] pb-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)] overflow-hidden"
        style={{ background: 'radial-gradient(900px 540px at 78% 8%, rgba(23,168,190,.22), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.06]" />
        <div className={'relative ' + WRAP}>
          <div data-reveal className="font-mono text-[13px] tracking-[.24em] uppercase text-teal-light mb-6">Services</div>
          <h1 data-reveal className="font-display font-bold text-[clamp(40px,6.4vw,86px)] leading-[1.02] tracking-[-.03em] text-white m-0 mb-[26px]">
            Design, search and paid — built to <span className="text-teal inline-block leading-none whitespace-nowrap border-b-[.09em] border-orange pb-[.05em]">compound</span>.
          </h1>
          <p data-reveal className="text-[clamp(18px,2vw,23px)] leading-[1.6] text-white/[.72] max-w-[680px] m-0">Three disciplines, one accountable team. We design the website, earn the rankings, and run the ads — so growth isn&apos;t spread across five vendors who never talk.</p>
        </div>
      </section>

      {/* SERVICE 1 */}
      <section className={'bg-white ' + SEC}>
        <div className={'p26-split ' + WRAP}>
          <div data-reveal>
            <div className={KICKER}>01 — Web Design &amp; Build</div>
            <h2 className={H2}>Premium websites that convert.</h2>
            <p className={LEAD}>We design and build fast, accessible, conversion-focused websites — every layout, word and interaction earning its place. No templates, no bloat.</p>
            <Bullets items={['Custom design in Figma, built to a real CMS', 'Core Web Vitals & accessibility baked in', 'Conversion copywriting & clear CTAs', 'Analytics & event tracking from day one']} />
          </div>
          <div className="p26-visual flex justify-center" data-reveal>
            <div className="w-full max-w-[480px] bg-white border-[1.5px] border-line rounded-[18px] shadow-[0_30px_70px_rgba(8,51,68,.14)] overflow-hidden">
              <div className="flex items-center gap-2 px-[18px] py-3.5 bg-cloud border-b-[1.5px] border-line">
                <span className={dot + ' bg-orange'} /><span className={dot + ' bg-teal-light'} /><span className={dot + ' bg-[#CFEAF1]'} />
                <span className="ml-3 font-mono text-[12px] text-[#7A98A4]">pixel26.com</span>
              </div>
              <div className="p-[26px]">
                <div className="h-3.5 w-[48%] bg-teal rounded-[5px] mb-3.5" />
                <div className="h-[9px] w-[78%] bg-line rounded-[4px] mb-2" />
                <div className="h-[9px] w-[64%] bg-line rounded-[4px] mb-[22px]" />
                <div className="inline-block h-[30px] w-[120px] bg-orange rounded-[18px] mb-6" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-[74px] bg-cloud border-[1.5px] border-line rounded-[10px]" />
                  <div className="h-[74px] bg-cloud border-[1.5px] border-line rounded-[10px]" />
                  <div className="h-[74px] bg-cloud border-[1.5px] border-line rounded-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2 */}
      <section className={'bg-cloud ' + SEC}>
        <div className={'p26-split rev ' + WRAP}>
          <div data-reveal>
            <div className={KICKER}>02 — SEO</div>
            <h2 className={H2}>Rankings that compound.</h2>
            <p className={LEAD}>Technical foundations, content that answers real intent, and authority built over time. SEO is the channel that keeps paying long after the invoice.</p>
            <Bullets items={['Technical audit & Core Web Vitals fixes', 'Keyword & intent strategy mapped to pages', 'Content production & on-page optimisation', 'Digital PR & quality link building']} />
          </div>
          <div className="p26-visual flex justify-center" data-reveal>
            <div className="w-full max-w-[480px] bg-white border-[1.5px] border-line rounded-[18px] shadow-[0_30px_70px_rgba(8,51,68,.14)] p-7">
              <div className="font-mono text-[12px] tracking-[.14em] uppercase text-[#7A98A4] mb-5">Search position · &quot;digital studio&quot;</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3.5 px-4 py-3.5 bg-[#EAF7F0] border-[1.5px] border-[#A8E0C4] rounded-[12px]">
                  <span className="font-display font-bold text-[22px] text-[#1A8F5A] w-[30px]">1</span>
                  <div className="flex-1"><div className="h-2 w-[70%] bg-[#1A8F5A] rounded-[4px] mb-[7px]" /><div className="h-[7px] w-[90%] bg-[#CDEBD9] rounded-[4px]" /></div>
                  <span className="font-mono text-[13px] text-[#1A8F5A] font-semibold">▲ 8</span>
                </div>
                {[2, 3].map((n) => (
                  <div key={n} className="flex items-center gap-3.5 px-4 py-3.5 bg-cloud border-[1.5px] border-line rounded-[12px]">
                    <span className="font-display font-bold text-[22px] text-muted w-[30px]">{n}</span>
                    <div className="flex-1"><div className="h-2 w-[58%] bg-[#C3D4DB] rounded-[4px] mb-[7px]" /><div className="h-[7px] w-[78%] bg-[#E2EDF1] rounded-[4px]" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3 */}
      <section className={'bg-white ' + SEC}>
        <div className={'p26-split ' + WRAP}>
          <div data-reveal>
            <div className={KICKER}>03 — Google Ads</div>
            <h2 className={H2}>Paid search, built for ROI.</h2>
            <p className={LEAD}>Tightly themed campaigns, relentless testing and conversion tracking that ties every click to revenue — not vanity metrics. You see exactly what each dollar returns.</p>
            <Bullets items={['Account structure & keyword research', 'Landing page CRO & A/B testing', 'Conversion & revenue tracking setup', 'Weekly optimisation & budget pacing']} />
          </div>
          <div className="p26-visual flex justify-center" data-reveal>
            <div className="w-full max-w-[480px] bg-navy rounded-[18px] shadow-[0_30px_70px_rgba(8,51,68,.22)] p-7 text-white">
              <div className="inline-flex items-center gap-2 bg-orange/[.16] border border-orange/40 rounded-[6px] px-2.5 py-1 mb-4">
                <span className="font-mono text-[11px] font-semibold text-[#F8B27E]">Ad</span>
                <span className="font-mono text-[11px] text-white/60">pixel26.com</span>
              </div>
              <div className="h-[9px] w-[80%] bg-teal rounded-[4px] mb-2" />
              <div className="h-2 w-[95%] bg-white/[.22] rounded-[4px] mb-1.5" />
              <div className="h-2 w-[70%] bg-white/[.22] rounded-[4px] mb-6" />
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-teal-light/10 border border-teal-light/20 rounded-[12px] px-3 py-3.5"><div className="font-display font-bold text-[22px]">7.2×</div><div className="text-[11px] text-white/60 mt-[3px]">ROAS</div></div>
                <div className="bg-teal-light/10 border border-teal-light/20 rounded-[12px] px-3 py-3.5"><div className="font-display font-bold text-[22px]">−41%</div><div className="text-[11px] text-white/60 mt-[3px]">CPL</div></div>
                <div className="bg-orange/[.14] border border-orange/30 rounded-[12px] px-3 py-3.5"><div className="font-display font-bold text-[22px]">3.4×</div><div className="text-[11px] text-white/60 mt-[3px]">Leads</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOGETHER */}
      <section className={'bg-cloud ' + SEC}>
        <div className={WRAP}>
          <div className="max-w-[680px] mb-[clamp(36px,4vw,56px)]">
            <div data-reveal className="font-mono text-[13px] tracking-[.2em] uppercase text-teal-dark mb-[18px]">Better together</div>
            <h2 data-reveal className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-.02em] m-0">One team, the full funnel.</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
            {[
              { t: 'Acquire', d: 'Google Ads brings qualified traffic from day one while SEO ramps.' },
              { t: 'Convert', d: 'A premium, fast website turns that traffic into booked calls and sales.' },
              { t: 'Compound', d: 'SEO and CRO keep lowering cost per lead the longer we work together.' },
            ].map((c) => (
              <div key={c.t} data-reveal className="bg-white border-[1.5px] border-line rounded-[20px] p-8">
                <div className="font-display font-bold text-[21px] mb-2.5">{c.t}</div>
                <p className="text-[16px] leading-[1.6] text-ink-soft m-0">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[linear-gradient(135deg,#0F6F7E_0%,#17A8BE_100%)] py-[clamp(64px,8vw,110px)] px-[clamp(20px,5vw,40px)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.08]" />
        <div data-reveal className="relative max-w-[820px] mx-auto text-center">
          <h2 className="font-display font-bold text-[clamp(34px,5vw,60px)] leading-[1.05] tracking-[-.02em] text-white m-0 mb-5">Not sure where to start?</h2>
          <p className="text-[clamp(17px,1.9vw,21px)] leading-[1.6] text-white/[.88] max-w-[540px] mx-auto mb-9">Tell us your goals and we&apos;ll point you at the quickest wins — no pressure, no jargon.</p>
          <Link href="/contact" className="inline-block font-sans font-bold text-[18px] text-white bg-orange px-10 py-[18px] rounded-[34px] no-underline shadow-[0_12px_38px_rgba(8,32,42,.32)] transition-transform hover:-translate-y-0.5">Book a free call →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
