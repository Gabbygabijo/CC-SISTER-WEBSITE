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

export function UserBadgeCheckIcon({
  className = 'w-8 h-8',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <circle cx="10" cy="8" r="3.5" />
      <path d="M4 19.5c0-3.2 2.7-5.5 6-5.5 1.3 0 2.5.35 3.5 1" />
      <path d="m15.5 18.5 2 2 4-4.5" />
    </svg>
  );
}

export function ShieldCheckIcon({
  className = 'w-8 h-8',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3 4.5 6.2v5.4c0 4.6 3.2 8.7 7.5 9.9 4.3-1.2 7.5-5.3 7.5-9.9V6.2L12 3Z" />
      <path d="m8.8 12.2 2.2 2.2 4.3-4.4" />
    </svg>
  );
}

export function CalendarCheckIcon({
  className = 'w-8 h-8',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 9.5h17" />
      <path d="m9 14.8 2 2 4.2-4.2" />
    </svg>
  );
}

export function CustomerHeartIcon({
  className = 'w-8 h-8',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <path d="M12 20.5s-7.5-4.7-7.5-10.3A4.4 4.4 0 0 1 8.9 5.8c1.3 0 2.4.6 3.1 1.6.7-1 1.8-1.6 3.1-1.6a4.4 4.4 0 0 1 4.4 4.4c0 5.6-7.5 10.3-7.5 10.3Z" />
    </svg>
  );
}

export function TrustpilotWordmark({
  className = 'h-7 w-auto',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 124 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Trustpilot"
      {...props}
    >
      <path
        d="M14.5 2 17.8 11.4H27.7L19.7 17.2L22.7 26.6L14.5 20.9L6.3 26.6L9.3 17.2L1.3 11.4H11.2L14.5 2Z"
        fill="#00B67A"
      />
      <path d="M20.2 19.3L19.7 17.2L14.5 20.9L20.2 19.3Z" fill="#005128" />
      <text
        x="32"
        y="22.5"
        fill="#191919"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="18.5"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        Trustpilot
      </text>
    </svg>
  );
}

export function TrustpilotStars({
  className = 'h-6 w-auto',
  ...props
}: SVGProps<SVGSVGElement>) {
  const boxes = [0, 34, 68, 102, 136];

  return (
    <svg
      viewBox="0 0 166 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="5 out of 5 stars on Trustpilot"
      {...props}
    >
      {boxes.map((x) => (
        <g key={x} transform={`translate(${x}, 0)`}>
          <rect width="30" height="30" rx="1.5" fill="#00B67A" />
          <path
            d="M15 5.4L17.4 12.2H24.6L18.8 16.4L21 23.2L15 19.1L9 23.2L11.2 16.4L5.4 12.2H12.6L15 5.4Z"
            fill="#FFFFFF"
          />
          <path d="M19.1 17.9L18.8 16.4L15 19.1L19.1 17.9Z" fill="#00B67A" opacity="0.2" />
        </g>
      ))}
    </svg>
  );
}

export function ChevronLeftIcon({
  className = 'w-5 h-5',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon({
  className = 'w-5 h-5',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export function PlusIcon({
  className = 'w-5 h-5',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function LocationPinIcon({
  className = 'w-5 h-5',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <path d="M12 21s6.5-5.8 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 15.2 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2.3" />
    </svg>
  );
}

export function GooglePlusIcon({
  className = 'w-4 h-4',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M8.7 11v2.2h3.6c-.2 1.4-1.5 2.9-3.6 2.9a3.9 3.9 0 0 1 0-7.8c1.1 0 1.9.4 2.5 1l1.7-1.6A6.2 6.2 0 0 0 8.7 6a6.1 6.1 0 1 0 0 12.2c3.5 0 5.9-2.5 5.9-6 0-.4 0-.8-.1-1.2H8.7Zm10.8 0V8.8h-1.7V11h-2.2v1.7h2.2v2.2h1.7v-2.2h2.2V11h-2.2Z" />
    </svg>
  );
}

export function InstagramIcon({
  className = 'w-4 h-4',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({
  className = 'w-4 h-4',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4.5h2.2V2h-2.5c-2.6 0-4.2 1.6-4.2 4.3V9H7.5v3h2.5v9.5h3.2V12h2.8l.5-3h-3.3V6.5c0-1.2.5-2 1.3-2Z" />
    </svg>
  );
}

export function CopyrightIcon({
  className = 'w-4 h-4',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.6a3.5 3.5 0 1 0 0 4.8" />
    </svg>
  );
}

export function CheckCircleIcon({
  className = 'w-6 h-6',
  ...props
}: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="m8.8 12.2 2.2 2.2 4.3-4.4" />
    </svg>
  );
}

