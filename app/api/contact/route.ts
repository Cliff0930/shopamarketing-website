import { NextResponse } from 'next/server';

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
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  try {
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    if (web3formsKey) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `New enquiry from ${payload.fullName}${payload.businessName ? ` (${payload.businessName})` : ''}`,
          from_name: 'Shopa Marketing Website',
          'Full Name': payload.fullName,
          'Business Name': payload.businessName || '—',
          'Phone': payload.phone,
          'Email': payload.email,
          'Website': payload.website || '—',
          'Services': payload.services.join(', '),
          'Main Goal': payload.goal || '—',
          'Timeline': payload.timeline || '—',
          'Budget': payload.budget || '—',
          'Message': payload.message || '—',
          'Marketing SMS Consent': payload.consent1 ? 'Yes' : 'No',
          'Non-marketing SMS Consent': payload.consent2 ? 'Yes' : 'No',
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) throw new Error('web3forms rejected submission');
      return NextResponse.json({ ok: true });
    }

    // No delivery provider configured — surface it so the client can
    // show a real fallback instead of a fake success.
    console.error('[contact] No CONTACT_WEBHOOK_URL or WEB3FORMS_ACCESS_KEY configured — submission not delivered');
    return NextResponse.json({ ok: false, reason: 'not-configured' }, { status: 503 });
  } catch (err) {
    console.error('[contact] delivery failed:', err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
