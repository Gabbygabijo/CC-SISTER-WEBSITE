interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'responsive';
  className?: string;
}

const SIZE_CLASSES = {
  sm: {
    wrapper: 'w-[50px] h-[50px]',
    text: 'text-[8.5px] leading-[7px] right-[6.5px] bottom-[8.5px]',
  },
  md: {
    wrapper: 'w-[60px] h-[60px]',
    text: 'text-[10.26px] leading-[8.4px] right-[8.5px] bottom-[11px]',
  },
  lg: {
    wrapper: 'w-[102px] h-[102px]',
    text: 'text-[17.44px] leading-[14.28px] right-[14px] bottom-[19px]',
  },
  responsive: {
    wrapper: 'w-12.5 h-12.5 sm:w-14.5 sm:h-14.5 lg:w-25.5 lg:h-25.5',
    text: 'text-[8.5px] leading-[7px] right-[6.5px] bottom-[8.5px] sm:text-[9.9px] sm:leading-[8.1px] sm:right-2 sm:bottom-2.5 lg:text-[17.44px] lg:leading-[14.28px] lg:right-3.5 lg:bottom-4.75',
  },
} as const;

export function BrandLogo({ size = 'lg', className = '' }: BrandLogoProps) {
  const styles = SIZE_CLASSES[size];

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-brand-mark shadow-(--shadow-logo-inset) select-none ${styles.wrapper} ${className}`}
      aria-label="Cleaning Circle"
    >
      <span
        className={`absolute text-right font-logo font-bold tracking-[-0.02em] text-white ${styles.text}`}
      >
        cleaning
        <br />
        circle
      </span>
    </span>
  );
}
