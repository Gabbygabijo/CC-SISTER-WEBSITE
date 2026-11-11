import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type AnchorButtonProps = BaseProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>;

type NativeButtonProps = BaseProps & {
  href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export type ActionButtonProps = AnchorButtonProps | NativeButtonProps;

const BASE_CLASSES =
  'group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full transition-colors';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white',
  outline: 'border border-brand bg-surface text-brand hover:bg-brand-tint',
};

const SIZE_CLASSES: Record<ButtonSize, Record<ButtonVariant, string>> = {
  sm: {
    primary: 'px-5 py-2 text-[14px] font-medium',
    outline: 'px-5 py-2 text-[14px] font-medium',
  },
  md: {
    primary: 'h-11.5 w-38.25 text-[16px] font-medium',
    outline: 'h-11.5 px-6 text-[16px] font-medium',
  },
  lg: {
    primary:
      'h-11.5 px-7 text-[15px] font-medium leading-6 sm:h-14 sm:w-49.5 sm:px-0 sm:text-[19.48px]',
    outline:
      'h-11.5 px-7 text-[15px] font-medium leading-6 sm:h-14 sm:w-45.75 sm:px-0 sm:text-[19.48px]',
  },
};

function isAnchorProps(props: ActionButtonProps): props is AnchorButtonProps {
  return typeof props.href === 'string';
}

function getCombinedClassName(variant: ButtonVariant, size: ButtonSize, className: string) {
  return `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size][variant]} ${className}`;
}

function ActionButtonContent({
  variant,
  children,
}: {
  variant: ButtonVariant;
  children: ReactNode;
}) {
  return (
    <>
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full rounded-full bg-brand-hover transition-transform duration-300 ease-out group-hover:translate-x-0"
        />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );
}

export function ActionButton(props: ActionButtonProps) {
  if (isAnchorProps(props)) {
    const {
      variant = 'primary',
      size = 'lg',
      children,
      className = '',
      href,
      ...anchorProps
    } = props;

    return (
      <a
        href={href}
        className={getCombinedClassName(variant, size, className)}
        {...anchorProps}
      >
        <ActionButtonContent variant={variant}>{children}</ActionButtonContent>
      </a>
    );
  }

  const {
    variant = 'primary',
    size = 'lg',
    children,
    className = '',
    type = 'button',
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={getCombinedClassName(variant, size, className)}
      {...buttonProps}
    >
      <ActionButtonContent variant={variant}>{children}</ActionButtonContent>
    </button>
  );
}
