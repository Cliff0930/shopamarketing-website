export interface Country {
  iso: string;
  name: string;
  dial: string;
}

// Pinned first per business priority; the rest alphabetical.
export const TOP_COUNTRIES: Country[] = [
  { iso: 'AU', name: 'Australia', dial: '+61' },
  { iso: 'US', name: 'United States', dial: '+1' },
  { iso: 'NZ', name: 'New Zealand', dial: '+64' },
  { iso: 'GB', name: 'United Kingdom', dial: '+44' },
];

export const REST_COUNTRIES: Country[] = [
  { iso: 'AF', name: 'Afghanistan', dial: '+93' },
  { iso: 'AL', name: 'Albania', dial: '+355' },
  { iso: 'DZ', name: 'Algeria', dial: '+213' },
  { iso: 'AR', name: 'Argentina', dial: '+54' },
  { iso: 'AM', name: 'Armenia', dial: '+374' },
  { iso: 'AT', name: 'Austria', dial: '+43' },
  { iso: 'AZ', name: 'Azerbaijan', dial: '+994' },
  { iso: 'BH', name: 'Bahrain', dial: '+973' },
  { iso: 'BD', name: 'Bangladesh', dial: '+880' },
  { iso: 'BY', name: 'Belarus', dial: '+375' },
  { iso: 'BE', name: 'Belgium', dial: '+32' },
  { iso: 'BO', name: 'Bolivia', dial: '+591' },
  { iso: 'BA', name: 'Bosnia and Herzegovina', dial: '+387' },
  { iso: 'BW', name: 'Botswana', dial: '+267' },
  { iso: 'BR', name: 'Brazil', dial: '+55' },
  { iso: 'BN', name: 'Brunei', dial: '+673' },
  { iso: 'BG', name: 'Bulgaria', dial: '+359' },
  { iso: 'KH', name: 'Cambodia', dial: '+855' },
  { iso: 'CM', name: 'Cameroon', dial: '+237' },
  { iso: 'CA', name: 'Canada', dial: '+1' },
  { iso: 'CL', name: 'Chile', dial: '+56' },
  { iso: 'CN', name: 'China', dial: '+86' },
  { iso: 'CO', name: 'Colombia', dial: '+57' },
  { iso: 'CR', name: 'Costa Rica', dial: '+506' },
  { iso: 'HR', name: 'Croatia', dial: '+385' },
  { iso: 'CY', name: 'Cyprus', dial: '+357' },
  { iso: 'CZ', name: 'Czechia', dial: '+420' },
  { iso: 'DK', name: 'Denmark', dial: '+45' },
  { iso: 'EC', name: 'Ecuador', dial: '+593' },
  { iso: 'EG', name: 'Egypt', dial: '+20' },
  { iso: 'EE', name: 'Estonia', dial: '+372' },
  { iso: 'ET', name: 'Ethiopia', dial: '+251' },
  { iso: 'FJ', name: 'Fiji', dial: '+679' },
  { iso: 'FI', name: 'Finland', dial: '+358' },
  { iso: 'FR', name: 'France', dial: '+33' },
  { iso: 'GE', name: 'Georgia', dial: '+995' },
  { iso: 'DE', name: 'Germany', dial: '+49' },
  { iso: 'GH', name: 'Ghana', dial: '+233' },
  { iso: 'GR', name: 'Greece', dial: '+30' },
  { iso: 'HK', name: 'Hong Kong', dial: '+852' },
  { iso: 'HU', name: 'Hungary', dial: '+36' },
  { iso: 'IS', name: 'Iceland', dial: '+354' },
  { iso: 'IN', name: 'India', dial: '+91' },
  { iso: 'ID', name: 'Indonesia', dial: '+62' },
  { iso: 'IQ', name: 'Iraq', dial: '+964' },
  { iso: 'IE', name: 'Ireland', dial: '+353' },
  { iso: 'IL', name: 'Israel', dial: '+972' },
  { iso: 'IT', name: 'Italy', dial: '+39' },
  { iso: 'JM', name: 'Jamaica', dial: '+1' },
  { iso: 'JP', name: 'Japan', dial: '+81' },
  { iso: 'JO', name: 'Jordan', dial: '+962' },
  { iso: 'KZ', name: 'Kazakhstan', dial: '+7' },
  { iso: 'KE', name: 'Kenya', dial: '+254' },
  { iso: 'KW', name: 'Kuwait', dial: '+965' },
  { iso: 'LA', name: 'Laos', dial: '+856' },
  { iso: 'LV', name: 'Latvia', dial: '+371' },
  { iso: 'LB', name: 'Lebanon', dial: '+961' },
  { iso: 'LT', name: 'Lithuania', dial: '+370' },
  { iso: 'LU', name: 'Luxembourg', dial: '+352' },
  { iso: 'MO', name: 'Macau', dial: '+853' },
  { iso: 'MY', name: 'Malaysia', dial: '+60' },
  { iso: 'MV', name: 'Maldives', dial: '+960' },
  { iso: 'MT', name: 'Malta', dial: '+356' },
  { iso: 'MU', name: 'Mauritius', dial: '+230' },
  { iso: 'MX', name: 'Mexico', dial: '+52' },
  { iso: 'MD', name: 'Moldova', dial: '+373' },
  { iso: 'MC', name: 'Monaco', dial: '+377' },
  { iso: 'MN', name: 'Mongolia', dial: '+976' },
  { iso: 'ME', name: 'Montenegro', dial: '+382' },
  { iso: 'MA', name: 'Morocco', dial: '+212' },
  { iso: 'MM', name: 'Myanmar', dial: '+95' },
  { iso: 'NA', name: 'Namibia', dial: '+264' },
  { iso: 'NP', name: 'Nepal', dial: '+977' },
  { iso: 'NL', name: 'Netherlands', dial: '+31' },
  { iso: 'NG', name: 'Nigeria', dial: '+234' },
  { iso: 'MK', name: 'North Macedonia', dial: '+389' },
  { iso: 'NO', name: 'Norway', dial: '+47' },
  { iso: 'OM', name: 'Oman', dial: '+968' },
  { iso: 'PK', name: 'Pakistan', dial: '+92' },
  { iso: 'PA', name: 'Panama', dial: '+507' },
  { iso: 'PG', name: 'Papua New Guinea', dial: '+675' },
  { iso: 'PY', name: 'Paraguay', dial: '+595' },
  { iso: 'PE', name: 'Peru', dial: '+51' },
  { iso: 'PH', name: 'Philippines', dial: '+63' },
  { iso: 'PL', name: 'Poland', dial: '+48' },
  { iso: 'PT', name: 'Portugal', dial: '+351' },
  { iso: 'QA', name: 'Qatar', dial: '+974' },
  { iso: 'RO', name: 'Romania', dial: '+40' },
  { iso: 'RU', name: 'Russia', dial: '+7' },
  { iso: 'RW', name: 'Rwanda', dial: '+250' },
  { iso: 'WS', name: 'Samoa', dial: '+685' },
  { iso: 'SA', name: 'Saudi Arabia', dial: '+966' },
  { iso: 'RS', name: 'Serbia', dial: '+381' },
  { iso: 'SG', name: 'Singapore', dial: '+65' },
  { iso: 'SK', name: 'Slovakia', dial: '+421' },
  { iso: 'SI', name: 'Slovenia', dial: '+386' },
  { iso: 'SB', name: 'Solomon Islands', dial: '+677' },
  { iso: 'ZA', name: 'South Africa', dial: '+27' },
  { iso: 'KR', name: 'South Korea', dial: '+82' },
  { iso: 'ES', name: 'Spain', dial: '+34' },
  { iso: 'LK', name: 'Sri Lanka', dial: '+94' },
  { iso: 'SE', name: 'Sweden', dial: '+46' },
  { iso: 'CH', name: 'Switzerland', dial: '+41' },
  { iso: 'TW', name: 'Taiwan', dial: '+886' },
  { iso: 'TZ', name: 'Tanzania', dial: '+255' },
  { iso: 'TH', name: 'Thailand', dial: '+66' },
  { iso: 'TO', name: 'Tonga', dial: '+676' },
  { iso: 'TT', name: 'Trinidad and Tobago', dial: '+1' },
  { iso: 'TN', name: 'Tunisia', dial: '+216' },
  { iso: 'TR', name: 'Turkey', dial: '+90' },
  { iso: 'UG', name: 'Uganda', dial: '+256' },
  { iso: 'UA', name: 'Ukraine', dial: '+380' },
  { iso: 'AE', name: 'United Arab Emirates', dial: '+971' },
  { iso: 'UY', name: 'Uruguay', dial: '+598' },
  { iso: 'UZ', name: 'Uzbekistan', dial: '+998' },
  { iso: 'VU', name: 'Vanuatu', dial: '+678' },
  { iso: 'VE', name: 'Venezuela', dial: '+58' },
  { iso: 'VN', name: 'Vietnam', dial: '+84' },
  { iso: 'ZM', name: 'Zambia', dial: '+260' },
  { iso: 'ZW', name: 'Zimbabwe', dial: '+263' },
];

export const ALL_COUNTRIES: Country[] = [...TOP_COUNTRIES, ...REST_COUNTRIES];

export function flagEmoji(iso: string): string {
  return String.fromCodePoint(
    ...iso.toUpperCase().split('').map((c) => 0x1f1e6 + c.charCodeAt(0) - 65)
  );
}

// Per-country validation: precise for the pinned four, sensible generic rule
// for everyone else. `digits` is the national number with formatting stripped.
export function validateNationalNumber(iso: string, digits: string): boolean {
  switch (iso) {
    case 'AU':
      return /^0?4\d{8}$/.test(digits) ||          // mobile
             /^(1800|1300)\d{6}$/.test(digits) ||    // free-call
             /^0?[2378]\d{8}$/.test(digits);         // landline
    case 'NZ':
      return /^0?2\d{7,9}$/.test(digits) ||          // mobile
             /^0800\d{6,7}$/.test(digits) ||          // free-call
             /^0?[34679]\d{7}$/.test(digits);         // landline
    case 'US':
    case 'CA':
      return /^[2-9]\d{9}$/.test(digits);             // 10-digit NANP
    case 'GB':
      return /^0?7\d{9}$/.test(digits) ||             // mobile
             /^0?[12]\d{8,9}$/.test(digits);          // landline
    default:
      return /^\d{5,14}$/.test(digits);
  }
}
