import { forwardRef } from 'react'
import cx from 'classnames'
import { hasTailwindPrefix } from '@/utils/tailwind'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  is?: 'primary' | 'secondary' | 'tertiary' | 'plain' | 'plain-inverted',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full',
  href?: string,
  className?: string,
  type?: 'button' | 'submit' | 'reset',
  children: React.ReactNode,
}

const Button = forwardRef<any, ButtonProps>(function Button({
  is,
  size = 'md',
  href,
  className,
  children,
  ...props
}, ref): JSX.Element {
  const btnClassName = !is && !size ? undefined : cx('font-semibold cursor-pointer duration-100 ease-in-out transition-all', {
    'bg-brown-300 text-brown-900 hover:bg-brown-400': is === 'primary',
    'bg-brown-200 text-brown-900 hover:bg-brown-200': is === 'secondary',
    'bg-blue-500 text-white': is === 'tertiary',
    'bg-transparent hover:bg-translucent_light': is === 'plain',
    'bg-transparent hover:bg-translucent_dark': is === 'plain-inverted',
    'rounded py-2 px-4': size === 'sm',
    'rounded py-4 px-6': size === 'md',
    'rounded-lg py-6 px-12 text-xl': size === 'lg',
    'inline-block': size !== 'full',
    'block rounded p-5 w-full': size === 'full',
    'origin-center': !hasTailwindPrefix('origin', className || "")
  }, className)
  const Component = href ? 'a' : 'button'

  return (
    <Component ref={ref} className={btnClassName || className} href={href} {...props}>
    {children}
    </Component>
  )
})

export default Button
