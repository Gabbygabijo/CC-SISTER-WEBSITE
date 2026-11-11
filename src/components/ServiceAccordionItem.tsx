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

      <button
        type="button"
        onClick={() => onToggle(service.id)}
        aria-expanded={isExpanded}
        aria-controls={`service-panel-${service.id}`}
        className="mt-4 inline-flex cursor-pointer items-center gap-1.25 text-left text-[15px] font-semibold leading-[1.49] text-brand transition-colors hover:text-brand-hover sm:text-[16px]"
      >
        <span>What is typically included</span>
        <ChevronDownIcon
          className={[
            'h-5 w-5 transition-transform duration-200',
            isExpanded ? 'rotate-180' : 'rotate-0',
          ].join(' ')}
        />
      </button>

      {isExpanded && (
        <ul
          id={`service-panel-${service.id}`}
          className="mt-6 grid grid-cols-1 gap-x-9.25 gap-y-4 sm:mt-7.5 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2"
        >
          {service.included.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.25 text-[15px] leading-[1.45] text-ink-body sm:text-[16px]"
            >
              <CircleMinusIcon className="h-5 w-5 shrink-0 text-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

