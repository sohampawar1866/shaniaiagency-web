import { Transition } from "framer-motion";

/**
 * Motion companion for Miro Design Tokens (from MOTION.md)
 */

export const springs = {
  bouncy: { type: "spring", stiffness: 420, damping: 24, mass: 0.9 },
  snappy: { type: "spring", stiffness: 340, damping: 30, mass: 1 },
  smooth: { type: "spring", stiffness: 220, damping: 32, mass: 1.1 },
} as const;

export const easings = {
  snap: [0.34, 1.56, 0.64, 1] as const,
  swiftOut: [0.16, 1, 0.3, 1] as const,
  smooth: [0.65, 0, 0.35, 1] as const,
};

export const durations = {
  instant: 0.1,
  micro: 0.15,
  sm: 0.25,
  md: 0.4,
  lg: 0.55,
  xl: 0.7,
};

/**
 * Returns spring configuration or reduced motion fallback
 */
export function getSpring(
  preset: keyof typeof springs,
  shouldReduceMotion: boolean | null
): Transition {
  if (shouldReduceMotion) {
    return { duration: 0.01 };
  }
  return springs[preset];
}
