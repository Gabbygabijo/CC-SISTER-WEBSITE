import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { EASE_OUT, SPRING_SNAPPY, VIEWPORT_ONCE } from '../lib/motion';
import { Container } from './Container';
import { PlusIcon } from './Icons';
import { SectionHeader } from './SectionHeader';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const LEFT_FAQS: FaqItem[] = [
  {
    id: 'arrange-cleaning',
    question: 'How do I arrange a cleaning?',
    answer:
      'Simply fill in our quick quote form below or call us on 020 8059 3982. Share your postcode, home size, and the service you need, and we will send a clear, no-obligation quote.',
  },
  {
    id: 'services-provided',
    question: 'What cleaning services do you provide?',
    answer:
      'We offer Regular Home Cleaning (weekly or fortnightly), End of Tenancy Cleaning, and Laundry & Ironing across London.',
  },
  {
    id: 'change-or-cancel',
    question: 'Can I change or cancel a booking?',
    answer:
      'Yes — you can reschedule or pause a visit easily. Just let us know in advance and we will arrange a time that works around your schedule.',
  },
];

const RIGHT_FAQS: FaqItem[] = [
  {
    id: 'regular-cleaning',
    question: 'Can I arrange regular cleaning?',
    answer:
      'Yes. We can set up weekly or fortnightly visits with the same trusted cleaner wherever possible so your home stays consistently fresh.',
  },
  {
    id: 'cleaning-products',
    question: 'Do I need to provide cleaning products?',
    answer:
      'For regular cleans, cleaners typically use the products and equipment already in your home so surfaces are cared for the way you prefer. For end of tenancy cleans, we can bring full supplies on request.',
  },
  {
    id: 'price-calculated',
    question: 'How is the cleaning price calculated?',
    answer:
      'Your quote is based on the number of bedrooms and bathrooms, the type of service, and how often you would like us to visit — with transparent pricing agreed upfront.',
  },
];

function FaqAccordionCard({
  item,
  isOpen,
  onToggle,
  delay,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.45, delay, ease: EASE_OUT }}
      className="rounded-card-sm bg-surface-faq transition-colors duration-200 hover:bg-[#e1e5ad]"
    >
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        className="flex min-h-18 w-full cursor-pointer items-center justify-between gap-4 rounded-card-sm px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:min-h-19.5 sm:px-6 sm:py-4.75"
      >
        <span className="text-[15px] font-normal leading-snug text-ink sm:text-[16px]">
          {item.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={SPRING_SNAPPY}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white bg-surface text-brand sm:h-10 sm:w-10"
        >
          <PlusIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[14.5px] font-normal leading-relaxed text-ink-body sm:px-6 sm:text-[15px]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="scroll-mt-12 bg-surface-tint py-16 sm:py-20 lg:py-21.5"
    >
      <Container>
        <SectionHeader
          eyebrow="FAQs"
          title="Questions? We’ve Got Answers."
          titleClassName="max-w-141.25"
        />

        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5 lg:mt-12.75 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex flex-1 flex-col gap-4 sm:gap-5">
            {LEFT_FAQS.map((item, idx) => (
              <FaqAccordionCard
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={handleToggle}
                delay={idx * 0.06}
              />
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-4 sm:gap-5">
            {RIGHT_FAQS.map((item, idx) => (
              <FaqAccordionCard
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={handleToggle}
                delay={0.12 + idx * 0.06}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
