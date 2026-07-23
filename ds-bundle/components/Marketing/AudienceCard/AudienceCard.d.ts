import * as React from 'react';

/**
 * AudienceCard — from @styleq/brand@1.0.0.
 */
export interface AudienceCardProps {
  name: string;
  /** Register label, e.g. "Reliability register". */
  tag?: string;
  tagTone?: 'teal' | 'coral' | 'rose';
  /** The core framing paragraph. */
  core?: string;
  /** Phrases to use with this audience (green checks). */
  say?: string[];
  /** Phrases to avoid (coral crosses). */
  avoid?: string[];
  /** A sample line in this audience's voice (Fraunces italic). */
  sample?: string;
}

export declare const AudienceCard: React.ComponentType<AudienceCardProps>;
