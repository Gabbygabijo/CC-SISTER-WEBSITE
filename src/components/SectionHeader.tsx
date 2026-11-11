import { motion } from 'motion/react';
import { EASE_OUT, VIEWPORT_ONCE } from '../lib/motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  className = '',
  titleClassName = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className={className}
    >
      <p className="type-eyebrow mb-3 text-[13px] sm:mb-4 sm:text-[15px] lg:mb-4.75 lg:text-[16px]">
        {eyebrow}
      </p>
      <h2
        className={`type-section-title text-[26px] leading-[1.22] sm:text-[32px] lg:text-[36px] lg:leading-11 ${titleClassName}`}
      >
        {title}
      </h2>
    </motion.div>
  );
}
