import { Bree_Serif, Open_Sans } from 'next/font/google'
import cx from 'classnames'
import { hasTailwindPrefix } from '@/utils'

export const breeSerif = Bree_Serif({ weight: '400', subsets: ['latin'] })
export const openSans = Open_Sans({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

type TextProps = {
  children: React.ReactNode,
  className?: string,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span'
}

type HeadingProps = {
  children: React.ReactNode,
  className?: string,
  id?: string,
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export function Text({ children, as: Component = "div", ...props }: TextProps): JSX.Element {
  return (
    <Component {...props}>{children}</Component>
  )
}

export function Heading({ children, level, className = '', ...props }: HeadingProps) : JSX.Element {
  const hasTextSizeClass = hasTailwindPrefix('text-\d?(base|sm|xl|xs|lg)', className)
  const headingClassName: string = cx(className, 'font-semibold', {
    [breeSerif.className]: level === 1,
    [openSans.className]: level !== 1,
    'leading-snug': !hasTailwindPrefix('leading', className),
    'text-5xl lg:text-7xl': !hasTextSizeClass && level === 1,
    'text-3xl lg:text-5xl': !hasTextSizeClass && level === 2,
    'text-2xl lg:text-3xl': !hasTextSizeClass && level === 3,
    'text-xl': !hasTextSizeClass && level === 4,
    'text-lg': !hasTextSizeClass && level === 5,
    'text-base': !hasTextSizeClass && level === 6,
  })

  return (
    <Text as={`h${level}`} className={headingClassName} {...props}>{children}</Text>
  )
}
