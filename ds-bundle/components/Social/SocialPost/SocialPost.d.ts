import * as React from 'react';

/**
 * SocialPost — from @styleq/brand@1.0.0.
 */
export interface SocialPostProps {
  /** `dark` / `gradient` for pain-point and closing posts; `light` for plainly-stated solutions; `teal` for zero-lift proof. */
  variant?: 'dark' | 'light' | 'teal' | 'gradient';
  tag?: string;
  /** Tag color: 'teal' | 'coral' | 'cream' | 'ink', or any CSS color. */
  tagTone?: string;
  headline?: React.ReactNode;
  sub?: React.ReactNode;
  /** Oversized rose figure (e.g. "60"). */
  stat?: React.ReactNode;
  footer?: string;
  logo?: string;
}

export declare const SocialPost: React.ComponentType<SocialPostProps>;
