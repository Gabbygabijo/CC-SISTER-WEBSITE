import { motion } from 'motion/react';
import { useState } from 'react';
import { EASE_OUT, VIEWPORT_ONCE } from '../lib/motion';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Share your postcode, the size of your home and the service you are after.',
  },
  {
    number: '02',
    title: 'Receive Your Quote',
    description:
      'We send a clear quote for you to review, with no obligation.',
  },
  {
    number: '03',
    title: 'Schedule Your Cleaning',
    description:
      'Pick a day and time that suits you, one-off or on a regular schedule.',
  },
  {
    number: '04',
    title: 'Enjoy Your Clean Home',
    description:
      'Our cleaner arrives, gets to work and leaves your home ready to enjoy.',
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<string>('01');

  return (
    <section
      id="how-it-works"
      className="scroll-mt-12 bg-surface-tint py-16 sm:py-20 lg:py-21.5"
    >
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="Getting Your Home Clean Is Simple"
          titleClassName="max-w-151.25"
        />

        <div className="mt-8 grid grid-cols-1 gap-7 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:mt-24 lg:grid-cols-4 lg:gap-7">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === step.number;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: EASE_OUT,
                }}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setActiveStep(step.number)}
                onClick={() => setActiveStep(step.number)}
                className="group relative cursor-default pt-5 pb-2 sm:pt-6.5 sm:pb-4"
              >
                {/* Animated top border bar */}
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + idx * 0.1,
                    ease: EASE_OUT,
                  }}
                  className={[
                    'absolute inset-x-0 top-0 h-0.75 origin-left transition-colors duration-300',
                    isActive ? 'bg-brand-hover' : 'bg-brand group-hover:bg-brand-hover',
                  ].join(' ')}
                />

                <p
                  className={[
                    'type-step-number transition-colors duration-300',
                    isActive ? 'text-brand-hover!' : 'text-ink',
                  ].join(' ')}
                >
                  {step.number}
                </p>

                <div className="mt-4 sm:mt-7.25">
                  <h3 className="type-card-title text-[20px] sm:text-[22px] lg:text-[24px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] font-normal leading-normal text-ink-body sm:mt-2.75 sm:text-[16px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
