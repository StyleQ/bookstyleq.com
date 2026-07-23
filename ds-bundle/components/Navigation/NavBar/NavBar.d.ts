import * as React from 'react';

/**
 * NavBar — from @styleq/brand@1.0.0.
 */
export interface NavBarProps {
  /** Wordmark text (Geist 700). */
  logo?: string;
  links?: Array<{ label: string; active?: boolean; soon?: boolean }>;
  /** CTA button label (always rose). */
  cta?: string;
  onCta?: React.MouseEventHandler<HTMLButtonElement>;
}

export declare const NavBar: React.ComponentType<NavBarProps>;
