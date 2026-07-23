import * as React from 'react';

/**
 * Testimonial — from @styleq/brand@1.0.0.
 */
export interface TestimonialProps {
  /** Small coral label above the quote. */
  label?: string;
  quote: React.ReactNode;
}

export declare const Testimonial: React.ComponentType<TestimonialProps>;
