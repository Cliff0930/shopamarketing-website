'use client';

import { useState, FormEvent } from 'react';

const SERVICE_OPTIONS = [
  'Done For You',
  'OOH Advertising',
  'SEO Services',
  'Social Media Ads',
  'Website Design',
  'Google Ads',
  'Graphic Design',
  'Other',
];

function validatePhone(value: string): string {
  const d = value.replace(/[\s\-().]/g, '');
  if (
    /^(\+?61|0)4\d{8}$/.test(d) ||       // AU mobile
    /^(1800|1300)\d{6}$/.test(d) ||        // AU free-call
    /^(\+?64|0)2\d{7,9}$/.test(d) ||       // NZ mobile
    /^0800\d{6,7}$/.test(d) ||             // NZ free-call
    /^(\+?1)?[2-9]\d{9}$/.test(d)          // USA
  ) return '';
  return 'Please enter a valid AU, NZ or US phone number';
}

function validateWebsite(value: string): string {
  if (!value.trim()) return '';
  if (/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/.test(value.trim())) return '';
  return 'Please enter a valid website (e.g. shopamarketing.com.au)';
}

interface Errors { fullName?: string; phone?: string; email?: string; website?: string; service?: string; }

export default function ContactForm() {
  const [fullName, setFullName]         = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone]               = useState('');
  const [email, setEmail]               = useState('');
  const [website, setWebsite]           = useState('');
  const [service, setService]           = useState('');
  const [message, setMessage]           = useState('');
  const [consent1, setConsent1]         = useState(false);
  const [consent2, setConsent2]         = useState(false);
  const [errors, setErrors]             = useState<Errors>({});
  const [submitted, setSubmitted]       = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!fullName.trim()) e.fullName = 'Full name is required';
    if (!phone.trim())    e.phone    = 'Phone number is required';
    else { const err = validatePhone(phone); if (err) e.phone = err; }
    if (!email.trim())    e.email    = 'Email is required';
    if (!service)         e.service  = 'Please select a service';
    if (website.trim())   { const err = validateWebsite(website); if (err) e.website = err; }
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form-2-wrap" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <i className="fas fa-check-circle" style={{ fontSize: '48px', color: '#663dff', marginBottom: '20px', display: 'block' }}></i>
        <h3 className="chy-heading-1" style={{ fontSize: '28px', marginBottom: '12px' }}>Message Sent!</h3>
        <p className="chy-para-1">Thanks {fullName}, we&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="contact-form-2-wrap">
      <h6 className="title chy-heading-1">More about you</h6>

      <form className="contact-form-shopa" onSubmit={handleSubmit} noValidate>

        {/* Full Name */}
        <div className="f-name">
          <label htmlFor="fullName">Full Name<span>*</span></label>
          <input id="fullName" type="text" placeholder="Your full name"
            value={fullName} onChange={e => setFullName(e.target.value)}
            style={errors.fullName ? errInputStyle : {}} />
          {errors.fullName && <span style={errMsgStyle}>{errors.fullName}</span>}
        </div>

        {/* Phone */}
        <div className="f-phone">
          <label htmlFor="phone">Phone Number<span>*</span></label>
          <input id="phone" type="tel" placeholder="+61 / +64 / +1 number"
            value={phone} onChange={e => setPhone(e.target.value)}
            style={errors.phone ? errInputStyle : {}} />
          {errors.phone && <span style={errMsgStyle}>{errors.phone}</span>}
        </div>

        {/* Email */}
        <div className="f-email">
          <label htmlFor="email">E-mail<span>*</span></label>
          <input id="email" type="email" placeholder="your@email.com"
            value={email} onChange={e => setEmail(e.target.value)}
            style={errors.email ? errInputStyle : {}} />
          {errors.email && <span style={errMsgStyle}>{errors.email}</span>}
        </div>

        {/* Business Name */}
        <div className="f-biz">
          <label htmlFor="businessName">Business Name</label>
          <input id="businessName" type="text" placeholder="Your business name"
            value={businessName} onChange={e => setBusinessName(e.target.value)} />
        </div>

        {/* Website */}
        <div className="f-web">
          <label htmlFor="website">Website URL</label>
          <input id="website" type="text" placeholder="shopamarketing.com.au"
            value={website} onChange={e => setWebsite(e.target.value)}
            style={errors.website ? errInputStyle : {}} />
          {errors.website && <span style={errMsgStyle}>{errors.website}</span>}
        </div>

        {/* Service dropdown — native select (avoids jQuery nice-select conflict) */}
        <div className="f-service">
          <label htmlFor="service">Select the service you need<span>*</span></label>
          <select
            id="service"
            value={service}
            onChange={e => { setService(e.target.value); setErrors(p => ({ ...p, service: undefined })); }}
            style={errors.service ? errInputStyle : {}}
          >
            <option value="" disabled>Please choose an option</option>
            {SERVICE_OPTIONS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <span style={errMsgStyle}>{errors.service}</span>}
        </div>

        {/* Message textarea */}
        <div className="f-msg">
          <label htmlFor="message">Anything else you&apos;d like us to know?</label>
          <textarea id="message" cols={30} rows={3}
            placeholder="Share more details (if any)"
            value={message} onChange={e => setMessage(e.target.value)} />
        </div>

        {/* Consent checkboxes */}
        <div className="f-check" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label>
            <input type="checkbox" checked={consent1} onChange={e => setConsent1(e.target.checked)} />
            <span>I consent to receive marketing text messages from Shopa Marketing Australia Pty Ltd at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.</span>
          </label>
          <label>
            <input type="checkbox" checked={consent2} onChange={e => setConsent2(e.target.checked)} />
            <span>I consent to receive non-marketing text messages from Shopa Marketing Australia Pty Ltd about my order updates, appointment reminders etc. Message &amp; data rates may apply.</span>
          </label>
        </div>

        {/* Submit button */}
        <div className="f-btn">
          <button type="submit" aria-label="send message" className="chy-pr-btn-1">
            <span className="text">Send a Message</span>
            <span className="icon"><i className="fa-solid fa-right-long"></i></span>
          </button>
        </div>

      </form>
    </div>
  );
}

const errInputStyle: React.CSSProperties = { border: '2px solid #e74c3c', outline: 'none' };
const errMsgStyle:   React.CSSProperties = { display: 'block', fontSize: '12px', color: '#e74c3c', marginTop: '4px', paddingLeft: '8px', fontWeight: 500 };
