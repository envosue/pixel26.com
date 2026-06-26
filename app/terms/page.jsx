import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service — Pixel26',
  description: 'Terms governing web design, SEO, and Google Ads management services provided by Envosue Inc. operating as Pixel26.',
};

const EFFECTIVE = 'June 26, 2026';

/* ── Typography helpers ── */
const H2  = 'font-display font-bold text-[clamp(18px,2vw,22px)] text-teal-dark mt-[clamp(40px,5vw,56px)] mb-[14px] tracking-[-.01em] pb-[10px] border-b border-line';
const H3  = 'font-display font-semibold text-[17px] text-navy mt-8 mb-2';
const P   = 'text-[16px] leading-[1.78] text-ink-soft mb-[18px]';
const UL  = 'list-disc pl-6 mb-[18px] flex flex-col gap-[6px]';
const LI  = 'text-[16px] leading-[1.7] text-ink-soft';
const NOTE = 'bg-cloud border-l-[3px] border-teal rounded-r-[10px] px-5 py-4 text-[15px] leading-[1.7] text-ink-soft mb-[18px]';
const CAPS = 'text-[15px] leading-[1.75] text-ink-soft mb-[18px] font-semibold tracking-[.01em]';

export default function Terms() {
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
            Terms of Service
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
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client",
            "you", or "your") and <strong>Envosue Inc.</strong>, a corporation incorporated under the{' '}
            <em>Canada Business Corporations Act</em>, RSC 1985, c C-44, operating under the trade name{' '}
            <strong>Pixel26</strong> ("Pixel26", "we", "us", or "our"), with its principal place of business
            in Alberta, Canada.
          </p>
          <div className={NOTE}>
            By engaging Pixel26's services or using this website, you confirm that you have read, understood,
            and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not
            engage our services or use this Site.
          </div>

          {/* 1 */}
          <h2 className={H2}>1 · Services</h2>
          <p className={P}>
            Pixel26 provides professional digital services including web design and development, search engine
            optimisation ("SEO"), and Google Ads management (collectively, the "Services"), as described in a
            written proposal, statement of work, or service agreement ("Engagement Letter") executed between
            the parties for each engagement.
          </p>
          <p className={P}>
            In the event of any conflict or inconsistency between these Terms and an Engagement Letter, the
            terms of the Engagement Letter shall prevail to the extent of the conflict.
          </p>

          {/* 2 */}
          <h2 className={H2}>2 · Engagement &amp; Project Process</h2>
          <p className={P}>
            An engagement commences on the later of: (a) execution of the applicable Engagement Letter by both
            parties; and (b) receipt by Pixel26 of the required deposit payment. Pixel26 will perform the
            Services using reasonable professional skill, care, and diligence consistent with industry standards
            for digital services in Canada.
          </p>
          <p className={P}>
            Pixel26's ability to meet agreed milestones and timelines is contingent upon the Client's timely
            provision of content, creative materials, approvals, feedback, and access to required accounts and
            platforms. Delays caused by Client's failure to deliver required inputs within agreed timeframes
            ("Client Delays") may result in revised timelines and may attract additional fees as set out in the
            Engagement Letter.
          </p>

          {/* 3 */}
          <h2 className={H2}>3 · Client Responsibilities</h2>
          <p className={P}>The Client shall:</p>
          <ul className={UL}>
            <li className={LI}>Provide accurate, complete, and timely information, materials, and approvals required for Pixel26 to perform the Services.</li>
            <li className={LI}>Ensure that all content, images, data, trademarks, and other materials provided to Pixel26 are owned by or properly licensed to the Client, and do not infringe any third-party intellectual property, privacy, or other rights.</li>
            <li className={LI}>Designate a primary point of contact with authority to provide approvals and instructions on the Client's behalf.</li>
            <li className={LI}>Not engage in any unlawful, deceptive, defamatory, or harmful conduct in connection with the Services, and not instruct Pixel26 to do so.</li>
            <li className={LI}>Comply with all applicable laws, including advertising standards, privacy legislation, and platform policies (including Google Ads policies).</li>
          </ul>

          {/* 4 */}
          <h2 className={H2}>4 · Fees, Payment &amp; Taxes</h2>
          <h3 className={H3}>4.1 Fees</h3>
          <p className={P}>
            Fees for each engagement are set out in the applicable Engagement Letter. Unless the Engagement
            Letter specifies otherwise:
          </p>
          <ul className={UL}>
            <li className={LI}><strong>Project-based engagements:</strong> a deposit of 50% of the total project fee is due before work commences, with the remaining 50% due upon delivery of the final deliverable.</li>
            <li className={LI}><strong>Monthly retainer services (SEO, Google Ads):</strong> fees are billed in advance on the first day of each billing period, for a minimum initial term as set out in the Engagement Letter.</li>
          </ul>
          <h3 className={H3}>4.2 Payment Terms</h3>
          <p className={P}>
            Invoices are payable within 15 days of the invoice date. Overdue amounts accrue interest at the
            rate of 2% per month (24% per annum), compounded monthly, from the due date until the date of
            full payment. Pixel26 reserves the right to suspend the Services if any invoice remains unpaid
            for more than 15 days following the due date, without limiting any other remedy available.
          </p>
          <h3 className={H3}>4.3 Taxes</h3>
          <p className={P}>
            All fees are exclusive of applicable taxes. Pixel26 will add Goods and Services Tax ("GST") or
            Harmonized Sales Tax ("HST"), as applicable under the <em>Excise Tax Act</em> (Canada), to
            invoices where required by law. The Client is responsible for all taxes, duties, and levies
            applicable to its receipt of the Services, other than taxes on Pixel26's net income.
          </p>
          <h3 className={H3}>4.4 Disputed Invoices</h3>
          <p className={P}>
            If the Client disputes any portion of an invoice in good faith, the Client must notify Pixel26
            in writing within 5 business days of the invoice date, specifying the disputed amount and the
            reasons for the dispute. Undisputed amounts remain payable by the due date.
          </p>

          {/* 5 */}
          <h2 className={H2}>5 · Intellectual Property</h2>
          <h3 className={H3}>5.1 Ownership of Deliverables</h3>
          <p className={P}>
            Upon receipt of full payment of all fees owing under the applicable Engagement Letter, Pixel26
            assigns to the Client all intellectual property rights in the final deliverables specifically
            created for the Client under that engagement, including custom website code, design files, and
            written content (the "Work Product").
          </p>
          <h3 className={H3}>5.2 Pixel26 Background IP and Tools</h3>
          <p className={P}>
            Pixel26 retains all intellectual property rights in its pre-existing tools, frameworks,
            methodologies, processes, know-how, and third-party licensed components ("Background IP"),
            including any such components incorporated into the Work Product. The Client receives a
            perpetual, non-exclusive, non-transferable, royalty-free licence to use the Background IP
            solely as incorporated in the Work Product for its internal business purposes.
          </p>
          <h3 className={H3}>5.3 Portfolio Right</h3>
          <p className={P}>
            The Client grants Pixel26 a non-exclusive, royalty-free licence to display the Work Product
            and the Client's trade name and logo in Pixel26's portfolio, case studies, website, and
            marketing materials for the purpose of promoting Pixel26's services. The Client may revoke
            this licence by written notice before the commencement of the engagement.
          </p>
          <h3 className={H3}>5.4 Client Content</h3>
          <p className={P}>
            The Client retains all intellectual property rights in content, data, trademarks, and materials
            it provides to Pixel26 ("Client Materials"). The Client grants Pixel26 a limited, non-exclusive
            licence to use Client Materials solely to perform the Services during the term of the engagement.
          </p>
          <h3 className={H3}>5.5 Third-Party Licences</h3>
          <p className={P}>
            Where the Work Product incorporates third-party fonts, images, plugins, software libraries, or
            stock media, such components are subject to their respective third-party licences. The Client is
            responsible for maintaining any required ongoing licences for such third-party components after
            delivery of the Work Product.
          </p>

          {/* 6 */}
          <h2 className={H2}>6 · Confidentiality</h2>
          <p className={P}>
            Each party ("Receiving Party") agrees to hold in strict confidence all confidential information
            of the other party ("Disclosing Party") disclosed in connection with the Services ("Confidential
            Information"), and not to use or disclose it to any third party without the Disclosing Party's
            prior written consent, except: (a) as necessary to perform the Services; (b) to the Receiving
            Party's employees, contractors, or professional advisors who have a need to know and are bound
            by equivalent confidentiality obligations; or (c) as required by applicable law or court order,
            provided the Receiving Party gives the Disclosing Party reasonable prior written notice.
          </p>
          <p className={P}>
            "Confidential Information" does not include information that: (i) is or becomes publicly available
            through no breach of this clause; (ii) was known to the Receiving Party before disclosure without
            restriction; (iii) is independently developed by the Receiving Party without use of or reference
            to the Confidential Information; or (iv) is disclosed to the Receiving Party by a third party
            without restriction.
          </p>
          <p className={P}>
            This obligation of confidentiality survives the termination or expiry of the engagement for a
            period of <strong>three (3) years</strong>.
          </p>

          {/* 7 */}
          <h2 className={H2}>7 · Representations &amp; Warranties</h2>
          <p className={P}>Each party represents and warrants that:</p>
          <ul className={UL}>
            <li className={LI}>It has full legal capacity and authority to enter into and perform its obligations under these Terms.</li>
            <li className={LI}>Its execution and performance of these Terms does not violate any applicable law, court order, or agreement with a third party.</li>
          </ul>
          <p className={P}>The Client additionally represents and warrants that:</p>
          <ul className={UL}>
            <li className={LI}>All Client Materials provided to Pixel26 are owned by or properly licensed to the Client and do not infringe the intellectual property, privacy, or other rights of any third party.</li>
            <li className={LI}>The Client's products and services, and any advertising or content to be promoted through the Services, comply with all applicable laws, including the <em>Competition Act</em> (Canada), applicable consumer protection legislation, and Google Ads policies.</li>
          </ul>
          <p className={CAPS}>
            EXCEPT AS EXPRESSLY SET OUT IN AN ENGAGEMENT LETTER, PIXEL26 PROVIDES THE SERVICES ON AN "AS IS"
            AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE CANADIAN LAW, PIXEL26
            DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          {/* 8 */}
          <h2 className={H2}>8 · Performance Guarantees</h2>
          <p className={P}>
            Where Pixel26 offers specific performance guarantees in an Engagement Letter (for example, a
            website delivery timeline guarantee or a commitment to measurable ranking improvements within a
            specified period), such guarantees are conditional on:
          </p>
          <ul className={UL}>
            <li className={LI}>The Client's timely provision of all required inputs, approvals, and access within agreed timeframes.</li>
            <li className={LI}>The Client's continued payment of all fees when due.</li>
            <li className={LI}>No material changes to the scope of services by the Client after commencement of the engagement.</li>
            <li className={LI}>No material algorithm changes by Google or other third-party platforms that are outside Pixel26's reasonable control.</li>
          </ul>
          <p className={P}>
            Guarantees are void in respect of any period during which the Client is in material breach of
            these Terms or there is an active Client Delay.
          </p>

          {/* 9 */}
          <h2 className={H2}>9 · Limitation of Liability</h2>
          <p className={CAPS}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE CANADIAN LAW:
          </p>
          <p className={CAPS}>
            (A) PIXEL26'S TOTAL AGGREGATE LIABILITY TO THE CLIENT FOR ANY AND ALL CLAIMS ARISING OUT OF OR
            RELATED TO THESE TERMS OR THE SERVICES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE),
            STATUTE, OR ANY OTHER LEGAL OR EQUITABLE THEORY, SHALL NOT EXCEED THE TOTAL FEES ACTUALLY PAID
            BY THE CLIENT TO PIXEL26 IN THE THREE (3) CALENDAR MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING
            RISE TO THE CLAIM.
          </p>
          <p className={CAPS}>
            (B) IN NO EVENT SHALL PIXEL26 BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, LOSS
            OF GOODWILL, OR LOSS OF BUSINESS OPPORTUNITY, EVEN IF PIXEL26 HAS BEEN ADVISED OF THE POSSIBILITY
            OF SUCH DAMAGES.
          </p>
          <p className={P}>
            Nothing in these Terms limits or excludes Pixel26's liability for: (i) fraud or fraudulent
            misrepresentation; (ii) wilful misconduct or gross negligence; or (iii) any liability that
            cannot be excluded or limited under applicable Canadian law.
          </p>

          {/* 10 */}
          <h2 className={H2}>10 · Indemnification</h2>
          <p className={P}>
            The Client shall indemnify, defend, and hold harmless Pixel26 and its officers, directors,
            employees, contractors, and agents (collectively, "Pixel26 Parties") from and against any and
            all claims, liabilities, losses, damages, costs, and expenses (including reasonable legal fees
            on a solicitor-and-own-client basis) arising out of or relating to:
          </p>
          <ul className={UL}>
            <li className={LI}>Any breach by the Client of these Terms or an Engagement Letter;</li>
            <li className={LI}>Any Client Materials, including any claim that Client Materials infringe any third-party intellectual property or privacy rights;</li>
            <li className={LI}>The Client's products, services, or business operations;</li>
            <li className={LI}>Any violation by the Client of applicable law, including advertising standards or platform policies; or</li>
            <li className={LI}>Any gross negligence or wilful misconduct by the Client.</li>
          </ul>

          {/* 11 */}
          <h2 className={H2}>11 · Term &amp; Termination</h2>
          <h3 className={H3}>11.1 Term</h3>
          <p className={P}>
            These Terms remain in effect for the duration of any active engagement and continue to apply
            to any ongoing obligations arising from a completed engagement. Minimum retainer terms (if
            any) are set out in the Engagement Letter.
          </p>
          <h3 className={H3}>11.2 Termination for Convenience</h3>
          <p className={P}>
            Either party may terminate an engagement by providing <strong>30 days' written notice</strong>{' '}
            to the other party. Pixel26 will complete and deliver all work in progress up to the effective
            date of termination, and the Client shall pay all fees for Services performed through that date.
          </p>
          <h3 className={H3}>11.3 Termination for Cause</h3>
          <p className={P}>
            Pixel26 may terminate an engagement immediately upon written notice if:
          </p>
          <ul className={UL}>
            <li className={LI}>The Client fails to pay any undisputed invoice within 15 days of the due date and such failure is not cured within 5 business days of written notice;</li>
            <li className={LI}>The Client materially breaches these Terms or an Engagement Letter and fails to cure the breach within 10 business days of written notice; or</li>
            <li className={LI}>The Client becomes insolvent, makes an assignment for the benefit of creditors, or has a receiver, trustee, or administrator appointed over its assets.</li>
          </ul>
          <h3 className={H3}>11.4 Effect of Termination</h3>
          <p className={P}>
            Upon termination for any reason: (a) the Client shall pay all fees accrued for Services
            performed to the date of termination; (b) each party shall promptly return or certifiably
            destroy the other party's Confidential Information; and (c) intellectual property rights in
            Work Product vest in the Client only upon receipt by Pixel26 of full payment of all outstanding
            fees. Sections 5, 6, 7 (Representations only), 9, 10, 13, and 14 survive termination.
          </p>

          {/* 12 */}
          <h2 className={H2}>12 · Force Majeure</h2>
          <p className={P}>
            Neither party is liable for any delay or failure in performance (other than a payment
            obligation) resulting from causes beyond its reasonable control, including acts of God,
            natural disasters, epidemic or pandemic, governmental or regulatory actions, internet or
            telecommunications disruptions, or other force majeure events (each, a "Force Majeure Event").
            The affected party shall: (a) promptly notify the other party in writing upon becoming
            aware of a Force Majeure Event; (b) use reasonable efforts to mitigate the impact; and
            (c) resume performance as soon as reasonably practicable after the Force Majeure Event ends.
          </p>

          {/* 13 */}
          <h2 className={H2}>13 · Governing Law &amp; Dispute Resolution</h2>
          <p className={P}>
            These Terms and any dispute arising out of or related to them or the Services are governed
            exclusively by the laws of the Province of Alberta and the applicable federal laws of Canada,
            without regard to conflict of laws principles.
          </p>
          <p className={P}>
            Before commencing any formal proceeding, the parties shall attempt in good faith to resolve
            any dispute through direct negotiation between senior representatives for a period of at least
            30 calendar days following written notice of the dispute.
          </p>
          <p className={P}>
            If the dispute is not resolved through negotiation, the parties agree to submit the dispute
            to mediation in Calgary, Alberta, administered by a mutually agreed mediator. If mediation
            does not resolve the dispute within 45 days of the mediator's appointment, the dispute shall
            be resolved by binding arbitration under the <em>Arbitration Act</em>, RSA 2000, c A-43, with
            the seat of arbitration in Calgary, Alberta, conducted in English before a single arbitrator.
            The arbitrator's award shall be final and binding and may be enforced in any court of
            competent jurisdiction.
          </p>
          <p className={P}>
            Nothing in this Section prevents either party from seeking emergency injunctive or other
            equitable relief from the Court of King's Bench of Alberta to prevent irreparable harm
            pending resolution of a dispute.
          </p>

          {/* 14 */}
          <h2 className={H2}>14 · General Provisions</h2>
          <ul className={UL}>
            <li className={LI}><strong>Entire agreement.</strong> These Terms and any applicable Engagement Letter constitute the entire agreement between the parties with respect to the subject matter and supersede all prior negotiations, representations, and understandings.</li>
            <li className={LI}><strong>Amendments.</strong> Pixel26 may update these Terms from time to time by posting the revised version on this page with an updated effective date. For existing engagements, material changes take effect 30 days after notice. Your continued engagement with Pixel26 after that date constitutes acceptance of the revised Terms.</li>
            <li className={LI}><strong>No waiver.</strong> Failure by either party to enforce any provision of these Terms shall not constitute a waiver of that or any other provision.</li>
            <li className={LI}><strong>Severability.</strong> If any provision of these Terms is held to be invalid, unlawful, or unenforceable, the remaining provisions shall continue in full force and effect.</li>
            <li className={LI}><strong>Assignment.</strong> The Client may not assign or transfer any rights or obligations under these Terms without Pixel26's prior written consent. Pixel26 may assign these Terms in connection with a corporate restructuring, merger, or sale of all or substantially all of its assets, provided the assignee assumes all obligations hereunder.</li>
            <li className={LI}><strong>Independent contractors.</strong> The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, employment, or agency relationship between the parties.</li>
            <li className={LI}><strong>Notices.</strong> All legal notices required under these Terms shall be in writing and delivered by email with confirmation of receipt or by courier to the addresses set out in the applicable Engagement Letter.</li>
            <li className={LI}><strong>Language.</strong> These Terms are drafted in the English language. Any translation is for convenience only; in the event of conflict, the English version prevails.</li>
          </ul>

          {/* 15 */}
          <h2 className={H2}>15 · Contact</h2>
          <p className={P}>
            For questions or concerns about these Terms, please contact:
          </p>
          <div className="bg-cloud border-[1.5px] border-line rounded-[16px] p-[clamp(22px,3vw,36px)] mb-8">
            <div className="font-display font-bold text-[17px] text-navy mb-3">Envosue Inc. o/a Pixel26</div>
            <div className="text-[15px] text-ink-soft leading-[1.7]">Alberta, Canada</div>
            <a href="/contact" className="inline-block mt-3 font-sans font-semibold text-[15px] text-teal-dark underline underline-offset-2">
              Send us a message →
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
