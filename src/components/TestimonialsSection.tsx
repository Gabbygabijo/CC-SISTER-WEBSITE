import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { EASE_OUT, SPRING_GENTLE, SPRING_SNAPPY, VIEWPORT_ONCE } from '../lib/motion';
import { Container } from './Container';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TrustpilotStars,
  TrustpilotWordmark,
} from './Icons';
import { SectionHeader } from './SectionHeader';

interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  service: string;
  quote: string;
}

const TESTIMONIAL_PAGES: TestimonialItem[][] = [
  [
    {
      id: 'mitchel-1',
      name: 'Mitchel S.',
      initials: 'MS',
      avatarBg: 'bg-surface-faq text-brand-hover',
      service: 'Ironing and Laundry Service',
      quote:
        '“Cleaning Circle makes every interaction easy, their rates are fair and they make the scheduling process completely stress free.”',
    },
    {
      id: 'claire-1',
      name: 'Claire H.',
      initials: 'CH',
      avatarBg: 'bg-surface-areas text-brand-hover',
      service: 'Regular Home Cleaning',
      quote:
        '“Reliable domestic and office cleaning services designed around your schedule, with transparent pricing and spotless results every time.”',
    },
    {
      id: 'daniel-1',
      name: 'Daniel R.',
      initials: 'DR',
      avatarBg: 'bg-surface-faq text-brand-hover',
      service: 'End of Tenancy Cleaning',
      quote:
        '“Booking our end of tenancy clean was effortless. The team arrived right on time and left every room looking brand new.”',
    },
  ],
  [
    {
      id: 'sophie-2',
      name: 'Sophie W.',
      initials: 'SW',
      avatarBg: 'bg-surface-areas text-brand-hover',
      service: 'Fortnightly Home Cleaning',
      quote:
        '“Having the same friendly cleaner every fortnight makes such a difference. Everything is consistently fresh when we get home.”',
    },
    {
      id: 'oliver-2',
      name: 'Oliver T.',
      initials: 'OT',
      avatarBg: 'bg-surface-faq text-brand-hover',
      service: 'Regular Home Cleaning',
      quote:
        '“Clear quote upfront with zero surprises. Communication has been responsive from our very first enquiry.”',
    },
    {
      id: 'amara-2',
      name: 'Amara K.',
      initials: 'AK',
      avatarBg: 'bg-surface-areas text-brand-hover',
      service: 'Ironing and Laundry Service',
      quote:
        '“Everything comes back neatly pressed and folded. It has given us our Sunday evenings back completely.”',
    },
  ],
  [
    {
      id: 'hannah-3',
      name: 'Hannah B.',
      initials: 'HB',
      avatarBg: 'bg-surface-faq text-brand-hover',
      service: 'Weekly Home Cleaning',
      quote:
        '“Super thorough in the kitchen and bathrooms, and always respectful of our home. Couldn’t recommend Cleaning Circle enough.”',
    },
    {
      id: 'george-3',
      name: 'George P.',
      initials: 'GP',
      avatarBg: 'bg-surface-areas text-brand-hover',
      service: 'End of Tenancy Cleaning',
      quote:
        '“Passed our inventory check without a single note. Worth every penny for the peace of mind on moving day.”',
    },
    {
      id: 'priya-3',
      name: 'Priya N.',
      initials: 'PN',
      avatarBg: 'bg-surface-faq text-brand-hover',
      service: 'Regular Home Cleaning',
      quote:
        '“Flexible whenever we need to adjust a day around work travel. Always professional, trustworthy, and detail-oriented.”',
    },
  ],
];

const SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 32 : -32,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -32 : 32,
  }),
};

export function TestimonialsSection() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const totalPages = TESTIMONIAL_PAGES.length;

  const paginate = (nextDirection: number) => {
    setPage(([current]) => {
      const nextIndex = (current + nextDirection + totalPages) % totalPages;
      return [nextIndex, nextDirection];
    });
  };

  const goToPage = (targetIndex: number) => {
    setPage(([current]) => [targetIndex, targetIndex >= current ? 1 : -1]);
  };

  const currentItems = TESTIMONIAL_PAGES[page];

  return (
    <section
      id="reviews"
      className="scroll-mt-12 bg-surface py-16 sm:py-20 lg:py-21.5"
    >
      <Container>
        {/* Header Row + Trustpilot Summary */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by Homes Like Yours"
            titleClassName="max-w-129"
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
            className="flex flex-col items-start gap-2 md:items-end"
          >
            <TrustpilotWordmark className="h-6.5 w-auto sm:h-7.5" />
            <TrustpilotStars className="h-6.5 w-auto sm:h-7.5" />
          </motion.div>
        </div>

        {/* Testimonial Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="-mx-3 mt-9 overflow-hidden px-3 py-3 sm:mt-12 lg:mt-14.25"
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={page}
              custom={direction}
              variants={SLIDE_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: EASE_OUT }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-4.75"
            >
              {currentItems.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={SPRING_GENTLE}
                  className="flex min-h-56 flex-col rounded-testimonial border border-black/4 bg-surface px-6 py-7 shadow-testimonial transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] sm:min-h-69.5 sm:px-6.25 sm:py-8.75"
                >
                  <div className="flex flex-col gap-4">
                    {/* Reviewer Profile */}
                    <div className="flex items-center gap-2.75">
                      <div className="flex h-12.25 w-12.25 shrink-0 items-center justify-center rounded-full border-[0.6px] border-brand p-1">
                        <span
                          aria-hidden="true"
                          className={`flex h-full w-full items-center justify-center rounded-full text-[13px] font-semibold tracking-tight ${item.avatarBg}`}
                        >
                          {item.initials}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[16.4px] font-medium leading-tight text-ink">
                          {item.name}
                        </p>
                        <p className="mt-1 truncate text-[13.15px] font-normal leading-tight text-ink-body">
                          {item.service}
                        </p>
                      </div>
                    </div>

                    {/* 5 Green Trustpilot Stars */}
                    <TrustpilotStars className="h-5.75 w-auto self-start" />
                  </div>

                  {/* Quote */}
                  <p className="type-quote mt-6 text-[15px] sm:mt-7 sm:text-[16px]">
                    {item.quote}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-3.5 sm:mt-11 lg:mt-13">
          <motion.button
            type="button"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={SPRING_SNAPPY}
            aria-label="Previous testimonials"
            className="inline-flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-line-soft bg-surface text-ink-body shadow-control transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-15.5 sm:w-15.5"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </motion.button>

          <div
            className="flex items-center gap-1.25"
            role="tablist"
            aria-label="Testimonial pages"
          >
            {TESTIMONIAL_PAGES.map((_, idx) => {
              const isActive = idx === page;
              return (
                <motion.button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show testimonial group ${idx + 1}`}
                  onClick={() => goToPage(idx)}
                  animate={{
                    width: isActive ? 27 : 26,
                    backgroundColor: isActive ? '#b9c32e' : '#d2d2d2',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={SPRING_GENTLE}
                  className="h-2 cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                />
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            transition={SPRING_SNAPPY}
            aria-label="Next testimonials"
            className="inline-flex h-13 w-13 cursor-pointer items-center justify-center rounded-full border border-line-soft bg-surface text-ink-body shadow-control transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-15.5 sm:w-15.5"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
