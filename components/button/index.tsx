import cx from 'classnames'

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children
}: {
  variant?: 'primary' | 'secondary' | 'plain'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}) {
  const className = cx('font-semibold cursor-pointer duration-75 transition-all',{
    'bg-brown-900 text-white hover:bg-brown-800': variant === 'primary',
    'bg-brown-100 text-brown-900 hover:bg-brown-200': variant === 'secondary',
    'bg-transparent hover:bg-translucent_light': variant === 'plain',
    'rounded py-2 px-4': size === 'sm' || size === 'md',
    'rounded-lg py-4 px-6': size === 'lg',
  })
  const Component = href ? 'a' : 'button'

  return (
    <Component className={className}>
    {children}
    </Component>
  )
}
