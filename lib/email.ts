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

// Case-insensitive de-dupe that preserves the first-seen casing of each address.
function uniq(addrs: string[]): string[] {
  const seen = new Map<string, string>();
  for (const a of addrs) {
    const key = a.trim().toLowerCase();
    if (key && !seen.has(key)) seen.set(key, a.trim());
  }
  return Array.from(seen.values());
}

export async function sendMail(opts: {
  to: string[];
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
  subject: string;
  text: string;
}) {
  // Ensure no address receives more than one copy: dedupe within `to`, then drop
  // any cc/bcc address that's already a recipient. Guards against duplicate or
  // overlapping entries in the UNSUB_TO/UNSUB_CC (etc.) env vars.
  const lc = (arr: string[]) => new Set(arr.map((a) => a.toLowerCase()));
  const to = uniq(opts.to);
  const toKeys = lc(to);
  const cc = uniq(opts.cc ?? []).filter((a) => !toKeys.has(a.toLowerCase()));
  const usedKeys = lc([...to, ...cc]);
  const bcc = uniq(opts.bcc ?? []).filter((a) => !usedKeys.has(a.toLowerCase()));

  await transport().sendMail({
    from,
    to: to.join(','),
    cc: cc.length ? cc.join(',') : undefined,
    bcc: bcc.length ? bcc.join(',') : undefined,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
  });
}
