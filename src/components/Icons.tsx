import type { SVGProps } from 'react';

export function WhatsAppIcon({ className = 'w-5 h-5', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12.002 2C6.48 2 2 6.477 2 11.998c0 1.936.554 3.744 1.511 5.276L2.047 22l4.864-1.437A9.95 9.95 0 0 0 12.002 22C17.523 22 22 17.52 22 11.998 22 6.477 17.523 2 12.002 2Z"
        fill="#25D366"
      />
      <path
        d="M17.345 14.92c-.223.628-1.3 1.198-1.805 1.273-.462.069-1.047.098-1.69-.106-.39-.124-.89-.289-1.53-.565-2.694-1.163-4.453-3.876-4.588-4.055-.134-.18-1.095-1.457-1.095-2.78 0-1.322.692-1.972.938-2.241.246-.269.537-.336.716-.336.179 0 .358.002.515.01.165.008.387-.063.605.462.223.538.76 1.859.827 1.993.067.135.112.292.022.471-.09.18-.134.292-.268.449-.134.157-.283.35-.403.471-.134.134-.274.28-.118.549.157.269.696 1.148 1.495 1.86 1.028.916 1.894 1.2 2.163 1.334.269.135.425.112.582-.067.157-.18.672-.784.851-1.053.18-.269.358-.224.605-.134.246.09 1.566.739 1.835.873.268.135.447.202.514.314.067.112.067.65-.156 1.278Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PhoneIcon({ className = 'w-4 h-4', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z" />
    </svg>
  );
}

export function EmailIcon({ className = 'w-4 h-4', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'w-5 h-5', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function CircleMinusIcon({ className = 'w-5 h-5', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function MenuIcon({ className = 'w-6 h-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-6 h-6', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

