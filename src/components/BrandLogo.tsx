interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_CLASSES = {
  sm: {
    wrapper: 'w-[54px] h-[54px]',
    text: 'text-[9.2px] leading-[7.6px] right-[7px] bottom-[9px]',
  },
  md: {
    wrapper: 'w-[60px] h-[60px]',
    text: 'text-[10.26px] leading-[8.4px] right-[8.5px] bottom-[11px]',
  },
  lg: {
    wrapper: 'w-[72px] h-[72px] lg:w-[102px] lg:h-[102px]',
    text: 'text-[12.3px] leading-[10.1px] right-[10px] bottom-[13px] lg:text-[17.44px] lg:leading-[14.28px] lg:right-[14px] lg:bottom-[19px]',
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

