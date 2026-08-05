/**
 * Business Email Validation Utility for Cliqtest
 * Enforces corporate/company email requirements while rejecting personal, free, and disposable email providers.
 */

// Comprehensive set of personal, free, and disposable email domain providers
export const FREE_EMAIL_DOMAINS = new Set<string>([
  // Google / Gmail
  'gmail.com',
  'googlemail.com',

  // Microsoft
  'outlook.com',
  'hotmail.com',
  'hotmail.co.uk',
  'hotmail.fr',
  'hotmail.de',
  'hotmail.es',
  'hotmail.it',
  'live.com',
  'live.co.uk',
  'live.fr',
  'msn.com',
  'passport.com',

  // Yahoo
  'yahoo.com',
  'yahoo.co.uk',
  'yahoo.fr',
  'yahoo.de',
  'yahoo.es',
  'yahoo.it',
  'yahoo.ca',
  'yahoo.co.in',
  'yahoo.com.br',
  'yahoo.com.au',
  'ymail.com',
  'rocketmail.com',

  // Apple
  'icloud.com',
  'me.com',
  'mac.com',

  // ProtonMail
  'protonmail.com',
  'proton.me',
  'pm.me',

  // AOL
  'aol.com',
  'aim.com',

  // Zoho Consumer
  'zoho.com',
  'zohomail.com',

  // GMX & Web.de
  'gmx.com',
  'gmx.net',
  'gmx.de',
  'gmx.at',
  'web.de',

  // Yandex & Mail.ru
  'yandex.com',
  'yandex.ru',
  'mail.ru',
  'inbox.ru',
  'list.ru',

  // Other Major Personal Mail Providers
  'mail.com',
  'email.com',
  'inbox.com',
  'rediffmail.com',
  'fastmail.com',
  'fastmail.fm',
  'hushmail.com',
  'tutanota.com',
  'tutamail.com',
  'tuta.io',
  'lycos.com',
  'sina.com',
  '163.com',
  '126.com',
  'qq.com',
  'foxmail.com',
  'naver.com',
  'daum.net',
  'hanmail.net',
  'libero.it',
  'virgilio.it',
  'sapo.pt',
  'rambler.ru',
  'wanadoo.fr',
  'orange.fr',
  'laposte.net',
  'comcast.net',
  'verizon.net',
  'att.net',
  'sbcglobal.net',
  'cox.net',

  // Popular Disposable & Temporary Email Providers
  'mailinator.com',
  '10minutemail.com',
  'tempmail.com',
  'temp-mail.org',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'throwawaymail.com',
  'trashmail.com',
  'dispostable.com',
  'sharklasers.com',
  'getnada.com',
  'maildrop.cc',
  'crazymailing.com',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'burnermail.io',
  'fakeinbox.com',
  'byom.de',
  '0815.ru',
  'dayrep.com',
  'einrot.com',
  'fleckens.hu',
  'gustr.com',
  'jourrapide.com',
  'rhyta.com',
  'superrito.com',
  'teleworm.us',
]);

export interface EmailValidationResult {
  isValid: boolean;
  reason?: string;
  domain?: string;
}

/**
 * Validates whether an email is a valid company/business email address.
 * Rejects empty emails, invalid syntax, and personal/free domain providers.
 */
export function validateBusinessEmail(email: string): EmailValidationResult {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { isValid: false, reason: 'Email address is required.' };
  }

  // Standard email format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, reason: 'Please enter a valid email address format.' };
  }

  const parts = trimmed.split('@');
  if (parts.length !== 2) {
    return { isValid: false, reason: 'Please enter a valid email address.' };
  }

  const domain = parts[1];

  // Check if domain is in the free/personal email blocklist
  if (FREE_EMAIL_DOMAINS.has(domain)) {
    return {
      isValid: false,
      reason: 'Please enter a business/company email address. Personal email providers (Gmail, Yahoo, Outlook, etc.) are not accepted.',
      domain,
    };
  }

  return { isValid: true, domain };
}

/**
 * Server-side DNS MX record lookup to ensure the domain has valid mail servers configured.
 * Safely handles server environment dynamic imports so client components won't break.
 */
export async function verifyMxRecord(domain: string): Promise<EmailValidationResult> {
  if (typeof window !== 'undefined') {
    // Client-side fallback
    return { isValid: true, domain };
  }

  try {
    const dns = await import('node:dns');
    const records = await dns.promises.resolveMx(domain);

    if (!records || records.length === 0) {
      return {
        isValid: false,
        reason: `The domain "${domain}" does not have valid mail server (MX) records.`,
        domain,
      };
    }

    return { isValid: true, domain };
  } catch (error) {
    console.warn(`DNS MX resolution warning for domain ${domain}:`, error);
    // If DNS resolution fails due to domain not existing
    return {
      isValid: false,
      reason: `Could not verify mail server for domain "${domain}". Please check for typos.`,
      domain,
    };
  }
}
