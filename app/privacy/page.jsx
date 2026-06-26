import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy — Pixel26',
  description: 'How Envosue Inc. operating as Pixel26 collects, uses, and protects your personal information, in compliance with Alberta PIPA and PIPEDA.',
};

const EFFECTIVE = 'June 26, 2026';

/* ── Typography helpers ── */
const H2  = 'font-display font-bold text-[clamp(18px,2vw,22px)] text-teal-dark mt-[clamp(40px,5vw,56px)] mb-[14px] tracking-[-.01em] pb-[10px] border-b border-line';
const H3  = 'font-display font-semibold text-[17px] text-navy mt-8 mb-2';
const P   = 'text-[16px] leading-[1.78] text-ink-soft mb-[18px]';
const UL  = 'list-disc pl-6 mb-[18px] flex flex-col gap-[6px]';
const LI  = 'text-[16px] leading-[1.7] text-ink-soft';
const NOTE = 'bg-cloud border-l-[3px] border-teal rounded-r-[10px] px-5 py-4 text-[15px] leading-[1.7] text-ink-soft mb-[18px]';

export default function Privacy() {
  return (
    <div className="font-sans bg-white text-ink overflow-x-hidden">
      <Nav />

      {/* ── HEADER ── */}
      <section
        className="relative pt-[clamp(140px,15vw,196px)] pb-[clamp(56px,7vw,90px)] px-[clamp(20px,5vw,40px)] overflow-hidden"
        style={{ background: 'radial-gradient(900px 540px at 50% 0%, rgba(23,168,190,.22), transparent 60%), linear-gradient(180deg,#083344 0%,#062430 100%)' }}
      >
        <div className="absolute inset-0 bg-[url('/web-assets/pixel26-pattern-tile.svg')] bg-[length:200px] opacity-[.06]" />
        <div className="relative max-w-[1240px] mx-auto">
          <div className="font-mono text-[13px] tracking-[.24em] uppercase text-teal-light mb-5">Legal</div>
          <h1 className="font-display font-bold text-[clamp(36px,5.5vw,70px)] leading-[1.04] tracking-[-.03em] text-white m-0 mb-[18px]">
            Privacy Policy
          </h1>
          <p className="text-[clamp(15px,1.5vw,18px)] leading-[1.6] text-white/[.66] m-0 font-mono">
            Effective date: {EFFECTIVE} · Envosue Inc. o/a Pixel26
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-white pt-[clamp(56px,7vw,96px)] pb-[clamp(70px,9vw,120px)] px-[clamp(20px,5vw,40px)]">
        <div className="max-w-[800px] mx-auto">

          {/* Intro */}
          <p className={P}>
            Envosue Inc., incorporated under the <em>Canada Business Corporations Act</em>, RSC 1985, c C-44, and
            operating under the trade name <strong>Pixel26</strong> ("Pixel26", "we", "us", or "our"), with its
            principal place of business in Alberta, Canada, is committed to protecting the personal information of
            clients, prospective clients, and visitors to our website at pixel26.ca (the "Site").
          </p>
          <p className={P}>
            This Privacy Policy describes how we collect, use, disclose, retain, and protect personal information
            in accordance with Alberta's <em>Personal Information Protection Act</em>, SA 2003, c P-6.5 ("PIPA"),
            the <em>Personal Information Protection and Electronic Documents Act</em>, SC 2000, c 5 ("PIPEDA"),
            where applicable, and Canada's <em>Anti-Spam Legislation</em>, SC 2010, c 23 ("CASL").
          </p>
          <div className={NOTE}>
            By using our Site or engaging our services, you consent to the collection, use, and disclosure of your
            personal information as described in this Policy. You may withdraw consent at any time, subject to
            legal or contractual restrictions, by contacting us as set out in Section 11.
          </div>

          {/* 1 */}
          <h2 className={H2}>1 · Accountability</h2>
          <p className={P}>
            Pixel26 is responsible for all personal information in its possession or custody, including information
            transferred to third-party service providers for processing on our behalf. Our designated Privacy
            Officer is accountable for compliance with PIPA and may be reached through the contact form at{' '}
            <a href="/contact" className="text-teal-dark font-semibold underline underline-offset-2">pixel26.ca/contact</a>.
          </p>

          {/* 2 */}
          <h2 className={H2}>2 · Personal Information We Collect</h2>
          <h3 className={H3}>2.1 Information you provide directly</h3>
          <ul className={UL}>
            <li className={LI}><strong>Enquiry & contact data</strong> — name, email address, company or trading name, estimated budget range, service of interest, and project description submitted via our contact form.</li>
            <li className={LI}><strong>Client engagement data</strong> — billing contact details, payment information (processed by our payment processor; we do not store card numbers), and project materials you supply.</li>
            <li className={LI}><strong>Communications</strong> — emails, call notes, or meeting records arising in the course of a client relationship.</li>
          </ul>
          <h3 className={H3}>2.2 Information collected automatically</h3>
          <ul className={UL}>
            <li className={LI}><strong>Log & technical data</strong> — IP address, browser type and version, operating system, referring URL, pages visited, time and date of access, and session duration.</li>
            <li className={LI}><strong>Analytics data</strong> — aggregated, anonymised usage patterns collected through Google Analytics 4 (see Section 6).</li>
          </ul>
          <p className={P}>
            We collect only the personal information that is reasonably required for the identified purposes below.
            We do not collect sensitive personal information (e.g., health data, Social Insurance Numbers, financial
            account credentials) through our Site.
          </p>

          {/* 3 */}
          <h2 className={H2}>3 · Purposes for Collection, Use, and Disclosure</h2>
          <p className={P}>We collect and use personal information for the following purposes, which we identify at or before the time of collection:</p>
          <ul className={UL}>
            <li className={LI}>Responding to enquiries submitted through our contact form or by email.</li>
            <li className={LI}>Providing web design and development, SEO, and Google Ads management services under a client engagement.</li>
            <li className={LI}>Managing client relationships, including project communications, progress updates, and billing.</li>
            <li className={LI}>Processing payments and maintaining financial records in compliance with the <em>Income Tax Act</em> (Canada) and applicable Alberta legislation.</li>
            <li className={LI}>Sending commercial electronic messages (newsletters, service announcements) where express or implied consent has been obtained in accordance with CASL. You may unsubscribe from marketing messages at any time by clicking the unsubscribe link in the message or contacting us.</li>
            <li className={LI}>Improving our Site, services, and client experience through anonymised analytics.</li>
            <li className={LI}>Complying with applicable legal obligations and responding to lawful requests from governmental authorities.</li>
          </ul>
          <p className={P}>
            We will not use or disclose personal information for purposes other than those listed above without
            your consent, except where required or permitted by law.
          </p>

          {/* 4 */}
          <h2 className={H2}>4 · Consent</h2>
          <p className={P}>
            Your consent to the collection, use, and disclosure of personal information may be express (e.g.,
            checking a consent box, signing an engagement agreement) or implied from the context in which you
            provide information (e.g., submitting a contact form). Where sensitive personal information is
            involved or the purpose is not obvious, we obtain express consent.
          </p>
          <p className={P}>
            You may withdraw consent at any time by contacting our Privacy Officer in writing. Withdrawal of
            consent may mean we are unable to provide certain services. We will advise you of the implications
            before you withdraw.
          </p>

          {/* 5 */}
          <h2 className={H2}>5 · Disclosure to Third Parties</h2>
          <p className={P}>
            We do not sell, rent, or trade personal information. We may share personal information with third
            parties only in the following circumstances:
          </p>
          <ul className={UL}>
            <li className={LI}><strong>Service providers</strong> — vendors and subcontractors who assist us in delivering services (e.g., web hosting, email platforms, payment processors, project management tools). These parties are contractually obligated to protect personal information and may only use it as directed by us.</li>
            <li className={LI}><strong>Google LLC</strong> — for analytics as described in Section 6.</li>
            <li className={LI}><strong>Legal and regulatory authorities</strong> — where required by applicable law, court order, subpoena, or regulatory requirement. We will notify you of such disclosure to the extent permitted by law.</li>
            <li className={LI}><strong>Business transfers</strong> — in connection with a merger, acquisition, restructuring, or sale of assets, provided the recipient provides equivalent privacy protections.</li>
          </ul>

          {/* 6 */}
          <h2 className={H2}>6 · Google Analytics & Cookies</h2>
          <h3 className={H3}>6.1 Google Analytics 4</h3>
          <p className={P}>
            We use Google Analytics 4 ("GA4") to understand how visitors interact with our Site. GA4 collects
            anonymised data (including a truncated IP address) about pages visited, session duration, and
            traffic sources. This data is processed by Google LLC, headquartered in the United States. Google
            acts as a data processor on our behalf and is subject to Google's Privacy Policy
            (policies.google.com/privacy). You may opt out of GA4 tracking by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-teal-dark font-semibold underline underline-offset-2">
              Google Analytics Opt-Out Browser Add-on
            </a>.
          </p>
          <h3 className={H3}>6.2 Cookies</h3>
          <p className={P}>Our Site uses the following categories of cookies:</p>
          <ul className={UL}>
            <li className={LI}><strong>Strictly necessary cookies</strong> — essential for the Site to function. These cannot be disabled without affecting core functionality.</li>
            <li className={LI}><strong>Analytics cookies</strong> — Google Analytics 4 cookies (<code>_ga</code>, <code>_ga_*</code>) used to measure and improve Site performance. These are optional.</li>
          </ul>
          <p className={P}>
            Most web browsers allow you to manage cookies through browser settings. Disabling analytics cookies
            will not affect your ability to use our Site but will limit our ability to understand and improve it.
          </p>

          {/* 7 */}
          <h2 className={H2}>7 · Retention</h2>
          <p className={P}>
            We retain personal information only as long as necessary to fulfil the identified purposes or as
            required by law:
          </p>
          <ul className={UL}>
            <li className={LI}><strong>Contact enquiries</strong> — retained for up to 24 months from the date of last contact, after which they are securely deleted.</li>
            <li className={LI}><strong>Client engagement records</strong> — retained for a minimum of 7 years from the close of the engagement, in compliance with the <em>Income Tax Act</em> (Canada) and applicable Alberta tax requirements.</li>
            <li className={LI}><strong>Analytics data</strong> — retained by Google Analytics in accordance with our configured data retention setting (default: 14 months).</li>
          </ul>
          <p className={P}>
            When personal information is no longer required, we destroy, erase, or de-identify it in a secure manner.
          </p>

          {/* 8 */}
          <h2 className={H2}>8 · Security Safeguards</h2>
          <p className={P}>
            We implement reasonable administrative, technical, and physical safeguards appropriate to the
            sensitivity of the personal information held, including:
          </p>
          <ul className={UL}>
            <li className={LI}>Encrypted data transmission via HTTPS (TLS) across all Site connections.</li>
            <li className={LI}>Access controls limiting access to personal information to authorised personnel on a need-to-know basis.</li>
            <li className={LI}>Regular review of security practices and vendor agreements.</li>
          </ul>
          <p className={P}>
            No method of transmission over the internet or electronic storage is entirely secure. While we strive
            to use commercially reasonable means to protect personal information, we cannot guarantee absolute
            security. In the event of a privacy breach that creates a real risk of significant harm to an
            individual, we will notify affected individuals and the Office of the Information and Privacy
            Commissioner of Alberta ("OIPC") as required under PIPA.
          </p>

          {/* 9 */}
          <h2 className={H2}>9 · Your Rights Under PIPA</h2>
          <p className={P}>Under Alberta's PIPA, you have the following rights with respect to your personal information:</p>
          <ul className={UL}>
            <li className={LI}><strong>Right of access</strong> — You may request access to personal information we hold about you. We will respond within 45 days of receiving a written request (or notify you if an extension is required).</li>
            <li className={LI}><strong>Right of correction</strong> — If personal information we hold is inaccurate or incomplete, you may request that we correct it.</li>
            <li className={LI}><strong>Right to withdraw consent</strong> — You may withdraw consent to collection, use, or disclosure at any time, subject to legal or contractual restrictions.</li>
          </ul>
          <p className={P}>
            To exercise any of these rights, please submit a written request to our Privacy Officer via the
            contact form at{' '}
            <a href="/contact" className="text-teal-dark font-semibold underline underline-offset-2">pixel26.ca/contact</a>.
            We may require verification of your identity before processing a request. There is no fee for
            an access request unless the request is manifestly unfounded or excessive.
          </p>

          {/* 10 */}
          <h2 className={H2}>10 · Transfers Outside Canada</h2>
          <p className={P}>
            Some of our service providers, including Google LLC, process personal information outside Canada,
            including in the United States. When personal information is transferred outside Alberta or Canada,
            it may be subject to the laws of that jurisdiction, including lawful access by foreign governmental
            authorities. We take reasonable steps to ensure that service providers outside Canada protect
            personal information in a manner consistent with PIPA.
          </p>
          <p className={P}>
            By submitting personal information through our Site or engaging our services, you acknowledge that
            your information may be transferred to and processed in jurisdictions with privacy laws that differ
            from those in Canada.
          </p>

          {/* 11 */}
          <h2 className={H2}>11 · Children's Privacy</h2>
          <p className={P}>
            Our Site and services are directed to businesses and individuals aged 18 and over. We do not
            knowingly collect personal information from individuals under the age of 18. If we become aware
            that we have inadvertently collected personal information from a minor, we will promptly delete
            that information. If you believe a minor has submitted personal information to us, please
            contact our Privacy Officer immediately.
          </p>

          {/* 12 */}
          <h2 className={H2}>12 · Changes to This Policy</h2>
          <p className={P}>
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal
            requirements, or services. The "Effective date" at the top of this page indicates when the
            current version was last revised. Material changes will be communicated by a prominent notice
            on our Site. Your continued use of our Site or services after the effective date of any revised
            Policy constitutes your acceptance of the changes.
          </p>

          {/* 13 */}
          <h2 className={H2}>13 · Contact &amp; Complaints</h2>
          <p className={P}>
            For questions, concerns, or requests relating to this Privacy Policy or your personal information,
            please contact our Privacy Officer:
          </p>
          <div className="bg-cloud border-[1.5px] border-line rounded-[16px] p-[clamp(22px,3vw,36px)] mb-8">
            <div className="font-display font-bold text-[17px] text-navy mb-3">Privacy Officer — Envosue Inc. o/a Pixel26</div>
            <div className="text-[15px] text-ink-soft leading-[1.7]">Alberta, Canada</div>
            <a href="/contact" className="inline-block mt-3 font-sans font-semibold text-[15px] text-teal-dark underline underline-offset-2">
              Submit a privacy request →
            </a>
          </div>
          <p className={P}>
            If you are not satisfied with our response, you may file a complaint with the{' '}
            <strong>Office of the Information and Privacy Commissioner of Alberta (OIPC)</strong> at{' '}
            <a href="https://www.oipc.ab.ca" target="_blank" rel="noopener noreferrer" className="text-teal-dark font-semibold underline underline-offset-2">
              oipc.ab.ca
            </a>
            . Complaints must generally be filed within two years of the act or omission in question.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
