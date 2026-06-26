import { NextResponse } from 'next/server';

// POST /api/contact — receives the contact form submission.
//
// Right now this validates the payload and logs it server-side. To actually
// deliver the lead, drop in ONE of the following where indicated below:
//   • Email:    use `nodemailer` (SMTP) or Resend / Postmark / SendGrid SDK
//   • CRM:      POST to HubSpot / Pipedrive / your CRM's API
//   • Database: insert into Postgres / MySQL (Hostinger provides MySQL)
//   • Slack:    POST to an incoming webhook
export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const {
    name, email, service, message,
    // Google Ads campaign attribution
    gclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
  } = data || {};
  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email || '').trim());

  // ── Spam-bot guards (server-side; never trust the client alone) ──
  // 1) Honeypot field must be empty.
  // 2) Submission must not be implausibly fast.
  if (String(data.company_url || '').trim() !== '' || Number(data.elapsed) < 2500) {
    // Pretend success so bots don't probe for the rejection.
    return NextResponse.json({ ok: true });
  }

  if (!String(name || '').trim() || !emailOk || !service || !String(message || '').trim()) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 422 });
  }

  // --- Deliver the lead here ---------------------------------------------
  // Example with Resend:
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'site@pixel26.com',
  //     to: 'hello@pixel26.com',
  //     subject: `New enquiry from ${name}`,
  //     text: JSON.stringify(data, null, 2),
  //   });
  // -----------------------------------------------------------------------

  // Build attribution object — only include keys that were actually sent
  const attribution = Object.fromEntries(
    Object.entries({ gclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content })
      .filter(([, v]) => v != null && String(v).trim() !== '')
  );

  console.log('[contact] new submission:', {
    name, email, service,
    company: data.company || '',
    budget: data.budget || '',
    message,
    attribution,          // Google Ads campaign keys (empty object if organic)
    is_paid: !!gclid,     // true = confirmed Google Ads click
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
