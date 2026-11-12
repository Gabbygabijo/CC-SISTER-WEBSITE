export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const SPRING_SNAPPY = {
  type: 'spring',
  stiffness: 420,
  damping: 28,
} as const;

export const SPRING_GENTLE = {
  type: 'spring',
  stiffness: 260,
  damping: 26,
} as const;

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.2,
} as const;

