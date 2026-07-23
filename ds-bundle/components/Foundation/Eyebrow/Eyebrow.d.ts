import * as React from 'react';

/**
 * Eyebrow — from @styleq/brand@1.0.0.
 */
export interface EyebrowProps {
  /** rose (default, on-page labels), teal (trust / facility-facing), coral (warm / resident-facing). */
  tone?: 'rose' | 'teal' | 'coral';
  /** Adds a tinted rounded background, as used on hero eyebrows. */
  pill?: boolean;
  children?: React.ReactNode;
}

export declare const Eyebrow: React.ComponentType<EyebrowProps>;
