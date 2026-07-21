import nodemailer from 'nodemailer';

// Microsoft 365 SMTP sender. All secrets come from env — never hard-coded.
// Requires "Authenticated SMTP" enabled on the mailbox and an app password.
const host = process.env.SMTP_HOST || 'smtp.office365.com';
const port = Number(process.env.SMTP_PORT || 587);
const user = process.env.SMTP_USER;   // e.g. registration-web@shopamarketing.com
const pass = process.env.SMTP_PASS;   // app password — set in Vercel only
// Always send from the authenticated mailbox — sending "as" any other address
// requires Exchange Send-As permission and otherwise fails (SendAsDenied).
const from = user;

export function smtpConfigured(): boolean {
  return Boolean(user && pass);
}

function transport() {
  return nodemailer.createTransport({
    host,
    port,
    secure: false, // 587 uses STARTTLS
    auth: { user: user!, pass: pass! },
  });
}

// Connects + authenticates to the SMTP server without sending — for diagnostics.
export async function verifySmtp(): Promise<{ ok: boolean; error?: string }> {
  if (!smtpConfigured()) return { ok: false, error: 'SMTP_USER/SMTP_PASS not set' };
  try {
    await transport().verify();
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// Comma/space separated env list -> array (drops blanks)
export function list(v: string | undefined, fallback = ''): string[] {
  return (v || fallback)
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function sendMail(opts: {
  to: string[];
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
  subject: string;
  text: string;
}) {
  await transport().sendMail({
    from,
    to: opts.to.join(','),
    cc: opts.cc?.length ? opts.cc.join(',') : undefined,
    bcc: opts.bcc?.length ? opts.bcc.join(',') : undefined,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
  });
}
