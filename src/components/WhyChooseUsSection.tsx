import { motion } from 'motion/react';
import type { ComponentType, SVGProps } from 'react';
import { EASE_OUT, SPRING_GENTLE, VIEWPORT_ONCE } from '../lib/motion';
import { Container } from './Container';
import {
  CalendarCheckIcon,
  CustomerHeartIcon,
  ShieldCheckIcon,
  UserBadgeCheckIcon,
} from './Icons';
import { SectionHeader } from './SectionHeader';

interface FeatureCardItem {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const FEATURES: FeatureCardItem[] = [
  {
    title: 'Professional and vetted cleaners',
    description:
      'Our cleaners are carefully selected and checked before they visit your home.',
    Icon: UserBadgeCheckIcon,
  },
  {
    title: 'Reliable and consistent service',
    description:
      'The same standards on every visit, with a regular team wherever possible.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Flexible cleaning arrangements',
    description:
      'Weekly, fortnightly, one-off or occasional. You choose the days and times.',
    Icon: CalendarCheckIcon,
  },
  {
    title: 'A customer-focused approach',
    description:
      'Friendly, responsive communication from your first enquiry to the final visit.',
    Icon: CustomerHeartIcon,
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="scroll-mt-12 bg-surface py-16 sm:py-20 lg:py-21.5"
    >
      <Container>
        <SectionHeader
          eyebrow="Why choose us"
          title="More Than Just a Clean Home"
          titleClassName="max-w-132.75"
        />

        <div className="mt-8 grid grid-cols-1 gap-4.5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-14.25 lg:gap-x-13.25 lg:gap-y-10.25">
          {FEATURES.map(({ title, description, Icon }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: EASE_OUT,
              }}
              whileHover={{ y: -5 }}
              className="group rounded-card-md border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/70 hover:shadow-[0_12px_30px_rgba(185,195,46,0.12)] sm:p-9 lg:min-h-65"
            >
              <motion.div
                transition={SPRING_GENTLE}
                className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white sm:h-18.5 sm:w-18.5"
              >
                <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9" />
              </motion.div>

              <div className="mt-5 max-w-119.25 sm:mt-6">
                <h3 className="type-card-title text-[20px] sm:text-[22px] lg:text-[24px]">
                  {title}
                </h3>
                <p className="mt-2 text-[14.5px] font-normal leading-normal text-ink-body sm:mt-2.75 sm:text-[16px]">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

