import { NextResponse } from 'next/server';
import { sendMail, smtpConfigured, list } from '@/lib/email';

interface UnsubPayload {
  email: string;
  duration: string;
  reason: string;
  company?: string; // honeypot — real users never fill this
}

function isValid(p: UnsubPayload): boolean {
  return (
    typeof p.email === 'string' && /.+@.+\..+/.test(p.email) &&
    typeof p.reason === 'string' && p.reason.trim().length > 0
  );
}

export async function POST(request: Request) {
  let payload: UnsubPayload;
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

  const webhookUrl = process.env.UNSUBSCRIBE_WEBHOOK_URL;
  let emailOk = false;
  let sheetOk = false;

  // 1) Email notification via Microsoft 365 SMTP
  if (smtpConfigured()) {
    try {
      await sendMail({
        to: list(process.env.UNSUB_TO, 'samvk@shopamarketing.com'),
        cc: list(process.env.UNSUB_CC, 'sami@shopamarketing.com'),
        subject: `Unsubscribe request: ${payload.email}`,
        text: [
          `Email: ${payload.email}`,
          `Duration: ${payload.duration}`,
          `Reason: ${payload.reason}`,
        ].join('\n'),
      });
      emailOk = true;
    } catch (err) {
      console.error('[unsubscribe] email failed:', err);
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
      console.error('[unsubscribe] sheet webhook failed:', err);
    }
  }

  if (emailOk || sheetOk) return NextResponse.json({ ok: true });

  console.error('[unsubscribe] not delivered — SMTP and UNSUBSCRIBE_WEBHOOK_URL both unset/failed');
  return NextResponse.json({ ok: false, reason: 'not-configured' }, { status: 503 });
}
