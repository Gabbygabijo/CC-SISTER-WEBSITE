export interface QuoteFields { fullName: string; email: string; phone: string; service: string; notes: string; }
interface Recaptcha { ready(callback: () => void): void; execute(key: string, options: { action: string }): Promise<string>; }
declare global { interface Window { grecaptcha?: Recaptcha; } }
let scriptReady: Promise<Recaptcha> | undefined;

// Load reCAPTCHA on first submission rather than every marketing-page visit.
function loadCaptcha(key: string): Promise<Recaptcha> {
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha);
  if (!scriptReady) scriptReady = new Promise<Recaptcha>((resolve, reject) => {
    const script = document.createElement('script');
    const timer = window.setTimeout(() => { script.remove(); reject(new Error('Verification timed out. Please try again.')); }, 10000);
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(key)}`;
    script.async = true;
    script.onload = () => { window.clearTimeout(timer); if (window.grecaptcha) resolve(window.grecaptcha); else reject(new Error('Verification is unavailable. Please try again.')); };
    script.onerror = () => { window.clearTimeout(timer); script.remove(); reject(new Error('Verification is unavailable. Please try again.')); };
    document.head.appendChild(script);
  }).catch((error: unknown) => { scriptReady = undefined; throw error; });
  return scriptReady;
}

export function validateQuoteFields(form: QuoteFields): string | null {
  if (!form.fullName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) || !form.service) return 'Please enter your name, a valid email address, and select a cleaning service.';
  if (form.fullName.length > 256 || form.email.length > 254 || form.phone.length > 40 || form.notes.length > 5000) return 'Please shorten your details: name 256, email 254, phone 40, and notes 5,000 characters maximum.';
  return null;
}

export async function submitQuote(form: QuoteFields, submissionId: string): Promise<void> {
  const key = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (!key) throw new Error('The enquiry form is not ready yet. Please contact us using the details below.');
  const captcha = await loadCaptcha(key);
  const token = await new Promise<string>((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error('Verification timed out. Please try again.')), 10000);
    captcha.ready(() => { captcha.execute(key, { action: 'sister_quote' }).then(resolve, reject).finally(() => window.clearTimeout(timer)); });
  });
  const response = await fetch('/api/forms/sister/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, submissionId, recaptchaToken: token }), signal: AbortSignal.timeout(28000) });
  const body = await response.json().catch(() => null);
  if (response.status !== 200 || body?.submissionId !== submissionId || body?.status !== 'received') {
    if (response.status === 400) throw new Error('Please check your details and try again.');
    throw new Error('We could not confirm receipt. Your details are still here; please try again.');
  }
}
