import { AnimatePresence, motion } from 'motion/react';
import { EASE_OUT, SPRING_SNAPPY } from '../lib/motion';
import { ChevronDownIcon, CircleMinusIcon } from './Icons';

export interface ResidentialService {
  id: string;
  title: string;
  description: string;
  included: string[];
}

interface ServiceAccordionItemProps {
  service: ResidentialService;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  showDivider?: boolean;
}

export function ServiceAccordionItem({
  service,
  isExpanded,
  onToggle,
  showDivider = true,
}: ServiceAccordionItemProps) {
  return (
    <div
      className={[
        'py-5.5 first:pt-0',
        showDivider ? 'border-b border-line' : 'pb-0',
      ].join(' ')}
    >
      <h3 className="type-card-title text-[20px] sm:text-[22px] lg:text-[24px]">
        {service.title}
      </h3>

      <p className="mt-3 text-[15px] font-normal leading-normal text-ink-body sm:mt-4 sm:text-[16px]">
        {service.description}
      </p>

      <motion.button
        type="button"
        onClick={() => onToggle(service.id)}
        whileTap={{ scale: 0.98 }}
        aria-expanded={isExpanded}
        aria-controls={`service-panel-${service.id}`}
        className="mt-4 inline-flex cursor-pointer items-center gap-1.25 text-left text-[15px] font-semibold leading-[1.49] text-brand transition-colors hover:text-brand-hover sm:text-[16px]"
      >
        <span>What is typically included</span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={SPRING_SNAPPY}
          className="inline-flex"
        >
          <ChevronDownIcon className="h-5 w-5" />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`service-panel-${service.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <ul className="mt-6 grid grid-cols-1 gap-x-9.25 gap-y-4 sm:mt-7.5 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2">
              {service.included.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: 0.05 + idx * 0.045,
                    ease: EASE_OUT,
                  }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2.25 text-[15px] leading-[1.45] text-ink-body sm:text-[16px]"
                >
                  <CircleMinusIcon className="h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
