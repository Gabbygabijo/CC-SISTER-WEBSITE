import { motion } from 'motion/react';
import { EASE_OUT, SPRING_SNAPPY, VIEWPORT_ONCE } from '../lib/motion';
import { BrandLogo } from './BrandLogo';
import { Container } from './Container';
import {
  CopyrightIcon,
  EmailIcon,
  FacebookIcon,
  GooglePlusIcon,
  InstagramIcon,
  LocationPinIcon,
  PhoneIcon,
} from './Icons';

const QUICK_LINKS = [
  { label: 'Pricing', href: '#quote' },
  { label: 'About Us', href: '#why-choose-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const;

const SERVICE_LINKS = [
  { label: 'Commercial', href: '#quote' },
  { label: 'Domestic', href: '#services' },
  { label: 'Waste Management', href: '#quote' },
] as const;

const SOCIAL_LINKS = [
  { label: 'Google Profile', href: '#contact', Icon: GooglePlusIcon },
  { label: 'Instagram', href: '#contact', Icon: InstagramIcon },
  { label: 'Facebook', href: '#contact', Icon: FacebookIcon },
] as const;

function SocialLinksRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <motion.a
          key={label}
          href={href}
          aria-label={label}
          whileHover={{ y: -2, scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={SPRING_SNAPPY}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[0.9px] border-brand text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Icon className="h-4.5 w-4.5" />
        </motion.a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface pt-12 pb-8 sm:pt-14 sm:pb-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="grid grid-cols-1 gap-9 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)_minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-10"
        >
          {/* Brand Summary + Desktop Socials */}
          <div className="flex flex-col justify-between">
            <div className="flex items-start gap-3">
              <BrandLogo size="md" />
              <div className="max-w-60">
                <h2 className="type-footer-heading">Cleaning Circle</h2>
                <p className="type-small mt-1.25">
                  Reliable domestic and commercial cleaning services
                </p>
              </div>
            </div>

            <SocialLinksRow className="mt-8 hidden lg:flex" />
          </div>

          {/* Quick Link & Services (2-column side-by-side on mobile, separate cols on lg+) */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            <div>
              <h3 className="type-footer-heading">Quick Link</h3>
              <ul className="mt-5 flex flex-col gap-3.5 sm:mt-6.5 sm:gap-4">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="type-small inline-block transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="type-footer-heading">Services</h3>
              <ul className="mt-5 flex flex-col gap-3.5 sm:mt-6.5 sm:gap-4">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="type-small inline-block transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column + Mobile Socials */}
          <div>
            <h3 className="type-footer-heading">Contact</h3>
            <ul className="mt-4.5 flex flex-col gap-4">
              <li className="flex items-start gap-2.5">
                <LocationPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="type-small max-w-65">
                  Building 3, Chiswick Park, 566 Chiswick High Road, London,
                  W4 5YA
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4.5 w-4.5 shrink-0 text-brand" />
                <span className="type-small">
                  <a
                    href="tel:07565435165"
                    className="transition-colors hover:text-brand"
                  >
                    07565435165
                  </a>
                  ,{' '}
                  <a
                    href="tel:02080593982"
                    className="transition-colors hover:text-brand"
                  >
                    020 8059 3982
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <EmailIcon className="h-4.5 w-4.5 shrink-0 text-brand" />
                <a
                  href="mailto:help@cleaning-circle.co.uk"
                  className="text-[15px] text-ink-body transition-colors hover:text-brand"
                >
                  help@cleaning-circle.co.uk
                </a>
              </li>
            </ul>

            <SocialLinksRow className="mt-6 lg:hidden" />
          </div>
        </motion.div>

        {/* Bottom Divider & Legal Links */}
        <div className="mt-9 border-t border-brand pt-4.5 sm:mt-14">
          <div className="flex flex-col items-start gap-2.5 md:flex-row-reverse md:items-center md:justify-between">
            <div className="flex items-center gap-2.5 text-[14px] text-ink">
              <a href="#faqs" className="transition-colors hover:text-brand">
                Cleaner Blogs
              </a>
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-brand"
              />
              <a href="#contact" className="transition-colors hover:text-brand">
                Cleaner Careers
              </a>
            </div>

            <p className="flex items-center gap-2 text-[14px] text-ink">
              <CopyrightIcon className="h-4 w-4 shrink-0 text-brand" />
              <span>Copyright 2026 Cleaning circle</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

