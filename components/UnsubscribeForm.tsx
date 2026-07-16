'use client';

import { useState, FormEvent } from 'react';

const DURATIONS = ['12 Months', 'Permanently'];
const REASONS = [
  'Your emails are not relevant to me',
  'Your emails are too frequent',
  'I no longer want to receive these emails',
  'Other reasons',
];

export default function UnsubscribeForm() {
  const [email, setEmail] = useState('');
  const [duration, setDuration] = useState('12 Months');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!reason) {
      setError('Please select a reason — it genuinely helps us do better.');
      return;
    }
    setError('');
    // Delivery endpoint intentionally not wired yet — same as the contact
    // form, it gets its key at domain cutover.
    // const payload = { email, duration, reason };
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="unsub-card unsub-card--done">
        <span className="unsub-done-icon"><i className="fas fa-check"></i></span>
        <h1 className="unsub-title">You&apos;re off the list</h1>
        <p className="unsub-sub">
          {duration === 'Permanently'
            ? <>We&apos;ve removed <strong>{email}</strong> from our mailing list permanently. No hard feelings — we&apos;re here if you ever want back in.</>
            : <>We&apos;ve paused emails to <strong>{email}</strong> for 12 months. We&apos;ll keep the kettle on.</>}
        </p>
      </div>
    );
  }

  return (
    <div className="unsub-card">
      <h1 className="unsub-title">Unsubscribe</h1>
      <p className="unsub-sub">
        If you&apos;d like to unsubscribe from our mailing list, enter your email below.
        We&apos;ll be sad to see you go, but we&apos;ll make it painless.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label className="unsub-label" htmlFor="unsub-email">Your email address</label>
        <input
          id="unsub-email"
          type="email"
          className="unsub-input"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
        />

        <span className="unsub-label">Unsubscribe for</span>
        <div className="unsub-chips">
          {DURATIONS.map((d) => (
            <button
              key={d}
              type="button"
              className={`unsub-chip${duration === d ? ' is-selected' : ''}`}
              onClick={() => setDuration(d)}
              aria-pressed={duration === d}
            >
              {d}
            </button>
          ))}
        </div>

        <span className="unsub-label">Please select the reason</span>
        <div className="unsub-chips">
          {REASONS.map((r) => (
            <button
              key={r}
              type="button"
              className={`unsub-chip${reason === r ? ' is-selected' : ''}`}
              onClick={() => { setReason(r); setError(''); }}
              aria-pressed={reason === r}
            >
              {r}
            </button>
          ))}
        </div>

        {error && <span className="unsub-error">{error}</span>}

        <button type="submit" className="chy-pr-btn-1 unsub-submit" aria-label="unsubscribe">
          <span className="text">Unsubscribe</span>
          <span className="icon"><i className="fa-solid fa-right-long"></i></span>
        </button>
      </form>
    </div>
  );
}
