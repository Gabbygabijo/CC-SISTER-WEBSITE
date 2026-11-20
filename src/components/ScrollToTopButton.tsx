import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
import { SPRING_SNAPPY } from '../lib/motion';
import { ArrowUpIcon } from './Icons';

export interface ScrollToTopButtonProps {
  /** Scroll distance in pixels before the button appears. Defaults to 400. */
  threshold?: number;
  className?: string;
}

export function ScrollToTopButton({
  threshold = 400,
  className = '',
}: ScrollToTopButtonProps) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > threshold;
    }
    return false;
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const shouldShow = latest > threshold;
    setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
  });

  const handleScrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={SPRING_SNAPPY}
          aria-label="Scroll back to top"
          title="Scroll to top"
          className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-brand text-white shadow-control transition-colors duration-200 hover:bg-brand-hover hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:bottom-8 sm:right-8 sm:h-12 sm:w-12 ${className}`}
        >
          <ArrowUpIcon className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
