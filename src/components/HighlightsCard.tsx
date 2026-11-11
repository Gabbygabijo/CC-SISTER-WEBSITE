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
    <div
      className={`relative z-20 max-w-222.5 rounded-3xl bg-surface px-6 py-7 shadow-highlights sm:rounded-highlights sm:px-8 sm:py-9 lg:min-h-42.25 lg:px-10 lg:py-11 ${className}`}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
        {items.map((item, idx) => {
          const hasNext = idx < items.length - 1;
          return (
            <div
              key={item.title}
              className={[
                hasNext
                  ? 'border-b border-line pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6 lg:pr-8'
                  : '',
                idx > 0 ? 'md:pl-6 lg:pl-8' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <h2 className="text-[16px] font-medium leading-tight text-ink">
                {item.title}
              </h2>
              <p className="mt-2.5 text-[14px] font-normal leading-[1.43] text-ink-body lg:mt-2.75">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

