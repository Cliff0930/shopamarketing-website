import { NextResponse } from 'next/server';
import { sendMail, smtpConfigured, list } from '@/lib/email';

interface ContactPayload {
  services: string[];
  goal: string;
  timeline: string;
  budget: string;
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  website: string;
  message: string;
  consent1: boolean;
  consent2: boolean;
  company?: string; // honeypot — real users never fill this
}

function isValid(p: ContactPayload): boolean {
  return (
    Array.isArray(p.services) && p.services.length > 0 &&
    typeof p.fullName === 'string' && p.fullName.trim().length > 0 &&
    typeof p.phone === 'string' && p.phone.trim().length > 0 &&
    typeof p.email === 'string' && /.+@.+\..+/.test(p.email)
  );
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot filled = bot. Report success so it moves on.
  if (payload.company) return NextResponse.json({ ok: true });

  if (!isValid(payload)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  let emailOk = false;
  let sheetOk = false;

  // 1) Email notification via Microsoft 365 SMTP (from contact@shopamarketing.com.au)
  if (smtpConfigured()) {
    try {
      await sendMail({
        to: list(process.env.CONTACT_TO, 'pkennedy@shopamarketing.com.au'),
        cc: list(process.env.CONTACT_CC, 'neil@shopamarketing.com'),
        bcc: list(process.env.CONTACT_BCC, 'sami@shopamarketing.com'),
        replyTo: payload.email, // replies go straight to the customer
        subject: `New enquiry: ${payload.fullName}${payload.businessName ? ` (${payload.businessName})` : ''}`,
        text: [
          `Name: ${payload.fullName}`,
          `Business: ${payload.businessName || '—'}`,
          `Phone: ${payload.phone}`,
          `Email: ${payload.email}`,
          `Website: ${payload.website || '—'}`,
          `Services: ${payload.services.join(', ')}`,
          `Main Goal: ${payload.goal || '—'}`,
          `Timeline: ${payload.timeline || '—'}`,
          `Budget: ${payload.budget || '—'}`,
          `Marketing SMS Consent: ${payload.consent1 ? 'Yes' : 'No'}`,
          `Non-marketing SMS Consent: ${payload.consent2 ? 'Yes' : 'No'}`,
          '',
          'Message:',
          payload.message || '—',
        ].join('\n'),
      });
      emailOk = true;
    } catch (err) {
      console.error('[contact] email failed:', err);
    }
  }

  // 2) Save to Google Sheet via the Apps Script webhook
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      sheetOk = res.ok;
    } catch (err) {
      console.error('[contact] sheet webhook failed:', err);
    }
  }

  if (emailOk || sheetOk) return NextResponse.json({ ok: true });

  console.error('[contact] not delivered — SMTP and CONTACT_WEBHOOK_URL both unset/failed');
  return NextResponse.json({ ok: false, reason: 'not-configured' }, { status: 503 });
}
