import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Work — Selected projects & results',
  description: 'A selection of websites Pixel26 has designed, built and grown — measured by the results they drive.',
};

const chip = 'font-mono text-[13px] tracking-[.04em] text-teal-dark bg-[#EAF6FA] border-[1.5px] border-[#CFEAF1] rounded-[20px] px-4 py-2';

const GRADS = [
  'linear-gradient(135deg,#0F6F7E,#17A8BE)',
  'linear-gradient(135deg,#17A8BE,#87C4D8)',
  'linear-gradient(135deg,#083344,#0F6F7E)',
  'linear-gradient(135deg,#0F6F7E,#083344)',
  'linear-gradient(135deg,#17A8BE,#0F6F7E)',
  'linear-gradient(135deg,#083344,#17A8BE)',
];

const PROJECTS = [
  { cat: 'Fitness · Web + Ads', name: 'Lumen Fitness', result: 'Membership signups tripled in 90 days.', metric: '3.1×' },
  { cat: 'Legal · SEO', name: 'Atlas Legal', result: 'Ranking #1 for 40+ local search terms.', metric: '#1' },
  { cat: 'Home services · Web + Ads', name: 'Verde Landscaping', result: 'Cut cost per lead by more than a third.', metric: '−38%' },
  { cat: 'Finance · Web Design', name: 'Harbor Financial', result: 'More than doubled site conversion rate.', metric: '2.4×' },
  { cat: 'eCommerce · Google Ads', name: 'Bloom Skincare', result: 'Return on ad spend up to 7.2×.', metric: '7.2×' },
  { cat: 'Hospitality · Web + SEO', name: 'Cedar & Co.', result: 'Organic traffic up 264% year on year.', metric: '+264%' },
];

export default function Work() {
  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section
        className="relative pt-[clamp(140px,15vw,200px)] pb-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)] overflow-hidden"
        style={{ background: 'radial-gradient(900px 540px at 22% 8%, rgba(23,168,190,.22), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.06]" />
        <div className="relative max-w-[1240px] mx-auto">
          <div data-reveal className="font-mono text-[13px] tracking-[.24em] uppercase text-teal-light mb-6">Selected Work</div>
          <h1 data-reveal className="font-display font-bold text-[clamp(40px,6.4vw,86px)] leading-[1.02] tracking-[-.03em] text-white m-0 mb-[26px]">Work we&apos;ll happily put our <span className="text-teal inline-block leading-none whitespace-nowrap border-b-[.09em] border-orange pb-[.05em]">name</span> on.</h1>
          <p data-reveal className="text-[clamp(18px,2vw,23px)] leading-[1.6] text-white/[.72] max-w-[660px] m-0">A selection of websites we&apos;ve designed, built and grown. Every project is measured by one thing: the results it drives for the business.</p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-white pt-[clamp(64px,8vw,110px)] pb-[clamp(40px,5vw,64px)] px-[clamp(20px,5vw,40px)]">
        <div className="p26-feat max-w-[1240px] mx-auto">
          <div data-reveal className="relative aspect-[16/11] rounded-[22px] overflow-hidden bg-[linear-gradient(135deg,#083344,#0F6F7E)] shadow-[0_36px_80px_rgba(8,51,68,.22)]">
            <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:150px] opacity-10" />
            <div className="absolute inset-0 flex items-center justify-center p-9">
              <div className="w-[84%] bg-white/[.06] border border-white/[.14] rounded-[14px] overflow-hidden">
                <div className="flex gap-1.5 px-3.5 py-3 border-b border-white/[.12]"><span className="w-[9px] h-[9px] rounded-full bg-orange" /><span className="w-[9px] h-[9px] rounded-full bg-white/40" /><span className="w-[9px] h-[9px] rounded-full bg-white/40" /></div>
                <div className="p-[22px]"><div className="h-[11px] w-1/2 bg-teal rounded-[5px] mb-3" /><div className="h-2 w-[82%] bg-white/[.25] rounded-[4px] mb-[7px]" /><div className="h-2 w-[66%] bg-white/[.25] rounded-[4px] mb-[18px]" /><div className="h-[26px] w-[38%] bg-orange rounded-[14px]" /></div>
              </div>
            </div>
            <div className="absolute left-[22px] bottom-[22px] font-mono text-[11px] tracking-[.12em] uppercase text-white/55">[ replace with project screenshot ]</div>
          </div>
          <div data-reveal>
            <div className="font-mono text-[12px] tracking-[.18em] uppercase text-teal-dark mb-4">Featured · Healthcare</div>
            <h2 className="font-display font-bold text-[clamp(28px,3.4vw,42px)] leading-[1.1] tracking-[-.02em] m-0 mb-4">Northwind Dental</h2>
            <p className="text-[18px] leading-[1.65] text-ink-soft m-0 mb-7 max-w-[480px]">A new website, a rebuilt search presence and a tightly run Ads account took a single-location practice from quiet to fully booked in two quarters.</p>
            <div className="flex flex-wrap gap-3.5 mb-[30px]">
              {[['+212%', 'Organic leads'], ['3.4×', 'New patients'], ['4wk', 'To launch']].map(([v, l]) => (
                <div key={l} className="bg-cloud border-[1.5px] border-line rounded-[14px] px-[22px] py-4"><div className="font-display font-bold text-[30px] text-navy">{v}</div><div className="text-[13px] text-ink-soft mt-0.5">{l}</div></div>
              ))}
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <span className={chip}>Web Design</span><span className={chip}>SEO</span><span className={chip}>Google Ads</span>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white pt-[clamp(24px,3vw,40px)] pb-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-6">
            {PROJECTS.map((p, i) => (
              <Link key={p.name} href="/contact" data-reveal className="flex flex-col no-underline border-[1.5px] border-line rounded-[20px] overflow-hidden bg-white transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(8,51,68,.14)] hover:border-teal-light">
                <div className="relative aspect-[16/10] overflow-hidden" style={{ background: GRADS[i % GRADS.length] }}>
                  <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:130px] opacity-10" />
                  <div className="absolute left-[18px] top-[18px] right-[18px] flex flex-col gap-2">
                    <div className="h-[9px] w-[46%] bg-white/[.85] rounded-[4px]" />
                    <div className="h-1.5 w-[72%] bg-white/40 rounded-[3px]" />
                  </div>
                  <div className="absolute right-[18px] bottom-[18px] bg-white/95 rounded-[12px] px-3.5 py-2.5"><span className="font-display font-bold text-[20px] text-navy">{p.metric}</span></div>
                </div>
                <div className="px-[26px] py-6">
                  <div className="font-mono text-[12px] tracking-[.12em] uppercase text-teal-dark mb-2">{p.cat}</div>
                  <div className="font-display font-bold text-[23px] text-navy mb-1.5">{p.name}</div>
                  <div className="text-[15px] text-ink-soft">{p.result}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy py-[clamp(64px,8vw,110px)] px-[clamp(20px,5vw,40px)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.05]" />
        <div data-reveal className="relative max-w-[820px] mx-auto text-center">
          <h2 className="font-display font-bold text-[clamp(34px,5vw,60px)] leading-[1.05] tracking-[-.02em] text-white m-0 mb-5">Your project could be next.</h2>
          <p className="text-[clamp(17px,1.9vw,21px)] leading-[1.6] text-white/[.72] max-w-[540px] mx-auto mb-9">Let&apos;s talk about what growth looks like for your business.</p>
          <Link href="/contact" className="inline-block font-sans font-bold text-[18px] text-white bg-orange px-10 py-[18px] rounded-[34px] no-underline shadow-[0_10px_30px_rgba(240,120,16,.4)] transition-transform hover:-translate-y-0.5">Start a project →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
