'use client';
import { useState, useRef, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ObfuscatedContact from '../components/ObfuscatedContact';

const LBL = 'font-mono text-[12px] tracking-[.1em] uppercase text-teal-dark mb-[9px] font-semibold';
const FIELD = 'p26-field font-sans text-[16px] text-navy bg-cloud border-[1.5px] border-line rounded-[12px] px-4 py-3.5 transition-[border-color,box-shadow] duration-[180ms]';
const ERR = 'text-[13px] text-[#C0392B] mt-[7px] font-semibold';
const chipBase = 'font-sans text-[14px] font-semibold rounded-[10px] cursor-pointer border-[1.5px] transition-transform duration-[250ms] ease-[cubic-bezier(.34,1.56,.64,1)] ';
const chipOn = 'bg-teal border-teal text-white scale-105 shadow-[0_7px_18px_rgba(23,168,190,.45)]';
const chipOff = 'bg-cloud border-line text-ink-soft scale-100 shadow-none';
const contactLink = 'text-[19px] text-navy no-underline font-semibold';

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');
  const loadedAt = useRef(0);
  useEffect(() => { loadedAt.current = Date.now(); }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const d = Object.fromEntries(new FormData(form).entries());
    // ── Spam-bot guards ──
    // 1) Honeypot: hidden field humans never fill.
    // 2) Time trap: a real person can't complete this form in under ~2.5s.
    const elapsed = Date.now() - (loadedAt.current || 0);
    if ((d.company_url || '').trim() !== '' || elapsed < 2500) {
      // Silently accept so bots don't retry; nothing is sent.
      setErrors({});
      setStatus('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const errs = {};
    if (!(d.name || '').trim()) errs.name = 'Please enter your name';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test((d.email || '').trim())) errs.email = 'Enter a valid email address';
    if (!d.service) errs.service = 'Please choose a service';
    if (!(d.message || '').trim()) errs.message = 'Tell us a little about your project';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, elapsed }),
      });
      if (!res.ok) throw new Error('bad response');
      setStatus('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section
        className="relative pt-[clamp(140px,15vw,196px)] pb-[clamp(56px,7vw,90px)] px-[clamp(20px,5vw,40px)] overflow-hidden"
        style={{ background: 'radial-gradient(900px 540px at 50% 0%, rgba(23,168,190,.22), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.06]" />
        <div className="relative max-w-[1240px] mx-auto">
          <div data-reveal className="font-mono text-[13px] tracking-[.24em] uppercase text-teal-light mb-6">Contact</div>
          <h1 data-reveal className="font-display font-bold text-[clamp(40px,6.4vw,82px)] leading-[1.02] tracking-[-.03em] text-white m-0 mb-[22px]">Let&apos;s talk about <span className="text-teal inline-block leading-none whitespace-nowrap border-b-[.09em] border-orange pb-[.05em]">growth</span>.</h1>
          <p data-reveal className="text-[clamp(18px,2vw,22px)] leading-[1.6] text-white/[.72] max-w-[600px] m-0">Book a free 30-minute call, or send a few details and we&apos;ll come back within one business day.</p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white pt-[clamp(56px,7vw,96px)] pb-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)]">
        <div className="p26-cgrid max-w-[1240px] mx-auto">
          {/* INFO */}
          <div data-reveal>
            <h2 className="font-display font-bold text-[clamp(24px,2.6vw,32px)] tracking-[-.01em] m-0 mb-7">Talk to a human.</h2>
            <div className="flex flex-col gap-[22px] mb-[38px]">
              <div><div className="font-mono text-[12px] tracking-[.14em] uppercase text-teal-dark mb-1.5">Email</div><ObfuscatedContact kind="email" className={contactLink} /></div>
              <div><div className="font-mono text-[12px] tracking-[.14em] uppercase text-teal-dark mb-1.5">Phone</div><ObfuscatedContact kind="phone" className={contactLink} /></div>
              <div><div className="font-mono text-[12px] tracking-[.14em] uppercase text-teal-dark mb-1.5">Hours</div><div className="text-[19px] text-navy font-semibold">Mon–Fri · 9am–6pm</div></div>
            </div>
            <div className="bg-cloud border-[1.5px] border-line rounded-[18px] p-7">
              <div className="font-display font-bold text-[18px] mb-4">What happens next</div>
              <div className="flex flex-col gap-3.5">
                {['We reply within one business day to set up a call.', 'A free 30-minute review of your site, search and ads.', 'A clear, no-pressure plan for the quickest wins.'].map((txt, i) => (
                  <div key={i} className="flex gap-3 items-start"><span className="shrink-0 w-6 h-6 rounded-full bg-teal text-white font-display font-bold text-[13px] flex items-center justify-center">{i + 1}</span><span className="text-[15px] text-ink-soft leading-[1.5]">{txt}</span></div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div data-reveal>
            {status === 'done' ? (
              <div className="bg-[#EAF7F0] border-[1.5px] border-[#A8E0C4] rounded-[22px] p-[clamp(40px,5vw,64px)] text-center">
                <div className="w-16 h-16 rounded-full bg-[#1A8F5A] flex items-center justify-center mx-auto mb-[22px] text-[30px] text-white">✓</div>
                <h3 className="font-display font-bold text-[28px] text-navy m-0 mb-3">Thanks — we&apos;re on it.</h3>
                <p className="text-[17px] leading-[1.6] text-ink-soft mx-auto mb-7 max-w-[380px]">Your message is in. We&apos;ll be in touch within one business day to set up your free call.</p>
                <button onClick={() => setStatus('idle')} className="font-sans font-semibold text-[15px] text-teal-dark bg-transparent border-[1.5px] border-[#A8E0C4] rounded-[30px] px-[26px] py-3 cursor-pointer">Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="bg-white border-[1.5px] border-line rounded-[22px] p-[clamp(28px,3.4vw,44px)] shadow-[0_24px_60px_rgba(8,51,68,.08)]">
                <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
                  <label>Leave this field empty<input type="text" name="company_url" tabIndex={-1} autoComplete="off" defaultValue="" /></label>
                </div>
                <div className="p26-formgrid">
                  <div className="flex flex-col">
                    <label className={LBL}>Name *</label>
                    <input type="text" name="name" placeholder="Jane Smith" className={FIELD} />
                    {errors.name && <div className={ERR}>{errors.name}</div>}
                  </div>
                  <div className="flex flex-col">
                    <label className={LBL}>Email *</label>
                    <input type="email" name="email" placeholder="jane@company.com" className={FIELD} />
                    {errors.email && <div className={ERR}>{errors.email}</div>}
                  </div>
                  <div className="flex flex-col">
                    <label className={LBL}>Company</label>
                    <input type="text" name="company" placeholder="Company name" className={FIELD} />
                  </div>
                  <div className="flex flex-col">
                    <label className={LBL}>Monthly budget</label>
                    <input type="hidden" name="budget" value={budget} />
                    <div className="grid grid-cols-2 gap-2">
                      {['Under $2k', '$2k – $5k', '$5k – $10k', '$10k+'].map((b) => {
                        const on = budget === b;
                        return (
                          <button type="button" key={b} onClick={() => setBudget(on ? '' : b)}
                            className={chipBase + 'px-2.5 py-3 text-center ' + (on ? chipOn : chipOff)}>{b}</button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <label className={LBL}>I&apos;m interested in *</label>
                  <input type="hidden" name="service" value={service} />
                  <div className="flex flex-wrap gap-2">
                    {['Web Design & Build', 'SEO', 'Google Ads', 'Multiple / not sure yet'].map((v) => {
                      const on = service === v;
                      return (
                        <button type="button" key={v} onClick={() => setService(on ? '' : v)}
                          className={chipBase + 'px-[18px] py-3 ' + (on ? chipOn : chipOff)}>{v}</button>
                      );
                    })}
                  </div>
                  {errors.service && <div className={ERR}>{errors.service}</div>}
                </div>
                <div className="flex flex-col mt-5">
                  <label className={LBL}>Project details *</label>
                  <textarea name="message" rows={5} placeholder="Tell us about your business, your goals, and what's not working today." className={FIELD + ' resize-y min-h-[120px]'} />
                  {errors.message && <div className={ERR}>{errors.message}</div>}
                </div>
                {status === 'error' && <div className={ERR + ' text-center mt-4'}>Something went wrong sending your message. Please email us directly.</div>}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={'mt-7 w-full font-sans font-bold text-[18px] text-white bg-orange border-0 p-[18px] rounded-[14px] cursor-pointer shadow-[0_10px_28px_rgba(240,120,16,.36)] transition-transform hover:-translate-y-0.5 ' + (status === 'sending' ? 'opacity-70' : 'opacity-100')}
                >
                  {status === 'sending' ? 'Sending…' : 'Book my free call →'}
                </button>
                <p className="text-[13px] text-muted text-center mt-4 mb-0">No spam, ever. We&apos;ll only use your details to reply.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
