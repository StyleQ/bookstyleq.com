import * as React from 'react';

/**
 * Hero — from @styleq/brand@1.0.0.
 */
export interface HeroProps {
  /** `centered` (cream, no photo — simplest to ship), `split` (resident photo, recommended default), `peach` (peach section break for interior/facility pages). */
  variant?: 'centered' | 'split' | 'peach';
  eyebrow?: string;
  /** Eyebrow tone; defaults to teal (coral inside `split`). */
  eyebrowTone?: 'rose' | 'teal' | 'coral';
  headline?: string;
  subhead?: string;
  primaryCta?: string;
  secondaryCta?: string;
  logo?: string;
  links?: string[];
  /** Placeholder label shown in the `split` photo panel. */
  photoLabel?: string;
}

export declare const Hero: React.ComponentType<HeroProps>;
