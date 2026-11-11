import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HeroImage } from '../assets/images';
import { EASE_OUT } from '../lib/motion';
import { ActionButton } from './Button';
import { Container } from './Container';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-surface"
    >
      {/* Background photograph with gentle scroll parallax */}
      <motion.img
        src={HeroImage}
        alt="Cleaning Circle specialist wiping a marble coffee table in a bright living room"
        style={{ y: imageY, scale: imageScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[76%_85%] will-change-transform sm:object-[72%_85%] lg:object-right-bottom"
      />

      {/* Soft left-side light gradient so typography remains crisp across breakpoints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/95 via-white/75 via-45% to-white/10 sm:via-white/60 sm:to-transparent lg:from-white/95 lg:via-white/55 lg:via-40% lg:to-transparent"
      />

      <Container className="relative z-10 pb-24 pt-10 sm:pb-28 sm:pt-14 lg:min-h-156.75 lg:pb-38.75 lg:pt-18.25">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: EASE_OUT }}
          className="type-hero-label mb-5 text-[13px] sm:mb-8 sm:text-[15px] lg:mb-12.25 lg:text-[16px]"
        >
          Residential cleaning
        </motion.p>

        <div className="max-w-150.5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE_OUT }}
            className="type-hero-title max-w-143 text-[34px] leading-[1.14] sm:text-[42px] lg:text-[48px]"
          >
            A Cleaner Home. A Better Way to Live.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: EASE_OUT }}
            className="mt-4 max-w-126.75 text-[15px] font-normal leading-[1.45] text-ink-body sm:mt-6 sm:text-[18px] lg:mt-6.5 lg:text-[20px]"
          >
            Enjoy a beautifully maintained home with reliable, professional
            cleaning services designed around your lifestyle and schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease: EASE_OUT }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-6 lg:mt-9.75 lg:gap-10"
          >
            <ActionButton href="#quote" variant="primary" size="lg">
              Get a Quote
            </ActionButton>

            <ActionButton href="#services" variant="outline" size="lg">
              Our Services
            </ActionButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
