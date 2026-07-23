import * as React from 'react';

/**
 * Button — from @styleq/brand@1.0.0.
 */
export interface ButtonProps {
  /** Visual style. `primary` (rose) is the universal CTA for every audience; `outline` is the quiet secondary; `teal` is reserved for trust contexts (rarely a button); `on-gradient` is the white button used ONLY inside the once-per-page plum closing band. */
  variant?: 'primary' | 'outline' | 'teal' | 'on-gradient';
  /** `sm` is the compact size used in nav bars and hero headers. */
  size?: 'md' | 'sm';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export declare const Button: React.ComponentType<ButtonProps>;
