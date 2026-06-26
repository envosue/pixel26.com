import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About — A studio where every pixel earns its place',
  description: 'Pixel26 is a small, senior team pairing design craft with measurable performance across web, SEO and Google Ads.',
};

const VALUES = [
  { title: 'Clear', desc: 'Plain words, no jargon. You always know what we are doing and why.' },
  { title: 'Confident', desc: 'We know our craft and we will tell you the truth, even when it is not what you hoped.' },
  { title: 'Results-led', desc: 'Specifics over slogans. Every decision ties back to a number that matters.' },
  { title: 'Human', desc: 'Warm, responsive and never robotic. You work with people, not a ticket queue.' },
];

const STATS = [['150+', 'Projects shipped'], ['12yrs', 'In business'], ['4.9', 'Average client rating'], ['94%', 'Client retention']];

const story = 'text-[18px] leading-[1.7] text-ink-soft m-0 mb-[18px]';

export default function About() {
  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section
        className="relative pt-[clamp(140px,15vw,200px)] pb-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)] overflow-hidden"
        style={{ background: 'radial-gradient(900px 540px at 50% 0%, rgba(23,168,190,.22), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.06]" />
        <div className="relative max-w-[1240px] mx-auto">
          <div data-reveal className="font-mono text-[13px] tracking-[.24em] uppercase text-teal-light mb-6">About Pixel26</div>
          <h1 data-reveal className="font-display font-bold text-[clamp(40px,6.4vw,86px)] leading-[1.02] tracking-[-.03em] text-white m-0 mb-[26px]">A studio where <span className="text-teal inline-block leading-none whitespace-nowrap border-b-[.09em] border-orange pb-[.05em]">every pixel</span> earns its place.</h1>
          <p data-reveal className="text-[clamp(18px,2vw,23px)] leading-[1.6] text-white/[.72] max-w-[680px] m-0">We&apos;re a small, senior team that pairs design craft with measurable performance — because a beautiful website that doesn&apos;t grow the business isn&apos;t doing its job.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)]">
        <div className="p26-story max-w-[1240px] mx-auto">
          <div data-reveal>
            <div className="font-mono text-[13px] tracking-[.2em] uppercase text-teal-dark mb-[18px]">Our story</div>
            <h2 className="font-display font-bold text-[clamp(28px,3.6vw,46px)] leading-[1.1] tracking-[-.02em] m-0 mb-6">Founded on a simple frustration.</h2>
            <p className={story}>Too many businesses were paying one agency for a pretty website, another for SEO, and a third for ads — none of them talking to each other, and no one accountable for the result.</p>
            <p className={story}>Pixel26 was built to fix that. One senior team that designs the site, earns the rankings and runs the campaigns — measured by the only number that matters: the growth it drives for you.</p>
            <p className="text-[18px] leading-[1.7] text-ink-soft m-0">Since 2014 we&apos;ve shipped over 150 projects, and we still treat every launch like our name is on it. Because it is.</p>
          </div>
          <div data-reveal className="relative bg-navy rounded-[22px] px-10 py-11 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:140px] opacity-[.07]" />
            <div className="relative">
              <div className="font-display font-bold text-[60px] leading-none text-teal mb-1.5">&ldquo;</div>
              <p className="font-display font-medium text-[24px] leading-[1.4] text-white m-0 mb-[26px]">We don&apos;t measure success in awards. We measure it in the leads, calls and revenue our clients can feel.</p>
              <div className="flex items-center gap-3.5">
                <div className="w-[46px] h-[46px] rounded-full bg-[linear-gradient(135deg,#17A8BE,#0F6F7E)] flex items-center justify-center font-display font-bold text-[17px] text-white">DP</div>
                <div><div className="font-bold text-[16px]">Dhaval Patel</div><div className="text-[14px] text-teal-light">Founder &amp; Creative Director</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cloud py-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-[clamp(36px,4vw,56px)]">
            <div data-reveal className="font-mono text-[13px] tracking-[.2em] uppercase text-teal-dark mb-[18px]">How we work</div>
            <h2 data-reveal className="font-display font-bold text-[clamp(30px,4.2vw,52px)] leading-[1.06] tracking-[-.02em] m-0">Clear, confident, results-led, human.</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[22px]">
            {VALUES.map((v) => (
              <div key={v.title} data-reveal className="bg-white border-[1.5px] border-line rounded-[20px] px-[30px] py-[34px]">
                <div className="font-display font-bold text-[26px] text-teal mb-2.5">{v.title}</div>
                <p className="text-[16px] leading-[1.6] text-ink-soft m-0">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-navy py-[clamp(64px,8vw,100px)] px-[clamp(20px,5vw,40px)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.05]" />
        <div className="relative max-w-[1240px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[clamp(24px,3vw,40px)]">
          {STATS.map(([v, l]) => (
            <div key={l} data-reveal className="text-center">
              <div className="font-display font-bold text-[clamp(44px,5vw,68px)] text-white leading-none">{v}</div>
              <div className="text-[15px] text-white/[.66] mt-3.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[linear-gradient(135deg,#0F6F7E_0%,#17A8BE_100%)] py-[clamp(64px,8vw,110px)] px-[clamp(20px,5vw,40px)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.08]" />
        <div data-reveal className="relative max-w-[820px] mx-auto text-center">
          <h2 className="font-display font-bold text-[clamp(34px,5vw,60px)] leading-[1.05] tracking-[-.02em] text-white m-0 mb-5">Let&apos;s build something that grows.</h2>
          <p className="text-[clamp(17px,1.9vw,21px)] leading-[1.6] text-white/[.88] max-w-[520px] mx-auto mb-9">Book a free call and meet the team that&apos;ll actually do the work.</p>
          <Link href="/contact" className="inline-block font-sans font-bold text-[18px] text-white bg-orange px-10 py-[18px] rounded-[34px] no-underline shadow-[0_12px_38px_rgba(8,32,42,.32)] transition-transform hover:-translate-y-0.5">Book a free call →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
