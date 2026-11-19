import { motion } from 'motion/react';
import { EASE_OUT, SPRING_GENTLE, VIEWPORT_ONCE } from '../lib/motion';
import { TrustpilotStars, TrustpilotWordmark } from './Icons';

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
      className={`relative z-20 w-full max-w-295 rounded-3xl bg-surface px-6 py-7 shadow-highlights sm:rounded-[33px] sm:px-8 sm:py-8 lg:min-h-38 lg:px-9 lg:py-7.5 ${className}`}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 lg:grid-cols-4">
        {/* Column 1: Trustpilot Rating */}
        <motion.a
          href="#reviews"
          whileHover={{ y: -2 }}
          transition={SPRING_GENTLE}
          aria-label="Rated Excellent on Trustpilot - View testimonials"
          className="group flex flex-col justify-center border-b border-line pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6 lg:pr-7.5"
        >
          <TrustpilotWordmark className="h-5.5 w-auto self-start" />
          <p className="mt-2 text-[13px] font-normal leading-tight text-ink-body transition-colors group-hover:text-brand-hover sm:text-[13.5px]">
            Rated Excellent on Trustpilot
          </p>
          <TrustpilotStars className="mt-2.5 h-4.5 w-auto self-start" />
        </motion.a>

        {/* Columns 2, 3, 4: Highlight Items */}
        {items.map((item, idx) => {
          return (
            <motion.div
              key={item.title}
              whileHover={{ y: -2 }}
              transition={SPRING_GENTLE}
              className={[
                'group flex flex-col justify-center',
                // Mobile (< md): border-b on items 0 and 1
                idx < 2 ? 'border-b border-line pb-6 md:border-b-0 md:pb-0' : '',
                // Tablet (md 2x2):
                idx === 0 ? 'md:pl-6 lg:border-r lg:px-7.5' : '',
                idx === 1
                  ? 'md:border-t md:border-line md:pt-6 md:border-r md:pr-6 lg:border-t-0 lg:pt-0 lg:border-r lg:px-7.5'
                  : '',
                idx === 2
                  ? 'md:border-t md:border-line md:pt-6 md:pl-6 lg:border-t-0 lg:pt-0 lg:pl-7.5'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <h2 className="text-[16px] font-medium leading-[1.25] text-ink transition-colors group-hover:text-brand-hover">
                {item.title}
              </h2>
              <p className="mt-2 text-[13.5px] font-normal leading-[1.43] text-ink-body sm:text-[14px]">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
