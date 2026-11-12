import { AnimatePresence, motion } from 'motion/react';
import { type FormEvent, useState } from 'react';
import { EASE_OUT, VIEWPORT_ONCE } from '../lib/motion';
import { ActionButton } from './Button';
import { Container } from './Container';
import {
  CheckCircleIcon,
  ChevronDownIcon,
  EmailIcon,
  LocationPinIcon,
  PhoneIcon,
} from './Icons';
import { SectionHeader } from './SectionHeader';

const SERVICE_OPTIONS = [
  'Regular Home Cleaning',
  'End of Tenancy Cleaning',
  'Laundry & Ironing',
  'One-off / Deep Cleaning',
  'Commercial Cleaning',
] as const;

interface QuoteFormState {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  notes: string;
}

const INITIAL_FORM: QuoteFormState = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  notes: '',
};

export function GetQuoteSection() {
  const [form, setForm] = useState<QuoteFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.service.trim()) {
      setErrorMessage(
        'Please enter your name, email address, and select a cleaning service.',
      );
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section
      id="quote"
      className="scroll-mt-12 bg-surface py-16 sm:py-20 lg:py-22"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,496px)_minmax(0,1fr)] lg:items-start lg:gap-x-14 lg:gap-y-0 xl:gap-x-24">
          {/* Intro Copy (Top-left on desktop, first on mobile) */}
          <div className="lg:col-start-1 lg:row-start-1">
            <SectionHeader
              eyebrow="Get a quote"
              title="Ready for a Cleaner, More Comfortable Home?"
              titleClassName="max-w-125.25"
            />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT }}
              className="type-lead mt-4 max-w-112.75 text-[16px] leading-relaxed sm:mt-6 sm:text-[18px] lg:mt-7 lg:text-[20px]"
            >
              Tell us what you need, and let us help you find the right cleaning
              service for your home.
            </motion.p>
          </div>

          {/* Quote Form Card (Right column spanning on desktop, second on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            className="rounded-card border border-line-soft bg-surface p-6 shadow-xs sm:p-9 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:px-10 lg:py-12.5"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className="flex min-h-105 flex-col items-center justify-center px-2 py-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <CheckCircleIcon className="h-8 w-8" />
                  </div>
                  <h3 className="type-card-title mt-5 text-[22px] sm:text-[24px]">
                    Quote Request Received
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-body sm:text-[16px]">
                    Thank you, <span className="font-medium text-ink">{form.fullName}</span>.
                    We have noted your request for{' '}
                    <span className="font-medium text-ink">{form.service}</span> and will
                    reply to <span className="font-medium text-ink">{form.email}</span>{' '}
                    shortly.
                  </p>
                  <ActionButton
                    variant="outline"
                    size="md"
                    onClick={handleReset}
                    className="mt-7"
                  >
                    Send Another Enquiry
                  </ActionButton>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="flex flex-col gap-5.5 sm:gap-7.25">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="quote-full-name"
                        className="text-[15px] font-normal text-ink sm:text-[16px]"
                      >
                        Full Name
                      </label>
                      <input
                        id="quote-full-name"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, fullName: e.target.value }))
                        }
                        placeholder="Enter your name"
                        className="h-11.5 w-full rounded-card-sm border border-line bg-surface px-3.75 text-[14px] text-ink placeholder:text-ink-subtle transition-colors focus:border-brand focus:outline-none"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="quote-email"
                          className="text-[15px] font-normal text-ink sm:text-[16px]"
                        >
                          Email Address
                        </label>
                        <input
                          id="quote-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, email: e.target.value }))
                          }
                          placeholder="Enter your email"
                          className="h-11.5 w-full rounded-card-sm border border-line bg-surface px-3.75 text-[14px] text-ink placeholder:text-ink-subtle transition-colors focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="quote-phone"
                          className="text-[15px] font-normal text-ink sm:text-[16px]"
                        >
                          Phone Number
                        </label>
                        <input
                          id="quote-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="Enter your phone number"
                          className="h-11.5 w-full rounded-card-sm border border-line bg-surface px-3.75 text-[14px] text-ink placeholder:text-ink-subtle transition-colors focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Service Required */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="quote-service"
                        className="text-[15px] font-normal text-ink sm:text-[16px]"
                      >
                        Service required
                      </label>
                      <div className="relative">
                        <select
                          id="quote-service"
                          name="service"
                          required
                          value={form.service}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, service: e.target.value }))
                          }
                          className={`h-11.5 w-full appearance-none rounded-card-sm border border-line bg-surface pr-10 pl-4 text-[14px] transition-colors focus:border-brand focus:outline-none ${
                            form.service ? 'text-ink' : 'text-ink-subtle'
                          }`}
                        >
                          <option value="" disabled>
                            Select Service
                          </option>
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option} className="text-ink">
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3.5 h-5 w-5 -translate-y-1/2 text-ink-subtle" />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="quote-notes"
                        className="text-[15px] font-normal text-ink sm:text-[16px]"
                      >
                        Additional information (optional)
                      </label>
                      <textarea
                        id="quote-notes"
                        name="notes"
                        rows={4}
                        value={form.notes}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, notes: e.target.value }))
                        }
                        placeholder="Number of bedrooms and bathrooms, preferred days, anything we should know"
                        className="min-h-26.5 w-full resize-y rounded-card-sm border border-line bg-surface px-4 py-3 text-[14px] leading-relaxed text-ink placeholder:text-ink-subtle transition-colors focus:border-brand focus:outline-none"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <p
                      role="alert"
                      className="mt-4 text-[13.5px] font-medium text-red-600"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <ActionButton
                    type="submit"
                    variant="primary"
                    size="full"
                    className="mt-7 sm:mt-8.5"
                  >
                    Request a free Quote
                  </ActionButton>

                  <p className="mt-3.5 text-center text-[13px] leading-snug text-ink-subtle sm:mt-4 sm:text-[14px]">
                    Free, no obligation. We only use your details to reply to this
                    enquiry.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Us Details (Bottom-left on desktop, third on mobile) */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.45, delay: 0.14, ease: EASE_OUT }}
            className="scroll-mt-12 border-t border-brand pt-7 sm:pt-8 lg:col-start-1 lg:row-start-2 lg:mt-14"
          >
            <p className="type-eyebrow">Contact Us</p>

            <div className="mt-7 flex flex-col gap-7 sm:mt-10 sm:gap-9">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <LocationPinIcon className="mt-0.5 h-6.5 w-6.5 shrink-0 text-brand" />
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug text-ink-strong sm:text-[20px]">
                    Our Address
                  </h3>
                  <p className="mt-0.5 max-w-88.5 text-[15px] leading-normal text-ink-strong sm:text-[16px]">
                    Building 3, Chiswick Park, 566 Chiswick High Road, London,
                    W4 5YA
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <PhoneIcon className="mt-1 h-5.5 w-5.5 shrink-0 text-brand" />
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug text-ink-strong sm:text-[20px]">
                    Telephone
                  </h3>
                  <a
                    href="tel:02080593982"
                    className="mt-0.5 inline-block text-[15px] leading-normal text-ink-strong transition-colors hover:text-brand sm:text-[16px]"
                  >
                    020 8059 3982
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-3.5">
                <EmailIcon className="mt-1 h-5.5 w-5.5 shrink-0 text-brand" />
                <div>
                  <h3 className="text-[17px] font-semibold leading-snug text-ink-strong sm:text-[20px]">
                    E-mail
                  </h3>
                  <a
                    href="mailto:help@cleaning-circle.co.uk"
                    className="mt-0.5 inline-block text-[15px] leading-normal text-ink-strong transition-colors hover:text-brand sm:text-[16px]"
                  >
                    help@cleaning-circle.co.uk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
