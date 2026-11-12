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
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[86%_top] will-change-transform sm:object-[74%_85%] lg:object-right-bottom"
      />

      {/* Soft left-side light gradient so typography remains crisp across breakpoints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/98 via-white/92 via-58% to-white/10 sm:via-white/65 sm:via-45% sm:to-transparent lg:from-white/95 lg:via-white/55 lg:via-40% lg:to-transparent"
      />

      <Container className="relative z-10 pb-22 pt-8 sm:pb-28 sm:pt-14 lg:min-h-156.75 lg:pb-38.75 lg:pt-18.25">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: EASE_OUT }}
          className="type-hero-label mb-3 text-[11px] sm:mb-8 sm:text-[15px] lg:mb-12.25 lg:text-[16px]"
        >
          Residential cleaning
        </motion.p>

        <div className="sm:max-w-120 lg:max-w-150.5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: EASE_OUT }}
            className="type-hero-title max-w-54 min-[410px]:max-w-60 text-[24px] leading-[1.15] sm:max-w-115 sm:text-[40px] lg:max-w-143 lg:text-[48px]"
          >
            A Cleaner Home. A Better Way to Live.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: EASE_OUT }}
            className="mt-3 max-w-54 min-[410px]:max-w-60 text-[13px] font-normal leading-[1.45] text-ink-body sm:mt-6 sm:max-w-112 sm:text-[18px] lg:mt-6.5 lg:max-w-126.75 lg:text-[20px]"
          >
            Enjoy a beautifully maintained home with reliable, professional
            cleaning services designed around your lifestyle and schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease: EASE_OUT }}
            className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-6 lg:mt-9.75 lg:gap-10"
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
