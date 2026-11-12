import { motion } from 'motion/react';
import { EASE_OUT, SPRING_GENTLE, VIEWPORT_ONCE } from '../lib/motion';

export interface HighlightItem {
  title: string;
  description: string;
}

interface HighlightsCardProps {
  items: HighlightItem[];
  className?: string;
}

export function HighlightsCard({ items, className = '' }: HighlightsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className={`relative z-20 max-w-222.5 rounded-3xl bg-surface px-6 py-7 shadow-highlights sm:rounded-[33px] sm:px-8 sm:py-9 lg:min-h-42.25 lg:px-10 lg:py-11 ${className}`}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
        {items.map((item, idx) => {
          const hasNext = idx < items.length - 1;
          return (
            <motion.div
              key={item.title}
              whileHover={{ y: -2 }}
              transition={SPRING_GENTLE}
              className={[
                'group',
                hasNext
                  ? 'border-b border-line pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6 lg:pr-8'
                  : '',
                idx > 0 ? 'md:pl-6 lg:pl-8' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <h2 className="text-[16px] font-medium leading-[1.25] text-ink transition-colors group-hover:text-brand-hover">
                {item.title}
              </h2>
              <p className="mt-2.5 text-[14px] font-normal leading-[1.43] text-ink-body lg:mt-2.75">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
