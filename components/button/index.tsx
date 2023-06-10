import cx from 'classnames'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'plain' | 'none',
  size?: 'sm' | 'md' | 'lg' | 'full',
  href?: string,
  className?: string,
  type?: 'button' | 'submit' | 'reset',
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
} : ButtonProps): JSX.Element {
  const btnClassName = variant === 'none' ? '' : cx('font-semibold cursor-pointer duration-75 transition-all', {
    'bg-brown-900 text-white hover:bg-brown-800': variant === 'primary',
    'bg-brown-100 text-brown-900 hover:bg-brown-200': variant === 'secondary',
    'bg-green-600 text-white hover:bg-green-700': variant === 'tertiary',
    'bg-transparent hover:bg-translucent_light': variant === 'plain',
    'rounded py-2 px-4': size === 'sm' || size === 'md',
    'rounded-lg py-4 px-6': size === 'lg',
    'rounded p-5 w-full': size === 'full',
  }, className)
  const Component = href ? 'a' : 'button'

  return (
    <Component className={btnClassName} href={href} {...props}>
    {children}
    </Component>
  )
}
