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
    <div className={className}>
      <p className="type-eyebrow mb-3 text-[13px] sm:mb-4 sm:text-[15px] lg:mb-4.75 lg:text-[16px]">
        {eyebrow}
      </p>
      <h2
        className={`type-section-title text-[26px] leading-[1.22] sm:text-[32px] lg:text-[36px] lg:leading-11 ${titleClassName}`}
      >
        {title}
      </h2>
    </div>
  );
}

