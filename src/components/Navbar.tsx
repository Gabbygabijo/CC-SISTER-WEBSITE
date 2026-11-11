import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { EASE_OUT, SPRING_SNAPPY } from '../lib/motion';
import { BrandLogo } from './BrandLogo';
import { ActionButton } from './Button';
import { Container } from './Container';
import { CloseIcon, EmailIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from './Icons';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#home');
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const indicatorHref = hoveredHref ?? activeHref;

  return (
    <header className="relative z-30 bg-surface">
      <Container className="relative">
        {/* Top contact utility strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-[11px] text-ink sm:justify-end sm:gap-x-6 sm:text-[13px] lg:h-9 lg:gap-x-7 lg:py-0 lg:text-[16px]">
          <a
            href="https://wa.me/442080593982"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-75"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            <span>020 8059 3982</span>
          </a>

          <a
            href="tel:02080593982"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-75"
          >
            <PhoneIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
            <span>020 8059 3982</span>
          </a>

          <a
            href="mailto:help@cleaning-circle.co.uk"
            className="inline-flex items-center gap-1 transition-opacity hover:opacity-75"
          >
            <EmailIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
            <span>help@cleaning-circle.co.uk</span>
          </a>
        </div>

        {/* Main navigation bar */}
        <div className="flex h-17 items-center justify-between lg:h-21">
          <motion.a
            href="#home"
            onClick={() => setActiveHref('#home')}
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={SPRING_SNAPPY}
            className="inline-flex items-center lg:absolute lg:left-12 lg:top-2.25 xl:left-16"
            aria-label="Cleaning Circle Home"
          >
            <BrandLogo size="sm" className="lg:hidden" />
            <BrandLogo size="lg" className="hidden lg:inline-flex" />
          </motion.a>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="ml-auto hidden items-center lg:flex"
            onMouseLeave={() => setHoveredHref(null)}
          >
            <ul className="flex items-center gap-5.5 xl:gap-7.5">
              {NAV_LINKS.map((link) => {
                const isHighlighted = indicatorHref === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onMouseEnter={() => setHoveredHref(link.href)}
                      onFocus={() => setHoveredHref(link.href)}
                      onBlur={() => setHoveredHref(null)}
                      onClick={() => setActiveHref(link.href)}
                      className={[
                        'relative whitespace-nowrap py-1.5 text-[15px] font-normal transition-colors xl:text-[16px]',
                        isHighlighted ? 'text-brand' : 'text-ink hover:text-brand',
                      ].join(' ')}
                    >
                      {link.label}
                      {isHighlighted && (
                        <motion.span
                          layoutId="navbar-active-indicator"
                          transition={SPRING_SNAPPY}
                          className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ActionButton
              href="#quote"
              variant="primary"
              size="md"
              className="ml-6 xl:ml-8.5"
            >
              Get a Quote
            </ActionButton>
          </nav>

          {/* Mobile actions */}
          <div className="ml-auto flex items-center gap-2.5 lg:hidden">
            <ActionButton href="#quote" variant="primary" size="sm">
              Get a Quote
            </ActionButton>

            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
      </Container>

      {/* Mobile slide-down drawer */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: EASE_OUT }}
            className="overflow-hidden border-t border-line bg-surface shadow-sm lg:hidden"
          >
            <ul className="flex flex-col gap-3 px-5 py-4 sm:px-8">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.04 + index * 0.03,
                    ease: EASE_OUT,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveHref(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={[
                      'block py-1 text-[15px] font-normal transition-colors',
                      activeHref === link.href
                        ? 'font-medium text-brand'
                        : 'text-ink hover:text-brand',
                    ].join(' ')}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
